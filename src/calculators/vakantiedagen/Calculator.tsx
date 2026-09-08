"use client";

import { useMemo, useState } from "react";
import { NumberField } from "@/components/calculator/NumberField";
import { ResultCard } from "@/components/calculator/ResultCard";
import { validateNumberInput } from "@/lib/validation/rules";
import { formatNumber } from "@/lib/formatting/number";
import { berekenVakantiedagen } from "@/lib/calculations/vakantiedagen";

export function VakantiedagenCalculator() {
  const [urenPerWeek, setUrenPerWeek] = useState("40");
  const [dagenPerWeek, setDagenPerWeek] = useState("5");

  const urenValidation = validateNumberInput(urenPerWeek, { fieldLabel: "uren per week", min: 0, max: 60 });
  const dagenValidation = validateNumberInput(dagenPerWeek, { fieldLabel: "dagen per week", min: 1, max: 7 });

  const result = useMemo(() => {
    if (!urenValidation.valid || !dagenValidation.valid) return null;
    return berekenVakantiedagen({
      urenPerWeek: urenValidation.value,
      dagenPerWeek: dagenValidation.value,
    });
  }, [urenValidation.valid, urenValidation.value, dagenValidation.valid, dagenValidation.value]);

  return (
    <div className="rounded-xl border border-border bg-surface p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <NumberField
          id="urenPerWeek"
          label="Uren per week"
          value={urenPerWeek}
          onChange={setUrenPerWeek}
          suffix="uur"
          error={urenValidation.valid ? undefined : urenValidation.error}
        />
        <NumberField
          id="dagenPerWeek"
          label="Dagen per week"
          value={dagenPerWeek}
          onChange={setDagenPerWeek}
          suffix="dagen"
          error={dagenValidation.valid ? undefined : dagenValidation.error}
        />
      </div>

      {result && (
        <div className="mt-6">
          <ResultCard
            heading="Wettelijk minimum vakantie"
            primary={{ label: "Per jaar", value: `${formatNumber(result.wettelijkMinimumDagen, 0)} dagen` }}
            rows={[
              { label: "In uren", value: `${formatNumber(result.wettelijkMinimumUren, 1)} uur`, emphasis: true },
            ]}
          />
          <p className="mt-3 text-xs text-muted">
            Het wettelijk minimum is viermaal je overeengekomen arbeidsduur per week. Veel cao&apos;s
            of werkgevers geven meer vakantiedagen dan dit wettelijk minimum.
          </p>
        </div>
      )}
    </div>
  );
}
