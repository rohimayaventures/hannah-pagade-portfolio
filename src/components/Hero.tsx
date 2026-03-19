import GoldRule from "./GoldRule";

export default function Hero() {
  return (
    <section className="w-full bg-obsidian">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <h1 className="font-display text-4xl leading-tight text-cream md:text-6xl">
          Where the Work Speaks
        </h1>
        <GoldRule />
        <p className="mt-6 max-w-2xl font-body text-lg text-mid-gray md:text-2xl">
          Healthcare operations leader. Clinical AI builder. Product designer.
        </p>
      </div>
    </section>
  );
}

