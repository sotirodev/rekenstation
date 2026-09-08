"use client";

import { useMemo, useState } from "react";
import { DateField } from "@/components/calculator/DateField";
import { NumberField } from "@/components/calculator/NumberField";
import { ResultCard } from "@/components/calculator/ResultCard";
import { validateNumberInput } from "@/lib/validation/rules";
import { berekenOvulatie } from "@/lib/calculations/ovulatie";

function formatDatum(iso: string): string {
  return new Date(iso).toLocaleDateString("nl-NL", { day: "numeric", month: "long", year: "numeric" });
}

export function OvulatieCalculator() {
  const [laatsteMenstruatie, setLaatsteMenstruatie] = useState("");
  const [cyclusDuur, setCyclusDuur] = useState("28");

  const datumFout = laatsteMenstruatie === "" ? "Vul de eerste dag van je laatste menstruatie in." : undefined;
  const cyclusValidation = validateNumberInput(cyclusDuur, { fieldLabel: "cyclusduur", min: 20, max: 45 });

  const result = useMemo(() => {
    if (datumFout || !cyclusValidation.valid) return null;
    return berekenOvulatie({ laatsteMenstruatie, cyclusDuur: cyclusValidation.value });
  }, [laatsteMenstruatie, datumFout, cyclusValidation.valid, cyclusValidation.value]);

  return (
    <div className="rounded-xl border border-border bg-surface p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <DateField
          id="laatsteMenstruatie"
          label="Eerste dag laatste menstruatie"
          value={laatsteMenstruatie}
          onChange={setLaatsteMenstruatie}
          error={datumFout}
        />
        <NumberField
          id="cyclusDuur"
          label="Gemiddelde cyclusduur"
          value={cyclusDuur}
          onChange={setCyclusDuur}
          suffix="dagen"
          error={cyclusValidation.valid ? undefined : cyclusValidation.error}
        />
      </div>

      {result && (
        <div className="mt-6">
          <ResultCard
            heading="Geschatte vruchtbare periode"
            primary={{ label: "Verwachte ovulatie", value: formatDatum(result.ovulatiedatum) }}
            rows={[
              {
                label: "Vruchtbare periode",
                value: `${formatDatum(result.vruchtbareperiodeStart)} t/m ${formatDatum(result.vruchtbareperiodeEind)}`,
                emphasis: true,
              },
              { label: "Volgende menstruatie (verwacht)", value: formatDatum(result.volgendeMenstruatie) },
            ]}
          />
          <p className="mt-3 text-xs text-muted">
            Dit is een schatting op basis van een gemiddelde luteale fase van 14 dagen. De cyclus en
            eisprong kunnen per persoon en per maand verschillen. Dit is geen medisch advies.
          </p>
        </div>
      )}
    </div>
  );
}
