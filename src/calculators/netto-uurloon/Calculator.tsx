"use client";

import { useMemo, useState } from "react";
import { NumberField } from "@/components/calculator/NumberField";
import { SelectField } from "@/components/calculator/SelectField";
import { ResultCard } from "@/components/calculator/ResultCard";
import { validateNumberInput } from "@/lib/validation/rules";
import { formatCurrency } from "@/lib/formatting/currency";
import { berekenBrutoNetto } from "@/lib/calculations/bruto-netto";
import { availableTaxYears, defaultTaxYear } from "@/lib/tax-data";

const WEKEN_PER_JAAR = 52;

export function NettoUurloonCalculator() {
  const [uurloon, setUurloon] = useState("");
  const [uren, setUren] = useState("");
  const [belastingjaar, setBelastingjaar] = useState(defaultTaxYear);
  const [loonheffingskorting, setLoonheffingskorting] = useState(true);

  const uurloonValidation = validateNumberInput(uurloon, { fieldLabel: "bruto uurloon", min: 0, max: 1_000 });
  const urenValidation = validateNumberInput(uren, { fieldLabel: "uren per week", min: 0, max: 168 });

  const result = useMemo(() => {
    if (!uurloonValidation.valid || !urenValidation.valid) return null;
    const urenPerJaar = urenValidation.value * WEKEN_PER_JAAR;
    const brutoJaarloon = uurloonValidation.value * urenPerJaar;

    const brutoNetto = berekenBrutoNetto({
      bruto: brutoJaarloon,
      periode: "jaar",
      belastingjaar,
      loonheffingskorting,
    });

    return {
      nettoUurloon: urenPerJaar > 0 ? brutoNetto.nettoPerJaar / urenPerJaar : 0,
      brutoNetto,
    };
  }, [uurloonValidation.valid, uurloonValidation.value, urenValidation.valid, urenValidation.value, belastingjaar, loonheffingskorting]);

  return (
    <div className="rounded-xl border border-border bg-surface p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <NumberField
          id="uurloon"
          label="Bruto uurloon"
          value={uurloon}
          onChange={setUurloon}
          prefix="€"
          error={uurloonValidation.valid ? undefined : uurloonValidation.error}
        />
        <NumberField
          id="uren"
          label="Uren per week"
          value={uren}
          onChange={setUren}
          suffix="uur"
          error={urenValidation.valid ? undefined : urenValidation.error}
        />
        <SelectField
          id="belastingjaar"
          label="Belastingjaar"
          value={String(belastingjaar)}
          onChange={(value) => setBelastingjaar(Number(value))}
          options={availableTaxYears.map((jaar) => ({ value: String(jaar), label: String(jaar) }))}
        />
        <SelectField
          id="loonheffingskorting"
          label="Loonheffingskorting"
          value={loonheffingskorting ? "ja" : "nee"}
          onChange={(value) => setLoonheffingskorting(value === "ja")}
          options={[
            { value: "ja", label: "Ja (gebruikelijk bij je enige/hoofdbaan)" },
            { value: "nee", label: "Nee (bijvoorbeeld bij een 2e baan of uitkering)" },
          ]}
        />
      </div>

      {result && (
        <div className="mt-6">
          <ResultCard
            heading={`Netto uurloon (${belastingjaar})`}
            primary={{ label: "Netto uurloon", value: formatCurrency(result.nettoUurloon) }}
            rows={[
              { label: "Bruto jaarsalaris", value: formatCurrency(result.brutoNetto.brutoPerJaar, false) },
              { label: "Netto jaarsalaris", value: formatCurrency(result.brutoNetto.nettoPerJaar, false), emphasis: true },
            ]}
          />
          <p className="mt-3 text-xs text-muted">
            Deze berekening gaat uit van 52 werkweken per jaar en houdt geen rekening met
            vakantiegeld, pensioenpremie of andere inhoudingen. Het resultaat is een indicatie.
          </p>
        </div>
      )}
    </div>
  );
}
