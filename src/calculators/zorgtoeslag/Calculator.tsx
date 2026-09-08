"use client";

import { useMemo, useState } from "react";
import { NumberField } from "@/components/calculator/NumberField";
import { SelectField } from "@/components/calculator/SelectField";
import { ResultCard } from "@/components/calculator/ResultCard";
import { validateNumberInput } from "@/lib/validation/rules";
import { formatCurrency } from "@/lib/formatting/currency";
import { berekenZorgtoeslag, ZORGTOESLAG_JAREN } from "@/lib/calculations/zorgtoeslag";

export function ZorgtoeslagCalculator() {
  const [inkomen, setInkomen] = useState("25000");
  const [toeslagpartner, setToeslagpartner] = useState(false);
  const [jaar, setJaar] = useState(ZORGTOESLAG_JAREN[0]);

  const validation = validateNumberInput(inkomen, {
    fieldLabel: "toetsingsinkomen",
    min: 0,
    max: 1_000_000,
  });

  const result = useMemo(() => {
    if (!validation.valid) return null;
    return berekenZorgtoeslag({
      toetsingsinkomen: validation.value,
      heeftToeslagpartner: toeslagpartner,
      jaar,
    });
  }, [validation.valid, validation.value, toeslagpartner, jaar]);

  return (
    <div className="rounded-xl border border-border bg-surface p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <NumberField
          id="inkomen"
          label="Verzamelinkomen per jaar"
          value={inkomen}
          onChange={setInkomen}
          prefix="€"
          error={validation.valid ? undefined : validation.error}
        />
        <SelectField
          id="jaar"
          label="Jaar"
          value={String(jaar)}
          onChange={(value) => setJaar(Number(value))}
          options={ZORGTOESLAG_JAREN.map((j) => ({ value: String(j), label: String(j) }))}
        />
        <div className="sm:col-span-2">
          <SelectField
            id="toeslagpartner"
            label="Heb je een toeslagpartner?"
            value={toeslagpartner ? "ja" : "nee"}
            onChange={(value) => setToeslagpartner(value === "ja")}
            options={[
              { value: "nee", label: "Nee" },
              { value: "ja", label: "Ja" },
            ]}
          />
        </div>
      </div>

      {result && (
        <div className="mt-6">
          <ResultCard
            heading="Geschatte zorgtoeslag"
            primary={{ label: "Per maand", value: formatCurrency(result.zorgtoeslagPerMaand) }}
            rows={[
              { label: "Per jaar", value: formatCurrency(result.zorgtoeslagPerJaar, false), emphasis: true },
              {
                label: "Inkomensgrens (jij komt boven dit bedrag niet in aanmerking)",
                value: formatCurrency(result.maxInkomensgrens, false),
              },
            ]}
          />
          <p className="mt-3 text-xs text-muted">
            Dit is een indicatieve berekening op basis van de gepubliceerde parameters voor{" "}
            {jaar}. De daadwerkelijke zorgtoeslag wordt vastgesteld door Dienst Toeslagen; check
            het exacte bedrag altijd op toeslagen.nl.
          </p>
        </div>
      )}
    </div>
  );
}
