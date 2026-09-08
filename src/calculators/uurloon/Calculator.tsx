"use client";

import { useMemo, useState } from "react";
import { NumberField } from "@/components/calculator/NumberField";
import { SelectField } from "@/components/calculator/SelectField";
import { ResultCard } from "@/components/calculator/ResultCard";
import { validateNumberInput } from "@/lib/validation/rules";
import { formatCurrency } from "@/lib/formatting/currency";
import { berekenUurloon, type UurloonModus } from "@/lib/calculations/uurloon";

export function UurloonCalculator() {
  const [modus, setModus] = useState<UurloonModus>("salaris-naar-uurloon");
  const [bedrag, setBedrag] = useState("3000");
  const [uren, setUren] = useState("40");

  const bedragValidation = validateNumberInput(bedrag, {
    fieldLabel: modus === "salaris-naar-uurloon" ? "brutosalaris" : "uurloon",
    min: 0,
    max: 1_000_000,
  });
  const urenValidation = validateNumberInput(uren, {
    fieldLabel: "uren per week",
    min: 0,
    max: 168,
  });

  const result = useMemo(() => {
    if (!bedragValidation.valid || !urenValidation.valid) return null;
    return berekenUurloon({
      modus,
      bedrag: bedragValidation.value,
      urenPerWeek: urenValidation.value,
    });
  }, [modus, bedragValidation.valid, bedragValidation.value, urenValidation.valid, urenValidation.value]);

  return (
    <div className="rounded-xl border border-border bg-surface p-6">
      <div className="grid gap-4">
        <SelectField
          id="modus"
          label="Berekening"
          value={modus}
          onChange={(value) => setModus(value as UurloonModus)}
          options={[
            { value: "salaris-naar-uurloon", label: "Maandsalaris naar uurloon" },
            { value: "uurloon-naar-salaris", label: "Uurloon naar maandsalaris" },
          ]}
        />
        <div className="grid gap-4 sm:grid-cols-2">
          <NumberField
            id="bedrag"
            label={modus === "salaris-naar-uurloon" ? "Bruto maandsalaris" : "Bruto uurloon"}
            value={bedrag}
            onChange={setBedrag}
            prefix="€"
            error={bedragValidation.valid ? undefined : bedragValidation.error}
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
      </div>

      {result && (
        <div className="mt-6">
          <ResultCard
            heading="Resultaat"
            primary={
              modus === "salaris-naar-uurloon"
                ? { label: "Bruto uurloon", value: formatCurrency(result.uurloon) }
                : { label: "Bruto maandsalaris", value: formatCurrency(result.maandloon) }
            }
            rows={[
              { label: "Bruto uurloon", value: formatCurrency(result.uurloon) },
              { label: "Bruto maandsalaris", value: formatCurrency(result.maandloon, false) },
              { label: "Bruto jaarsalaris", value: formatCurrency(result.jaarloon, false), emphasis: true },
            ]}
          />
        </div>
      )}
    </div>
  );
}
