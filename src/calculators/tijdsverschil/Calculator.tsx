"use client";

import { useMemo, useState } from "react";
import { SelectField } from "@/components/calculator/SelectField";
import { DateField } from "@/components/calculator/DateField";
import { ResultCard } from "@/components/calculator/ResultCard";
import { berekenTijdsverschil, TIJDZONES } from "@/lib/calculations/tijdsverschil";

const TIJDZONE_OPTIES = TIJDZONES.map((tz) => ({ value: tz.id, label: tz.label }));

function valideerDatum(waarde: string): string | undefined {
  if (waarde === "") return "Vul een datum in.";
  if (Number.isNaN(new Date(waarde).getTime())) return "Vul een geldige datum in.";
  return undefined;
}

export function TijdsverschilCalculator() {
  const [van, setVan] = useState("Europe/Amsterdam");
  const [naar, setNaar] = useState("America/New_York");
  const [datum, setDatum] = useState("");

  const datumError = valideerDatum(datum);

  const result = useMemo(() => {
    if (datumError) return null;
    return berekenTijdsverschil(van, naar, new Date(`${datum}T12:00:00`));
  }, [van, naar, datum, datumError]);

  const vanLabel = TIJDZONES.find((tz) => tz.id === van)?.label ?? van;
  const naarLabel = TIJDZONES.find((tz) => tz.id === naar)?.label ?? naar;

  return (
    <div className="rounded-xl border border-border bg-surface p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <SelectField id="van" label="Van" value={van} onChange={setVan} options={TIJDZONE_OPTIES} />
        <SelectField id="naar" label="Naar" value={naar} onChange={setNaar} options={TIJDZONE_OPTIES} />
        <div className="sm:col-span-2">
          <DateField id="datum" label="Datum" value={datum} onChange={setDatum} error={datum ? datumError : undefined} />
        </div>
      </div>

      {result && (
        <div className="mt-6">
          <ResultCard
            heading="Tijdsverschil"
            primary={{
              label: `${naarLabel} ten opzichte van ${vanLabel}`,
              value:
                result.verschilInMinuten === 0
                  ? "Geen verschil"
                  : `${result.verschilInMinuten > 0 ? "+" : ""}${(result.verschilInMinuten / 60).toFixed(
                      Number.isInteger(result.verschilInMinuten / 60) ? 0 : 1,
                    )} uur`,
            }}
          />
          <p className="mt-3 text-xs text-muted">
            Op de gekozen datum. Het verschil houdt automatisch rekening met zomer- en
            wintertijd, wat betekent dat het verschil op andere data kan afwijken.
          </p>
        </div>
      )}
    </div>
  );
}
