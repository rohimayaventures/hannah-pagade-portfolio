"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

const fieldClass =
  "w-full rounded-sm px-4 py-3 font-body text-cream shadow-inner shadow-black/20 transition-[border-color,box-shadow] focus:outline-none disabled:opacity-50 autofill:shadow-[inset_0_0_0_1000px_rgb(8,12,20)] autofill:[-webkit-text-fill-color:rgb(244,239,230)]";

const fieldStyle = {
  border: "1px solid rgba(244, 239, 230, 0.25)",
  backgroundColor: "rgba(8, 12, 20, 0.8)",
  color: "var(--cream)",
} as const;

const placeholderStyle = `
  .contact-field::placeholder { color: rgba(244, 239, 230, 0.35); }
  .contact-field:focus { border-color: #C8A96E; box-shadow: 0 0 0 1px rgba(200, 169, 110, 0.6); }
`;

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage(null);

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = (await res.json()) as { ok?: boolean; error?: string };

      if (!res.ok) {
        setErrorMessage(json.error ?? "Something went wrong.");
        setStatus("error");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setErrorMessage("Network error. Please try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="py-2">
        <p
          className="font-body text-lg leading-relaxed"
          style={{ color: "var(--cream)" }}
        >
          Thanks. Your message was sent. I&apos;ll get back to you soon.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-8 inline-flex min-h-[44px] items-center font-body text-sm uppercase tracking-widest text-gold underline decoration-gold/50 underline-offset-4 transition-opacity hover:opacity-80"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <style>{placeholderStyle}</style>
      <div className="flex flex-col gap-2">
        <label
          htmlFor="contact-name"
          className="font-body text-xs uppercase tracking-[0.15em]"
          style={{ color: "rgba(244, 239, 230, 0.75)" }}
        >
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          maxLength={200}
          autoComplete="name"
          disabled={status === "sending"}
          className={`${fieldClass} contact-field`}
          style={fieldStyle}
          placeholder="Your name"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label
          htmlFor="contact-email"
          className="font-body text-xs uppercase tracking-[0.15em]"
          style={{ color: "rgba(244, 239, 230, 0.75)" }}
        >
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          disabled={status === "sending"}
          className={`${fieldClass} contact-field`}
          style={fieldStyle}
          placeholder="your@email.com"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label
          htmlFor="contact-message"
          className="font-body text-xs uppercase tracking-[0.15em]"
          style={{ color: "rgba(244, 239, 230, 0.75)" }}
        >
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={6}
          minLength={10}
          maxLength={10000}
          disabled={status === "sending"}
          className={`${fieldClass} contact-field min-h-[140px] resize-y`}
          style={fieldStyle}
          placeholder="Role, team stage, how AI shows up in the roadmap, or what you want to explore together"
        />
      </div>

      {status === "error" && errorMessage && (
        <p className="font-body text-sm text-red-300/95" role="alert">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex min-h-[44px] w-fit items-center justify-center rounded-sm border border-gold px-8 py-3.5 font-body text-sm uppercase tracking-widest text-gold transition-colors hover:bg-gold hover:text-obsidian disabled:opacity-50"
      >
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
