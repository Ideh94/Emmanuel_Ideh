import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "How a 9-step audit found a software brand's exact AI citation gap — and the 30-day plan to close it. Tested and validated on two real brands.",
};

export default function CaseStudies() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-3xl">Case Studies</h1>

      <article className="prose-width mt-10 border-t border-navy/10 pt-10">
        <h2 className="text-2xl">Find an Untapped Channel</h2>
        <p className="mt-2 text-sm uppercase tracking-wide text-near-black/50">
          FlyRank Internship — Channel Audit
        </p>

        <h3 className="mt-6 font-heading text-lg text-navy">Problem</h3>
        <p className="mt-2 text-near-black/90">
          FlyRank needed marketing channels it wasn&apos;t using yet. I went
          in thinking this was about traffic — new places FlyRank&apos;s
          audience already spends time. My top pick ended up being justified
          more on credibility than traffic. I noticed that gap writing this
          up, not while I was working.
        </p>

        <h3 className="mt-6 font-heading text-lg text-navy">
          What I Did and Decided
        </h3>
        <p className="mt-2 text-near-black/90">
          I brainstormed channels with Claude. Early on, Claude told me
          FlyRank wasn&apos;t active on G2. That was wrong — FlyRank already
          had a claimed G2 profile with zero reviews. That mistake changed
          how I worked: from then on, I pressure-tested every claim instead
          of accepting confident-sounding answers, and had Claude verify
          against live web sources before I trusted anything.
        </p>
        <p className="mt-4 text-near-black/90">
          Where my judgment stopped and Claude&apos;s started: Claude
          proposed the final ranking and the reasoning behind it. I
          didn&apos;t evaluate the ranking criteria myself — I accepted it
          because the reasoning and verification held up. What I actually
          decided was the process: verify everything, trust nothing on tone
          alone.
        </p>

        <h3 className="mt-6 font-heading text-lg text-navy">What Came of It</h3>
        <p className="mt-2 text-near-black/90">
          Verifying every claim didn&apos;t feel like it slowed me down — it
          made the deliverable accurate instead of confidently wrong. I
          submitted it. No feedback yet.
        </p>

        <h3 className="mt-6 font-heading text-lg text-navy">
          What I&apos;d Do Differently
        </h3>
        <p className="mt-2 text-near-black/90">
          Verify from the start, not just after catching one mistake partway
          through.
        </p>

        <div className="mt-8 border border-dashed border-navy/30 bg-navy/5 p-4 text-sm text-near-black/70">
          A screenshot of the underlying analysis (Power BI dashboard) is
          not embedded here yet — noted on the &quot;still ugly&quot; list
          rather than left unmentioned.
        </div>
      </article>
    </div>
  );
}