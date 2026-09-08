"use client";

import { useMemo, useState } from "react";
import { NumberField } from "@/components/calculator/NumberField";
import { ResultCard } from "@/components/calculator/ResultCard";
import { validateNumberInput } from "@/lib/validation/rules";
import { formatCurrency } from "@/lib/formatting/currency";
import { formatNumber } from "@/lib/formatting/number";
import { berekenBrandstofkosten } from "@/lib/calculations/brandstofkosten";

export function BrandstofkostenCalculator() {
  const [afstand, setAfstand] = useState("100");
  const [verbruik, setVerbruik] = useState("6.5");
  const [prijs, setPrijs] = useState("1.95");

  const afstandValidation = validateNumberInput(afstand, { fieldLabel: "afstand", min: 0, max: 100_000 });
  const verbruikValidation = validateNumberInput(verbruik, { fieldLabel: "brandstofverbruik", min: 0, max: 100 });
  const prijsValidation = validateNumberInput(prijs, { fieldLabel: "brandstofprijs", min: 0, max: 10 });

  const result = useMemo(() => {
    if (!afstandValidation.valid || !verbruikValidation.valid || !prijsValidation.valid) return null;
    return berekenBrandstofkosten({
      afstandKm: afstandValidation.value,
      verbruikPer100km: verbruikValidation.value,
      prijsPerLiter: prijsValidation.value,
    });
  }, [
    afstandValidation.valid,
    afstandValidation.value,
    verbruikValidation.valid,
    verbruikValidation.value,
    prijsValidation.valid,
    prijsValidation.value,
  ]);

  return (
    <div className="rounded-xl border border-border bg-surface p-6">
      <div className="grid gap-4 sm:grid-cols-3">
        <NumberField
          id="afstand"
          label="Afstand"
          value={afstand}
          onChange={setAfstand}
          suffix="km"
          error={afstandValidation.valid ? undefined : afstandValidation.error}
        />
        <NumberField
          id="verbruik"
          label="Brandstofverbruik"
          value={verbruik}
          onChange={setVerbruik}
          suffix="L/100km"
          error={verbruikValidation.valid ? undefined : verbruikValidation.error}
        />
        <NumberField
          id="prijs"
          label="Brandstofprijs"
          value={prijs}
          onChange={setPrijs}
          prefix="€"
          suffix="/L"
          error={prijsValidation.valid ? undefined : prijsValidation.error}
        />
      </div>

      {result && (
        <div className="mt-6">
          <ResultCard
            heading="Brandstofkosten voor deze rit"
            primary={{ label: "Totale kosten", value: formatCurrency(result.totaleKosten) }}
            rows={[
              { label: "Benodigde liters", value: `${formatNumber(result.benodigdeLiters, 1)} L` },
              { label: "Kosten per kilometer", value: formatCurrency(result.kostenPerKm), emphasis: true },
            ]}
          />
        </div>
      )}
    </div>
  );
}
