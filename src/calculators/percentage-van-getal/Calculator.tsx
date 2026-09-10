"use client";

import { useMemo, useState } from "react";
import { NumberField } from "@/components/calculator/NumberField";
import { ResultCard } from "@/components/calculator/ResultCard";
import { validateNumberInput } from "@/lib/validation/rules";
import { formatNumber } from "@/lib/formatting/number";
import { berekenPercentage } from "@/lib/calculations/percentage";

export function PercentageVanGetalCalculator() {
  const [percentage, setPercentage] = useState("");
  const [getal, setGetal] = useState("");

  const percentageValidation = validateNumberInput(percentage, {
    fieldLabel: "percentage",
    min: -1_000_000_000,
    max: 1_000_000_000,
  });
  const getalValidation = validateNumberInput(getal, {
    fieldLabel: "getal",
    min: -1_000_000_000,
    max: 1_000_000_000,
  });

  const result = useMemo(() => {
    if (!percentageValidation.valid || !getalValidation.valid) return null;
    return berekenPercentage({
      modus: "percentage-van",
      waardeA: percentageValidation.value,
      waardeB: getalValidation.value,
    });
  }, [percentageValidation.valid, percentageValidation.value, getalValidation.valid, getalValidation.value]);

  return (
    <div className="rounded-xl border border-border bg-surface p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <NumberField
          id="percentage"
          label="Percentage"
          value={percentage}
          onChange={setPercentage}
          suffix="%"
          error={percentageValidation.valid ? undefined : percentageValidation.error}
        />
        <NumberField
          id="getal"
          label="Van getal"
          value={getal}
          onChange={setGetal}
          error={getalValidation.valid ? undefined : getalValidation.error}
        />
      </div>

      {result && (
        <div className="mt-6">
          <ResultCard
            heading="Resultaat"
            primary={{ label: "Uitkomst", value: formatNumber(result.uitkomst, 2) }}
          />
        </div>
      )}
    </div>
  );
}
