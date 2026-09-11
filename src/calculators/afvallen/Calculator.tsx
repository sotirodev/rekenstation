"use client";

import { useMemo, useState } from "react";
import { NumberField } from "@/components/calculator/NumberField";
import { ResultCard } from "@/components/calculator/ResultCard";
import { validateNumberInput } from "@/lib/validation/rules";
import { formatNumber } from "@/lib/formatting/number";
import { berekenAfvallen } from "@/lib/calculations/afvallen";

export function AfvallenCalculator() {
  const [huidigGewicht, setHuidigGewicht] = useState("");
  const [doelGewicht, setDoelGewicht] = useState("");
  const [tekort, setTekort] = useState("");

  const huidigValidation = validateNumberInput(huidigGewicht, { fieldLabel: "huidig gewicht", min: 1, max: 500 });
  const doelValidation = validateNumberInput(doelGewicht, { fieldLabel: "doelgewicht", min: 1, max: 500 });
  const tekortValidation = validateNumberInput(tekort, { fieldLabel: "dagelijks calorietekort", min: 1, max: 2000 });

  const result = useMemo(() => {
    if (!huidigValidation.valid || !doelValidation.valid || !tekortValidation.valid) return null;
    if (doelValidation.value >= huidigValidation.value) return null;
    return berekenAfvallen({
      huidigGewichtKg: huidigValidation.value,
      doelGewichtKg: doelValidation.value,
      dagelijksTekortKcal: tekortValidation.value,
    });
  }, [
    huidigValidation.valid,
    huidigValidation.value,
    doelValidation.valid,
    doelValidation.value,
    tekortValidation.valid,
    tekortValidation.value,
  ]);

  const doelNietLagerError =
    doelValidation.valid && huidigValidation.valid && doelValidation.value >= huidigValidation.value
      ? "Doelgewicht moet lager zijn dan je huidige gewicht."
      : undefined;

  return (
    <div className="rounded-xl border border-border bg-surface p-6">
      <div className="grid gap-4 sm:grid-cols-3">
        <NumberField
          id="huidigGewicht"
          label="Huidig gewicht"
          value={huidigGewicht}
          onChange={setHuidigGewicht}
          suffix="kg"
          error={huidigValidation.valid ? undefined : huidigValidation.error}
        />
        <NumberField
          id="doelGewicht"
          label="Doelgewicht"
          value={doelGewicht}
          onChange={setDoelGewicht}
          suffix="kg"
          error={doelValidation.valid ? doelNietLagerError : doelValidation.error}
        />
        <NumberField
          id="tekort"
          label="Dagelijks calorietekort"
          value={tekort}
          onChange={setTekort}
          suffix="kcal"
          error={tekortValidation.valid ? undefined : tekortValidation.error}
        />
      </div>

      {result && (
        <div className="mt-6">
          <ResultCard
            heading="Geschatte tijd om af te vallen"
            primary={{ label: "Aantal weken", value: `${formatNumber(result.benodigdeWeken, 1)} weken` }}
            rows={[
              { label: "Te verliezen gewicht", value: `${formatNumber(result.teVerliezenKg, 1)} kg` },
              { label: "Aantal dagen", value: `${formatNumber(result.benodigdeDagen, 0)} dagen`, emphasis: true },
            ]}
          />
          <p className="mt-3 text-xs text-muted">
            Gebaseerd op de vuistregel dat 7.700 kcal ongeveer overeenkomt met 1 kg
            lichaamsvet. Dit is een indicatie; werkelijk gewichtsverlies hangt ook af van
            spiermassa, vochtbalans en stofwisseling. Dit is geen medisch advies.
          </p>
        </div>
      )}
    </div>
  );
}
