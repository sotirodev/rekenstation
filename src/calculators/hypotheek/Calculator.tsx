"use client";

import { useMemo, useState } from "react";
import { NumberField } from "@/components/calculator/NumberField";
import { SelectField } from "@/components/calculator/SelectField";
import { ResultCard } from "@/components/calculator/ResultCard";
import { validateNumberInput } from "@/lib/validation/rules";
import { formatCurrency } from "@/lib/formatting/currency";
import { berekenHypotheek, type AflossingsVorm } from "@/lib/calculations/hypotheek";

export function HypotheekCalculator() {
  const [bedrag, setBedrag] = useState("350000");
  const [rente, setRente] = useState("3.8");
  const [looptijd, setLooptijd] = useState("30");
  const [vorm, setVorm] = useState<AflossingsVorm>("annuitair");

  const bedragValidation = validateNumberInput(bedrag, {
    fieldLabel: "hypotheekbedrag",
    min: 1,
    max: 5_000_000,
  });
  const renteValidation = validateNumberInput(rente, {
    fieldLabel: "rentepercentage",
    min: 0,
    max: 20,
  });
  const looptijdValidation = validateNumberInput(looptijd, {
    fieldLabel: "looptijd",
    min: 1,
    max: 40,
  });

  const result = useMemo(() => {
    if (!bedragValidation.valid || !renteValidation.valid || !looptijdValidation.valid) {
      return null;
    }
    return berekenHypotheek({
      hypotheekbedrag: bedragValidation.value,
      renteJaarPercentage: renteValidation.value,
      looptijdJaren: looptijdValidation.value,
      aflossingsvorm: vorm,
    });
  }, [
    bedragValidation.valid,
    bedragValidation.value,
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
          id="bedrag"
          label="Hypotheekbedrag"
          value={bedrag}
          onChange={setBedrag}
          prefix="€"
          error={bedragValidation.valid ? undefined : bedragValidation.error}
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
          onChange={(value) => setVorm(value as AflossingsVorm)}
          options={[
            { value: "annuitair", label: "Annuïtair" },
            { value: "lineair", label: "Lineair" },
          ]}
        />
      </div>

      {result && (
        <div className="mt-6">
          <ResultCard
            heading="Indicatieve maandlast"
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
            Dit is een indicatieve berekening, geen hypotheekadvies. De werkelijke maandlast hangt
            af van je persoonlijke situatie, hypotheekvorm en actuele rentetarieven van je
            geldverstrekker.
          </p>
        </div>
      )}
    </div>
  );
}
