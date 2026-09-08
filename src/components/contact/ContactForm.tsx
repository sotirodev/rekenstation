"use client";

import { useState, type FormEvent } from "react";

export function ContactForm() {
  const [naam, setNaam] = useState("");
  const [email, setEmail] = useState("");
  const [bericht, setBericht] = useState("");
  const [website, setWebsite] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "versturen" | "verstuurd" | "mislukt">("idle");
  const [serverError, setServerError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setServerError(null);

    const nextErrors: Record<string, string> = {};
    if (naam.trim() === "") nextErrors.naam = "Vul je naam in.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = "Vul een geldig e-mailadres in.";
    }
    if (bericht.trim().length < 10) {
      nextErrors.bericht = "Je bericht moet minimaal 10 tekens bevatten.";
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("versturen");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ naam, email, bericht, website }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        setServerError(data?.error ?? "Het bericht kon niet worden verstuurd.");
        setStatus("mislukt");
        return;
      }

      setStatus("verstuurd");
    } catch {
      setServerError("Er ging iets mis. Controleer je internetverbinding en probeer het opnieuw.");
      setStatus("mislukt");
    }
  }

  if (status === "verstuurd") {
    return (
      <div className="rounded-xl border border-border bg-mint p-6 text-sm text-brand-dark">
        Bedankt voor je bericht. We nemen zo snel mogelijk contact met je op.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-xl border border-border bg-surface p-6">
      <div className="hidden" aria-hidden>
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={website}
          onChange={(event) => setWebsite(event.target.value)}
        />
      </div>

      <div>
        <label htmlFor="naam" className="mb-1.5 block text-sm font-medium text-foreground">
          Naam
        </label>
        <input
          id="naam"
          value={naam}
          onChange={(event) => setNaam(event.target.value)}
          className="w-full rounded-lg border border-border bg-surface px-3 py-2.5 text-base text-foreground outline-none focus:ring-2 focus:ring-brand/40"
        />
        {errors.naam && <p className="mt-1.5 text-sm text-danger">{errors.naam}</p>}
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">
          E-mail
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="w-full rounded-lg border border-border bg-surface px-3 py-2.5 text-base text-foreground outline-none focus:ring-2 focus:ring-brand/40"
        />
        {errors.email && <p className="mt-1.5 text-sm text-danger">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="bericht" className="mb-1.5 block text-sm font-medium text-foreground">
          Bericht
        </label>
        <textarea
          id="bericht"
          rows={5}
          value={bericht}
          onChange={(event) => setBericht(event.target.value)}
          className="w-full rounded-lg border border-border bg-surface px-3 py-2.5 text-base text-foreground outline-none focus:ring-2 focus:ring-brand/40"
        />
        {errors.bericht && <p className="mt-1.5 text-sm text-danger">{errors.bericht}</p>}
      </div>

      {serverError && <p className="text-sm text-danger">{serverError}</p>}

      <button
        type="submit"
        disabled={status === "versturen"}
        className="rounded-full bg-brand px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "versturen" ? "Versturen..." : "Versturen"}
      </button>
    </form>
  );
}
