import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
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

  const slackBody = {
    blocks: [
      {
        type: "header",
        text: {
          type: "plain_text",
          text: "New Portfolio Lead from Kai",
        },
      },
      {
        type: "section",
        fields: [
          {
            type: "mrkdwn",
            text: `*Name:*\n${visitorName}`,
          },
          {
            type: "mrkdwn",
            text: `*Email:*\n${visitorEmail}`,
          },
        ],
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: `*Conversation Summary:*\n${transcript}`,
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

  await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(slackBody),
  });
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
          <li><a href="https://triage.rohimaya.ai" style="color: #C8A96E;">OrixLink AI</a> — universal clinical triage</li>
          <li><a href="https://literacy.rohimaya.ai" style="color: #C8A96E;">HealthLiteracy AI</a> — medical document translation</li>
          <li><a href="https://clearchannel-vestara.vercel.app" style="color: #C8A96E;">ClearChannel by Vestara</a> — conversational design lab</li>
        </ul>
        <p style="font-size: 16px; line-height: 1.7;">Talk soon,</p>
        <p style="font-size: 16px; line-height: 1.7; margin-top: 0;">
          <strong>Hannah Kraulik Pagade</strong><br/>
          <span style="color: #888; font-size: 14px;">
            Founder, Rohimaya Health AI | Pagade Ventures<br/>
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
  try {
    const { visitorName, visitorEmail, messages } = await req.json();

    if (!visitorName || !visitorEmail) {
      return NextResponse.json(
        { error: "Missing visitor info" },
        { status: 400 }
      );
    }

    const transcript = messages
      .map(
        (m: { role: string; content: string }) =>
          `${m.role === "user" ? "Visitor" : "Kai"}: ${m.content}`
      )
      .join("\n\n");

    const gmailUser = process.env.GMAIL_USER?.trim();
    const gmailPass = process.env.GMAIL_APP_PASSWORD?.replace(/\s/g, "");

    const tasks: Promise<void>[] = [
      sendSlackNotification(visitorName, visitorEmail, transcript),
    ];

    if (gmailUser && gmailPass) {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: { user: gmailUser, pass: gmailPass },
      });
      tasks.push(
        sendVisitorConfirmation(visitorName, visitorEmail, transporter, gmailUser),
        sendHannahNotification(visitorName, visitorEmail, transcript, transporter, gmailUser),
      );
    } else {
      console.warn("[notify] Gmail credentials not set, skipping email notifications");
    }

    await Promise.all(tasks);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Notify error:", error);
    return NextResponse.json(
      { error: "Notification failed" },
      { status: 500 }
    );
  }
}