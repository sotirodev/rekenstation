"use client";

import { useMemo, useState } from "react";
import { DateField } from "@/components/calculator/DateField";
import { ResultCard } from "@/components/calculator/ResultCard";
import { formatNumber } from "@/lib/formatting/number";
import { berekenDatumVerschil } from "@/lib/calculations/datumverschil";

function vandaagIso(): string {
  return new Date().toISOString().slice(0, 10);
}

export function DatumVerschilCalculator() {
  const [datumA, setDatumA] = useState(vandaagIso());
  const [datumB, setDatumB] = useState("");

  const foutA = datumA === "" ? "Vul de eerste datum in." : undefined;
  const foutB = datumB === "" ? "Vul de tweede datum in." : undefined;

  const result = useMemo(() => {
    if (foutA || foutB) return null;
    return berekenDatumVerschil({ datumA, datumB });
  }, [datumA, datumB, foutA, foutB]);

  return (
    <div className="rounded-xl border border-border bg-surface p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <DateField id="datumA" label="Eerste datum" value={datumA} onChange={setDatumA} error={foutA} />
        <DateField id="datumB" label="Tweede datum" value={datumB} onChange={setDatumB} error={foutB} />
      </div>

      {result && (
        <div className="mt-6">
          <ResultCard
            heading="Verschil tussen de datums"
            primary={{
              label: "In jaren, maanden en dagen",
              value: `${result.jaren} jaar, ${result.maanden} maanden, ${result.dagen} dagen`,
            }}
            rows={[
              { label: "Totaal aantal dagen", value: `${formatNumber(result.totaalDagen, 0)} dagen` },
              { label: "Totaal aantal weken", value: `${formatNumber(result.totaalWeken, 0)} weken`, emphasis: true },
            ]}
          />
        </div>
      )}
    </div>
  );
}
