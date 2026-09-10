"use client";

import { useMemo, useState } from "react";
import { NumberField } from "@/components/calculator/NumberField";
import { ResultCard } from "@/components/calculator/ResultCard";
import { validateNumberInput } from "@/lib/validation/rules";
import { formatNumber } from "@/lib/formatting/number";
import { berekenPercentage } from "@/lib/calculations/percentage";

export function ProcentueleVeranderingCalculator() {
  const [start, setStart] = useState("");
  const [eind, setEind] = useState("");

  const startValidation = validateNumberInput(start, {
    fieldLabel: "startwaarde",
    min: -1_000_000_000,
    max: 1_000_000_000,
  });
  const eindValidation = validateNumberInput(eind, {
    fieldLabel: "eindwaarde",
    min: -1_000_000_000,
    max: 1_000_000_000,
  });

  const result = useMemo(() => {
    if (!startValidation.valid || !eindValidation.valid) return null;
    return berekenPercentage({
      modus: "percentage-verandering",
      waardeA: startValidation.value,
      waardeB: eindValidation.value,
    });
  }, [startValidation.valid, startValidation.value, eindValidation.valid, eindValidation.value]);

  return (
    <div className="rounded-xl border border-border bg-surface p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <NumberField
          id="start"
          label="Startwaarde"
          value={start}
          onChange={setStart}
          error={startValidation.valid ? undefined : startValidation.error}
        />
        <NumberField
          id="eind"
          label="Eindwaarde"
          value={eind}
          onChange={setEind}
          error={eindValidation.valid ? undefined : eindValidation.error}
        />
      </div>

      {result && (
        <div className="mt-6">
          <ResultCard
            heading="Resultaat"
            primary={{
              label: result.uitkomst >= 0 ? "Stijging" : "Daling",
              value: `${formatNumber(Math.abs(result.uitkomst), 2)}%`,
            }}
          />
        </div>
      )}
    </div>
  );
}
