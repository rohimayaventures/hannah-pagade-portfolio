import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { visitorName, visitorEmail, messages, intent } = body;

    if (!visitorName || !visitorEmail) {
      return NextResponse.json({ error: "Missing contact info." }, { status: 400 });
    }

    const webhookUrl = process.env.SLACK_WEBHOOK_URL;

    if (webhookUrl) {
      const intentLabel =
        intent === "hiring" ? "Recruiter"
        : intent === "work" ? "Hiring Manager"
        : intent === "collaborate" ? "Peer / Collaborator"
        : "Unknown";

      const lastMessages = Array.isArray(messages)
        ? messages.slice(-4).map((m: { role: string; content: string }) =>
            `*${m.role === "user" ? "Visitor" : "Ask Hannah"}:* ${m.content}`
          ).join("\n")
        : "";

      const slackPayload = {
        blocks: [
          {
            type: "header",
            text: { type: "plain_text", text: "New Portfolio Lead", emoji: true },
          },
          {
            type: "section",
            fields: [
              { type: "mrkdwn", text: `*Name:*\n${visitorName}` },
              { type: "mrkdwn", text: `*Email:*\n${visitorEmail}` },
              { type: "mrkdwn", text: `*Visitor Type:*\n${intentLabel}` },
            ],
          },
          {
            type: "section",
            text: { type: "mrkdwn", text: `*Last messages:*\n${lastMessages}` },
          },
        ],
      };

      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(slackPayload),
      });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Notify error:", error);
    return NextResponse.json({ error: "Notify failed." }, { status: 500 });
  }
}
