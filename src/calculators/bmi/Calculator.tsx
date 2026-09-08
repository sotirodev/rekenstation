"use client";

import { useMemo, useState } from "react";
import { NumberField } from "@/components/calculator/NumberField";
import { ResultCard } from "@/components/calculator/ResultCard";
import { validateNumberInput } from "@/lib/validation/rules";
import { formatNumber } from "@/lib/formatting/number";
import { berekenBmi, type BmiCategorie } from "@/lib/calculations/bmi";

const categorieLabels: Record<BmiCategorie, string> = {
  ondergewicht: "Ondergewicht",
  "gezond gewicht": "Gezond gewicht",
  overgewicht: "Overgewicht",
  obesitas: "Obesitas",
};

export function BmiCalculator() {
  const [gewicht, setGewicht] = useState("75");
  const [lengte, setLengte] = useState("180");

  const gewichtValidation = validateNumberInput(gewicht, {
    fieldLabel: "gewicht",
    min: 1,
    max: 500,
  });
  const lengteValidation = validateNumberInput(lengte, {
    fieldLabel: "lengte",
    min: 50,
    max: 250,
  });

  const result = useMemo(() => {
    if (!gewichtValidation.valid || !lengteValidation.valid) return null;
    return berekenBmi({
      gewichtKg: gewichtValidation.value,
      lengteCm: lengteValidation.value,
    });
  }, [gewichtValidation.valid, gewichtValidation.value, lengteValidation.valid, lengteValidation.value]);

  return (
    <div className="rounded-xl border border-border bg-surface p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <NumberField
          id="gewicht"
          label="Gewicht"
          value={gewicht}
          onChange={setGewicht}
          suffix="kg"
          error={gewichtValidation.valid ? undefined : gewichtValidation.error}
        />
        <NumberField
          id="lengte"
          label="Lengte"
          value={lengte}
          onChange={setLengte}
          suffix="cm"
          error={lengteValidation.valid ? undefined : lengteValidation.error}
        />
      </div>

      {result && (
        <div className="mt-6">
          <ResultCard
            heading="Jouw BMI"
            primary={{ label: "BMI", value: formatNumber(result.bmi, 1) }}
            rows={[{ label: "Categorie", value: categorieLabels[result.categorie], emphasis: true }]}
          />
          <p className="mt-3 text-xs text-muted">
            De BMI is een indicatie en houdt geen rekening met spiermassa, leeftijd of
            lichaamsbouw. Dit is geen medisch advies — raadpleeg bij twijfel een arts.
          </p>
        </div>
      )}
    </div>
  );
}
