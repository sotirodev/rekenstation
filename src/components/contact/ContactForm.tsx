"use client";

import { useState, type FormEvent } from "react";

export function ContactForm() {
  const [naam, setNaam] = useState("");
  const [email, setEmail] = useState("");
  const [bericht, setBericht] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const nextErrors: Record<string, string> = {};
    if (naam.trim() === "") nextErrors.naam = "Vul je naam in.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = "Vul een geldig e-mailadres in.";
    }
    if (bericht.trim().length < 10) {
      nextErrors.bericht = "Je bericht moet minimaal 10 tekens bevatten.";
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
    }
  }

  if (submitted) {
    return (
      <div className="rounded-xl border border-border bg-mint p-6 text-sm text-brand-dark">
        Bedankt, je invoer is gevalideerd. Dit contactformulier is nog niet gekoppeld aan een
        verzendservice — neem voor nu contact op via [contact e-mail].
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-xl border border-border bg-surface p-6">
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

      <button
        type="submit"
        className="rounded-full bg-brand px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-brand-dark"
      >
        Versturen
      </button>
    </form>
  );
}
