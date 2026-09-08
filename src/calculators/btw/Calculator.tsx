"use client";

import { useMemo, useState } from "react";
import { NumberField } from "@/components/calculator/NumberField";
import { SelectField } from "@/components/calculator/SelectField";
import { ResultCard } from "@/components/calculator/ResultCard";
import { validateNumberInput } from "@/lib/validation/rules";
import { formatCurrency } from "@/lib/formatting/currency";
import { berekenBtw, type BtwModus, type BtwTarief } from "@/lib/calculations/btw";

const modusOpties: { value: BtwModus; label: string }[] = [
  { value: "excl-naar-incl", label: "Bedrag is exclusief BTW" },
  { value: "incl-naar-excl", label: "Bedrag is inclusief BTW" },
  { value: "alleen-btw", label: "Alleen BTW-bedrag berekenen" },
];

export function BtwCalculator() {
  const [bedrag, setBedrag] = useState("");
  const [tarief, setTarief] = useState<BtwTarief>(21);
  const [modus, setModus] = useState<BtwModus>("excl-naar-incl");

  const validation = validateNumberInput(bedrag, {
    fieldLabel: "bedrag",
    min: 0,
    max: 10_000_000,
  });

  const result = useMemo(() => {
    if (!validation.valid) return null;
    return berekenBtw({ bedrag: validation.value, tarief, modus });
  }, [validation.valid, validation.value, tarief, modus]);

  return (
    <div className="rounded-xl border border-border bg-surface p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <NumberField
          id="bedrag"
          label="Bedrag"
          value={bedrag}
          onChange={setBedrag}
          prefix="€"
          error={validation.valid ? undefined : validation.error}
        />
        <SelectField
          id="tarief"
          label="BTW-tarief"
          value={String(tarief)}
          onChange={(value) => setTarief(Number(value) as BtwTarief)}
          options={[
            { value: "21", label: "21%" },
            { value: "9", label: "9%" },
            { value: "0", label: "0%" },
          ]}
        />
        <div className="sm:col-span-2">
          <SelectField
            id="modus"
            label="Berekening"
            value={modus}
            onChange={(value) => setModus(value as BtwModus)}
            options={modusOpties}
          />
        </div>
      </div>

      {result && (
        <div className="mt-6">
          <ResultCard
            heading="Resultaat"
            primary={
              modus === "alleen-btw"
                ? { label: "BTW-bedrag", value: formatCurrency(result.btwBedrag) }
                : modus === "incl-naar-excl"
                  ? { label: "Bedrag exclusief BTW", value: formatCurrency(result.bedragExclBtw) }
                  : { label: "Bedrag inclusief BTW", value: formatCurrency(result.bedragInclBtw) }
            }
            rows={[
              { label: "Bedrag exclusief BTW", value: formatCurrency(result.bedragExclBtw) },
              { label: "BTW-bedrag", value: formatCurrency(result.btwBedrag) },
              { label: "Bedrag inclusief BTW", value: formatCurrency(result.bedragInclBtw), emphasis: true },
            ]}
          />
        </div>
      )}
    </div>
  );
}
