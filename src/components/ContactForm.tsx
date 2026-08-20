"use client";

import { useState, FormEvent } from "react";

// Drop this file at: components/ContactForm.tsx
// Usage: <ContactForm /> anywhere in a page or layout.

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [company, setCompany] = useState(""); // honeypot, stays empty for real users
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message, company }),
      });

      const data = await response.json();

      if (!response.ok) {
        setStatus("error");
        setErrorMessage(data.error ?? "Something went wrong. Try again.");
        return;
      }

      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Try again.");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-sm border border-[#8C5E2A]/30 bg-[#FAFAF8] px-6 py-8 text-center"
      >
        <p className="font-[Fraunces] text-xl text-[#14213D]">Message sent.</p>
        <p className="mt-2 font-[Inter] text-sm text-[#101010]/70">
          Thanks for reaching out. I will reply as soon as I can.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 font-[Inter] text-sm text-[#8C5E2A] underline underline-offset-4 hover:text-[#14213D]"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      {/* Honeypot field: visually hidden, real users never see or fill it */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input
          type="text"
          id="company"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
      </div>

      <div>
        <label
          htmlFor="name"
          className="block font-[Inter] text-sm text-[#14213D]"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-2 w-full border-b border-[#101010]/20 bg-transparent px-1 py-2 font-[Inter] text-[#101010] outline-none transition-colors focus:border-[#8C5E2A]"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block font-[Inter] text-sm text-[#14213D]"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-2 w-full border-b border-[#101010]/20 bg-transparent px-1 py-2 font-[Inter] text-[#101010] outline-none transition-colors focus:border-[#8C5E2A]"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block font-[Inter] text-sm text-[#14213D]"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="mt-2 w-full resize-none border-b border-[#101010]/20 bg-transparent px-1 py-2 font-[Inter] text-[#101010] outline-none transition-colors focus:border-[#8C5E2A]"
        />
      </div>

      {status === "error" && (
        <p role="alert" className="font-[Inter] text-sm text-red-700">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full bg-[#14213D] px-6 py-3 font-[Inter] text-sm text-[#FAFAF8] transition-colors hover:bg-[#101010] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? "Sending" : "Send message"}
      </button>
    </form>
  );
}
