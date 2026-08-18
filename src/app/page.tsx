import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <section className="prose-width">
        <h1 className="text-3xl md:text-4xl">
          Your brand can rank #1 on Google and still be invisible when
          ChatGPT or Perplexity answer the same question. I audit why —
          and fix it.
        </h1>
        <p className="mt-4 text-near-black/80">
          For software products and companies that need to know if AI
          search engines actually cite them.
        </p>
        <Link
          href="/case-studies"
          className="mt-8 inline-block border border-navy px-5 py-2 text-sm font-medium text-navy hover:bg-navy hover:text-near-white"
        >
          Read the case study
        </Link>
      </section>
    </div>
  );
}