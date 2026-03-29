import { createIpRateLimiter, getRequestIp } from "@/lib/ipRateLimit";
import { Resend } from "resend";
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

const MAX_NAME = 200;
const MAX_MESSAGE = 10_000;
const MAX_BODY_BYTES = 64 * 1024;

const isContactRateLimited = createIpRateLimiter(10, 60_000);

function isValidEmail(email: string): boolean {
  const trimmed = email.trim();
  if (trimmed.length < 3 || trimmed.length > 254) return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed);
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildEmailPayload(nameTrim: string, emailTrim: string, messageTrim: string) {
  const text = [
    `Name: ${nameTrim}`,
    `Email: ${emailTrim}`,
    "",
    messageTrim,
  ].join("\n");

  const html = `
    <p><strong>Name:</strong> ${escapeHtml(nameTrim)}</p>
    <p><strong>Email:</strong> ${escapeHtml(emailTrim)}</p>
    <hr />
    <p>${escapeHtml(messageTrim).replace(/\n/g, "<br />")}</p>
  `;

  const subject = `Portfolio contact: ${nameTrim}`;
  return { text, html, subject };
}

export async function POST(request: Request) {
  const to = process.env.CONTACT_TO_EMAIL?.trim();
  const gmailUser = process.env.GMAIL_USER?.trim();
  const gmailPass = process.env.GMAIL_APP_PASSWORD?.replace(/\s/g, "");
  const apiKey = process.env.RESEND_API_KEY;
  const resendFrom =
    process.env.RESEND_FROM_EMAIL?.trim() ||
    "Portfolio <onboarding@resend.dev>";

  if (!to) {
    return NextResponse.json(
      { error: "Contact form is not configured. Set CONTACT_TO_EMAIL." },
      { status: 503 }
    );
  }

  const useGmail = Boolean(gmailUser && gmailPass);
  const useResend = Boolean(apiKey);
  if (!useGmail && !useResend) {
    return NextResponse.json(
      {
        error:
          "Contact form is not configured. Add Gmail (GMAIL_USER + GMAIL_APP_PASSWORD) or Resend (RESEND_API_KEY).",
      },
      { status: 503 }
    );
  }

  const len = request.headers.get("content-length");
  if (len && Number.parseInt(len, 10) > MAX_BODY_BYTES) {
    return NextResponse.json({ error: "Request too large." }, { status: 413 });
  }

  const ip = getRequestIp(request);
  if (isContactRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many submissions. Please try again in a minute." },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (
    typeof body !== "object" ||
    body === null ||
    !("name" in body) ||
    !("email" in body) ||
    !("message" in body)
  ) {
    return NextResponse.json({ error: "Missing fields." }, { status: 400 });
  }

  const { name, email, message } = body as Record<string, unknown>;

  if (typeof name !== "string" || typeof email !== "string" || typeof message !== "string") {
    return NextResponse.json({ error: "Invalid field types." }, { status: 400 });
  }

  const nameTrim = name.trim();
  const emailTrim = email.trim();
  const messageTrim = message.trim();

  if (!nameTrim || nameTrim.length > MAX_NAME) {
    return NextResponse.json({ error: "Invalid name." }, { status: 400 });
  }
  if (!isValidEmail(emailTrim)) {
    return NextResponse.json({ error: "Invalid email." }, { status: 400 });
  }
  if (messageTrim.length < 10 || messageTrim.length > MAX_MESSAGE) {
    return NextResponse.json(
      { error: "Message must be between 10 and 10,000 characters." },
      { status: 400 }
    );
  }

  const { text, html, subject } = buildEmailPayload(nameTrim, emailTrim, messageTrim);

  if (useGmail && gmailUser && gmailPass) {
    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: { user: gmailUser, pass: gmailPass },
      });
      await transporter.sendMail({
        from: `"Hannah Kraulik Pagade" <${gmailUser}>`,
        to,
        replyTo: emailTrim,
        subject,
        text,
        html,
      });
      return NextResponse.json({ ok: true });
    } catch (err) {
      console.error("[contact] Gmail error:", err);
      return NextResponse.json(
        { error: "Could not send message. Please try again later." },
        { status: 502 }
      );
    }
  }

  if (useResend && apiKey) {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: resendFrom,
      to,
      replyTo: emailTrim,
      subject,
      text,
      html,
    });

    if (error) {
      console.error("[contact] Resend error:", error);
      return NextResponse.json(
        { error: "Could not send message. Please try again later." },
        { status: 502 }
      );
    }
    return NextResponse.json({ ok: true });
  }

  return NextResponse.json(
    { error: "Contact form is not configured." },
    { status: 503 }
  );
}
