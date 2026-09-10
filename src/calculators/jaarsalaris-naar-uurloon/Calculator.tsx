"use client";

import { useMemo, useState } from "react";
import { NumberField } from "@/components/calculator/NumberField";
import { ResultCard } from "@/components/calculator/ResultCard";
import { validateNumberInput } from "@/lib/validation/rules";
import { formatCurrency } from "@/lib/formatting/currency";
import { berekenUurloon } from "@/lib/calculations/uurloon";

export function JaarsalarisNaarUurloonCalculator() {
  const [jaarsalaris, setJaarsalaris] = useState("");
  const [uren, setUren] = useState("");

  const jaarsalarisValidation = validateNumberInput(jaarsalaris, {
    fieldLabel: "jaarsalaris",
    min: 0,
    max: 10_000_000,
  });
  const urenValidation = validateNumberInput(uren, {
    fieldLabel: "uren per week",
    min: 0,
    max: 168,
  });

  const result = useMemo(() => {
    if (!jaarsalarisValidation.valid || !urenValidation.valid) return null;
    return berekenUurloon({
      modus: "salaris-naar-uurloon",
      bedrag: jaarsalarisValidation.value / 12,
      urenPerWeek: urenValidation.value,
    });
  }, [jaarsalarisValidation.valid, jaarsalarisValidation.value, urenValidation.valid, urenValidation.value]);

  return (
    <div className="rounded-xl border border-border bg-surface p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <NumberField
          id="jaarsalaris"
          label="Bruto jaarsalaris"
          value={jaarsalaris}
          onChange={setJaarsalaris}
          prefix="€"
          error={jaarsalarisValidation.valid ? undefined : jaarsalarisValidation.error}
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
            primary={{ label: "Bruto uurloon", value: formatCurrency(result.uurloon) }}
            rows={[{ label: "Bruto maandsalaris", value: formatCurrency(result.maandloon, false) }]}
          />
        </div>
      )}
    </div>
  );
}
