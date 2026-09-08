"use client";

import { useMemo, useState } from "react";
import { DateField } from "@/components/calculator/DateField";
import { ResultCard } from "@/components/calculator/ResultCard";
import { formatNumber } from "@/lib/formatting/number";
import { berekenLeeftijd } from "@/lib/calculations/leeftijd";

function valideerDatum(waarde: string, label: string, maxIsVandaag: boolean): string | undefined {
  if (waarde === "") return `Vul een ${label} in.`;

  const datum = new Date(waarde);
  if (Number.isNaN(datum.getTime())) return `Vul een geldige ${label} in.`;
  if (maxIsVandaag && datum > new Date()) return `${label} kan niet in de toekomst liggen.`;
  return undefined;
}

export function LeeftijdCalculator() {
  const [geboortedatum, setGeboortedatum] = useState("");
  const [peildatum, setPeildatum] = useState("");

  const geboortedatumError = valideerDatum(geboortedatum, "geboortedatum", true);
  const peildatumError = peildatum ? valideerDatum(peildatum, "peildatum", false) : undefined;

  const result = useMemo(() => {
    if (geboortedatumError || peildatumError) return null;
    if (peildatum && new Date(peildatum) < new Date(geboortedatum)) return null;
    return berekenLeeftijd({ geboortedatum, peildatum: peildatum || undefined });
  }, [geboortedatum, geboortedatumError, peildatum, peildatumError]);

  return (
    <div className="rounded-xl border border-border bg-surface p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <DateField
          id="geboortedatum"
          label="Geboortedatum"
          value={geboortedatum}
          onChange={setGeboortedatum}
          error={geboortedatum ? geboortedatumError : undefined}
        />
        <DateField
          id="peildatum"
          label="Peildatum (optioneel)"
          value={peildatum}
          onChange={setPeildatum}
          error={peildatumError}
          helperText="Standaard vandaag."
        />
      </div>

      {result && (
        <div className="mt-6">
          <ResultCard
            heading="Jouw leeftijd"
            primary={{
              label: "Leeftijd",
              value: `${result.jaren} jaar, ${result.maanden} maanden, ${result.dagen} dagen`,
            }}
            rows={[
              { label: "Totaal aantal dagen geleefd", value: `${formatNumber(result.totaalDagen, 0)} dagen` },
              {
                label: "Dagen tot volgende verjaardag",
                value: `${result.dagenTotVolgendeVerjaardag} dagen`,
                emphasis: true,
              },
            ]}
          />
        </div>
      )}
    </div>
  );
}
