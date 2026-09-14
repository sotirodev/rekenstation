"use client";

import { useMemo, useState } from "react";
import { NumberField } from "@/components/calculator/NumberField";
import { SelectField } from "@/components/calculator/SelectField";
import { ResultCard } from "@/components/calculator/ResultCard";
import { validateNumberInput } from "@/lib/validation/rules";
import { formatCurrency } from "@/lib/formatting/currency";
import { berekenHuurtoeslag, HUURTOESLAG_JAREN, type HuishoudType } from "@/lib/calculations/huurtoeslag";

const HUISHOUD_OPTIES: { value: HuishoudType; label: string }[] = [
  { value: "alleenstaand", label: "Alleenstaand (1 persoon)" },
  { value: "twee-personen", label: "2 personen (bijv. met toeslagpartner)" },
  { value: "drie-of-meer-personen", label: "3 of meer personen" },
];

export function HuurtoeslagCalculator() {
  const [huur, setHuur] = useState("");
  const [inkomen, setInkomen] = useState("");
  const [huishoudType, setHuishoudType] = useState<HuishoudType>("alleenstaand");
  const [jaar, setJaar] = useState(HUURTOESLAG_JAREN[0]);

  const huurValidation = validateNumberInput(huur, { fieldLabel: "kale huur", min: 0, max: 5_000 });
  const inkomenValidation = validateNumberInput(inkomen, {
    fieldLabel: "toetsingsinkomen",
    min: 0,
    max: 1_000_000,
  });

  const result = useMemo(() => {
    if (!huurValidation.valid || !inkomenValidation.valid) return null;
    return berekenHuurtoeslag({
      kaleHuurPerMaand: huurValidation.value,
      toetsingsinkomen: inkomenValidation.value,
      huishoudType,
      jaar,
    });
  }, [huurValidation.valid, huurValidation.value, inkomenValidation.valid, inkomenValidation.value, huishoudType, jaar]);

  return (
    <div className="rounded-xl border border-border bg-surface p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <NumberField
          id="huur"
          label="Kale huur per maand"
          value={huur}
          onChange={setHuur}
          prefix="€"
          error={huurValidation.valid ? undefined : huurValidation.error}
        />
        <NumberField
          id="inkomen"
          label="Toetsingsinkomen per jaar"
          value={inkomen}
          onChange={setInkomen}
          prefix="€"
          error={inkomenValidation.valid ? undefined : inkomenValidation.error}
        />
        <SelectField
          id="jaar"
          label="Jaar"
          value={String(jaar)}
          onChange={(value) => setJaar(Number(value))}
          options={HUURTOESLAG_JAREN.map((j) => ({ value: String(j), label: String(j) }))}
        />
        <SelectField
          id="huishoudType"
          label="Huishouden"
          value={huishoudType}
          onChange={(value) => setHuishoudType(value as HuishoudType)}
          options={HUISHOUD_OPTIES}
        />
      </div>

      {result && (
        <div className="mt-6">
          <ResultCard
            heading="Geschatte huurtoeslag"
            primary={{ label: "Per maand", value: formatCurrency(result.huurtoeslagPerMaand) }}
            rows={[{ label: "Per jaar", value: formatCurrency(result.huurtoeslagPerJaar, false), emphasis: true }]}
          />
          <p className="mt-3 text-xs text-muted">
            Deze berekening geldt voor huurders van 21 jaar en ouder en houdt geen rekening met
            een vermogenstoets. Dit is een indicatie op basis van de gepubliceerde parameters
            voor {jaar}; check het exacte bedrag altijd op toeslagen.nl.
          </p>
        </div>
      )}
    </div>
  );
}
