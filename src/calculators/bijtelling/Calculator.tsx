"use client";

import { useMemo, useState } from "react";
import { NumberField } from "@/components/calculator/NumberField";
import { SelectField } from "@/components/calculator/SelectField";
import { ResultCard } from "@/components/calculator/ResultCard";
import { validateNumberInput } from "@/lib/validation/rules";
import { formatCurrency } from "@/lib/formatting/currency";
import { formatNumber } from "@/lib/formatting/number";
import { berekenBijtelling, BIJTELLING_JAREN, type Brandstoftype } from "@/lib/calculations/bijtelling";

export function BijtellingCalculator() {
  const [cataloguswaarde, setCataloguswaarde] = useState("");
  const [brandstoftype, setBrandstoftype] = useState<Brandstoftype>("fossiel");
  const [jaar, setJaar] = useState(BIJTELLING_JAREN[0]);

  const validation = validateNumberInput(cataloguswaarde, {
    fieldLabel: "cataloguswaarde",
    min: 0,
    max: 10_000_000,
  });

  const result = useMemo(() => {
    if (!validation.valid) return null;
    return berekenBijtelling({ cataloguswaarde: validation.value, brandstoftype, jaar });
  }, [validation.valid, validation.value, brandstoftype, jaar]);

  return (
    <div className="rounded-xl border border-border bg-surface p-6">
      <div className="grid gap-4 sm:grid-cols-3">
        <NumberField
          id="cataloguswaarde"
          label="Cataloguswaarde"
          value={cataloguswaarde}
          onChange={setCataloguswaarde}
          prefix="€"
          error={validation.valid ? undefined : validation.error}
        />
        <SelectField
          id="brandstoftype"
          label="Type auto"
          value={brandstoftype}
          onChange={(value) => setBrandstoftype(value as Brandstoftype)}
          options={[
            { value: "fossiel", label: "Fossiele brandstof (benzine/diesel/hybride)" },
            { value: "elektrisch", label: "Volledig elektrisch" },
          ]}
        />
        <SelectField
          id="jaar"
          label="Jaar eerste tenaamstelling"
          value={String(jaar)}
          onChange={(value) => setJaar(Number(value))}
          options={BIJTELLING_JAREN.map((j) => ({ value: String(j), label: String(j) }))}
        />
      </div>

      {result && (
        <div className="mt-6">
          <ResultCard
            heading="Bijtelling"
            primary={{ label: "Bijtelling per jaar", value: formatCurrency(result.bijtellingPerJaar, false) }}
            rows={[
              { label: "Bijtelling per maand", value: formatCurrency(result.bijtellingPerMaand) },
              {
                label: "Effectief percentage",
                value: `${formatNumber(result.toegepastPercentage, 1)}%`,
                emphasis: true,
              },
            ]}
          />
          <p className="mt-3 text-xs text-muted">
            De bijtelling wordt bij je belastbaar inkomen opgeteld; de werkelijke kosten hangen af van
            je persoonlijke marginale belastingtarief. Het toegepaste percentage geldt voor 60 maanden
            vanaf de eerste tenaamstelling van de auto.
          </p>
        </div>
      )}
    </div>
  );
}
