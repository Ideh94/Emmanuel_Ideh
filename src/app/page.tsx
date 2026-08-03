import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <section className="prose-width">
        <h1 className="text-3xl md:text-4xl">
          Most marketers guess at your audience and messaging. I analyze
          what&apos;s already happening in your campaigns first — then build
          the strategy that ties them together.
        </h1>
        <p className="mt-4 text-near-black/80">
          For DTC founders whose campaigns are running but unfocused.
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
