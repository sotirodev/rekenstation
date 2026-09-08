"use client";

import { useMemo, useState } from "react";
import { NumberField } from "@/components/calculator/NumberField";
import { ResultCard } from "@/components/calculator/ResultCard";
import { validateNumberInput } from "@/lib/validation/rules";
import { formatCurrency } from "@/lib/formatting/currency";
import { berekenSpaarrente } from "@/lib/calculations/spaarrente";

export function SpaarrenteCalculator() {
  const [startkapitaal, setStartkapitaal] = useState("");
  const [inleg, setInleg] = useState("");
  const [rente, setRente] = useState("");
  const [looptijd, setLooptijd] = useState("");

  const fields = {
    startkapitaal: validateNumberInput(startkapitaal, { fieldLabel: "startkapitaal", min: 0, max: 100_000_000 }),
    inleg: validateNumberInput(inleg, { fieldLabel: "maandelijkse inleg", min: 0, max: 1_000_000 }),
    rente: validateNumberInput(rente, { fieldLabel: "rentepercentage", min: 0, max: 50 }),
    looptijd: validateNumberInput(looptijd, { fieldLabel: "looptijd", min: 1, max: 80 }),
  };

  const alleGeldig = Object.values(fields).every((f) => f.valid);

  const result = useMemo(() => {
    if (!alleGeldig) return null;
    return berekenSpaarrente({
      startkapitaal: fields.startkapitaal.value,
      maandelijkseInleg: fields.inleg.value,
      rentePercentagePerJaar: fields.rente.value,
      looptijdJaren: fields.looptijd.value,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [alleGeldig, startkapitaal, inleg, rente, looptijd]);

  return (
    <div className="rounded-xl border border-border bg-surface p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <NumberField
          id="startkapitaal"
          label="Startkapitaal"
          value={startkapitaal}
          onChange={setStartkapitaal}
          prefix="€"
          error={fields.startkapitaal.valid ? undefined : fields.startkapitaal.error}
        />
        <NumberField
          id="inleg"
          label="Maandelijkse inleg"
          value={inleg}
          onChange={setInleg}
          prefix="€"
          error={fields.inleg.valid ? undefined : fields.inleg.error}
        />
        <NumberField
          id="rente"
          label="Rente per jaar"
          value={rente}
          onChange={setRente}
          suffix="%"
          error={fields.rente.valid ? undefined : fields.rente.error}
        />
        <NumberField
          id="looptijd"
          label="Looptijd"
          value={looptijd}
          onChange={setLooptijd}
          suffix="jaar"
          error={fields.looptijd.valid ? undefined : fields.looptijd.error}
        />
      </div>

      {result && (
        <div className="mt-6">
          <ResultCard
            heading="Eindkapitaal"
            primary={{ label: "Na de gekozen looptijd", value: formatCurrency(result.eindkapitaal, false) }}
            rows={[
              { label: "Totaal ingelegd", value: formatCurrency(result.totaalIngelegd, false) },
              { label: "Waarvan rente", value: formatCurrency(result.totaleRente, false), emphasis: true },
            ]}
          />
          <p className="mt-3 text-xs text-muted">
            Deze berekening gaat uit van een vaste rente met maandelijkse rente-op-rente, en houdt
            geen rekening met belasting (box 3) of wijzigende rentetarieven.
          </p>
        </div>
      )}
    </div>
  );
}
