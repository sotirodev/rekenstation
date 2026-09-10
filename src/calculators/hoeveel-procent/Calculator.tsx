"use client";

import { useMemo, useState } from "react";
import { NumberField } from "@/components/calculator/NumberField";
import { ResultCard } from "@/components/calculator/ResultCard";
import { validateNumberInput } from "@/lib/validation/rules";
import { formatNumber } from "@/lib/formatting/number";
import { berekenPercentage } from "@/lib/calculations/percentage";

export function HoeveelProcentCalculator() {
  const [deel, setDeel] = useState("");
  const [totaal, setTotaal] = useState("");

  const deelValidation = validateNumberInput(deel, {
    fieldLabel: "getal",
    min: -1_000_000_000,
    max: 1_000_000_000,
  });
  const totaalValidation = validateNumberInput(totaal, {
    fieldLabel: "totaal",
    min: -1_000_000_000,
    max: 1_000_000_000,
  });

  const result = useMemo(() => {
    if (!deelValidation.valid || !totaalValidation.valid) return null;
    return berekenPercentage({
      modus: "welk-percentage",
      waardeA: deelValidation.value,
      waardeB: totaalValidation.value,
    });
  }, [deelValidation.valid, deelValidation.value, totaalValidation.valid, totaalValidation.value]);

  return (
    <div className="rounded-xl border border-border bg-surface p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <NumberField
          id="deel"
          label="Getal"
          value={deel}
          onChange={setDeel}
          error={deelValidation.valid ? undefined : deelValidation.error}
        />
        <NumberField
          id="totaal"
          label="Van totaal"
          value={totaal}
          onChange={setTotaal}
          error={totaalValidation.valid ? undefined : totaalValidation.error}
        />
      </div>

      {result && (
        <div className="mt-6">
          <ResultCard
            heading="Resultaat"
            primary={{ label: "Percentage", value: `${formatNumber(result.uitkomst, 2)}%` }}
          />
        </div>
      )}
    </div>
  );
}
