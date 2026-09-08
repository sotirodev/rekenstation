"use client";

import { useMemo, useState } from "react";
import { NumberField } from "@/components/calculator/NumberField";
import { ResultCard } from "@/components/calculator/ResultCard";
import { validateNumberInput } from "@/lib/validation/rules";
import { formatCurrency } from "@/lib/formatting/currency";
import { berekenEnergieverbruik } from "@/lib/calculations/energieverbruik";

export function EnergieverbruikCalculator() {
  const [stroom, setStroom] = useState("");
  const [prijsStroom, setPrijsStroom] = useState("");
  const [gas, setGas] = useState("");
  const [prijsGas, setPrijsGas] = useState("");
  const [vasteKosten, setVasteKosten] = useState("");

  const fields = {
    stroom: validateNumberInput(stroom, { fieldLabel: "stroomverbruik", min: 0, max: 1_000_000 }),
    prijsStroom: validateNumberInput(prijsStroom, { fieldLabel: "stroomprijs", min: 0, max: 100 }),
    gas: validateNumberInput(gas, { fieldLabel: "gasverbruik", min: 0, max: 1_000_000 }),
    prijsGas: validateNumberInput(prijsGas, { fieldLabel: "gasprijs", min: 0, max: 100 }),
    vasteKosten: validateNumberInput(vasteKosten, { fieldLabel: "vaste kosten", min: 0, max: 100_000 }),
  };

  const alleGeldig = Object.values(fields).every((f) => f.valid);

  const result = useMemo(() => {
    if (!alleGeldig) return null;
    return berekenEnergieverbruik({
      stroomverbruikPerJaar: fields.stroom.value,
      prijsPerKwh: fields.prijsStroom.value,
      gasverbruikPerJaar: fields.gas.value,
      prijsPerM3: fields.prijsGas.value,
      vasteKostenPerJaar: fields.vasteKosten.value,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [alleGeldig, stroom, prijsStroom, gas, prijsGas, vasteKosten]);

  return (
    <div className="rounded-xl border border-border bg-surface p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <NumberField
          id="stroom"
          label="Stroomverbruik per jaar"
          value={stroom}
          onChange={setStroom}
          suffix="kWh"
          error={fields.stroom.valid ? undefined : fields.stroom.error}
        />
        <NumberField
          id="prijsStroom"
          label="Prijs per kWh"
          value={prijsStroom}
          onChange={setPrijsStroom}
          prefix="€"
          error={fields.prijsStroom.valid ? undefined : fields.prijsStroom.error}
        />
        <NumberField
          id="gas"
          label="Gasverbruik per jaar"
          value={gas}
          onChange={setGas}
          suffix="m³"
          error={fields.gas.valid ? undefined : fields.gas.error}
        />
        <NumberField
          id="prijsGas"
          label="Prijs per m³"
          value={prijsGas}
          onChange={setPrijsGas}
          prefix="€"
          error={fields.prijsGas.valid ? undefined : fields.prijsGas.error}
        />
        <NumberField
          id="vasteKosten"
          label="Vaste leveringskosten per jaar"
          value={vasteKosten}
          onChange={setVasteKosten}
          prefix="€"
          error={fields.vasteKosten.valid ? undefined : fields.vasteKosten.error}
        />
      </div>

      {result && (
        <div className="mt-6">
          <ResultCard
            heading="Geschatte energiekosten"
            primary={{ label: "Per maand", value: formatCurrency(result.totaalPerMaand) }}
            rows={[
              { label: "Stroomkosten per jaar", value: formatCurrency(result.stroomkostenPerJaar, false) },
              { label: "Gaskosten per jaar", value: formatCurrency(result.gaskostenPerJaar, false) },
              { label: "Totaal per jaar", value: formatCurrency(result.totaalPerJaar, false), emphasis: true },
            ]}
          />
        </div>
      )}
    </div>
  );
}
