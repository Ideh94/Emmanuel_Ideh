import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Emmanuel Ideh is a Product & Growth Strategist who turns customer and campaign evidence into product positioning and growth decisions.",
};

export default function About() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24 lg:px-10">
      <div className="max-w-3xl">
        <p className="eyebrow text-bronze">About</p>
        <h1 className="mt-4 text-4xl sm:text-5xl">I turn customer and campaign evidence into product positioning and growth decisions.</h1>
        <p className="prose-width mt-8 text-lg leading-8 text-near-black/80">
          I work across product marketing, growth strategy, marketing research and customer insight. When a product or campaign is live but the parts are not pulling in one direction, I look for what the customer, market and campaign evidence already say. That becomes the basis for sharper positioning, go-to-market choices and a growth plan the team can explain.
        </p>
        <p className="prose-width mt-5 text-near-black/75">
          My working rule is simple: Evidence over assumption. Strategy before tactics. Research and analytics are part of the work, not headline titles. I use tools such as SQL, Python, Excel and Power BI to check the story behind a decision.
        </p>
      </div>

      <div className="mt-14 grid gap-4 border-t border-navy/15 pt-8 sm:grid-cols-3">
        <div><p className="eyebrow text-bronze">01 / Diagnose</p><p className="mt-3 text-near-black/75">Customer, product, campaign and market evidence.</p></div>
        <div><p className="eyebrow text-bronze">02 / Decide</p><p className="mt-3 text-near-black/75">Positioning, product messaging and go-to-market choices.</p></div>
        <div><p className="eyebrow text-bronze">03 / Grow</p><p className="mt-3 text-near-black/75">A focused plan tied to adoption, customer journeys and commercial measures.</p></div>
      </div>
    </div>
  );
}
