import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-navy/10">
      <div className="mx-auto flex max-w-4xl flex-col items-start gap-2 px-6 py-8 text-sm text-near-black/70">
        <span className="font-heading text-navy">EI</span>
        <Link href="/case-studies" className="hover:text-navy">Read the case study</Link>
        <a href="mailto:emmanuel.ideh@10x.ai" className="hover:text-navy">emmanuel.ideh@10x.ai</a>
      </div>
    </footer>
  );
}
