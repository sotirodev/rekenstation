"use client";

import { useMemo, useState } from "react";
import { NumberField } from "@/components/calculator/NumberField";
import { SelectField } from "@/components/calculator/SelectField";
import { ResultCard } from "@/components/calculator/ResultCard";
import { validateNumberInput } from "@/lib/validation/rules";
import { formatNumber } from "@/lib/formatting/number";
import { berekenLichaamsvet, type Geslacht } from "@/lib/calculations/lichaamsvet";

export function LichaamsvetpercentageCalculator() {
  const [geslacht, setGeslacht] = useState<Geslacht>("man");
  const [lengte, setLengte] = useState("");
  const [nek, setNek] = useState("");
  const [taille, setTaille] = useState("");
  const [heup, setHeup] = useState("");

  const lengteValidation = validateNumberInput(lengte, { fieldLabel: "lengte", min: 100, max: 250 });
  const nekValidation = validateNumberInput(nek, { fieldLabel: "nekomtrek", min: 20, max: 80 });
  const tailleValidation = validateNumberInput(taille, { fieldLabel: "tailleomtrek", min: 40, max: 200 });
  const heupValidation = validateNumberInput(heup, { fieldLabel: "heupomtrek", min: 40, max: 200 });

  const alleGeldig =
    lengteValidation.valid &&
    nekValidation.valid &&
    tailleValidation.valid &&
    (geslacht === "man" || heupValidation.valid);

  const result = useMemo(() => {
    if (!alleGeldig) return null;
    return berekenLichaamsvet({
      geslacht,
      lengteCm: lengteValidation.value,
      nekCm: nekValidation.value,
      tailleCm: tailleValidation.value,
      heupCm: geslacht === "vrouw" ? heupValidation.value : undefined,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [alleGeldig, geslacht, lengte, nek, taille, heup]);

  return (
    <div className="rounded-xl border border-border bg-surface p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <SelectField
          id="geslacht"
          label="Geslacht"
          value={geslacht}
          onChange={(value) => setGeslacht(value as Geslacht)}
          options={[
            { value: "man", label: "Man" },
            { value: "vrouw", label: "Vrouw" },
          ]}
        />
        <NumberField
          id="lengte"
          label="Lengte"
          value={lengte}
          onChange={setLengte}
          suffix="cm"
          error={lengteValidation.valid ? undefined : lengteValidation.error}
        />
        <NumberField
          id="nek"
          label="Nekomtrek"
          value={nek}
          onChange={setNek}
          suffix="cm"
          error={nekValidation.valid ? undefined : nekValidation.error}
        />
        <NumberField
          id="taille"
          label="Tailleomtrek"
          value={taille}
          onChange={setTaille}
          suffix="cm"
          error={tailleValidation.valid ? undefined : tailleValidation.error}
        />
        {geslacht === "vrouw" && (
          <NumberField
            id="heup"
            label="Heupomtrek"
            value={heup}
            onChange={setHeup}
            suffix="cm"
            error={heupValidation.valid ? undefined : heupValidation.error}
          />
        )}
      </div>

      {result && (
        <div className="mt-6">
          <ResultCard
            heading="Lichaamsvetpercentage"
            primary={{ label: "Indicatie", value: `${formatNumber(result.lichaamsvetPercentage, 1)}%` }}
          />
          <p className="mt-3 text-xs text-muted">
            Gebaseerd op de US Navy-methode. Dit is een indicatie op basis van omtrekmetingen,
            geen medische meting. Meet de nek net onder het strottenhoofd, de taille op het
            smalste punt en (bij vrouwen) de heup op het breedste punt.
          </p>
        </div>
      )}
    </div>
  );
}
