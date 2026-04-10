const MCP_URL = "https://ask-hannah-mcp-production.up.railway.app/mcp";

/**
 * Step-by-step connector setup for the Ask Hannah MCP case study page (`#mcp-connect`).
 * Typography and spacing match other work sections (ProofPoint / Pivot / Embed cues).
 */
export default function AskHannahMcpConnectSection() {
  return (
    <section
      id="mcp-connect"
      className="w-full rounded-xl"
      style={{
        border: "1px solid rgba(200, 169, 110, 0.2)",
        backgroundColor: "rgba(255, 255, 255, 0.05)",
      }}
    >
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-8 sm:py-10 md:px-12">
        <div className="text-center">
          <p
            className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold"
            style={{ opacity: 0.9 }}
          >
            Live MCP
          </p>
          <h2 className="font-display mt-4 text-2xl text-cream md:text-3xl">
            Use Ask Hannah MCP in Claude
          </h2>
        </div>

        <ol
          className="mx-auto mt-8 max-w-2xl list-decimal space-y-3 pl-5 text-left font-body text-base leading-relaxed md:text-[17px]"
          style={{ color: "rgba(244, 239, 230, 0.85)" }}
        >
          <li>
            Open{" "}
            <a
              href="https://claude.ai"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-gold underline decoration-gold/50 underline-offset-2 transition-opacity hover:opacity-90"
            >
              Claude.ai
            </a>{" "}
            and sign in.
          </li>
          <li>
            Add a{" "}
            <strong className="font-medium text-cream">custom connector</strong>{" "}
            (in Claude&apos;s settings or connectors area — labels vary by
            version).
          </li>
          <li>Paste this MCP server URL when prompted:</li>
        </ol>
        <div
          className="mx-auto mt-3 max-w-2xl break-all rounded-lg border border-gold/25 bg-obsidian/80 px-4 py-3 text-left font-mono text-sm leading-snug text-cream md:text-[15px]"
        >
          {MCP_URL}
        </div>
        <p
          className="mx-auto mt-5 max-w-2xl text-left font-body text-sm leading-relaxed md:text-base"
          style={{ color: "rgba(244, 239, 230, 0.78)" }}
        >
          Start a new chat and ask Claude to use the Ask Hannah tools — for
          example profile, projects, metrics, hiring brief, or resume generation
          from your structured data.
        </p>
        <p
          className="mx-auto mt-4 max-w-2xl text-left font-body text-xs leading-relaxed md:text-sm"
          style={{ color: "rgba(244, 239, 230, 0.55)" }}
        >
          Optional: open{" "}
          <a
            href="https://ask-hannah-mcp-production.up.railway.app/health"
            target="_blank"
            rel="noreferrer"
            className="text-gold underline decoration-gold/40 underline-offset-2 transition-opacity hover:opacity-90"
          >
            <code className="font-mono text-[11px] md:text-xs">/health</code>
          </a>{" "}
          in a new tab for raw JSON status. Claude must use the streamable{" "}
          <code className="font-mono text-gold">/mcp</code> URL above.
        </p>
      </div>
    </section>
  );
}
