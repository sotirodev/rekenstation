"use client";

import { useMemo, useState } from "react";
import { NumberField } from "@/components/calculator/NumberField";
import { ResultCard } from "@/components/calculator/ResultCard";
import { validateNumberInput } from "@/lib/validation/rules";
import { formatCurrency } from "@/lib/formatting/currency";
import { berekenOveruren } from "@/lib/calculations/overuren";

export function OverurenCalculator() {
  const [uurloon, setUurloon] = useState("");
  const [aantalOveruren, setAantalOveruren] = useState("");
  const [toeslag, setToeslag] = useState("");

  const uurloonValidation = validateNumberInput(uurloon, { fieldLabel: "uurloon", min: 0, max: 1_000 });
  const aantalValidation = validateNumberInput(aantalOveruren, { fieldLabel: "aantal overuren", min: 0, max: 200 });
  const toeslagValidation = validateNumberInput(toeslag, { fieldLabel: "toeslagpercentage", min: 0, max: 200 });

  const result = useMemo(() => {
    if (!uurloonValidation.valid || !aantalValidation.valid || !toeslagValidation.valid) return null;
    return berekenOveruren({
      uurloon: uurloonValidation.value,
      aantalOveruren: aantalValidation.value,
      toeslagPercentage: toeslagValidation.value,
    });
  }, [
    uurloonValidation.valid,
    uurloonValidation.value,
    aantalValidation.valid,
    aantalValidation.value,
    toeslagValidation.valid,
    toeslagValidation.value,
  ]);

  return (
    <div className="rounded-xl border border-border bg-surface p-6">
      <div className="grid gap-4 sm:grid-cols-3">
        <NumberField
          id="uurloon"
          label="Bruto uurloon"
          value={uurloon}
          onChange={setUurloon}
          prefix="€"
          error={uurloonValidation.valid ? undefined : uurloonValidation.error}
        />
        <NumberField
          id="toeslag"
          label="Overwerktoeslag"
          value={toeslag}
          onChange={setToeslag}
          suffix="%"
          error={toeslagValidation.valid ? undefined : toeslagValidation.error}
        />
        <NumberField
          id="aantalOveruren"
          label="Aantal overuren"
          value={aantalOveruren}
          onChange={setAantalOveruren}
          suffix="uur"
          error={aantalValidation.valid ? undefined : aantalValidation.error}
        />
      </div>

      {result && (
        <div className="mt-6">
          <ResultCard
            heading="Overwerkvergoeding"
            primary={{ label: "Totale vergoeding", value: formatCurrency(result.totaleVergoeding, false) }}
            rows={[{ label: "Vergoeding per overuur", value: formatCurrency(result.vergoedingPerOveruur) }]}
          />
          <p className="mt-3 text-xs text-muted">
            Het toeslagpercentage voor overwerk verschilt per cao of arbeidsovereenkomst.
            Controleer je eigen cao voor het exacte percentage dat voor jou geldt.
          </p>
        </div>
      )}
    </div>
  );
}
