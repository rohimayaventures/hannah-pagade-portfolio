type ShippedCard = {
  title: string;
  body: string;
};

type ShippedGridProps = {
  cards: ShippedCard[];
  eyebrow?: string;
  title?: string;
  id?: string;
};

export default function ShippedGrid({
  cards,
  eyebrow,
  title,
  id = "what-shipped",
}: ShippedGridProps) {
  return (
    <section id={id} className="mt-12 w-full">
      <div className="mx-auto max-w-6xl text-center">
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
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, i) => (
            <div
              key={`${card.title}-${i}`}
              className="rounded-xl p-5 md:p-6"
              style={{
                border: "1px solid rgba(255,255,255,0.08)",
                backgroundColor: "rgba(255,255,255,0.04)",
              }}
            >
              <h3 className="font-body text-base font-medium text-cream">
                {card.title}
              </h3>
              <p
                className="font-body mt-3 text-sm leading-relaxed"
                style={{ color: "rgba(244, 239, 230, 0.5)" }}
              >
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
