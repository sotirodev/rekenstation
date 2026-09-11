"use client";

import { useMemo, useState } from "react";
import { NumberField } from "@/components/calculator/NumberField";
import { ResultCard } from "@/components/calculator/ResultCard";
import { validateNumberInput } from "@/lib/validation/rules";
import { berekenHartslagzones } from "@/lib/calculations/hartslagzones";

export function HartslagzonesCalculator() {
  const [leeftijd, setLeeftijd] = useState("");

  const leeftijdValidation = validateNumberInput(leeftijd, { fieldLabel: "leeftijd", min: 5, max: 110 });

  const result = useMemo(() => {
    if (!leeftijdValidation.valid) return null;
    return berekenHartslagzones(leeftijdValidation.value);
  }, [leeftijdValidation.valid, leeftijdValidation.value]);

  return (
    <div className="rounded-xl border border-border bg-surface p-6">
      <NumberField
        id="leeftijd"
        label="Leeftijd"
        value={leeftijd}
        onChange={setLeeftijd}
        suffix="jaar"
        error={leeftijdValidation.valid ? undefined : leeftijdValidation.error}
      />

      {result && (
        <div className="mt-6">
          <ResultCard
            heading="Geschatte maximale hartslag"
            primary={{ label: "Max. hartslag", value: `${result.maxHartslag} bpm` }}
          />
          <div className="mt-3 divide-y divide-border rounded-xl border border-border bg-surface">
            {result.zones.map((zone) => (
              <div key={zone.naam} className="flex items-center justify-between p-4">
                <span className="text-sm font-medium text-foreground">{zone.naam}</span>
                <span className="text-sm text-muted">
                  {zone.vanBpm}-{zone.totBpm} bpm
                </span>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-muted">
            Gebaseerd op de Fox-formule (220 min leeftijd). Dit is een schatting; individuele
            verschillen kunnen groot zijn.
          </p>
        </div>
      )}
    </div>
  );
}
