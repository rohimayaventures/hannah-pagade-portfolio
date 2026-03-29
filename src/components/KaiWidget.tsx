"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import "./kai-widget.css";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const INITIAL_MESSAGE: Message = {
  role: "assistant",
  content:
    "Hi, I'm Kai. Ask me about Hannah's live products, Rohimaya Health AI, or how she builds. Drop your name and email when you're ready to connect.",
};

export default function KaiWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [notified, setNotified] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const launcherRef = useRef<HTMLButtonElement>(null);

  const closePanel = useCallback(() => {
    setOpen(false);
    queueMicrotask(() => launcherRef.current?.focus());
  }, []);

  useEffect(() => {
    if (open) {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [open, messages]);

  useEffect(() => {
    if (!open) return;

    const container = panelRef.current;
    if (!container) return;

    const getFocusable = (): HTMLElement[] => {
      const sel =
        'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';
      return Array.from(container.querySelectorAll<HTMLElement>(sel)).filter(
        (el) => !el.hasAttribute("disabled")
      );
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        closePanel();
        return;
      }
      if (e.key !== "Tab") return;
      const focusables = getFocusable();
      if (focusables.length === 0) return;
      const active = document.activeElement as HTMLElement | null;
      if (!active || !container.contains(active)) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (e.shiftKey) {
        if (active === first) {
          e.preventDefault();
          last.focus();
        }
      } else if (active === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown, true);
    return () => document.removeEventListener("keydown", onKeyDown, true);
  }, [open, closePanel]);

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

  const sendReady = Boolean(input.trim() && !isLoading);

  return (
    <div className="kai-root">
      {open && (
        <div
          ref={panelRef}
          id="kai-chat-panel"
          role="dialog"
          aria-modal="true"
          aria-labelledby="kai-chat-title"
          className="kai-panel kai-panel-shell"
        >
          <div className="kai-header">
            <div className="kai-avatar-ring">
              <svg width="14" height="14" viewBox="0 0 20 20" fill="none" aria-hidden>
                <circle cx="10" cy="10" r="4" fill="#C8A96E" />
                <circle cx="10" cy="10" r="7" stroke="#C8A96E" strokeWidth="0.8" fill="none" opacity="0.4" />
                <circle cx="10" cy="10" r="9.5" stroke="#C8A96E" strokeWidth="0.5" fill="none" opacity="0.2" />
              </svg>
            </div>
            <div className="kai-title-block">
              <div id="kai-chat-title" className="kai-title">
                Kai
              </div>
              <div className="kai-subtitle">
                <span className="kai-status-dot" aria-hidden />
                Hannah&apos;s assistant
              </div>
            </div>
            <button
              type="button"
              onClick={closePanel}
              className="kai-close"
              aria-label="Close chat"
            >
              ×
            </button>
          </div>

          <div className="kai-messages">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`kai-msg-row ${msg.role === "user" ? "kai-msg-row--user" : "kai-msg-row--assistant"}`}
              >
                <div
                  className={`kai-bubble ${msg.role === "assistant" ? "kai-bubble--assistant" : "kai-bubble--user"}`}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="kai-typing">
                <div className="kai-typing-inner">
                  <span className="kai-typing-dot kai-dot-1" aria-hidden />
                  <span className="kai-typing-dot kai-dot-2" aria-hidden />
                  <span className="kai-typing-dot kai-dot-3" aria-hidden />
                </div>
              </div>
            )}

            {notified && (
              <div className="kai-notify-toast">
                Hannah has been notified. She will be in touch soon.
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          <div className="kai-input-bar">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && handleSend()}
              placeholder="Ask Kai anything..."
              disabled={isLoading}
              className="kai-input"
            />
            <button
              type="button"
              onClick={handleSend}
              disabled={!sendReady}
              className={`kai-send ${sendReady ? "kai-send--ready" : ""}`}
              aria-label="Send message"
            >
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden>
                <path
                  d="M1 6.5h11M7.5 2l4.5 4.5L7.5 11"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      )}

      <button
        ref={launcherRef}
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="kai-launcher"
        aria-label="Chat with Kai"
        aria-expanded={open}
        aria-controls={open ? "kai-chat-panel" : undefined}
      >
        <span className="kai-aura kai-aura--0" aria-hidden />
        <span className="kai-aura kai-aura--1" aria-hidden />
        <span className="kai-aura kai-aura--2" aria-hidden />

        <span className="kai-ring-1" aria-hidden>
          <span className="kai-ring-dot kai-ring-dot--lg" />
        </span>
        <span className="kai-ring-2" aria-hidden>
          <span className="kai-ring-dot kai-ring-dot--sm" />
        </span>
        <span className="kai-ring-3" aria-hidden>
          <span className="kai-ring-dot kai-ring-dot--sm" />
        </span>

        <span className="kai-core-disc" aria-hidden>
          <span className="kai-core-pupil" />
        </span>
      </button>
    </div>
  );
}
