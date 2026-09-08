"use client";

import { useMemo, useState } from "react";
import { DateField } from "@/components/calculator/DateField";
import { ResultCard } from "@/components/calculator/ResultCard";
import { berekenZwangerschap } from "@/lib/calculations/zwangerschap";

function vandaagIso(): string {
  return new Date().toISOString().slice(0, 10);
}

function formatDatum(iso: string): string {
  return new Date(iso).toLocaleDateString("nl-NL", { day: "numeric", month: "long", year: "numeric" });
}

export function ZwangerschapCalculator() {
  const [laatsteMenstruatie, setLaatsteMenstruatie] = useState("");

  const fout = laatsteMenstruatie === "" ? "Vul de eerste dag van je laatste menstruatie in." : undefined;

  const result = useMemo(() => {
    if (fout) return null;
    return berekenZwangerschap({ laatsteMenstruatie });
  }, [laatsteMenstruatie, fout]);

  return (
    <div className="rounded-xl border border-border bg-surface p-6">
      <DateField
        id="laatsteMenstruatie"
        label="Eerste dag laatste menstruatie"
        value={laatsteMenstruatie}
        onChange={setLaatsteMenstruatie}
        error={fout}
        helperText={`Standaard wordt uitgegaan van een cyclus van 28 dagen. Vandaag is ${formatDatum(vandaagIso())}.`}
      />

      {result && (
        <div className="mt-6">
          <ResultCard
            heading="Zwangerschap"
            primary={{ label: "Uitgerekende datum", value: formatDatum(result.uitgerekendeDatum) }}
            rows={[
              {
                label: "Huidige zwangerschapsduur",
                value: `${result.zwangerschapsduurWeken} weken, ${result.zwangerschapsduurDagen} dagen`,
              },
              { label: "Trimester", value: `${result.trimester}e trimester`, emphasis: true },
            ]}
          />
          <p className="mt-3 text-xs text-muted">
            Dit is een indicatieve berekening volgens de regel van Naegele. Slechts een klein deel van
            de bevallingen vindt precies op de uitgerekende datum plaats. Dit is geen medisch advies —
            raadpleeg je verloskundige of arts voor een exacte inschatting.
          </p>
        </div>
      )}
    </div>
  );
}
