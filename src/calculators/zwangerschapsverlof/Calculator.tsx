"use client";

import { useMemo, useState } from "react";
import { DateField } from "@/components/calculator/DateField";
import { SelectField } from "@/components/calculator/SelectField";
import { ResultCard } from "@/components/calculator/ResultCard";
import { berekenZwangerschapsverlof } from "@/lib/calculations/zwangerschapsverlof";

const WEKEN_OPTIES = [
  { value: "6", label: "6 weken van tevoren (maximaal zwangerschapsverlof)" },
  { value: "5", label: "5 weken van tevoren" },
  { value: "4", label: "4 weken van tevoren (minimaal, maximaal bevallingsverlof)" },
];

function valideerDatum(waarde: string): string | undefined {
  if (waarde === "") return "Vul je uitgerekende datum in.";
  if (Number.isNaN(new Date(waarde).getTime())) return "Vul een geldige datum in.";
  return undefined;
}

export function ZwangerschapsverlofCalculator() {
  const [uitgerekendeDatum, setUitgerekendeDatum] = useState("");
  const [wekenVoorAanvang, setWekenVoorAanvang] = useState("6");

  const datumError = valideerDatum(uitgerekendeDatum);

  const result = useMemo(() => {
    if (datumError) return null;
    return berekenZwangerschapsverlof({
      uitgerekendeDatum,
      wekenVoorAanvang: Number(wekenVoorAanvang),
    });
  }, [uitgerekendeDatum, wekenVoorAanvang, datumError]);

  return (
    <div className="rounded-xl border border-border bg-surface p-6">
      <div className="grid gap-4">
        <DateField
          id="uitgerekendeDatum"
          label="Uitgerekende datum"
          value={uitgerekendeDatum}
          onChange={setUitgerekendeDatum}
          error={uitgerekendeDatum ? datumError : undefined}
        />
        <SelectField
          id="wekenVoorAanvang"
          label="Zwangerschapsverlof laten ingaan"
          value={wekenVoorAanvang}
          onChange={setWekenVoorAanvang}
          options={WEKEN_OPTIES}
        />
      </div>

      {result && (
        <div className="mt-6">
          <ResultCard
            heading="Jouw verlofperiode"
            primary={{ label: "Eerste dag zwangerschapsverlof", value: result.eersteDagVerlof }}
            rows={[
              { label: "Laatste werkdag", value: result.laatsteWerkdag },
              {
                label: "Bevallingsverlof (bij bevalling op uitgerekende datum)",
                value: `${result.wekenBevallingsverlof} weken`,
              },
              {
                label: "Indicatief einde totale verlofperiode",
                value: result.indicatiefEindeTotaalVerlof,
                emphasis: true,
              },
            ]}
          />
          <p className="mt-3 text-xs text-muted">
            Het bevallingsverlof gaat pas in op de dag na de daadwerkelijke bevalling en duurt
            altijd minimaal 10 weken, ook als de baby te vroeg of te laat komt. Deze berekening
            is een indicatie op basis van de uitgerekende datum.
          </p>
        </div>
      )}
    </div>
  );
}
