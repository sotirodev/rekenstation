"use client";

import { useMemo, useState } from "react";
import { NumberField } from "@/components/calculator/NumberField";
import { ResultCard } from "@/components/calculator/ResultCard";
import { validateNumberInput } from "@/lib/validation/rules";
import { formatCurrency } from "@/lib/formatting/currency";
import { berekenSpaarrente } from "@/lib/calculations/spaarrente";

export function PensioenOpbouwCalculator() {
  const [startkapitaal, setStartkapitaal] = useState("");
  const [maandelijkseInleg, setMaandelijkseInleg] = useState("");
  const [rendement, setRendement] = useState("");
  const [jaren, setJaren] = useState("");

  const startkapitaalValidation = validateNumberInput(startkapitaal, {
    fieldLabel: "huidig opgebouwd vermogen",
    min: 0,
    max: 10_000_000,
  });
  const inlegValidation = validateNumberInput(maandelijkseInleg, {
    fieldLabel: "maandelijkse inleg",
    min: 0,
    max: 100_000,
  });
  const rendementValidation = validateNumberInput(rendement, {
    fieldLabel: "verwacht rendement per jaar",
    min: -20,
    max: 20,
  });
  const jarenValidation = validateNumberInput(jaren, {
    fieldLabel: "aantal jaren tot pensioen",
    min: 1,
    max: 80,
  });

  const alleGeldig =
    startkapitaalValidation.valid && inlegValidation.valid && rendementValidation.valid && jarenValidation.valid;

  const result = useMemo(() => {
    if (!alleGeldig) return null;
    return berekenSpaarrente({
      startkapitaal: startkapitaalValidation.value,
      maandelijkseInleg: inlegValidation.value,
      rentePercentagePerJaar: rendementValidation.value,
      looptijdJaren: jarenValidation.value,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [alleGeldig, startkapitaal, maandelijkseInleg, rendement, jaren]);

  return (
    <div className="rounded-xl border border-border bg-surface p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <NumberField
          id="startkapitaal"
          label="Huidig opgebouwd vermogen"
          value={startkapitaal}
          onChange={setStartkapitaal}
          prefix="€"
          error={startkapitaalValidation.valid ? undefined : startkapitaalValidation.error}
        />
        <NumberField
          id="maandelijkseInleg"
          label="Maandelijkse inleg"
          value={maandelijkseInleg}
          onChange={setMaandelijkseInleg}
          prefix="€"
          error={inlegValidation.valid ? undefined : inlegValidation.error}
        />
        <NumberField
          id="rendement"
          label="Verwacht rendement per jaar"
          value={rendement}
          onChange={setRendement}
          suffix="%"
          error={rendementValidation.valid ? undefined : rendementValidation.error}
        />
        <NumberField
          id="jaren"
          label="Aantal jaren tot pensioen"
          value={jaren}
          onChange={setJaren}
          suffix="jaar"
          error={jarenValidation.valid ? undefined : jarenValidation.error}
        />
      </div>

      {result && (
        <div className="mt-6">
          <ResultCard
            heading="Opgebouwd vermogen bij pensioen"
            primary={{ label: "Eindkapitaal", value: formatCurrency(result.eindkapitaal, false) }}
            rows={[
              { label: "Totaal ingelegd", value: formatCurrency(result.totaalIngelegd, false) },
              { label: "Waarvan rendement", value: formatCurrency(result.totaleRente, false), emphasis: true },
            ]}
          />
          <p className="mt-3 text-xs text-muted">
            Dit is een indicatie op basis van een vast verwacht rendement per jaar. Het
            werkelijke rendement van beleggingen schommelt en is nooit gegarandeerd. Dit is
            geen financieel advies.
          </p>
        </div>
      )}
    </div>
  );
}
