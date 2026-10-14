import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-navy/10">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 py-8 text-sm text-near-black/70 lg:px-10">
        <div className="flex flex-col items-start gap-2">
          <span className="font-heading text-lg text-navy">EI</span>
          <span>Product &amp; Growth Strategist</span>
          <span className="text-xs text-near-black/55">Evidence over assumption. Strategy before tactics.</span>
          <Link href="/case-studies" className="hover:text-navy">
            Explore selected work
          </Link>
          <a href="mailto:emmanuel.ideh@10x.ai" className="hover:text-navy">
            emmanuel.ideh@10x.ai
          </a>
        </div>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-navy/10 pt-4 text-near-black/60">
          <a
            href="https://www.linkedin.com/in/emmanuel-ideh"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-navy"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Ideh94/Emmanuel_Ideh"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-navy"
          >
            GitHub
          </a>
          <a
            href="/Emmanuel_Ideh_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-navy"
          >
            CV
          </a>
          <a
            href="https://calendly.com/idehanechilexemmanuel/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-bronze"
          >
            Book a call
          </a>
        </div>
      </div>
    </footer>
  );
}
