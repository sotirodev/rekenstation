"use client";

import { useMemo, useState } from "react";
import { NumberField } from "@/components/calculator/NumberField";
import { ResultCard } from "@/components/calculator/ResultCard";
import { validateNumberInput } from "@/lib/validation/rules";
import { formatCurrency } from "@/lib/formatting/currency";
import { berekenDouchekosten } from "@/lib/calculations/douchekosten";

export function DouchekostenCalculator() {
  const [literPerMinuut, setLiterPerMinuut] = useState("");
  const [duur, setDuur] = useState("");
  const [waterprijs, setWaterprijs] = useState("");
  const [energieprijs, setEnergieprijs] = useState("");

  const literValidation = validateNumberInput(literPerMinuut, { fieldLabel: "waterdebiet", min: 1, max: 30 });
  const duurValidation = validateNumberInput(duur, { fieldLabel: "doucheduur", min: 1, max: 60 });
  const waterprijsValidation = validateNumberInput(waterprijs, { fieldLabel: "waterprijs", min: 0, max: 10 });
  const energieprijsValidation = validateNumberInput(energieprijs, {
    fieldLabel: "energieprijs",
    min: 0,
    max: 10,
  });

  const result = useMemo(() => {
    if (
      !literValidation.valid ||
      !duurValidation.valid ||
      !waterprijsValidation.valid ||
      !energieprijsValidation.valid
    ) {
      return null;
    }
    return berekenDouchekosten({
      literPerMinuut: literValidation.value,
      duurMinuten: duurValidation.value,
      waterprijsPerM3: waterprijsValidation.value,
      energieprijsPerKwh: energieprijsValidation.value,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [literValidation.valid, duurValidation.valid, waterprijsValidation.valid, energieprijsValidation.valid, literPerMinuut, duur, waterprijs, energieprijs]);

  return (
    <div className="rounded-xl border border-border bg-surface p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <NumberField
          id="literPerMinuut"
          label="Waterdebiet douchekop"
          value={literPerMinuut}
          onChange={setLiterPerMinuut}
          suffix="L/min"
          error={literValidation.valid ? undefined : literValidation.error}
        />
        <NumberField
          id="duur"
          label="Doucheduur"
          value={duur}
          onChange={setDuur}
          suffix="minuten"
          error={duurValidation.valid ? undefined : duurValidation.error}
        />
        <NumberField
          id="waterprijs"
          label="Waterprijs"
          value={waterprijs}
          onChange={setWaterprijs}
          prefix="€"
          suffix="/m³"
          error={waterprijsValidation.valid ? undefined : waterprijsValidation.error}
        />
        <NumberField
          id="energieprijs"
          label="Energieprijs"
          value={energieprijs}
          onChange={setEnergieprijs}
          prefix="€"
          suffix="/kWh"
          error={energieprijsValidation.valid ? undefined : energieprijsValidation.error}
        />
      </div>

      {result && (
        <div className="mt-6">
          <ResultCard
            heading="Kosten per douchebeurt"
            primary={{ label: "Totaal", value: formatCurrency(result.totaalPerBeurt) }}
            rows={[
              { label: "Waterkosten", value: formatCurrency(result.waterkosten) },
              { label: "Energiekosten (opwarmen water)", value: formatCurrency(result.energiekosten), emphasis: true },
            ]}
          />
          <p className="mt-3 text-xs text-muted">
            Gebaseerd op een opwarming van 25°C (van koud leidingwater naar douchetemperatuur)
            en een geschat boilerrendement van 85%. Het waterdebiet van een gemiddelde
            douchekop ligt rond de 8 tot 12 liter per minuut; een waterbesparende douchekop
            zit vaak rond de 6 liter per minuut.
          </p>
        </div>
      )}
    </div>
  );
}
