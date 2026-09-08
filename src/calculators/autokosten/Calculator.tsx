"use client";

import { useMemo, useState } from "react";
import { NumberField } from "@/components/calculator/NumberField";
import { ResultCard } from "@/components/calculator/ResultCard";
import { validateNumberInput } from "@/lib/validation/rules";
import { formatCurrency } from "@/lib/formatting/currency";
import { berekenAutokosten } from "@/lib/calculations/autokosten";

export function AutokostenCalculator() {
  const [km, setKm] = useState("");
  const [verbruik, setVerbruik] = useState("");
  const [prijs, setPrijs] = useState("");
  const [verzekering, setVerzekering] = useState("");
  const [wegenbelasting, setWegenbelasting] = useState("");
  const [onderhoud, setOnderhoud] = useState("");
  const [afschrijving, setAfschrijving] = useState("");

  const fields = {
    km: validateNumberInput(km, { fieldLabel: "aantal kilometers", min: 0, max: 100_000 }),
    verbruik: validateNumberInput(verbruik, { fieldLabel: "brandstofverbruik", min: 0, max: 100 }),
    prijs: validateNumberInput(prijs, { fieldLabel: "brandstofprijs", min: 0, max: 10 }),
    verzekering: validateNumberInput(verzekering, { fieldLabel: "verzekering", min: 0, max: 10_000 }),
    wegenbelasting: validateNumberInput(wegenbelasting, { fieldLabel: "wegenbelasting", min: 0, max: 10_000 }),
    onderhoud: validateNumberInput(onderhoud, { fieldLabel: "onderhoudskosten", min: 0, max: 10_000 }),
    afschrijving: validateNumberInput(afschrijving, { fieldLabel: "afschrijving", min: 0, max: 10_000 }),
  };

  const alleGeldig = Object.values(fields).every((f) => f.valid);

  const result = useMemo(() => {
    if (!alleGeldig) return null;
    return berekenAutokosten({
      kmPerMaand: fields.km.value,
      verbruikPer100km: fields.verbruik.value,
      brandstofprijsPerLiter: fields.prijs.value,
      verzekeringPerMaand: fields.verzekering.value,
      wegenbelastingPerMaand: fields.wegenbelasting.value,
      onderhoudPerMaand: fields.onderhoud.value,
      afschrijvingPerMaand: fields.afschrijving.value,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [alleGeldig, km, verbruik, prijs, verzekering, wegenbelasting, onderhoud, afschrijving]);

  return (
    <div className="rounded-xl border border-border bg-surface p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <NumberField
          id="km"
          label="Kilometers per maand"
          value={km}
          onChange={setKm}
          suffix="km"
          error={fields.km.valid ? undefined : fields.km.error}
        />
        <NumberField
          id="verbruik"
          label="Brandstofverbruik"
          value={verbruik}
          onChange={setVerbruik}
          suffix="L/100km"
          error={fields.verbruik.valid ? undefined : fields.verbruik.error}
        />
        <NumberField
          id="prijs"
          label="Brandstofprijs"
          value={prijs}
          onChange={setPrijs}
          prefix="€"
          suffix="/L"
          error={fields.prijs.valid ? undefined : fields.prijs.error}
        />
        <NumberField
          id="verzekering"
          label="Verzekering per maand"
          value={verzekering}
          onChange={setVerzekering}
          prefix="€"
          error={fields.verzekering.valid ? undefined : fields.verzekering.error}
        />
        <NumberField
          id="wegenbelasting"
          label="Wegenbelasting per maand"
          value={wegenbelasting}
          onChange={setWegenbelasting}
          prefix="€"
          error={fields.wegenbelasting.valid ? undefined : fields.wegenbelasting.error}
        />
        <NumberField
          id="onderhoud"
          label="Onderhoud per maand"
          value={onderhoud}
          onChange={setOnderhoud}
          prefix="€"
          error={fields.onderhoud.valid ? undefined : fields.onderhoud.error}
        />
        <NumberField
          id="afschrijving"
          label="Afschrijving per maand"
          value={afschrijving}
          onChange={setAfschrijving}
          prefix="€"
          error={fields.afschrijving.valid ? undefined : fields.afschrijving.error}
        />
      </div>

      {result && (
        <div className="mt-6">
          <ResultCard
            heading="Geschatte autokosten"
            primary={{ label: "Per maand", value: formatCurrency(result.totaalPerMaand) }}
            rows={[
              { label: "Brandstofkosten per maand", value: formatCurrency(result.brandstofkostenPerMaand) },
              { label: "Per jaar", value: formatCurrency(result.totaalPerJaar, false) },
              { label: "Kosten per kilometer", value: formatCurrency(result.kostenPerKm), emphasis: true },
            ]}
          />
        </div>
      )}
    </div>
  );
}
