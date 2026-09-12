"use client";

import { useMemo, useState } from "react";
import { NumberField } from "@/components/calculator/NumberField";
import { ResultCard } from "@/components/calculator/ResultCard";
import { validateNumberInput } from "@/lib/validation/rules";
import { formatCurrency } from "@/lib/formatting/currency";
import { berekenStroomkostenApparaat } from "@/lib/calculations/stroomkosten-apparaat";

export function StroomkostenApparaatCalculator() {
  const [wattage, setWattage] = useState("");
  const [uurPerDag, setUurPerDag] = useState("");
  const [stroomprijs, setStroomprijs] = useState("");

  const wattageValidation = validateNumberInput(wattage, { fieldLabel: "wattage", min: 1, max: 20_000 });
  const uurValidation = validateNumberInput(uurPerDag, { fieldLabel: "gebruik per dag", min: 0, max: 24 });
  const stroomprijsValidation = validateNumberInput(stroomprijs, {
    fieldLabel: "stroomprijs",
    min: 0,
    max: 10,
  });

  const result = useMemo(() => {
    if (!wattageValidation.valid || !uurValidation.valid || !stroomprijsValidation.valid) return null;
    return berekenStroomkostenApparaat({
      wattage: wattageValidation.value,
      uurPerDag: uurValidation.value,
      stroomprijsPerKwh: stroomprijsValidation.value,
    });
  }, [
    wattageValidation.valid,
    wattageValidation.value,
    uurValidation.valid,
    uurValidation.value,
    stroomprijsValidation.valid,
    stroomprijsValidation.value,
  ]);

  return (
    <div className="rounded-xl border border-border bg-surface p-6">
      <div className="grid gap-4 sm:grid-cols-3">
        <NumberField
          id="wattage"
          label="Wattage van het apparaat"
          value={wattage}
          onChange={setWattage}
          suffix="watt"
          error={wattageValidation.valid ? undefined : wattageValidation.error}
        />
        <NumberField
          id="uurPerDag"
          label="Gebruik per dag"
          value={uurPerDag}
          onChange={setUurPerDag}
          suffix="uur"
          error={uurValidation.valid ? undefined : uurValidation.error}
        />
        <NumberField
          id="stroomprijs"
          label="Stroomprijs"
          value={stroomprijs}
          onChange={setStroomprijs}
          prefix="€"
          suffix="/kWh"
          error={stroomprijsValidation.valid ? undefined : stroomprijsValidation.error}
        />
      </div>

      {result && (
        <div className="mt-6">
          <ResultCard
            heading="Geschatte stroomkosten"
            primary={{ label: "Per jaar", value: formatCurrency(result.kostenPerJaar, false) }}
            rows={[
              { label: "Per dag", value: formatCurrency(result.kostenPerDag) },
              { label: "Per maand", value: formatCurrency(result.kostenPerMaand, false), emphasis: true },
            ]}
          />
          <p className="mt-3 text-xs text-muted">
            Vul je eigen stroomprijs in (te vinden op je energierekening) voor een zo
            nauwkeurig mogelijke schatting. Het werkelijke wattage van een apparaat staat vaak
            op het typeplaatje of in de handleiding.
          </p>
        </div>
      )}
    </div>
  );
}
