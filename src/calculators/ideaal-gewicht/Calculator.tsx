"use client";

import { useMemo, useState } from "react";
import { NumberField } from "@/components/calculator/NumberField";
import { SelectField } from "@/components/calculator/SelectField";
import { ResultCard } from "@/components/calculator/ResultCard";
import { validateNumberInput } from "@/lib/validation/rules";
import { formatNumber } from "@/lib/formatting/number";
import { berekenIdeaalGewicht, type Geslacht } from "@/lib/calculations/ideaal-gewicht";

export function IdeaalGewichtCalculator() {
  const [lengte, setLengte] = useState("");
  const [geslacht, setGeslacht] = useState<Geslacht>("man");

  const lengteValidation = validateNumberInput(lengte, {
    fieldLabel: "lengte",
    min: 140,
    max: 220,
  });

  const result = useMemo(() => {
    if (!lengteValidation.valid) return null;
    return berekenIdeaalGewicht({ lengteCm: lengteValidation.value, geslacht });
  }, [lengteValidation.valid, lengteValidation.value, geslacht]);

  return (
    <div className="rounded-xl border border-border bg-surface p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <NumberField
          id="lengte"
          label="Lengte"
          value={lengte}
          onChange={setLengte}
          suffix="cm"
          error={lengteValidation.valid ? undefined : lengteValidation.error}
        />
        <SelectField
          id="geslacht"
          label="Geslacht"
          value={geslacht}
          onChange={(value) => setGeslacht(value as Geslacht)}
          options={[
            { value: "man", label: "Man" },
            { value: "vrouw", label: "Vrouw" },
          ]}
        />
      </div>

      {result && (
        <div className="mt-6">
          <ResultCard
            heading="Ideaal gewicht"
            primary={{ label: "Indicatie", value: `${formatNumber(result.ideaalGewichtKg, 1)} kg` }}
          />
          <p className="mt-3 text-xs text-muted">
            Gebaseerd op de Devine-formule, bedoeld voor volwassenen. Dit is een indicatie en
            houdt geen rekening met spiermassa, lichaamsbouw of leeftijd. Dit is geen medisch
            advies.
          </p>
        </div>
      )}
    </div>
  );
}
