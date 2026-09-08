"use client";

import { useMemo, useState } from "react";
import { NumberField } from "@/components/calculator/NumberField";
import { ResultCard } from "@/components/calculator/ResultCard";
import { validateNumberInput } from "@/lib/validation/rules";
import { formatCurrency } from "@/lib/formatting/currency";
import { formatNumber } from "@/lib/formatting/number";
import { berekenZonnepanelen } from "@/lib/calculations/zonnepanelen";

export function ZonnepanelenCalculator() {
  const [investering, setInvestering] = useState("");
  const [opbrengst, setOpbrengst] = useState("");
  const [stroomprijs, setStroomprijs] = useState("");
  const [onderhoud, setOnderhoud] = useState("0");

  const fields = {
    investering: validateNumberInput(investering, { fieldLabel: "investering", min: 0, max: 1_000_000 }),
    opbrengst: validateNumberInput(opbrengst, { fieldLabel: "jaarlijkse opbrengst", min: 0, max: 1_000_000 }),
    stroomprijs: validateNumberInput(stroomprijs, { fieldLabel: "stroomprijs", min: 0, max: 100 }),
    onderhoud: validateNumberInput(onderhoud, { fieldLabel: "onderhoudskosten", min: 0, max: 100_000 }),
  };

  const alleGeldig = Object.values(fields).every((f) => f.valid);

  const result = useMemo(() => {
    if (!alleGeldig) return null;
    return berekenZonnepanelen({
      investering: fields.investering.value,
      jaarlijkseOpbrengstKwh: fields.opbrengst.value,
      stroomprijsPerKwh: fields.stroomprijs.value,
      onderhoudskostenPerJaar: fields.onderhoud.value,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [alleGeldig, investering, opbrengst, stroomprijs, onderhoud]);

  return (
    <div className="rounded-xl border border-border bg-surface p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <NumberField
          id="investering"
          label="Investering (aanschaf + installatie)"
          value={investering}
          onChange={setInvestering}
          prefix="€"
          error={fields.investering.valid ? undefined : fields.investering.error}
        />
        <NumberField
          id="opbrengst"
          label="Geschatte opbrengst per jaar"
          value={opbrengst}
          onChange={setOpbrengst}
          suffix="kWh"
          error={fields.opbrengst.valid ? undefined : fields.opbrengst.error}
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
        <NumberField
          id="onderhoud"
          label="Onderhoudskosten per jaar (optioneel)"
          value={onderhoud}
          onChange={setOnderhoud}
          prefix="€"
          error={fields.onderhoud.valid ? undefined : fields.onderhoud.error}
        />
      </div>

      {result && (
        <div className="mt-6">
          <ResultCard
            heading="Terugverdientijd"
            primary={{
              label: "Naar verwachting terugverdiend in",
              value:
                result.terugverdientijdJaren !== null
                  ? `${formatNumber(result.terugverdientijdJaren, 1)} jaar`
                  : "onbekend (geen besparing)",
            }}
            rows={[{ label: "Jaarlijkse besparing", value: formatCurrency(result.jaarlijkseBesparing, false), emphasis: true }]}
          />
          <p className="mt-3 text-xs text-muted">
            Deze berekening gaat ervan uit dat je de opgewekte stroom zelf verbruikt of volledig
            kunt salderen, en houdt geen rekening met wijzigende stroomprijzen, subsidies of de
            afbouw van de salderingsregeling.
          </p>
        </div>
      )}
    </div>
  );
}
