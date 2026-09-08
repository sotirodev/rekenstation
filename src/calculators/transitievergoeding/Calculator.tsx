"use client";

import { useMemo, useState } from "react";
import { NumberField } from "@/components/calculator/NumberField";
import { SelectField } from "@/components/calculator/SelectField";
import { DateField } from "@/components/calculator/DateField";
import { ResultCard } from "@/components/calculator/ResultCard";
import { validateNumberInput } from "@/lib/validation/rules";
import { formatCurrency } from "@/lib/formatting/currency";
import { formatNumber } from "@/lib/formatting/number";
import {
  berekenTransitievergoeding,
  TRANSITIEVERGOEDING_JAREN,
} from "@/lib/calculations/transitievergoeding";

export function TransitievergoedingCalculator() {
  const [salaris, setSalaris] = useState("3000");
  const [startdatum, setStartdatum] = useState("");
  const [einddatum, setEinddatum] = useState("");
  const [jaar, setJaar] = useState(TRANSITIEVERGOEDING_JAREN[0]);

  const salarisValidation = validateNumberInput(salaris, {
    fieldLabel: "bruto maandsalaris",
    min: 0,
    max: 1_000_000,
  });
  const startFout = startdatum === "" ? "Vul de startdatum van het dienstverband in." : undefined;
  const eindFout = einddatum === "" ? "Vul de einddatum van het dienstverband in." : undefined;

  const result = useMemo(() => {
    if (!salarisValidation.valid || startFout || eindFout) return null;
    if (new Date(einddatum) < new Date(startdatum)) return null;
    return berekenTransitievergoeding({
      brutoMaandsalaris: salarisValidation.value,
      startdatum,
      einddatum,
      jaar,
    });
  }, [salarisValidation.valid, salarisValidation.value, startdatum, einddatum, startFout, eindFout, jaar]);

  return (
    <div className="rounded-xl border border-border bg-surface p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <NumberField
          id="salaris"
          label="Bruto maandsalaris (incl. vakantiegeld en vaste toeslagen)"
          value={salaris}
          onChange={setSalaris}
          prefix="€"
          error={salarisValidation.valid ? undefined : salarisValidation.error}
        />
        <SelectField
          id="jaar"
          label="Jaar van ontslag"
          value={String(jaar)}
          onChange={(value) => setJaar(Number(value))}
          options={TRANSITIEVERGOEDING_JAREN.map((j) => ({ value: String(j), label: String(j) }))}
        />
        <DateField id="startdatum" label="Startdatum dienstverband" value={startdatum} onChange={setStartdatum} error={startFout} />
        <DateField id="einddatum" label="Einddatum dienstverband" value={einddatum} onChange={setEinddatum} error={eindFout} />
      </div>

      {result && (
        <div className="mt-6">
          <ResultCard
            heading="Indicatieve transitievergoeding"
            primary={{ label: "Vergoeding", value: formatCurrency(result.vergoeding, false) }}
            rows={[
              { label: "Dienstjaren", value: `${formatNumber(result.dienstjaren, 2)} jaar`, emphasis: true },
            ]}
          />
          {result.maximumToegepast && (
            <p className="mt-3 text-xs text-muted">
              Het wettelijk maximum is toegepast: zonder maximum zou de berekening uitkomen op{" "}
              {formatCurrency(result.bedragVoorMaximum, false)}.
            </p>
          )}
          <p className="mt-3 text-xs text-muted">
            Dit is een indicatieve berekening op basis van de standaardformule (1/3 bruto
            maandsalaris per dienstjaar). Bepaalde looncomponenten (zoals variabele beloningen
            gemiddeld over 3 jaar) zijn hierin niet meegenomen. Dit is geen juridisch advies.
          </p>
        </div>
      )}
    </div>
  );
}
