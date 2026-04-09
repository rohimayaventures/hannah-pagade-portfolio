export default function GoldRule({ centered = false }: { centered?: boolean }) {
  return (
    <div
      aria-hidden="true"
      className={`mt-4 h-px w-24 bg-gold ${centered ? "mx-auto" : ""}`}
    />
  );
}

