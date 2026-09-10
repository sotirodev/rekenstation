"use client";

import { useMemo, useState } from "react";
import { SelectField } from "@/components/calculator/SelectField";
import { berekenBedtijden, formatTijdstip } from "@/lib/calculations/slaapcyclus";

const UUR_OPTIES = Array.from({ length: 24 }, (_, i) => ({
  value: String(i),
  label: String(i).padStart(2, "0"),
}));
const MINUUT_OPTIES = Array.from({ length: 12 }, (_, i) => {
  const minuut = i * 5;
  return { value: String(minuut), label: String(minuut).padStart(2, "0") };
});

export function HoeLaatSlapenCalculator() {
  const [uur, setUur] = useState("7");
  const [minuut, setMinuut] = useState("0");

  const bedtijden = useMemo(
    () => berekenBedtijden({ uur: Number(uur), minuut: Number(minuut) }),
    [uur, minuut],
  );

  return (
    <div className="rounded-xl border border-border bg-surface p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <SelectField id="uur" label="Uur (wakker worden)" value={uur} onChange={setUur} options={UUR_OPTIES} />
        <SelectField id="minuut" label="Minuut" value={minuut} onChange={setMinuut} options={MINUUT_OPTIES} />
      </div>

      <div className="mt-6">
        <h3 className="text-sm font-medium text-foreground">Ga rond deze tijden slapen</h3>
        <div className="mt-3 divide-y divide-border rounded-xl border border-border bg-surface">
          {bedtijden.map(({ tijdstip, aantalCycli }) => (
            <div key={aantalCycli} className="flex items-center justify-between p-4">
              <span className="text-lg font-semibold text-foreground">{formatTijdstip(tijdstip)}</span>
              <span className="text-sm text-muted">{aantalCycli} slaapcycli</span>
            </div>
          ))}
        </div>
        <p className="mt-3 text-xs text-muted">
          Gebaseerd op slaapcycli van gemiddeld 90 minuten en 15 minuten inslaaptijd. Dit is
          een indicatie; de werkelijke duur van slaapcycli verschilt per persoon.
        </p>
      </div>
    </div>
  );
}
