"use client";

import { useState, useRef, useEffect } from "react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const INITIAL_MESSAGE: Message = {
  role: "assistant",
  content:
    "Hi, I'm Kai. I know Hannah's work, her projects, and what she's building next. Ask me anything — or drop your name and email when you're ready to connect.",
};

export default function KaiWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [notified, setNotified] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [open, messages]);

  const extractContact = (msgs: Message[]) => {
    const emailRegex = /[\w.-]+@[\w.-]+\.\w+/;
    const namePatterns = [
      /(?:my name is|i'm|i am|this is)\s+([A-Z][a-z]+(?:\s+[A-Z][a-z]+)?)/i,
      /^([A-Z][a-z]+(?:\s+[A-Z][a-z]+)?),?\s+(?:here|from|at)/i,
    ];
    let visitorEmail = "";
    let visitorName = "";
    msgs.forEach((m) => {
      if (m.role === "user") {
        const emailMatch = m.content.match(emailRegex);
        if (emailMatch) visitorEmail = emailMatch[0];
        namePatterns.forEach((p) => {
          const nameMatch = m.content.match(p);
          if (nameMatch && !visitorName) visitorName = nameMatch[1];
        });
      }
    });
    return { visitorEmail, visitorName };
  };

  const sendNotification = async (msgs: Message[]) => {
    if (notified) return;
    const { visitorEmail, visitorName } = extractContact(msgs);
    if (!visitorEmail) return;
    try {
      await fetch("/api/notify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          visitorName: visitorName || "Unknown",
          visitorEmail,
          messages: msgs,
        }),
      });
      setNotified(true);
    } catch (err) {
      console.error("Notification failed:", err);
    }
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    const userMessage: Message = { role: "user", content: input.trim() };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput("");
    setIsLoading(true);
    try {
      const res = await fetch("/api/concierge", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updatedMessages }),
      });
      const data = await res.json();
      const assistantMessage: Message = { role: "assistant", content: data.text };
      const finalMessages = [...updatedMessages, assistantMessage];
      setMessages(finalMessages);
      if (data.hasEmail) await sendNotification(finalMessages);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Something went wrong. You can reach Hannah through the contact page at /contact.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <style>{`
        @keyframes kai-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes kai-spin-r { from { transform: rotate(0deg); } to { transform: rotate(-360deg); } }
        @keyframes kai-aura {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.4); opacity: 0; }
        }
        @keyframes kai-core {
          0%, 100% { box-shadow: 0 0 0 0 rgba(200,169,110,0), 0 0 8px rgba(200,169,110,0.3); }
          50% { box-shadow: 0 0 0 8px rgba(200,169,110,0.08), 0 0 22px rgba(200,169,110,0.55); }
        }
        @keyframes kai-slide-up {
          from { opacity: 0; transform: translateY(16px) scale(0.97); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes kai-bounce {
          0%, 80%, 100% { opacity: 0.3; transform: scale(0.85); }
          40% { opacity: 1; transform: scale(1.1); }
        }
        .kai-ring-1 { animation: kai-spin 18s linear infinite; }
        .kai-ring-2 { animation: kai-spin-r 12s linear infinite; }
        .kai-ring-3 { animation: kai-spin 8s linear infinite; }
        .kai-aura-1 { animation: kai-aura 3s ease-in-out infinite 0s; }
        .kai-aura-2 { animation: kai-aura 3s ease-in-out infinite 0.6s; }
        .kai-aura-3 { animation: kai-aura 3s ease-in-out infinite 1.2s; }
        .kai-core { animation: kai-core 3s ease-in-out infinite; }
        .kai-panel { animation: kai-slide-up 0.25s ease-out forwards; }
        .kai-dot-1 { animation: kai-bounce 1.4s ease-in-out infinite 0s; }
        .kai-dot-2 { animation: kai-bounce 1.4s ease-in-out infinite 0.2s; }
        .kai-dot-3 { animation: kai-bounce 1.4s ease-in-out infinite 0.4s; }
        .kai-msg-enter { animation: kai-slide-up 0.2s ease-out forwards; }
      `}</style>

      {/* Floating button */}
      <div
        style={{
          position: "fixed",
          bottom: "28px",
          right: "28px",
          zIndex: 9999,
        }}
        className="max-sm:bottom-5 max-sm:right-5"
      >
        {/* Chat panel */}
        {open && (
          <div
            className="kai-panel"
            style={{
              position: "absolute",
              bottom: "100px",
              right: "0",
              width: "min(320px, calc(100vw - 2.5rem))",
              background: "#0D1420",
              border: "1px solid rgba(200,169,110,0.22)",
              borderRadius: "14px 14px 4px 14px",
              overflow: "hidden",
              boxShadow: "0 24px 60px rgba(0,0,0,0.6)",
            }}
          >
            {/* Header */}
            <div
              style={{
                padding: "12px 14px",
                borderBottom: "1px solid rgba(200,169,110,0.12)",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                background: "rgba(200,169,110,0.04)",
              }}
            >
              <div
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  background: "rgba(200,169,110,0.1)",
                  border: "1px solid rgba(200,169,110,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="4" fill="#C8A96E" />
                  <circle cx="10" cy="10" r="7" stroke="#C8A96E" strokeWidth="0.8" fill="none" opacity="0.4" />
                  <circle cx="10" cy="10" r="9.5" stroke="#C8A96E" strokeWidth="0.5" fill="none" opacity="0.2" />
                </svg>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: "13px", fontWeight: 600, color: "#F4EFE6", fontFamily: "var(--font-body), sans-serif" }}>Kai</div>
                <div style={{ fontSize: "10px", color: "rgba(244,239,230,0.4)", fontFamily: "var(--font-body), sans-serif", display: "flex", alignItems: "center", gap: "4px" }}>
                  <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#4ade80", display: "inline-block" }} />
                  Hannah&apos;s assistant
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                style={{ background: "none", border: "none", cursor: "pointer", color: "rgba(244,239,230,0.35)", fontSize: "18px", lineHeight: 1, padding: "8px 10px", minWidth: "44px", minHeight: "44px", display: "flex", alignItems: "center", justifyContent: "center" }}
              >
                ×
              </button>
            </div>

            {/* Messages */}
            <div
              style={{
                padding: "14px",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                maxHeight: "320px",
                overflowY: "auto",
              }}
            >
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className="kai-msg-enter"
                  style={{
                    display: "flex",
                    justifyContent: msg.role === "user" ? "flex-end" : "flex-start",
                  }}
                >
                  <div
                    style={{
                      maxWidth: "82%",
                      padding: "9px 12px",
                      borderRadius: msg.role === "assistant" ? "4px 10px 10px 10px" : "10px 4px 10px 10px",
                      fontSize: "12.5px",
                      lineHeight: "1.55",
                      fontFamily: "var(--font-body), sans-serif",
                      background: msg.role === "assistant"
                        ? "rgba(200,169,110,0.07)"
                        : "rgba(200,169,110,0.16)",
                      border: msg.role === "assistant"
                        ? "1px solid rgba(200,169,110,0.13)"
                        : "1px solid rgba(200,169,110,0.32)",
                      color: "rgba(244,239,230,0.88)",
                    }}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}

              {isLoading && (
                <div style={{ display: "flex", justifyContent: "flex-start" }}>
                  <div
                    style={{
                      padding: "10px 14px",
                      borderRadius: "4px 10px 10px 10px",
                      background: "rgba(200,169,110,0.07)",
                      border: "1px solid rgba(200,169,110,0.13)",
                      display: "flex",
                      gap: "5px",
                      alignItems: "center",
                    }}
                  >
                    <span className="kai-dot-1" style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#C8A96E", display: "inline-block" }} />
                    <span className="kai-dot-2" style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#C8A96E", display: "inline-block" }} />
                    <span className="kai-dot-3" style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#C8A96E", display: "inline-block" }} />
                  </div>
                </div>
              )}

              {notified && (
                <div
                  style={{
                    padding: "9px 12px",
                    borderRadius: "8px",
                    background: "rgba(200,169,110,0.08)",
                    border: "1px solid rgba(200,169,110,0.22)",
                    fontSize: "11.5px",
                    color: "#C8A96E",
                    fontFamily: "var(--font-body), sans-serif",
                    textAlign: "center",
                  }}
                >
                  Hannah has been notified. She will be in touch soon.
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div
              style={{
                padding: "10px 12px",
                borderTop: "1px solid rgba(200,169,110,0.08)",
                display: "flex",
                gap: "8px",
                alignItems: "center",
              }}
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && handleSend()}
                placeholder="Ask Kai anything..."
                disabled={isLoading}
                style={{
                  flex: 1,
                  background: "rgba(244,239,230,0.05)",
                  border: "1px solid rgba(200,169,110,0.18)",
                  borderRadius: "8px",
                  padding: "8px 11px",
                  fontSize: "12px",
                  color: "#F4EFE6",
                  fontFamily: "var(--font-body), sans-serif",
                  outline: "none",
                }}
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "8px",
                  background: input.trim() && !isLoading ? "#C8A96E" : "rgba(200,169,110,0.15)",
                  border: "none",
                  cursor: input.trim() && !isLoading ? "pointer" : "not-allowed",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  transition: "background 0.2s",
                }}
              >
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <path d="M1 6.5h11M7.5 2l4.5 4.5L7.5 11" stroke={input.trim() && !isLoading ? "#080C14" : "rgba(200,169,110,0.4)"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        )}

        {/* Kai button */}
        <button
          onClick={() => setOpen((v) => !v)}
          style={{
            width: "64px",
            height: "64px",
            background: "none",
            border: "none",
            cursor: "pointer",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          aria-label="Chat with Kai"
        >
          {/* Aura layers */}
          {["kai-aura-1", "kai-aura-2", "kai-aura-3"].map((cls, i) => (
            <span
              key={i}
              className={cls}
              style={{
                position: "absolute",
                borderRadius: "50%",
                background: "rgba(200,169,110,0.14)",
                width: `${64 - i * 10}px`,
                height: `${64 - i * 10}px`,
              }}
            />
          ))}

          {/* Ring 1 */}
          <span
            className="kai-ring-1"
            style={{
              position: "absolute",
              width: "62px", height: "62px",
              borderRadius: "50%",
              border: "1px solid rgba(200,169,110,0.3)",
            }}
          >
            <span style={{
              position: "absolute", width: "5px", height: "5px",
              borderRadius: "50%", background: "#C8A96E",
              top: "-2.5px", left: "calc(50% - 2.5px)",
            }} />
          </span>

          {/* Ring 2 */}
          <span
            className="kai-ring-2"
            style={{
              position: "absolute",
              width: "48px", height: "48px",
              borderRadius: "50%",
              border: "1px solid rgba(200,169,110,0.22)",
            }}
          >
            <span style={{
              position: "absolute", width: "4px", height: "4px",
              borderRadius: "50%", background: "#C8A96E",
              top: "-2px", left: "calc(50% - 2px)",
            }} />
          </span>

          {/* Ring 3 */}
          <span
            className="kai-ring-3"
            style={{
              position: "absolute",
              width: "35px", height: "35px",
              borderRadius: "50%",
              border: "1px solid rgba(200,169,110,0.4)",
            }}
          >
            <span style={{
              position: "absolute", width: "4px", height: "4px",
              borderRadius: "50%", background: "#C8A96E",
              top: "-2px", left: "calc(50% - 2px)",
            }} />
          </span>

          {/* Core */}
          <span
            className="kai-core"
            style={{
              width: "24px", height: "24px",
              borderRadius: "50%",
              background: "#C8A96E",
              position: "relative", zIndex: 2,
              display: "flex", alignItems: "center", justifyContent: "center",
            }}
          >
            <span style={{
              width: "10px", height: "10px",
              borderRadius: "50%",
              background: "#080C14",
            }} />
          </span>
        </button>
      </div>
    </>
  );
}