"use client";

import { useMemo, useState } from "react";
import { NumberField } from "@/components/calculator/NumberField";
import { ResultCard } from "@/components/calculator/ResultCard";
import { validateNumberInput } from "@/lib/validation/rules";
import { formatCurrency } from "@/lib/formatting/currency";
import { berekenLening } from "@/lib/calculations/lening";

export function LeningCalculator() {
  const [leenbedrag, setLeenbedrag] = useState("");
  const [rente, setRente] = useState("");
  const [looptijd, setLooptijd] = useState("");

  const leenbedragValidation = validateNumberInput(leenbedrag, {
    fieldLabel: "leenbedrag",
    min: 1,
    max: 1_000_000,
  });
  const renteValidation = validateNumberInput(rente, { fieldLabel: "rente per jaar", min: 0, max: 50 });
  const looptijdValidation = validateNumberInput(looptijd, {
    fieldLabel: "looptijd in maanden",
    min: 1,
    max: 480,
  });

  const result = useMemo(() => {
    if (!leenbedragValidation.valid || !renteValidation.valid || !looptijdValidation.valid) return null;
    return berekenLening({
      leenbedrag: leenbedragValidation.value,
      renteJaarPercentage: renteValidation.value,
      looptijdMaanden: looptijdValidation.value,
    });
  }, [
    leenbedragValidation.valid,
    leenbedragValidation.value,
    renteValidation.valid,
    renteValidation.value,
    looptijdValidation.valid,
    looptijdValidation.value,
  ]);

  return (
    <div className="rounded-xl border border-border bg-surface p-6">
      <div className="grid gap-4 sm:grid-cols-3">
        <NumberField
          id="leenbedrag"
          label="Leenbedrag"
          value={leenbedrag}
          onChange={setLeenbedrag}
          prefix="€"
          error={leenbedragValidation.valid ? undefined : leenbedragValidation.error}
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
          suffix="maanden"
          error={looptijdValidation.valid ? undefined : looptijdValidation.error}
        />
      </div>

      {result && (
        <div className="mt-6">
          <ResultCard
            heading="Indicatieve maandlast"
            primary={{ label: "Maandlast", value: formatCurrency(result.maandlast) }}
            rows={[
              { label: "Totale rente", value: formatCurrency(result.totaleRente, false) },
              { label: "Totale kosten", value: formatCurrency(result.totaleKosten, false), emphasis: true },
            ]}
          />
          <p className="mt-3 text-xs text-muted">
            Dit is een indicatieve berekening voor een annuïtaire lening, geen kredietaanbod.
            De werkelijke rente en voorwaarden verschillen per kredietverstrekker.
          </p>
        </div>
      )}
    </div>
  );
}
