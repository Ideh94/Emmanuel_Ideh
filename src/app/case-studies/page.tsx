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
        <h2 className="text-2xl">Finding the AI Citation Gap</h2>
        <p className="mt-2 text-sm uppercase tracking-wide text-near-black/50">
          AI Visibility Audit
        </p>

        <h3 className="mt-6 font-heading text-lg text-navy">The Problem</h3>
        <p className="mt-2 text-near-black/90">
          A brand can hold a strong Google ranking and still be completely
          absent when an AI assistant answers the same buying question —
          because AI citation selection runs on different signals
          (structured data, comparison content, third-party review
          presence) than classic keyword ranking. Most brands have no
          systematic way to check whether this is happening to them.
        </p>

        <h3 className="mt-6 font-heading text-lg text-navy">What I Built</h3>
        <p className="mt-2 text-near-black/90">
          A repeatable, 9-step audit: define the brand and its real buying
          queries → classify search intent → query ChatGPT and Perplexity →
          extract and normalize every cited source → compare results →
          rank the visibility gaps → recommend specific content for each
          gap → sequence it into a dated 30-day plan. Every step is
          templated, not hardcoded to one brand — swapping inputs is the
          only change needed to re-run it.
        </p>

        <h3 className="mt-6 font-heading text-lg text-navy">
          Running It for Real
        </h3>
        <p className="mt-2 text-near-black/90">
          I tested the audit on two brands at opposite ends of AI-search
          maturity, to check the method actually generalizes rather than
          just fitting one story:
        </p>
        <p className="mt-4 text-near-black/90">
          <strong>FlyRank</strong> (an AI-search-visibility platform for
          ecommerce) — Testing two commercial-intent queries, I found
          FlyRank confirmed absent from the two roundups that match its
          exact category. I didn&apos;t stop at the search snippet — I
          pulled the full article text on both to rule out a truncation
          artifact before calling it a real gap. The bigger finding:
          FlyRank&apos;s existing directory listings (Crunchbase, Relve,
          Software Advice) categorize it against generic AI content-writing
          tools, not against the AI-search-visibility competitors it
          actually competes with for this buying query — meaning its
          existing SEO equity doesn&apos;t transfer to the query that
          matters most.
        </p>
        <p className="mt-4 text-near-black/90">
          <strong>Semrush</strong> (an established SEO platform) — the
          control case. Across two different query angles, Semrush showed
          strong, independent, redundant citation presence, consistent
          with its incumbent position. No gap found — which matters,
          because it shows the audit doesn&apos;t manufacture problems
          where none exist.
        </p>

        <h3 className="mt-6 font-heading text-lg text-navy">The Output</h3>
        <p className="mt-2 text-near-black/90">
          A ranked gap list and a dated 30-day content plan for FlyRank:
          correct the category tags on Capterra/SaaSWorthy/G2 first
          (fastest, highest-leverage fix), then outreach to the two
          roundups it&apos;s confirmed absent from, then publish an owned
          comparison page with schema markup.
        </p>

        <h3 className="mt-6 font-heading text-lg text-navy">
          What This Run Didn&apos;t Prove
        </h3>
        <p className="mt-2 text-near-black/90">
          This environment had no direct API access to ChatGPT or
          Perplexity, so live web search was used as a documented proxy — a
          reasonable substitute since both engines draw heavily on live web
          results, but not a literal capture of their output. I tested two
          queries per brand, not the full 3–5 the method specifies. Both
          limits are stated here, not smoothed over, because a method that
          only holds up when I don&apos;t mention its limits isn&apos;t one
          I&apos;d trust either.
        </p>
      </article>

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