export default function Hero() {
  return (
    <section
      style={{ backgroundColor: 'var(--obsidian)' }}
      className="w-full px-8 md:px-16 pt-24 pb-20"
    >
      <div className="max-w-4xl mx-auto">
        <p
          style={{ color: 'var(--gold)', fontFamily: 'Arial, sans-serif' }}
          className="text-xs tracking-widest uppercase mb-6 opacity-80"
        >
          Hannah Pagade
        </p>
        <h1
          style={{ color: 'var(--cream)', fontFamily: 'Georgia, serif' }}
          className="text-5xl md:text-7xl leading-tight mb-6"
        >
          Where the<br />
          <em style={{ color: 'var(--gold)' }}>Work Speaks</em>
        </h1>
        <div
          style={{ backgroundColor: 'var(--gold)' }}
          className="w-16 h-px mb-8 opacity-60"
        />
        <p
          style={{ color: 'var(--cream)', fontFamily: 'Arial, sans-serif' }}
          className="text-lg md:text-xl leading-relaxed max-w-xl opacity-80"
        >
          Healthcare operations leader. Clinical AI builder. Product designer.
        </p>
      </div>
    </section>
  );
}

