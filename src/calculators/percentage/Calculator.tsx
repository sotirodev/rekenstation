"use client";

import { useMemo, useState } from "react";
import { NumberField } from "@/components/calculator/NumberField";
import { SelectField } from "@/components/calculator/SelectField";
import { ResultCard } from "@/components/calculator/ResultCard";
import { validateNumberInput, type ValidationResult } from "@/lib/validation/rules";
import { formatNumber } from "@/lib/formatting/number";
import { berekenPercentage, type PercentageModus } from "@/lib/calculations/percentage";

const MODUS_OPTIES: { value: PercentageModus; label: string }[] = [
  { value: "percentage-van", label: "X% van Y" },
  { value: "welk-percentage", label: "Welk percentage is X van Y" },
  { value: "percentage-verandering", label: "Percentage stijging/daling van X naar Y" },
];

const LABELS: Record<PercentageModus, { a: string; b: string; primary: string; unit: string }> = {
  "percentage-van": { a: "Percentage (X)", b: "Van waarde (Y)", primary: "Uitkomst", unit: "" },
  "welk-percentage": { a: "Waarde (X)", b: "Van totaal (Y)", primary: "Percentage", unit: "%" },
  "percentage-verandering": { a: "Startwaarde (X)", b: "Eindwaarde (Y)", primary: "Verandering", unit: "%" },
};

function labelVoorFout(modus: PercentageModus, veld: "a" | "b"): string {
  return `${LABELS[modus][veld]}`.toLowerCase();
}

export function PercentageCalculator() {
  const [modus, setModus] = useState<PercentageModus>("percentage-van");
  const [waardeA, setWaardeA] = useState("20");
  const [waardeB, setWaardeB] = useState("150");

  const validatieA: ValidationResult = validateNumberInput(waardeA, {
    fieldLabel: labelVoorFout(modus, "a"),
    min: -1_000_000_000,
    max: 1_000_000_000,
  });
  const validatieB: ValidationResult = validateNumberInput(waardeB, {
    fieldLabel: labelVoorFout(modus, "b"),
    min: -1_000_000_000,
    max: 1_000_000_000,
  });

  const result = useMemo(() => {
    if (!validatieA.valid || !validatieB.valid) return null;
    return berekenPercentage({ modus, waardeA: validatieA.value, waardeB: validatieB.value });
  }, [modus, validatieA.valid, validatieA.value, validatieB.valid, validatieB.value]);

  const labels = LABELS[modus];

  return (
    <div className="rounded-xl border border-border bg-surface p-6">
      <div className="grid gap-4">
        <SelectField
          id="modus"
          label="Berekening"
          value={modus}
          onChange={(value) => setModus(value as PercentageModus)}
          options={MODUS_OPTIES}
        />
        <div className="grid gap-4 sm:grid-cols-2">
          <NumberField
            id="waardeA"
            label={labels.a}
            value={waardeA}
            onChange={setWaardeA}
            error={validatieA.valid ? undefined : validatieA.error}
          />
          <NumberField
            id="waardeB"
            label={labels.b}
            value={waardeB}
            onChange={setWaardeB}
            error={validatieB.valid ? undefined : validatieB.error}
          />
        </div>
      </div>

      {result && (
        <div className="mt-6">
          <ResultCard
            heading="Resultaat"
            primary={{
              label: labels.primary,
              value: `${formatNumber(result.uitkomst, 2)}${labels.unit}`,
            }}
          />
        </div>
      )}
    </div>
  );
}
