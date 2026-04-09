const MCP_URL = "https://ask-hannah-mcp-production.up.railway.app/mcp";

/**
 * Step-by-step connector setup for the Ask Hannah MCP case study page (`#mcp-connect`).
 */
export default function AskHannahMcpConnectSection() {
  return (
    <section
      id="mcp-connect"
      className="rounded-xl p-6 text-center md:p-8"
      style={{
        border: "1px solid rgba(200, 169, 110, 0.22)",
        backgroundColor: "rgba(255, 255, 255, 0.05)",
      }}
    >
      <p
        className="mb-2 font-body text-[11px] uppercase tracking-[0.2em]"
        style={{ color: "var(--gold)" }}
      >
        Live MCP
      </p>
      <h2 className="mb-4 font-display text-2xl text-cream md:text-3xl">
        Use Ask Hannah MCP in Claude
      </h2>
      <ol
        className="mx-auto max-w-2xl list-decimal space-y-3 pl-5 text-left font-body text-[15px] leading-relaxed md:text-base"
        style={{ color: "rgba(244, 239, 230, 0.88)" }}
      >
        <li>
          Open{" "}
          <a
            href="https://claude.ai"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline decoration-gold/50 underline-offset-2 transition-colors hover:text-gold"
            style={{ color: "var(--gold)" }}
          >
            Claude.ai
          </a>{" "}
          and sign in.
        </li>
        <li>
          Add a{" "}
          <strong style={{ color: "var(--cream)" }}>custom connector</strong>{" "}
          (in Claude&apos;s settings or connectors area — labels vary by version).
        </li>
        <li>Paste this MCP server URL when prompted:</li>
      </ol>
      <div
        className="mx-auto mt-3 mb-5 max-w-2xl break-all rounded-lg px-4 py-3 text-left font-mono text-[13px] leading-snug md:text-sm"
        style={{
          border: "1px solid rgba(200, 169, 110, 0.28)",
          backgroundColor: "rgba(8, 12, 20, 0.45)",
          color: "#e8d4b0",
        }}
      >
        {MCP_URL}
      </div>
      <p
        className="mx-auto max-w-2xl font-body text-sm leading-relaxed md:text-[15px]"
        style={{ color: "rgba(244, 239, 230, 0.78)" }}
      >
        Start a new chat and ask Claude to use the Ask Hannah tools — for example
        profile, projects, metrics, hiring brief, or resume generation from your
        structured data.
      </p>
      <p
        className="mx-auto mt-4 max-w-2xl font-body text-xs leading-relaxed"
        style={{ color: "rgba(244, 239, 230, 0.55)" }}
      >
        Optional: open{" "}
        <a
          href="https://ask-hannah-mcp-production.up.railway.app/health"
          target="_blank"
          rel="noreferrer"
          className="underline decoration-gold/40 underline-offset-2 transition-colors hover:text-gold"
          style={{ color: "var(--gold)" }}
        >
          <code className="font-mono text-[11px] md:text-xs">/health</code>
        </a>{" "}
        in a new tab for raw JSON status. Claude must use the streamable{" "}
        <code style={{ color: "var(--gold)" }}>/mcp</code> URL above.
      </p>
    </section>
  );
}
