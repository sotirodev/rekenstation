"use client";

import { useMemo, useState } from "react";
import { NumberField } from "@/components/calculator/NumberField";
import { SelectField } from "@/components/calculator/SelectField";
import { ResultCard } from "@/components/calculator/ResultCard";
import { validateNumberInput } from "@/lib/validation/rules";
import { formatCurrency } from "@/lib/formatting/currency";
import {
  berekenVakantiegeld,
  WETTELIJK_MINIMUM_VAKANTIEGELD_PERCENTAGE,
  type VakantiegeldPeriode,
} from "@/lib/calculations/vakantiegeld";

export function VakantiegeldCalculator() {
  const [brutoloon, setBrutoloon] = useState("3000");
  const [periode, setPeriode] = useState<VakantiegeldPeriode>("maand");
  const [percentage, setPercentage] = useState(String(WETTELIJK_MINIMUM_VAKANTIEGELD_PERCENTAGE));

  const brutoValidation = validateNumberInput(brutoloon, { fieldLabel: "brutoloon", min: 0, max: 1_000_000 });
  const percentageValidation = validateNumberInput(percentage, { fieldLabel: "percentage", min: 0, max: 50 });

  const result = useMemo(() => {
    if (!brutoValidation.valid || !percentageValidation.valid) return null;
    return berekenVakantiegeld({
      brutoloon: brutoValidation.value,
      periode,
      percentage: percentageValidation.value,
    });
  }, [brutoValidation.valid, brutoValidation.value, periode, percentageValidation.valid, percentageValidation.value]);

  return (
    <div className="rounded-xl border border-border bg-surface p-6">
      <div className="grid gap-4 sm:grid-cols-3">
        <NumberField
          id="brutoloon"
          label="Brutoloon"
          value={brutoloon}
          onChange={setBrutoloon}
          prefix="€"
          error={brutoValidation.valid ? undefined : brutoValidation.error}
        />
        <SelectField
          id="periode"
          label="Periode"
          value={periode}
          onChange={(value) => setPeriode(value as VakantiegeldPeriode)}
          options={[
            { value: "maand", label: "Per maand" },
            { value: "jaar", label: "Per jaar" },
          ]}
        />
        <NumberField
          id="percentage"
          label="Vakantiegeldpercentage"
          value={percentage}
          onChange={setPercentage}
          suffix="%"
          error={percentageValidation.valid ? undefined : percentageValidation.error}
        />
      </div>

      {result && (
        <div className="mt-6">
          <ResultCard
            heading="Vakantiegeld"
            primary={{ label: "Vakantiegeld per jaar", value: formatCurrency(result.vakantiegeld) }}
            rows={[
              { label: "Brutojaarloon (grondslag)", value: formatCurrency(result.brutoJaarloon, false) },
              {
                label: "Gereserveerd per maand",
                value: formatCurrency(result.vakantiegeldPerMaandGereserveerd),
                emphasis: true,
              },
            ]}
          />
          <p className="mt-3 text-xs text-muted">
            Het wettelijk minimum vakantiegeld in Nederland is {WETTELIJK_MINIMUM_VAKANTIEGELD_PERCENTAGE}%
            van het bruto jaarloon. Sommige cao&apos;s of werkgevers hanteren een hoger percentage.
          </p>
        </div>
      )}
    </div>
  );
}
