import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Product & Growth Strategist",
  description:
    "I turn customer and campaign evidence into product positioning and growth decisions. Evidence over assumption. Strategy before tactics.",
};

const work = [
  {
    number: "01",
    title: "Product positioning & go-to-market",
    proof: "Aixicoils",
    detail: "Project details are not published here.",
  },
  {
    number: "02",
    title: "Campaign & customer evidence",
    proof: "MIOS · The Spend Signal",
    detail: "Customer and campaign evidence, made useful for the next decision.",
  },
  {
    number: "03",
    title: "AI search visibility audit",
    proof: "Brand A · Brand B",
    detail: "A documented audit method for finding where brands appear in AI-led discovery.",
  },
];

export default function Home() {
  return (
    <div>
      <section className="hero-band">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:py-24 lg:grid-cols-[1.2fr_0.8fr] lg:items-start lg:gap-16 lg:px-10">
          <div className="hero-copy">
            <p className="eyebrow text-bronze hero-eyebrow">Product &amp; Growth Strategist</p>
            <h1 className="hero-title mt-5 max-w-3xl text-5xl leading-[1.04] text-near-white sm:text-6xl">
              <span>Evidence over assumption.</span>
              <span>Strategy before tactics.</span>
            </h1>
            <p className="hero-intro mt-8 max-w-2xl text-lg leading-8 text-near-white/80 sm:text-xl">
              I help founders and product teams whose product or campaigns are live but not pulling in one direction build a clear product and growth strategy. I start with what customers, campaigns and market data already show, then build positioning, go-to-market and growth plans that trace back to evidence.
            </p>
            <div className="hero-actions mt-10 flex flex-wrap gap-4">
              <Link href="/case-studies" className="button-light">Explore the work <span aria-hidden="true">↗</span></Link>
              <Link href="/contact" className="button-outline-light">Discuss a decision</Link>
            </div>
          </div>
          <aside className="hero-note hero-note-enter lg:mt-16" aria-label="Positioning summary">
            <p className="eyebrow text-near-white/55">Working principle</p>
            <p className="mt-5 font-heading text-2xl leading-snug text-near-white sm:text-3xl">
              Customer evidence to positioning and growth decisions.
            </p>
            <div className="mt-8 border-t border-near-white/20 pt-5 text-sm text-near-white/65">
              Product strategy <span className="text-bronze">/</span> Growth systems <span className="text-bronze">/</span> Clear measurement
            </div>
            <ol className="decision-route" aria-label="How the work moves from evidence to action">
              <li><span className="route-dot" aria-hidden="true" />Listen</li>
              <li><span className="route-dot" aria-hidden="true" />Position</li>
              <li><span className="route-dot" aria-hidden="true" />Grow</li>
            </ol>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-24 lg:px-10">
        <div className="section-heading">
          <div>
            <p className="eyebrow text-bronze">The work</p>
            <h2 className="mt-3 text-3xl sm:text-4xl">A decision system, built from evidence.</h2>
          </div>
          <p className="max-w-md text-near-black/70">
            Start with the customer, the product and the numbers. Then choose the strategy and the next move.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {work.map((item) => (
            <article key={item.number} className="work-card">
              <p className="eyebrow text-bronze">{item.number} <span className="text-near-black/35">/ proof pillar</span></p>
              <h3 className="mt-8 text-2xl leading-snug">{item.title}</h3>
              <p className="mt-6 border-t border-navy/15 pt-4 text-sm font-semibold text-navy">{item.proof}</p>
              <p className="mt-3 text-sm leading-6 text-near-black/70">{item.detail}</p>
            </article>
          ))}
        </div>
        <p className="mt-4 text-xs text-near-black/50">Case studies use Brand A and Brand B where identifying details are not needed to explain the method.</p>
      </section>

      <section className="bg-[#F0F0EC]">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:py-20 lg:grid-cols-[0.7fr_1.3fr] lg:px-10">
          <div>
            <p className="eyebrow text-bronze">DTC remains home ground</p>
            <h2 className="mt-3 text-3xl sm:text-4xl">Find the friction before buying more traffic.</h2>
          </div>
          <div>
            <p className="max-w-2xl text-near-black/75">
              A practical audit sequence for DTC teams: examine CVR, then CAC, then the customer journey, and finally ROAS.
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {["CVR", "CAC", "Customer Journey", "ROAS"].map((step, index) => (
                <span key={step} className="sequence-chip"><span>{String(index + 1).padStart(2, "0")}</span>{step}</span>
              ))}
            </div>
            <p className="mt-6 text-sm text-near-black/65">The Spend Signal connects customer and campaign evidence to the product-growth decision that follows.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-16 sm:flex-row sm:items-center sm:justify-between sm:py-20 lg:px-10">
        <div>
          <p className="eyebrow text-bronze">The next decision</p>
          <h2 className="mt-3 text-3xl sm:text-4xl">Make the evidence earn its place.</h2>
        </div>
        <Link href="/contact" className="button-dark">Get in touch <span aria-hidden="true">↗</span></Link>
      </section>
    </div>
  );
}
