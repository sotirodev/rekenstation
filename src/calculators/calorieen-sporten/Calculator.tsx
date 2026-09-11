"use client";

import { useMemo, useState } from "react";
import { NumberField } from "@/components/calculator/NumberField";
import { SelectField } from "@/components/calculator/SelectField";
import { ResultCard } from "@/components/calculator/ResultCard";
import { validateNumberInput } from "@/lib/validation/rules";
import { formatNumber } from "@/lib/formatting/number";
import { berekenCalorieenSporten, ACTIVITEITEN } from "@/lib/calculations/calorieen-sporten";

const ACTIVITEIT_OPTIES = ACTIVITEITEN.map((a) => ({ value: a.id, label: a.label }));

export function CalorieenSportenCalculator() {
  const [activiteitId, setActiviteitId] = useState(ACTIVITEITEN[0].id);
  const [gewicht, setGewicht] = useState("");
  const [duur, setDuur] = useState("");

  const gewichtValidation = validateNumberInput(gewicht, { fieldLabel: "gewicht", min: 1, max: 300 });
  const duurValidation = validateNumberInput(duur, { fieldLabel: "duur", min: 1, max: 1440 });

  const result = useMemo(() => {
    if (!gewichtValidation.valid || !duurValidation.valid) return null;
    return berekenCalorieenSporten({
      activiteitId,
      gewichtKg: gewichtValidation.value,
      duurMinuten: duurValidation.value,
    });
  }, [activiteitId, gewichtValidation.valid, gewichtValidation.value, duurValidation.valid, duurValidation.value]);

  return (
    <div className="rounded-xl border border-border bg-surface p-6">
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="sm:col-span-3">
          <SelectField
            id="activiteit"
            label="Activiteit"
            value={activiteitId}
            onChange={setActiviteitId}
            options={ACTIVITEIT_OPTIES}
          />
        </div>
        <NumberField
          id="gewicht"
          label="Gewicht"
          value={gewicht}
          onChange={setGewicht}
          suffix="kg"
          error={gewichtValidation.valid ? undefined : gewichtValidation.error}
        />
        <NumberField
          id="duur"
          label="Duur"
          value={duur}
          onChange={setDuur}
          suffix="minuten"
          error={duurValidation.valid ? undefined : duurValidation.error}
        />
      </div>

      {result && (
        <div className="mt-6">
          <ResultCard
            heading="Verbruikte calorieën"
            primary={{ label: "Geschat verbruik", value: `${formatNumber(result.verbruikteKcal, 0)} kcal` }}
          />
          <p className="mt-3 text-xs text-muted">
            Gebaseerd op de MET-methode (Compendium of Physical Activities). Dit is een
            indicatie; je werkelijke verbruik hangt ook af van intensiteit, conditie en
            lichaamssamenstelling.
          </p>
        </div>
      )}
    </div>
  );
}
