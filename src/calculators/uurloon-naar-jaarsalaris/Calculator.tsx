"use client";

import { useMemo, useState } from "react";
import { NumberField } from "@/components/calculator/NumberField";
import { ResultCard } from "@/components/calculator/ResultCard";
import { validateNumberInput } from "@/lib/validation/rules";
import { formatCurrency } from "@/lib/formatting/currency";
import { berekenUurloon } from "@/lib/calculations/uurloon";

export function UurloonNaarJaarsalarisCalculator() {
  const [uurloon, setUurloon] = useState("");
  const [uren, setUren] = useState("");

  const uurloonValidation = validateNumberInput(uurloon, {
    fieldLabel: "uurloon",
    min: 0,
    max: 1_000_000,
  });
  const urenValidation = validateNumberInput(uren, {
    fieldLabel: "uren per week",
    min: 0,
    max: 168,
  });

  const result = useMemo(() => {
    if (!uurloonValidation.valid || !urenValidation.valid) return null;
    return berekenUurloon({
      modus: "uurloon-naar-salaris",
      bedrag: uurloonValidation.value,
      urenPerWeek: urenValidation.value,
    });
  }, [uurloonValidation.valid, uurloonValidation.value, urenValidation.valid, urenValidation.value]);

  return (
    <div className="rounded-xl border border-border bg-surface p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <NumberField
          id="uurloon"
          label="Bruto uurloon"
          value={uurloon}
          onChange={setUurloon}
          prefix="€"
          error={uurloonValidation.valid ? undefined : uurloonValidation.error}
        />
        <NumberField
          id="uren"
          label="Uren per week"
          value={uren}
          onChange={setUren}
          suffix="uur"
          error={urenValidation.valid ? undefined : urenValidation.error}
        />
      </div>

      {result && (
        <div className="mt-6">
          <ResultCard
            heading="Resultaat"
            primary={{ label: "Bruto jaarsalaris", value: formatCurrency(result.jaarloon, false) }}
            rows={[{ label: "Bruto maandsalaris", value: formatCurrency(result.maandloon, false) }]}
          />
        </div>
      )}
    </div>
  );
}
