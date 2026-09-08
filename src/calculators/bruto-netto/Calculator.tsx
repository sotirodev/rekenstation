"use client";

import { useMemo, useState } from "react";
import { NumberField } from "@/components/calculator/NumberField";
import { SelectField } from "@/components/calculator/SelectField";
import { DateField } from "@/components/calculator/DateField";
import { ResultCard } from "@/components/calculator/ResultCard";
import { validateNumberInput } from "@/lib/validation/rules";
import { formatCurrency } from "@/lib/formatting/currency";
import { formatPercentage } from "@/lib/formatting/number";
import { berekenBrutoNetto, type SalarisPeriode } from "@/lib/calculations/bruto-netto";
import { availableTaxYears, defaultTaxYear } from "@/lib/tax-data";

const PERIODE_OPTIES: { value: SalarisPeriode; label: string }[] = [
  { value: "dag", label: "Per dag" },
  { value: "week", label: "Per week" },
  { value: "4-weken", label: "Per 4 weken" },
  { value: "maand", label: "Per maand" },
  { value: "kwartaal", label: "Per kwartaal" },
  { value: "jaar", label: "Per jaar" },
];

const PERIODE_LABELS: Record<SalarisPeriode, string> = {
  dag: "Per dag",
  week: "Per week",
  "4-weken": "Per 4 weken",
  maand: "Per maand",
  kwartaal: "Per kwartaal",
  jaar: "Per jaar",
};

function valideerGeboortedatum(waarde: string): string | undefined {
  if (waarde === "") return undefined;

  const datum = new Date(waarde);
  if (Number.isNaN(datum.getTime())) {
    return "Vul een geldige geboortedatum in.";
  }
  if (datum > new Date()) {
    return "Geboortedatum kan niet in de toekomst liggen.";
  }
  return undefined;
}

export function BrutoNettoCalculator() {
  const [bruto, setBruto] = useState("");
  const [periode, setPeriode] = useState<SalarisPeriode>("maand");
  const [belastingjaar, setBelastingjaar] = useState(defaultTaxYear);
  const [geboortedatum, setGeboortedatum] = useState("");
  const [loonheffingskorting, setLoonheffingskorting] = useState(true);

  const validation = validateNumberInput(bruto, {
    fieldLabel: "brutosalaris",
    min: 0,
    max: 1_000_000,
  });
  const geboortedatumError = valideerGeboortedatum(geboortedatum);

  const result = useMemo(() => {
    if (!validation.valid || geboortedatumError) return null;
    return berekenBrutoNetto({
      bruto: validation.value,
      periode,
      belastingjaar,
      geboortedatum: geboortedatum || undefined,
      loonheffingskorting,
    });
  }, [
    validation.valid,
    validation.value,
    periode,
    belastingjaar,
    geboortedatum,
    geboortedatumError,
    loonheffingskorting,
  ]);

  return (
    <div className="rounded-xl border border-border bg-surface p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <NumberField
          id="bruto"
          label="Brutosalaris"
          value={bruto}
          onChange={setBruto}
          prefix="€"
          error={validation.valid ? undefined : validation.error}
        />
        <SelectField
          id="periode"
          label="Periode"
          value={periode}
          onChange={(value) => setPeriode(value as SalarisPeriode)}
          options={PERIODE_OPTIES}
        />
        <SelectField
          id="belastingjaar"
          label="Belastingjaar"
          value={String(belastingjaar)}
          onChange={(value) => setBelastingjaar(Number(value))}
          options={availableTaxYears.map((jaar) => ({
            value: String(jaar),
            label: String(jaar),
          }))}
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
        <div className="sm:col-span-2">
          <DateField
            id="geboortedatum"
            label="Geboortedatum (optioneel)"
            value={geboortedatum}
            onChange={setGeboortedatum}
            error={geboortedatumError}
            helperText="Nodig om te bepalen of het (lagere) AOW-tarief van toepassing is."
          />
        </div>
      </div>

      {result && (
        <div className="mt-6">
          <ResultCard
            heading={`Netto salaris (${belastingjaar})`}
            primary={{
              label: PERIODE_LABELS[periode],
              value: formatCurrency(result.nettoPerPeriode),
            }}
            rows={[
              {
                label: "Brutosalaris (jaar)",
                value: formatCurrency(result.brutoPerJaar, false),
              },
              {
                label: "Loonheffing (jaar)",
                value: formatCurrency(result.loonheffing, false),
              },
              {
                label: "Algemene heffingskorting",
                value: formatCurrency(result.algemeneHeffingskorting, false),
              },
              {
                label: "Arbeidskorting",
                value: formatCurrency(result.arbeidskorting, false),
              },
              {
                label: "Netto percentage",
                value: formatPercentage(result.nettoPercentage),
                emphasis: true,
              },
            ]}
          />
          <div className="mt-3 space-y-1 text-xs text-muted">
            <p>
              Deze berekening is gebaseerd op de officiële Belastingdienst-tarieven voor{" "}
              {belastingjaar}
              {result.heeftAowLeeftijd
                ? " voor iemand die de AOW-leeftijd heeft bereikt"
                : " voor iemand onder de AOW-leeftijd"}
              , zonder rekening te houden met pensioenpremie, ZVW-bijdrage of andere persoonlijke
              omstandigheden. Het resultaat is een indicatie en kan afwijken van je werkelijke
              nettosalaris.
            </p>
            <p>
              Deze calculator rekent op jaarbasis en deelt dat gelijkmatig over de gekozen periode.
              Officiële loonstroken gebruiken de aparte loonbelastingtabellen per loontijdvak
              (dag/week/4-weken/maand/kwartaal), wat door afronding tot een klein verschil van
              meestal minder dan een paar euro per maand kan leiden.
            </p>
            {!result.loonheffingskortingToegepast && (
              <p>
                De algemene heffingskorting en arbeidskorting zijn niet toegepast, omdat je hebt
                aangegeven dat de loonheffingskorting hier niet geldt.
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
