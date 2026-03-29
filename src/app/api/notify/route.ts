import { createIpRateLimiter, getRequestIp } from "@/lib/ipRateLimit";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const isNotifyRateLimited = createIpRateLimiter(8, 15 * 60 * 1000);

const MAX_NAME = 200;
const MAX_EMAIL_LEN = 254;
const MAX_BODY_BYTES = 400 * 1024;
const MAX_MESSAGES = 80;
const MAX_CONTENT_PER_MESSAGE = 4_000;
const SLACK_TRANSCRIPT_MAX = 2_800;

function isValidEmail(email: string): boolean {
  const trimmed = email.trim();
  if (trimmed.length < 3 || trimmed.length > MAX_EMAIL_LEN) return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed);
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/** Slack mrkdwn: escape &, <, > per API formatting rules. */
function escapeSlackMrkdwn(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function truncate(s: string, max: number): string {
  if (s.length <= max) return s;
  return `${s.slice(0, max - 1)}…`;
}

function parseNotifyMessages(raw: unknown):
  | { role: "user" | "assistant"; content: string }[]
  | null {
  if (!Array.isArray(raw) || raw.length > MAX_MESSAGES) return null;
  const out: { role: "user" | "assistant"; content: string }[] = [];
  for (const m of raw) {
    if (typeof m !== "object" || m === null) return null;
    const rec = m as Record<string, unknown>;
    const role = rec.role;
    const content = rec.content;
    if (role !== "user" && role !== "assistant") return null;
    if (typeof content !== "string" || content.length > MAX_CONTENT_PER_MESSAGE) {
      return null;
    }
    out.push({ role, content });
  }
  return out;
}

function buildTranscript(
  messages: { role: "user" | "assistant"; content: string }[]
): string {
  return messages
    .map(
      (m) =>
        `${m.role === "user" ? "Visitor" : "Kai"}: ${m.content}`
    )
    .join("\n\n");
}

async function sendSlackNotification(
  visitorName: string,
  visitorEmail: string,
  transcript: string
) {
  const webhookUrl = process.env.SLACK_WEBHOOK_URL?.trim();
  if (!webhookUrl) {
    console.warn("[notify] SLACK_WEBHOOK_URL not set, skipping Slack notification");
    return;
  }

  const safeName = escapeSlackMrkdwn(truncate(visitorName, MAX_NAME));
  const safeEmail = escapeSlackMrkdwn(truncate(visitorEmail, MAX_EMAIL_LEN));
  const safeTranscript = escapeSlackMrkdwn(truncate(transcript, SLACK_TRANSCRIPT_MAX));

  const slackBody = {
    blocks: [
      {
        type: "header",
        text: {
          type: "plain_text",
          text: "New Portfolio Lead from Kai",
          emoji: false,
        },
      },
      {
        type: "section",
        fields: [
          {
            type: "mrkdwn",
            text: `*Name:*\n${safeName}`,
          },
          {
            type: "mrkdwn",
            text: `*Email:*\n${safeEmail}`,
          },
        ],
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: `*Conversation Summary:*\n${safeTranscript}`,
        },
      },
      {
        type: "divider",
      },
      {
        type: "context",
        elements: [
          {
            type: "mrkdwn",
            text: `Sent from hannahkraulikpagade.com at ${new Date().toLocaleString("en-US", { timeZone: "America/Denver" })} MT`,
          },
        ],
      },
    ],
  };

  const slackRes = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(slackBody),
  });
  if (!slackRes.ok) {
    const detail = await slackRes.text().catch(() => "");
    throw new Error(
      `[notify] Slack webhook failed: ${slackRes.status} ${slackRes.statusText}${detail ? ` ${detail}` : ""}`
    );
  }
}

async function sendVisitorConfirmation(
  visitorName: string,
  visitorEmail: string,
  transporter: nodemailer.Transporter,
  gmailUser: string
) {
  const safeName = escapeHtml(visitorName);

  await transporter.sendMail({
    from: `"Hannah Kraulik Pagade" <${gmailUser}>`,
    to: visitorEmail,
    subject: "Great connecting with you",
    html: `
      <div style="font-family: Georgia, serif; max-width: 560px; margin: 0 auto; color: #1a1a1a;">
        <p style="font-size: 16px; line-height: 1.7;">Hi ${safeName},</p>
        <p style="font-size: 16px; line-height: 1.7;">
          Thanks for stopping by and chatting with Kai. I loved that you took the time
          to explore the work. I will be in touch personally very soon.
        </p>
        <p style="font-size: 16px; line-height: 1.7;">
          In the meantime, feel free to explore the live products:
        </p>
        <ul style="font-size: 15px; line-height: 2;">
          <li><a href="https://triage.rohimaya.ai" style="color: #C8A96E;">OrixLink AI</a>: universal triage (triage.rohimaya.ai)</li>
          <li><a href="https://literacy.rohimaya.ai" style="color: #C8A96E;">HealthLiteracy AI</a>: discharge translation (literacy.rohimaya.ai)</li>
          <li><a href="https://clearchannel-vestara.vercel.app" style="color: #C8A96E;">ClearChannel by Vestara</a>: NLU routing lab</li>
          <li><a href="https://financelens-ai.vercel.app" style="color: #C8A96E;">FinanceLens AI</a>: document intelligence, compare, PDF and PPTX export, share links (assistive only, not financial advice)</li>
        </ul>
        <p style="font-size: 16px; line-height: 1.7;">Talk soon,</p>
        <p style="font-size: 16px; line-height: 1.7; margin-top: 0;">
          <strong>Hannah Kraulik Pagade</strong><br/>
          <span style="color: #888; font-size: 14px;">
            LPN, PAM Health Rehabilitation Hospital of Westminster | Founder, Rohimaya Health AI<br/>
            <a href="https://hannahkraulikpagade.com" style="color: #C8A96E;">hannahkraulikpagade.com</a>
          </span>
        </p>
      </div>
    `,
  });
}

async function sendHannahNotification(
  visitorName: string,
  visitorEmail: string,
  transcript: string,
  transporter: nodemailer.Transporter,
  gmailUser: string
) {
  const safeName = escapeHtml(visitorName);
  const safeEmail = escapeHtml(visitorEmail);
  const safeTranscript = escapeHtml(transcript);

  await transporter.sendMail({
    from: `"Portfolio Kai" <${gmailUser}>`,
    to: gmailUser,
    subject: `New portfolio lead: ${visitorName}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 560px; margin: 0 auto; color: #1a1a1a;">
        <h2 style="color: #C8A96E;">New lead from Kai</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <hr style="border-color: #eee;" />
        <h3>Full conversation:</h3>
        <div style="background: #f9f9f9; padding: 16px; border-radius: 8px; font-size: 14px; line-height: 1.7; white-space: pre-wrap;">${safeTranscript}</div>
      </div>
    `,
  });
}

export async function POST(req: NextRequest) {
  const ip = getRequestIp(req);
  if (isNotifyRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many submissions. Please try again later." },
      { status: 429 }
    );
  }

  const len = req.headers.get("content-length");
  if (len && Number.parseInt(len, 10) > MAX_BODY_BYTES) {
    return NextResponse.json({ error: "Request too large." }, { status: 413 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON." }, { status: 400 });
  }

  if (typeof body !== "object" || body === null) {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const rec = body as Record<string, unknown>;
  const visitorName = rec.visitorName;
  const visitorEmail = rec.visitorEmail;
  const messagesRaw = rec.messages;

  if (typeof visitorName !== "string" || typeof visitorEmail !== "string") {
    return NextResponse.json({ error: "Missing visitor info." }, { status: 400 });
  }

  const nameTrim = visitorName.trim();
  const emailTrim = visitorEmail.trim();

  if (!nameTrim || nameTrim.length > MAX_NAME) {
    return NextResponse.json({ error: "Invalid name." }, { status: 400 });
  }
  if (!isValidEmail(emailTrim)) {
    return NextResponse.json({ error: "Invalid email." }, { status: 400 });
  }

  const messages = parseNotifyMessages(messagesRaw);
  if (!messages || messages.length === 0) {
    return NextResponse.json(
      { error: "Invalid or empty conversation." },
      { status: 400 }
    );
  }

  const transcript = buildTranscript(messages);
  if (transcript.length > 120_000) {
    return NextResponse.json({ error: "Conversation too long." }, { status: 400 });
  }

  const gmailUser = process.env.GMAIL_USER?.trim();
  const gmailPass = process.env.GMAIL_APP_PASSWORD?.replace(/\s/g, "");

  const tasks: Promise<void>[] = [
    sendSlackNotification(nameTrim, emailTrim, transcript),
  ];

  if (gmailUser && gmailPass) {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: gmailUser, pass: gmailPass },
    });
    tasks.push(
      sendVisitorConfirmation(nameTrim, emailTrim, transporter, gmailUser),
      sendHannahNotification(nameTrim, emailTrim, transcript, transporter, gmailUser),
    );
  } else {
    console.warn("[notify] Gmail credentials not set, skipping email notifications");
  }

  try {
    await Promise.all(tasks);
  } catch (error) {
    console.error("Notify error:", error);
    return NextResponse.json(
      { error: "Notification failed" },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}
