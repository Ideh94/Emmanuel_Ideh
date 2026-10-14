import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Selected Work",
  description:
    "Evidence-led work across product positioning, go-to-market, campaign decisions and AI search visibility.",
};

export default function CaseStudies() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24 lg:px-10">
      <div className="max-w-3xl">
        <p className="eyebrow text-bronze">Selected work</p>
        <h1 className="mt-4 text-4xl sm:text-5xl">Evidence first. Decisions with a clear trail.</h1>
        <p className="prose-width mt-6 text-near-black/75">
          These examples show how I frame a question, check the evidence and make the limits of a conclusion visible. Public case studies use Brand A and Brand B.
        </p>
      </div>

      <article className="case-file mt-12">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="eyebrow text-bronze">Proof pillar 03 / AI search visibility</p>
            <h2 className="mt-3 text-3xl">Find the citation gap before choosing the fix.</h2>
          </div>
          <span className="evidence-tag">DIRECTIONAL</span>
        </div>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-xl">The question</h3>
            <p className="mt-3 text-near-black/75">Could a product rank in classic search and still be missing from the independent roundups buyers use to compare tools in its category?</p>
            <h3 className="mt-7 text-xl">The method</h3>
            <p className="mt-3 text-near-black/75">I defined commercial queries, classified intent, checked candidate citations, opened source pages to verify what snippets suggested, compared category framing, and turned the observed gaps into a ranked action plan.</p>
          </div>
          <div className="border-l-2 border-bronze pl-5">
            <h3 className="text-xl">What the evidence showed</h3>
            <p className="mt-3 text-near-black/75">For Brand A, two commercial-intent queries did not surface the product in two category roundups. Full-page checks ruled out a search-snippet truncation issue. Existing directory descriptions also placed it in a broader category than the one represented by those buying queries.</p>
            <p className="mt-4 text-near-black/75">Brand B was used as a comparison case. Its citations appeared across both query angles, with no comparable gap in this small sample.</p>
          </div>
        </div>

        <div className="mt-8 border-t border-navy/15 pt-6">
          <h3 className="text-xl">Decision and limits</h3>
          <p className="mt-3 text-near-black/75">The recommended sequence was to correct category descriptions, pursue relevant roundup inclusion, then publish an owned comparison page with structured data. This was a plan, not a measured outcome. Direct ChatGPT or Perplexity API access was unavailable, so live web search was used as a proxy. Two queries per brand were checked, below the method’s usual three to five.</p>
          <p className="mt-4 text-xs text-near-black/55">Basis: two queries per brand. Status: DIRECTIONAL. The audit did not measure changes after implementation.</p>
        </div>
      </article>

      <article className="case-file mt-8">
        <p className="eyebrow text-bronze">Proof pillar 02 / campaign and customer evidence</p>
        <h2 className="mt-3 text-3xl">Choose channels for the job they need to do.</h2>
        <div className="mt-7 grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-xl">The starting assumption</h3>
            <p className="mt-3 text-near-black/75">The initial brief focused on finding channels that could bring in more traffic. Reviewing the recommendation exposed a more fundamental distinction: a channel can add reach, or it can add credibility at a decision point.</p>
          </div>
          <div>
            <h3 className="text-xl">What changed in the analysis</h3>
            <p className="mt-3 text-near-black/75">An early claim about the brand’s directory presence was wrong. A live check found an existing profile with no reviews. That changed the process: verify the premise first, then compare channel options against their intended role. The submitted analysis has no confirmed performance outcome yet.</p>
          </div>
        </div>
        <p className="mt-7 border-t border-navy/15 pt-5 text-xs text-near-black/55">Basis: channel research and a checked directory listing. Status: SUPPORTED for the research process; no channel lift claimed.</p>
      </article>

      <aside className="mt-8 border border-navy/15 bg-[#F0F0EC] p-6 sm:p-8">
        <p className="eyebrow text-bronze">Proof pillar 01 / product positioning &amp; go-to-market</p>
        <h2 className="mt-3 text-2xl">Aixicoils</h2>
        <p className="mt-3 max-w-2xl text-near-black/70">Product positioning and go-to-market work. Project details are not published here.</p>
      </aside>
    </div>
  );
}
