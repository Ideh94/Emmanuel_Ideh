import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Discuss product positioning, go-to-market strategy or a growth decision with Emmanuel Ideh.",
};

export default function Contact() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24 lg:px-10">
      <div className="max-w-3xl">
        <p className="eyebrow text-bronze">Contact</p>
        <h1 className="mt-4 text-4xl sm:text-5xl">What is live, and what is not pulling in one direction?</h1>
        <p className="prose-width mt-6 text-lg leading-8 text-near-black/75">
          Share the product, campaign or growth decision you are working through. I will start with the evidence you already have.
        </p>
        <div className="mt-9 flex flex-wrap gap-4">
          <a className="button-dark" href="mailto:emmanuel.ideh@10x.ai">Email Emmanuel <span aria-hidden="true">↗</span></a>
          <a className="button-outline-dark" href="https://calendly.com/idehanechilexemmanuel/30min" target="_blank" rel="noopener noreferrer">Book a call</a>
        </div>
        <p className="mt-8 text-sm text-near-black/60"><a className="underline underline-offset-4" href="mailto:emmanuel.ideh@10x.ai">emmanuel.ideh@10x.ai</a></p>
      </div>
    </div>
  );
}
