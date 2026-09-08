"use client";

import { useMemo, useState } from "react";
import { NumberField } from "@/components/calculator/NumberField";
import { SelectField } from "@/components/calculator/SelectField";
import { ResultCard } from "@/components/calculator/ResultCard";
import { validateNumberInput } from "@/lib/validation/rules";
import { formatNumber } from "@/lib/formatting/number";
import {
  berekenEenheden,
  LENGTE_EENHEDEN,
  GEWICHT_EENHEDEN,
  type EenhedenCategorie,
  type LengteEenheid,
  type GewichtEenheid,
} from "@/lib/calculations/eenheden";

const EENHEID_LABELS: Record<LengteEenheid | GewichtEenheid, string> = {
  mm: "Millimeter (mm)",
  cm: "Centimeter (cm)",
  m: "Meter (m)",
  km: "Kilometer (km)",
  inch: "Inch",
  foot: "Foot",
  mile: "Mile",
  mg: "Milligram (mg)",
  g: "Gram (g)",
  kg: "Kilogram (kg)",
  ton: "Ton",
  lb: "Pond (lb)",
  oz: "Ounce (oz)",
};

export function EenhedenCalculator() {
  const [categorie, setCategorie] = useState<EenhedenCategorie>("lengte");
  const [waarde, setWaarde] = useState("");
  const [van, setVan] = useState<string>("m");
  const [naar, setNaar] = useState<string>("cm");

  const eenheden = categorie === "lengte" ? LENGTE_EENHEDEN : GEWICHT_EENHEDEN;

  const waardeValidation = validateNumberInput(waarde, {
    fieldLabel: "waarde",
    min: -1_000_000_000,
    max: 1_000_000_000,
  });

  const result = useMemo(() => {
    if (!waardeValidation.valid) return null;
    return berekenEenheden({
      categorie,
      waarde: waardeValidation.value,
      van: van as LengteEenheid | GewichtEenheid,
      naar: naar as LengteEenheid | GewichtEenheid,
    });
  }, [categorie, waardeValidation.valid, waardeValidation.value, van, naar]);

  function wijzigCategorie(nieuw: EenhedenCategorie) {
    setCategorie(nieuw);
    const nieuweEenheden = nieuw === "lengte" ? LENGTE_EENHEDEN : GEWICHT_EENHEDEN;
    setVan(nieuweEenheden[0]);
    setNaar(nieuweEenheden[1]);
  }

  return (
    <div className="rounded-xl border border-border bg-surface p-6">
      <div className="grid gap-4">
        <SelectField
          id="categorie"
          label="Categorie"
          value={categorie}
          onChange={(value) => wijzigCategorie(value as EenhedenCategorie)}
          options={[
            { value: "lengte", label: "Lengte" },
            { value: "gewicht", label: "Gewicht" },
          ]}
        />
        <div className="grid gap-4 sm:grid-cols-3">
          <NumberField
            id="waarde"
            label="Waarde"
            value={waarde}
            onChange={setWaarde}
            error={waardeValidation.valid ? undefined : waardeValidation.error}
          />
          <SelectField
            id="van"
            label="Van"
            value={van}
            onChange={setVan}
            options={eenheden.map((eenheid) => ({ value: eenheid, label: EENHEID_LABELS[eenheid] }))}
          />
          <SelectField
            id="naar"
            label="Naar"
            value={naar}
            onChange={setNaar}
            options={eenheden.map((eenheid) => ({ value: eenheid, label: EENHEID_LABELS[eenheid] }))}
          />
        </div>
      </div>

      {result !== null && (
        <div className="mt-6">
          <ResultCard
            heading="Resultaat"
            primary={{
              label: `${waarde} ${EENHEID_LABELS[van as LengteEenheid | GewichtEenheid]}`,
              value: `${formatNumber(result, 6)} ${EENHEID_LABELS[naar as LengteEenheid | GewichtEenheid]}`,
            }}
          />
        </div>
      )}
    </div>
  );
}
