"use client";

import { useMemo, useState } from "react";
import { NumberField } from "@/components/calculator/NumberField";
import { SelectField } from "@/components/calculator/SelectField";
import { ResultCard } from "@/components/calculator/ResultCard";
import { validateNumberInput } from "@/lib/validation/rules";
import { formatCurrency } from "@/lib/formatting/currency";
import { berekenStudieschuld, type StudieschuldAflossingsvorm } from "@/lib/calculations/studieschuld";

export function StudieschuldCalculator() {
  const [schuld, setSchuld] = useState("");
  const [rente, setRente] = useState("");
  const [looptijd, setLooptijd] = useState("35");
  const [vorm, setVorm] = useState<StudieschuldAflossingsvorm>("annuitair");

  const schuldValidation = validateNumberInput(schuld, { fieldLabel: "studieschuld", min: 1, max: 1_000_000 });
  const renteValidation = validateNumberInput(rente, { fieldLabel: "rentepercentage", min: 0, max: 20 });
  const looptijdValidation = validateNumberInput(looptijd, { fieldLabel: "looptijd", min: 1, max: 35 });

  const result = useMemo(() => {
    if (!schuldValidation.valid || !renteValidation.valid || !looptijdValidation.valid) return null;
    return berekenStudieschuld({
      schuldbedrag: schuldValidation.value,
      renteJaarPercentage: renteValidation.value,
      looptijdJaren: looptijdValidation.value,
      aflossingsvorm: vorm,
    });
  }, [
    schuldValidation.valid,
    schuldValidation.value,
    renteValidation.valid,
    renteValidation.value,
    looptijdValidation.valid,
    looptijdValidation.value,
    vorm,
  ]);

  return (
    <div className="rounded-xl border border-border bg-surface p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <NumberField
          id="schuld"
          label="Totale studieschuld"
          value={schuld}
          onChange={setSchuld}
          prefix="€"
          error={schuldValidation.valid ? undefined : schuldValidation.error}
        />
        <NumberField
          id="rente"
          label="Rente per jaar"
          value={rente}
          onChange={setRente}
          suffix="%"
          error={renteValidation.valid ? undefined : renteValidation.error}
        />
        <NumberField
          id="looptijd"
          label="Looptijd"
          value={looptijd}
          onChange={setLooptijd}
          suffix="jaar"
          error={looptijdValidation.valid ? undefined : looptijdValidation.error}
        />
        <SelectField
          id="vorm"
          label="Aflossingsvorm"
          value={vorm}
          onChange={(value) => setVorm(value as StudieschuldAflossingsvorm)}
          options={[
            { value: "annuitair", label: "Annuïtair (vaste maandlast)" },
            { value: "lineair", label: "Lineair (dalende maandlast)" },
          ]}
        />
      </div>

      {result && (
        <div className="mt-6">
          <ResultCard
            heading="Indicatieve aflossing"
            primary={{
              label: vorm === "lineair" ? "Eerste maandlast" : "Maandlast",
              value: formatCurrency(result.maandlastEersteMaand),
            }}
            rows={[
              { label: "Totale rente", value: formatCurrency(result.totaleRente, false) },
              { label: "Totale kosten", value: formatCurrency(result.totaleKosten, false), emphasis: true },
            ]}
          />
          <p className="mt-3 text-xs text-muted">
            DUO hanteert een draagkrachtregeling waarbij je aflossing kan meebewegen met je
            inkomen, en de standaard aflostermijn is 35 jaar. Deze calculator gaat uit van een
            vaste rente en vaste looptijd zonder draagkrachtregeling, en is dus een vereenvoudigde
            indicatie. Kijk voor je exacte situatie op duo.nl.
          </p>
        </div>
      )}
    </div>
  );
}
