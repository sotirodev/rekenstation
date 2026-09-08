"use client";

import { useMemo, useState } from "react";
import { NumberField } from "@/components/calculator/NumberField";
import { ResultCard } from "@/components/calculator/ResultCard";
import { validateNumberInput } from "@/lib/validation/rules";
import { formatCurrency } from "@/lib/formatting/currency";
import { berekenZzpUurtarief } from "@/lib/calculations/zzp-uurtarief";

export function ZzpUurtariefCalculator() {
  const [nettoInkomen, setNettoInkomen] = useState("45000");
  const [kosten, setKosten] = useState("6000");
  const [uren, setUren] = useState("1200");
  const [reservering, setReservering] = useState("35");

  const nettoValidation = validateNumberInput(nettoInkomen, {
    fieldLabel: "gewenst netto jaarinkomen",
    min: 0,
    max: 10_000_000,
  });
  const kostenValidation = validateNumberInput(kosten, {
    fieldLabel: "zakelijke kosten",
    min: 0,
    max: 10_000_000,
  });
  const urenValidation = validateNumberInput(uren, {
    fieldLabel: "factureerbare uren",
    min: 1,
    max: 4000,
  });
  const reserveringValidation = validateNumberInput(reservering, {
    fieldLabel: "reserveringspercentage",
    min: 0,
    max: 90,
  });

  const result = useMemo(() => {
    if (!nettoValidation.valid || !kostenValidation.valid || !urenValidation.valid || !reserveringValidation.valid) {
      return null;
    }
    return berekenZzpUurtarief({
      gewenstNettoJaarinkomen: nettoValidation.value,
      zakelijkeKostenPerJaar: kostenValidation.value,
      factureerbareUrenPerJaar: urenValidation.value,
      belastingReserveringPercentage: reserveringValidation.value,
    });
  }, [
    nettoValidation.valid,
    nettoValidation.value,
    kostenValidation.valid,
    kostenValidation.value,
    urenValidation.valid,
    urenValidation.value,
    reserveringValidation.valid,
    reserveringValidation.value,
  ]);

  return (
    <div className="rounded-xl border border-border bg-surface p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <NumberField
          id="nettoInkomen"
          label="Gewenst netto jaarinkomen"
          value={nettoInkomen}
          onChange={setNettoInkomen}
          prefix="€"
          error={nettoValidation.valid ? undefined : nettoValidation.error}
        />
        <NumberField
          id="kosten"
          label="Zakelijke kosten per jaar"
          value={kosten}
          onChange={setKosten}
          prefix="€"
          error={kostenValidation.valid ? undefined : kostenValidation.error}
        />
        <NumberField
          id="uren"
          label="Factureerbare uren per jaar"
          value={uren}
          onChange={setUren}
          suffix="uur"
          error={urenValidation.valid ? undefined : urenValidation.error}
        />
        <NumberField
          id="reservering"
          label="Reservering belasting/premies"
          value={reservering}
          onChange={setReservering}
          suffix="%"
          error={reserveringValidation.valid ? undefined : reserveringValidation.error}
        />
      </div>

      {result && (
        <div className="mt-6">
          <ResultCard
            heading="Geadviseerd uurtarief"
            primary={{ label: "Uurtarief (excl. BTW)", value: formatCurrency(result.uurtarief) }}
            rows={[
              { label: "Benodigde omzet per jaar", value: formatCurrency(result.benodigdeOmzet, false), emphasis: true },
            ]}
          />
          <p className="mt-3 text-xs text-muted">
            Dit is een indicatief model dat geen rekening houdt met specifieke aftrekposten zoals de
            zelfstandigenaftrek of MKB-winstvrijstelling. Raadpleeg een boekhouder voor een
            nauwkeurige berekening.
          </p>
        </div>
      )}
    </div>
  );
}
