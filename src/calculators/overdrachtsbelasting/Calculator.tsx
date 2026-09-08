"use client";

import { useMemo, useState } from "react";
import { NumberField } from "@/components/calculator/NumberField";
import { SelectField } from "@/components/calculator/SelectField";
import { ResultCard } from "@/components/calculator/ResultCard";
import { validateNumberInput } from "@/lib/validation/rules";
import { formatCurrency } from "@/lib/formatting/currency";
import { formatNumber } from "@/lib/formatting/number";
import {
  berekenOverdrachtsbelasting,
  OVERDRACHTSBELASTING_JAREN,
  STARTERSVRIJSTELLING_LEEFTIJD,
  type WoningSituatie,
} from "@/lib/calculations/overdrachtsbelasting";

export function OverdrachtsbelastingCalculator() {
  const [aankoopprijs, setAankoopprijs] = useState("350000");
  const [situatie, setSituatie] = useState<WoningSituatie>("hoofdverblijf");
  const [startersvrijstelling, setStartersvrijstelling] = useState(false);
  const [jaar, setJaar] = useState(OVERDRACHTSBELASTING_JAREN[0]);

  const validation = validateNumberInput(aankoopprijs, {
    fieldLabel: "aankoopprijs",
    min: 0,
    max: 100_000_000,
  });

  const result = useMemo(() => {
    if (!validation.valid) return null;
    return berekenOverdrachtsbelasting({
      aankoopprijs: validation.value,
      situatie,
      gebruiktStartersvrijstelling: situatie === "hoofdverblijf" && startersvrijstelling,
      jaar,
    });
  }, [validation.valid, validation.value, situatie, startersvrijstelling, jaar]);

  return (
    <div className="rounded-xl border border-border bg-surface p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <NumberField
          id="aankoopprijs"
          label="Aankoopprijs"
          value={aankoopprijs}
          onChange={setAankoopprijs}
          prefix="€"
          error={validation.valid ? undefined : validation.error}
        />
        <SelectField
          id="jaar"
          label="Jaar van aankoop"
          value={String(jaar)}
          onChange={(value) => setJaar(Number(value))}
          options={OVERDRACHTSBELASTING_JAREN.map((j) => ({ value: String(j), label: String(j) }))}
        />
        <div className="sm:col-span-2">
          <SelectField
            id="situatie"
            label="Situatie"
            value={situatie}
            onChange={(value) => setSituatie(value as WoningSituatie)}
            options={[
              { value: "hoofdverblijf", label: "Ik ga zelf in de woning wonen (hoofdverblijf)" },
              { value: "niet-hoofdverblijf-woning", label: "Ik koop een woning als belegging/2e woning" },
              { value: "niet-woning", label: "Bedrijfspand of ander niet-woning vastgoed" },
            ]}
          />
        </div>
        {situatie === "hoofdverblijf" && (
          <div className="sm:col-span-2">
            <SelectField
              id="startersvrijstelling"
              label={`Startersvrijstelling (${STARTERSVRIJSTELLING_LEEFTIJD.min}-${STARTERSVRIJSTELLING_LEEFTIJD.max} jaar)`}
              value={startersvrijstelling ? "ja" : "nee"}
              onChange={(value) => setStartersvrijstelling(value === "ja")}
              options={[
                { value: "nee", label: "Nee, of niet van toepassing" },
                { value: "ja", label: "Ja, ik gebruik de startersvrijstelling" },
              ]}
            />
          </div>
        )}
      </div>

      {result && (
        <div className="mt-6">
          <ResultCard
            heading="Overdrachtsbelasting"
            primary={{ label: "Te betalen bedrag", value: formatCurrency(result.bedrag, false) }}
            rows={[
              { label: "Toegepast percentage", value: `${formatNumber(result.percentage, 2)}%`, emphasis: true },
            ]}
          />
          {result.vrijstellingToegepast && (
            <p className="mt-3 text-xs text-muted">
              De startersvrijstelling is toegepast: je betaalt 0% overdrachtsbelasting.
            </p>
          )}
          <p className="mt-3 text-xs text-muted">
            De startersvrijstelling geldt alleen als de aankoopprijs niet boven de geldende
            woningwaardegrens uitkomt — kom je daar ook maar €1 boven, dan vervalt de vrijstelling
            volledig en geldt het hoofdverblijf-tarief van 2%.
          </p>
        </div>
      )}
    </div>
  );
}
