"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import "./kai-widget.css";

type Message = {
  role: "user" | "assistant";
  content: string;
};

type IntentType = "hiring" | "work" | "collaborate" | "other" | null;

const INTAKE_GREETING =
  "Hi, I'm Hannah's portfolio assistant. What brings you here today?";

const INTENT_MESSAGES: Record<string, string> = {
  hiring:
    "I'm hiring or recruiting and want to learn about Hannah for a role.",
  work: "I want to explore Hannah's work and live products.",
  collaborate:
    "I'm a potential collaborator or client and want to learn more.",
  other: "Something else.",
};

/** Open the assistant automatically after this delay if the visitor has not dismissed it this session. */
const AUTO_OPEN_DELAY_MS = 10_000;

const SESSION_AUTO_OPEN_SUPPRESS_KEY = "hkp-portfolio-assistant-auto-suppress";

const INTENT_OPENERS: Record<string, string> = {
  hiring:
    "Great. I can walk you through Hannah's background, her live products, her validated metrics, and help generate a tailored resume or cover letter for your role. What kind of position are you hiring for?",
  work: "Happy to take you through what she has built. Hannah has four live products across healthcare AI, fintech, and enterprise conversational AI, and additional products in active development. Which area interests you most, or would you like a full overview?",
  collaborate:
    "Hannah takes on select freelance and collaboration projects. Drop your name and email and she will reach out directly.",
  other:
    "No problem. Ask me anything about Hannah's work, background, products, or how to reach her.",
};

function HannahAvatar({
  size = 30,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <div
      className={`hannah-avatar ${className}`}
      style={{ width: size, height: size, minWidth: size }}
    >
      <Image
        src="/images/hannah-avatar.jpg"
        alt="Hannah Kraulik Pagade"
        width={size}
        height={size}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center top",
          borderRadius: "50%",
        }}
        priority
      />
    </div>
  );
}

export default function KaiWidget() {
  const [open, setOpen] = useState(false);
  const [intent, setIntent] = useState<IntentType>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [notified, setNotified] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const launcherRef = useRef<HTMLButtonElement>(null);

  const suppressAutoOpenForSession = useCallback(() => {
    try {
      sessionStorage.setItem(SESSION_AUTO_OPEN_SUPPRESS_KEY, "1");
    } catch {
      /* private mode or quota */
    }
  }, []);

  const closePanel = useCallback(() => {
    suppressAutoOpenForSession();
    setOpen(false);
    queueMicrotask(() => launcherRef.current?.focus());
  }, [suppressAutoOpenForSession]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    try {
      if (sessionStorage.getItem(SESSION_AUTO_OPEN_SUPPRESS_KEY) === "1") {
        return;
      }
    } catch {
      /* continue; timer still runs */
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const id = window.setTimeout(() => {
      setOpen((wasOpen) => (wasOpen ? wasOpen : true));
    }, AUTO_OPEN_DELAY_MS);

    return () => window.clearTimeout(id);
  }, []);

  useEffect(() => {
    if (open) {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
      if (intent !== null) {
        setTimeout(() => inputRef.current?.focus(), 300);
      }
    }
  }, [open, messages, intent]);

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
      const res = await fetch("/api/notify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          visitorName: visitorName || "Unknown",
          visitorEmail,
          messages: msgs,
          intent: intent ?? "unknown",
        }),
      });
      if (res.ok) setNotified(true);
    } catch (err) {
      console.error("Notification failed:", err);
    }
  };

  const handleIntentSelect = async (selectedIntent: string) => {
    setIntent(selectedIntent as IntentType);
    const userMsg: Message = {
      role: "user",
      content: INTENT_MESSAGES[selectedIntent],
    };
    const openerMsg: Message = {
      role: "assistant",
      content: INTENT_OPENERS[selectedIntent],
    };
    setMessages([userMsg, openerMsg]);
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
        body: JSON.stringify({
          messages: updatedMessages,
          intent: intent ?? "general",
        }),
      });
      const data = (await res.json()) as { text?: string; hasEmail?: boolean };
      if (!res.ok) {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content:
              "Something went wrong on my end. Please try again in a moment.",
          },
        ]);
        return;
      }
      const replyText =
        typeof data.text === "string" && data.text.length > 0
          ? data.text
          : "Something went wrong. You can reach Hannah at the contact page.";
      const assistantMessage: Message = {
        role: "assistant",
        content: replyText,
      };
      const finalMessages = [...updatedMessages, assistantMessage];
      setMessages(finalMessages);
      if (data.hasEmail) await sendNotification(finalMessages);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Something went wrong. You can reach Hannah at the contact page.",
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
          {/* Header */}
          <div className="kai-header">
            <HannahAvatar size={34} className="kai-header-avatar" />
            <div className="kai-title-block">
              <div id="kai-chat-title" className="kai-title">
                Hannah&apos;s Assistant
              </div>
              <div className="kai-subtitle">
                <span className="kai-status-dot" aria-hidden />
                Ask me anything about her work
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

          {/* Intake flow — shown before intent is selected */}
          {intent === null ? (
            <div className="kai-intake">
              <div className="kai-intake-greeting">
                <HannahAvatar size={26} className="kai-msg-avatar" />
                <div className="kai-bubble kai-bubble--assistant">
                  {INTAKE_GREETING}
                </div>
              </div>
              <div className="kai-chips">
                {[
                  { key: "hiring", label: "I'm hiring or recruiting" },
                  { key: "work", label: "I want to see Hannah's work" },
                  { key: "collaborate", label: "I'm a potential collaborator" },
                  { key: "other", label: "Something else" },
                ].map((chip) => (
                  <button
                    key={chip.key}
                    type="button"
                    className="kai-chip"
                    onClick={() => handleIntentSelect(chip.key)}
                  >
                    {chip.label}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <>
              {/* Main chat messages */}
              <div className="kai-messages">
                {messages.map((msg, i) => (
                  <div
                    key={i}
                    className={`kai-msg-row ${
                      msg.role === "user"
                        ? "kai-msg-row--user"
                        : "kai-msg-row--assistant"
                    }`}
                  >
                    {msg.role === "assistant" && (
                      <HannahAvatar size={26} className="kai-msg-avatar" />
                    )}
                    <div
                      className={`kai-bubble ${
                        msg.role === "assistant"
                          ? "kai-bubble--assistant"
                          : "kai-bubble--user"
                      }`}
                    >
                      {msg.content}
                    </div>
                  </div>
                ))}

                {isLoading && (
                  <div className="kai-typing">
                    <HannahAvatar size={26} className="kai-msg-avatar" />
                    <div className="kai-typing-inner">
                      <span className="kai-typing-dot kai-dot-1" aria-hidden />
                      <span className="kai-typing-dot kai-dot-2" aria-hidden />
                      <span className="kai-typing-dot kai-dot-3" aria-hidden />
                    </div>
                  </div>
                )}

                {/* Contextual CTAs based on intent */}
                {intent === "hiring" && messages.length >= 4 && !notified && (
                  <div className="kai-cta-block">
                    <a
                      href="/connect"
                      className="kai-cta-btn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Generate a tailored resume
                    </a>
                    <a
                      href="/contact"
                      className="kai-cta-btn kai-cta-btn--secondary"
                    >
                      Book a call
                    </a>
                  </div>
                )}

                {notified && (
                  <div className="kai-notify-toast">
                    Hannah has been notified. She will be in touch soon.
                  </div>
                )}
                <div ref={bottomRef} />
              </div>

              {/* Input bar */}
              <div className="kai-input-bar">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) =>
                    e.key === "Enter" && !e.shiftKey && handleSend()
                  }
                  placeholder="Ask about Hannah's work..."
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
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 13 13"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M1 6.5h11M7.5 2l4.5 4.5L7.5 11"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </>
          )}
        </div>
      )}

      {/* Launcher — orbital rings with Hannah photo in the core */}
      <button
        ref={launcherRef}
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="kai-launcher"
        aria-label="Chat with Hannah's assistant"
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

        <span className="kai-core-photo" aria-hidden>
          <Image
            src="/images/hannah-avatar.jpg"
            alt=""
            width={28}
            height={28}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center top",
              borderRadius: "50%",
            }}
          />
        </span>
      </button>
    </div>
  );
}
