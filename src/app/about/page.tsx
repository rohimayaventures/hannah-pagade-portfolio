import Layout from "@/components/Layout";

export default function AboutPage() {
  return (
    <Layout>
      <section className="mx-auto max-w-6xl px-4 py-14">
        <h1 className="font-display text-4xl text-cream">
          About
        </h1>
        <p className="mt-6 max-w-2xl font-body text-mid-gray">
          Short bio placeholder: Healthcare operations leader. Clinical
          AI builder. Product designer.
        </p>

        <div className="mt-10 rounded-xl border border-light-gray bg-white/5 p-6">
          <h2 className="font-display text-2xl text-cream">
            Contact
          </h2>
          <p className="mt-3 font-body text-mid-gray">
            Contact form / email link placeholder.
          </p>
          <div className="mt-6 h-20 w-full rounded-lg border border-light-gray bg-obsidian/40" />
        </div>
      </section>
    </Layout>
  );
}

