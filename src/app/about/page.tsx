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
        I&apos;m pivoting into marketing, self-taught, currently building
        real strategy and analysis work through FlyRank&apos;s Internship
        Program. Every piece here documents exactly what I verified, what I
        didn&apos;t, and why — because I&apos;d rather show you the real
        process than a polished story.
      </p>
    </div>
  );
}