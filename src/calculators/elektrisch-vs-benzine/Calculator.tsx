"use client";

import { useMemo, useState } from "react";
import { NumberField } from "@/components/calculator/NumberField";
import { ResultCard } from "@/components/calculator/ResultCard";
import { validateNumberInput } from "@/lib/validation/rules";
import { formatCurrency } from "@/lib/formatting/currency";
import { berekenElektrischVsBenzine } from "@/lib/calculations/elektrisch-vs-benzine";

export function ElektrischVsBenzineCalculator() {
  const [km, setKm] = useState("");
  const [verbruikBenzine, setVerbruikBenzine] = useState("");
  const [benzineprijs, setBenzineprijs] = useState("");
  const [verbruikElektrisch, setVerbruikElektrisch] = useState("");
  const [stroomprijs, setStroomprijs] = useState("");

  const fields = {
    km: validateNumberInput(km, { fieldLabel: "kilometers per jaar", min: 0, max: 500_000 }),
    verbruikBenzine: validateNumberInput(verbruikBenzine, { fieldLabel: "benzineverbruik", min: 0, max: 100 }),
    benzineprijs: validateNumberInput(benzineprijs, { fieldLabel: "benzineprijs", min: 0, max: 10 }),
    verbruikElektrisch: validateNumberInput(verbruikElektrisch, { fieldLabel: "stroomverbruik", min: 0, max: 100 }),
    stroomprijs: validateNumberInput(stroomprijs, { fieldLabel: "stroomprijs", min: 0, max: 100 }),
  };

  const alleGeldig = Object.values(fields).every((f) => f.valid);

  const result = useMemo(() => {
    if (!alleGeldig) return null;
    return berekenElektrischVsBenzine({
      kilometersPerJaar: fields.km.value,
      verbruikBenzinePer100km: fields.verbruikBenzine.value,
      benzineprijsPerLiter: fields.benzineprijs.value,
      verbruikElektrischPer100km: fields.verbruikElektrisch.value,
      stroomprijsPerKwh: fields.stroomprijs.value,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [alleGeldig, km, verbruikBenzine, benzineprijs, verbruikElektrisch, stroomprijs]);

  return (
    <div className="rounded-xl border border-border bg-surface p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <NumberField
          id="km"
          label="Kilometers per jaar"
          value={km}
          onChange={setKm}
          suffix="km"
          error={fields.km.valid ? undefined : fields.km.error}
        />
        <div />
        <NumberField
          id="verbruikBenzine"
          label="Verbruik benzineauto"
          value={verbruikBenzine}
          onChange={setVerbruikBenzine}
          suffix="L/100km"
          error={fields.verbruikBenzine.valid ? undefined : fields.verbruikBenzine.error}
        />
        <NumberField
          id="benzineprijs"
          label="Benzineprijs"
          value={benzineprijs}
          onChange={setBenzineprijs}
          prefix="€"
          suffix="/L"
          error={fields.benzineprijs.valid ? undefined : fields.benzineprijs.error}
        />
        <NumberField
          id="verbruikElektrisch"
          label="Verbruik elektrische auto"
          value={verbruikElektrisch}
          onChange={setVerbruikElektrisch}
          suffix="kWh/100km"
          error={fields.verbruikElektrisch.valid ? undefined : fields.verbruikElektrisch.error}
        />
        <NumberField
          id="stroomprijs"
          label="Stroomprijs"
          value={stroomprijs}
          onChange={setStroomprijs}
          prefix="€"
          suffix="/kWh"
          error={fields.stroomprijs.valid ? undefined : fields.stroomprijs.error}
        />
      </div>

      {result && (
        <div className="mt-6">
          <ResultCard
            heading="Jaarlijkse besparing met elektrisch rijden"
            primary={{ label: "Per jaar", value: formatCurrency(result.besparingPerJaar, false) }}
            rows={[
              { label: "Kosten benzine per jaar", value: formatCurrency(result.kostenBenzinePerJaar, false) },
              { label: "Kosten elektrisch per jaar", value: formatCurrency(result.kostenElektrischPerJaar, false), emphasis: true },
            ]}
          />
          <p className="mt-3 text-xs text-muted">
            Deze vergelijking houdt geen rekening met aanschafprijs, afschrijving, wegenbelasting
            of bijtelling. Gebruik de autokosten- en bijtellingcalculator voor het volledige
            plaatje.
          </p>
        </div>
      )}
    </div>
  );
}
