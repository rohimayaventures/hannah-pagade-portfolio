type StackRowProps = {
  highlighted: string[];
  standard: string[];
  eyebrow?: string;
  title?: string;
  id?: string;
};

const pillBase =
  "inline-flex items-center rounded-full border px-3 py-1.5 font-mono text-xs sm:text-sm";

export default function StackRow({
  highlighted,
  standard,
  eyebrow,
  title,
  id = "tech-stack",
}: StackRowProps) {
  return (
    <section id={id} className="mt-12 w-full">
      <div className="mx-auto max-w-6xl">
        {eyebrow ? (
          <p
            className="font-mono text-[10px] uppercase tracking-[0.2em]"
            style={{ color: "rgba(244, 239, 230, 0.5)" }}
          >
            {eyebrow}
          </p>
        ) : null}
        {title ? (
          <h2 className="font-display mt-4 text-2xl text-cream md:text-3xl">
            {title}
          </h2>
        ) : null}
        <div className="mt-6 flex flex-wrap gap-2">
          {highlighted.map((item) => (
            <span
              key={item}
              className={pillBase}
              style={{
                color: "#C8A96E",
                borderColor: "rgba(200, 169, 110, 0.35)",
                backgroundColor: "rgba(200, 169, 110, 0.1)",
              }}
            >
              {item}
            </span>
          ))}
          {standard.map((item) => (
            <span
              key={item}
              className={pillBase}
              style={{
                color: "#C8A96E",
                borderColor: "rgba(200, 169, 110, 0.35)",
                backgroundColor: "rgba(200, 169, 110, 0.1)",
              }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
