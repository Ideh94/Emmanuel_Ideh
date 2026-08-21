"use client";

import { useState, FormEvent } from "react";

interface SnapshotResult {
  query: string;
  cited: boolean;
  matches: { title: string; link: string }[];
  topResults: { title: string; link: string }[];
}

export default function CitationSnapshot() {
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<SnapshotResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    setError(null);

    try {
      const res = await fetch("/api/citation-snapshot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ brand, category }),
      });
      const data = await res.json();

      if (!res.ok) {
        setError(data.error ?? "Something went wrong.");
      } else {
        setResult(data);
      }
    } catch {
      setError("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mt-16 border border-navy/15 bg-near-white p-8">
      <p className="text-xs font-semibold uppercase tracking-wide text-bronze">
        Citation Snapshot
      </p>
      <h2 className="mt-2 text-2xl text-navy">
        See whether your brand shows up in a real buying-intent search
      </h2>
      <p className="mt-3 text-near-black/80">
        Enter your brand and what you sell. This runs one real search for the
        kind of buying question a prospect would ask, and checks whether your
        brand appears in the results.
      </p>

      <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-end">
        <div className="flex-1">
          <label htmlFor="brand" className="block text-sm text-near-black/70">
            Brand name
          </label>
          <input
            id="brand"
            type="text"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            placeholder="e.g. FlyRank"
            className="mt-1 w-full border border-navy/20 bg-white px-3 py-2 text-near-black focus:border-bronze focus:outline-none"
            maxLength={60}
          />
        </div>
        <div className="flex-1">
          <label htmlFor="category" className="block text-sm text-near-black/70">
            What you sell
          </label>
          <input
            id="category"
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="e.g. AI visibility software"
            className="mt-1 w-full border border-navy/20 bg-white px-3 py-2 text-near-black focus:border-bronze focus:outline-none"
            maxLength={80}
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="border border-navy bg-navy px-5 py-2 text-white transition hover:bg-navy/90 disabled:opacity-50"
        >
          {loading ? "Checking…" : "Run snapshot"}
        </button>
      </form>

      {error && (
        <p className="mt-4 text-sm text-[#A23B3B]">{error}</p>
      )}

      {result && (
        <div className="mt-6 border-l-2 border-bronze pl-4">
          <p className="text-sm text-near-black/70">
            Query used: <span className="italic">&ldquo;{result.query}&rdquo;</span>
          </p>
          <p className="mt-2 text-lg text-navy">
            {result.cited
              ? "Cited — your brand appears in these results"
              : "Gap found — your brand did not appear in the top 10 results"}
          </p>

          {result.cited && result.matches.length > 0 && (
            <ul className="mt-3 space-y-1 text-sm">
              {result.matches.map((m) => (
                <li key={m.link}>
                  <a href={m.link} target="_blank" rel="noopener noreferrer" className="underline">
                    {m.title}
                  </a>
                </li>
              ))}
            </ul>
          )}

          {!result.cited && result.topResults.length > 0 && (
            <div className="mt-3">
              <p className="text-sm text-near-black/70">
                Top results that appeared instead:
              </p>
              <ul className="mt-1 space-y-1 text-sm">
                {result.topResults.map((r) => (
                  <li key={r.link}>
                    <a href={r.link} target="_blank" rel="noopener noreferrer" className="underline">
                      {r.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <p className="mt-4 text-xs text-near-black/50">
            This snapshot uses live search as a documented proxy for AI answer
            engines, not a literal ChatGPT or Perplexity call. It's a
            directional check, not a full audit.
          </p>
        </div>
      )}
    </div>
  );
}
