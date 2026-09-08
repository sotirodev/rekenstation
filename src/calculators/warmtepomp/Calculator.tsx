"use client";

import { useMemo, useState } from "react";
import { NumberField } from "@/components/calculator/NumberField";
import { ResultCard } from "@/components/calculator/ResultCard";
import { validateNumberInput } from "@/lib/validation/rules";
import { formatCurrency } from "@/lib/formatting/currency";
import { berekenWarmtepomp } from "@/lib/calculations/warmtepomp";

export function WarmtepompCalculator() {
  const [gasverbruik, setGasverbruik] = useState("");
  const [gasprijs, setGasprijs] = useState("");
  const [rendement, setRendement] = useState("90");
  const [cop, setCop] = useState("4");
  const [stroomprijs, setStroomprijs] = useState("");

  const fields = {
    gasverbruik: validateNumberInput(gasverbruik, { fieldLabel: "gasverbruik", min: 0, max: 1_000_000 }),
    gasprijs: validateNumberInput(gasprijs, { fieldLabel: "gasprijs", min: 0, max: 100 }),
    rendement: validateNumberInput(rendement, { fieldLabel: "ketelrendement", min: 1, max: 100 }),
    cop: validateNumberInput(cop, { fieldLabel: "COP", min: 0.1, max: 20 }),
    stroomprijs: validateNumberInput(stroomprijs, { fieldLabel: "stroomprijs", min: 0, max: 100 }),
  };

  const alleGeldig = Object.values(fields).every((f) => f.valid);

  const result = useMemo(() => {
    if (!alleGeldig) return null;
    return berekenWarmtepomp({
      gasverbruikPerJaar: fields.gasverbruik.value,
      gasprijsPerM3: fields.gasprijs.value,
      ketelrendementPercentage: fields.rendement.value,
      copWarmtepomp: fields.cop.value,
      stroomprijsPerKwh: fields.stroomprijs.value,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [alleGeldig, gasverbruik, gasprijs, rendement, cop, stroomprijs]);

  return (
    <div className="rounded-xl border border-border bg-surface p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <NumberField
          id="gasverbruik"
          label="Huidig gasverbruik per jaar"
          value={gasverbruik}
          onChange={setGasverbruik}
          suffix="m³"
          error={fields.gasverbruik.valid ? undefined : fields.gasverbruik.error}
        />
        <NumberField
          id="gasprijs"
          label="Gasprijs"
          value={gasprijs}
          onChange={setGasprijs}
          prefix="€"
          suffix="/m³"
          error={fields.gasprijs.valid ? undefined : fields.gasprijs.error}
        />
        <NumberField
          id="rendement"
          label="Rendement huidige CV-ketel"
          value={rendement}
          onChange={setRendement}
          suffix="%"
          error={fields.rendement.valid ? undefined : fields.rendement.error}
        />
        <NumberField
          id="cop"
          label="COP/SCOP van de warmtepomp"
          value={cop}
          onChange={setCop}
          error={fields.cop.valid ? undefined : fields.cop.error}
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
            heading="Geschatte besparing"
            primary={{ label: "Per jaar", value: formatCurrency(result.jaarlijkseBesparing, false) }}
            rows={[
              { label: "Huidige gaskosten per jaar", value: formatCurrency(result.huidigeGaskosten, false) },
              { label: "Geschatte stroomkosten warmtepomp", value: formatCurrency(result.geschatteStroomkosten, false), emphasis: true },
            ]}
          />
          <p className="mt-3 text-xs text-muted">
            Deze schatting gaat uit van de calorische bovenwaarde van aardgas van ongeveer 9,77
            kWh per m³. De werkelijke besparing hangt sterk af van de isolatiegraad van je woning
            en het daadwerkelijke rendement van de warmtepomp in de praktijk.
          </p>
        </div>
      )}
    </div>
  );
}
