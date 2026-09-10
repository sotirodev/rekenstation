"use client";

import { useMemo, useState } from "react";
import { NumberField } from "@/components/calculator/NumberField";
import { ResultCard } from "@/components/calculator/ResultCard";
import { validateNumberInput } from "@/lib/validation/rules";
import { formatCurrency } from "@/lib/formatting/currency";
import { berekenSpaarrente } from "@/lib/calculations/spaarrente";

export function SamengesteldeInterestCalculator() {
  const [startkapitaal, setStartkapitaal] = useState("");
  const [rente, setRente] = useState("");
  const [jaren, setJaren] = useState("");

  const startkapitaalValidation = validateNumberInput(startkapitaal, {
    fieldLabel: "startkapitaal",
    min: 0,
    max: 1_000_000_000,
  });
  const renteValidation = validateNumberInput(rente, {
    fieldLabel: "rente per jaar",
    min: -100,
    max: 100,
  });
  const jarenValidation = validateNumberInput(jaren, {
    fieldLabel: "aantal jaren",
    min: 0,
    max: 100,
  });

  const result = useMemo(() => {
    if (!startkapitaalValidation.valid || !renteValidation.valid || !jarenValidation.valid) {
      return null;
    }
    return berekenSpaarrente({
      startkapitaal: startkapitaalValidation.value,
      maandelijkseInleg: 0,
      rentePercentagePerJaar: renteValidation.value,
      looptijdJaren: jarenValidation.value,
    });
  }, [
    startkapitaalValidation.valid,
    startkapitaalValidation.value,
    renteValidation.valid,
    renteValidation.value,
    jarenValidation.valid,
    jarenValidation.value,
  ]);

  return (
    <div className="rounded-xl border border-border bg-surface p-6">
      <div className="grid gap-4 sm:grid-cols-3">
        <NumberField
          id="startkapitaal"
          label="Startkapitaal"
          value={startkapitaal}
          onChange={setStartkapitaal}
          prefix="€"
          error={startkapitaalValidation.valid ? undefined : startkapitaalValidation.error}
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
          id="jaren"
          label="Aantal jaren"
          value={jaren}
          onChange={setJaren}
          suffix="jaar"
          error={jarenValidation.valid ? undefined : jarenValidation.error}
        />
      </div>

      {result && (
        <div className="mt-6">
          <ResultCard
            heading="Eindkapitaal"
            primary={{ label: "Na de gekozen looptijd", value: formatCurrency(result.eindkapitaal, false) }}
            rows={[{ label: "Waarvan rente", value: formatCurrency(result.totaleRente, false), emphasis: true }]}
          />
        </div>
      )}
    </div>
  );
}
