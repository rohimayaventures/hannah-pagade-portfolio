type ProofPoint = {
  label: string;
  body: string;
  verdict: string;
};

type ProofPointBlockProps = {
  proofPoint: ProofPoint;
  id?: string;
};

export default function ProofPointBlock({
  proofPoint,
  id = "proof-point",
}: ProofPointBlockProps) {
  return (
    <section
      id={id}
      className="w-full bg-[rgba(200,169,110,0.04)]"
      style={{
        borderTop: "1px solid rgba(255,255,255,0.07)",
        borderBottom: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-8 sm:py-12 md:px-16 md:py-14">
        <p
          className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold"
          style={{ opacity: 0.9 }}
        >
          {proofPoint.label}
        </p>
        <p
          className="font-display mt-6 max-w-3xl break-words text-lg font-light leading-relaxed sm:text-xl md:text-2xl"
          style={{ color: "rgba(244, 239, 230, 0.72)" }}
        >
          {proofPoint.body}
        </p>
        <p
          className="font-body mt-8 border-l-2 border-gold pl-4 text-base text-gold sm:text-lg"
          style={{ borderLeftWidth: 2 }}
        >
          {proofPoint.verdict}
        </p>
      </div>
    </section>
  );
}
