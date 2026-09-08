"use client";

import { useMemo, useState } from "react";
import { NumberField } from "@/components/calculator/NumberField";
import { SelectField } from "@/components/calculator/SelectField";
import { ResultCard } from "@/components/calculator/ResultCard";
import { validateNumberInput } from "@/lib/validation/rules";
import { formatNumber } from "@/lib/formatting/number";
import {
  berekenCalorieBehoefte,
  type Activiteitsniveau,
  type Geslacht,
} from "@/lib/calculations/calorie";

const ACTIVITEIT_OPTIES: { value: Activiteitsniveau; label: string }[] = [
  { value: "zittend", label: "Zittend (weinig of geen beweging)" },
  { value: "licht-actief", label: "Licht actief (1-3 dagen/week sporten)" },
  { value: "matig-actief", label: "Matig actief (3-5 dagen/week sporten)" },
  { value: "zeer-actief", label: "Zeer actief (6-7 dagen/week sporten)" },
  { value: "extreem-actief", label: "Extreem actief (zwaar lichamelijk werk/sport)" },
];

export function CalorieCalculator() {
  const [geslacht, setGeslacht] = useState<Geslacht>("vrouw");
  const [leeftijd, setLeeftijd] = useState("");
  const [lengte, setLengte] = useState("");
  const [gewicht, setGewicht] = useState("");
  const [activiteitsniveau, setActiviteitsniveau] = useState<Activiteitsniveau>("licht-actief");

  const leeftijdValidation = validateNumberInput(leeftijd, { fieldLabel: "leeftijd", min: 1, max: 120 });
  const lengteValidation = validateNumberInput(lengte, { fieldLabel: "lengte", min: 50, max: 250 });
  const gewichtValidation = validateNumberInput(gewicht, { fieldLabel: "gewicht", min: 1, max: 500 });

  const result = useMemo(() => {
    if (!leeftijdValidation.valid || !lengteValidation.valid || !gewichtValidation.valid) {
      return null;
    }
    return berekenCalorieBehoefte({
      geslacht,
      leeftijd: leeftijdValidation.value,
      lengteCm: lengteValidation.value,
      gewichtKg: gewichtValidation.value,
      activiteitsniveau,
    });
  }, [
    geslacht,
    leeftijdValidation.valid,
    leeftijdValidation.value,
    lengteValidation.valid,
    lengteValidation.value,
    gewichtValidation.valid,
    gewichtValidation.value,
    activiteitsniveau,
  ]);

  return (
    <div className="rounded-xl border border-border bg-surface p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <SelectField
          id="geslacht"
          label="Geslacht"
          value={geslacht}
          onChange={(value) => setGeslacht(value as Geslacht)}
          options={[
            { value: "vrouw", label: "Vrouw" },
            { value: "man", label: "Man" },
          ]}
        />
        <NumberField
          id="leeftijd"
          label="Leeftijd"
          value={leeftijd}
          onChange={setLeeftijd}
          suffix="jaar"
          error={leeftijdValidation.valid ? undefined : leeftijdValidation.error}
        />
        <NumberField
          id="lengte"
          label="Lengte"
          value={lengte}
          onChange={setLengte}
          suffix="cm"
          error={lengteValidation.valid ? undefined : lengteValidation.error}
        />
        <NumberField
          id="gewicht"
          label="Gewicht"
          value={gewicht}
          onChange={setGewicht}
          suffix="kg"
          error={gewichtValidation.valid ? undefined : gewichtValidation.error}
        />
        <div className="sm:col-span-2">
          <SelectField
            id="activiteitsniveau"
            label="Activiteitsniveau"
            value={activiteitsniveau}
            onChange={(value) => setActiviteitsniveau(value as Activiteitsniveau)}
            options={ACTIVITEIT_OPTIES}
          />
        </div>
      </div>

      {result && (
        <div className="mt-6">
          <ResultCard
            heading="Geschatte dagelijkse caloriebehoefte"
            primary={{ label: "Calorieën per dag (TDEE)", value: `${formatNumber(result.tdee, 0)} kcal` }}
            rows={[{ label: "Basaalmetabolisme (BMR)", value: `${formatNumber(result.bmr, 0)} kcal`, emphasis: true }]}
          />
          <p className="mt-3 text-xs text-muted">
            Dit is een schatting op basis van de Mifflin-St Jeor formule. Je werkelijke
            energiebehoefte kan afwijken. Dit is geen medisch advies.
          </p>
        </div>
      )}
    </div>
  );
}
