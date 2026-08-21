// src/app/api/citation-snapshot/route.ts
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

interface SerperResult {
  title: string;
  link: string;
  snippet?: string;
}

export async function POST(req: NextRequest) {
  let body: { brand?: string; category?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const brand = (body.brand ?? "").trim();
  const category = (body.category ?? "").trim();

  if (brand.length < 2) {
    return NextResponse.json({ error: "Enter a brand name." }, { status: 400 });
  }
  if (category.length < 2) {
    return NextResponse.json(
      { error: "Enter what the brand sells, e.g. \"AI visibility software\"." },
      { status: 400 }
    );
  }

  const apiKey = process.env.SERPER_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Snapshot tool isn't configured yet." },
      { status: 500 }
    );
  }

  const query = `best ${category} 2026`;

  let serperRes: Response;
  try {
    serperRes = await fetch("https://google.serper.dev/search", {
      method: "POST",
      headers: {
        "X-API-KEY": apiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ q: query, num: 10 }),
    });
  } catch {
    return NextResponse.json(
      { error: "Search request failed. Try again in a moment." },
      { status: 502 }
    );
  }

  if (!serperRes.ok) {
    return NextResponse.json(
      { error: "Search request failed. Try again in a moment." },
      { status: 502 }
    );
  }

  const data = await serperRes.json();
  const organic: SerperResult[] = Array.isArray(data.organic) ? data.organic : [];

  const brandLower = brand.toLowerCase();
  const matches = organic.filter(
    (r) =>
      r.title?.toLowerCase().includes(brandLower) ||
      r.snippet?.toLowerCase().includes(brandLower)
  );

  return NextResponse.json({
    query,
    cited: matches.length > 0,
    matches: matches.slice(0, 3).map((m) => ({ title: m.title, link: m.link })),
    topResults: organic.slice(0, 5).map((r) => ({ title: r.title, link: r.link })),
  });
}
