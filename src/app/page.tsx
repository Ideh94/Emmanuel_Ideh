// src/app/contact/page.tsx
import type { Metadata } from "next";
import CitationSnapshot from "@/app/components/CitationSnapshot";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch about an AI visibility audit for your product or company.",
};

export default function Contact() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-3xl">Contact</h1>
      <p className="prose-width mt-4 text-near-black/80">
        <a href="mailto:emmanuel.ideh@10x.ai" className="underline">
          emmanuel.ideh@10x.ai
        </a>
      </p>

      <CitationSnapshot />
    </div>
  );
}
