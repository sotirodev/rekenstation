"use client";

import { useMemo, useState } from "react";
import { NumberField } from "@/components/calculator/NumberField";
import { ResultCard } from "@/components/calculator/ResultCard";
import { validateNumberInput } from "@/lib/validation/rules";
import { formatCurrency } from "@/lib/formatting/currency";
import { berekenStudentenbudget } from "@/lib/calculations/studentenbudget";

export function StudentenbudgetCalculator() {
  const [inkomsten, setInkomsten] = useState("");
  const [uitgaven, setUitgaven] = useState("");

  const inkomstenValidation = validateNumberInput(inkomsten, { fieldLabel: "inkomsten per maand", min: 0, max: 100_000 });
  const uitgavenValidation = validateNumberInput(uitgaven, { fieldLabel: "uitgaven per maand", min: 0, max: 100_000 });

  const result = useMemo(() => {
    if (!inkomstenValidation.valid || !uitgavenValidation.valid) return null;
    return berekenStudentenbudget({
      inkomstenPerMaand: inkomstenValidation.value,
      uitgavenPerMaand: uitgavenValidation.value,
    });
  }, [inkomstenValidation.valid, inkomstenValidation.value, uitgavenValidation.valid, uitgavenValidation.value]);

  return (
    <div className="rounded-xl border border-border bg-surface p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <NumberField
          id="inkomsten"
          label="Inkomsten per maand (bijbaan, toelage, lening)"
          value={inkomsten}
          onChange={setInkomsten}
          prefix="€"
          error={inkomstenValidation.valid ? undefined : inkomstenValidation.error}
        />
        <NumberField
          id="uitgaven"
          label="Uitgaven per maand (huur, boodschappen, overig)"
          value={uitgaven}
          onChange={setUitgaven}
          prefix="€"
          error={uitgavenValidation.valid ? undefined : uitgavenValidation.error}
        />
      </div>

      {result && (
        <div className="mt-6">
          <ResultCard
            heading={result.saldoPerMaand >= 0 ? "Wat je overhoudt" : "Wat je tekortkomt"}
            primary={{ label: "Per maand", value: formatCurrency(result.saldoPerMaand) }}
            rows={[{ label: "Per jaar", value: formatCurrency(result.saldoPerJaar, false), emphasis: true }]}
          />
        </div>
      )}
    </div>
  );
}
