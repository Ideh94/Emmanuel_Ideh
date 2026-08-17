import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-navy/10">
      <div className="mx-auto flex max-w-4xl flex-col items-start gap-6 px-6 py-8 text-sm text-near-black/70">
        <div className="flex flex-col items-start gap-2">
          <span className="font-heading text-navy">EI</span>
          <Link href="/case-studies" className="hover:text-navy">
            Read the case study
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
            href="https://drive.google.com/file/d/1ohwTJO8_WDtR6ZW3ZMBPi7fBa9oSn54N/view?usp=drivesdk"
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