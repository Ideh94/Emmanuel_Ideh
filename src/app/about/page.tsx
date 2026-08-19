import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "I build repeatable workflows for auditing AI search citation, backed by BI-grade data analysis (Power BI, SQL, Python).",
};

export default function About() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-3xl">About</h1>
      <p className="prose-width mt-4 text-near-black/80">
        I build and validate repeatable workflows for auditing how AI
        search engines — ChatGPT, Perplexity, Claude — cite (or fail to
        cite) a brand, then turn that audit into a ranked, evidence-backed
        content plan to close the gap.
      </p>
      <p className="prose-width mt-4 text-near-black/80">
        Every claim I publish is labeled by what it actually is: something
        I measured, something from a published benchmark, or an estimate —
        because &quot;probably&quot; and &quot;confirmed&quot; are
        different things, and most marketing writing doesn&apos;t bother to
        say which one it&apos;s giving you.
      </p>
      <p className="prose-width mt-4 text-near-black/80">
        I come from a background in BI and data analysis (Excel, SQL, Power BI, 
        Python), which is why I default to checking a claim against a live
        source before I write it down. That habit is the whole method, not
        a side skill.
      </p>
    </div>
  );
}