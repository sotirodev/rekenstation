"use client";

import { useState } from "react";

interface DateFieldProps {
  id: string;
  label: string;
  /** ISO-datum (YYYY-MM-DD), of lege string als er nog niets is gekozen. */
  value: string;
  onChange: (value: string) => void;
  error?: string;
  helperText?: string;
  minYear?: number;
  maxYear?: number;
}

const MAAND_NAMEN = [
  "januari",
  "februari",
  "maart",
  "april",
  "mei",
  "juni",
  "juli",
  "augustus",
  "september",
  "oktober",
  "november",
  "december",
];

function parseIso(value: string): { dag: string; maand: string; jaar: string } {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);
  if (!match) return { dag: "", maand: "", jaar: "" };
  const [, jaar, maand, dag] = match;
  return { dag: String(Number(dag)), maand: String(Number(maand)), jaar };
}

function daysInMonth(maand: number, jaar: number): number {
  return new Date(jaar, maand, 0).getDate();
}

/**
 * Eigen dag/maand/jaar-kiezer i.p.v. de ingebouwde browser-datumkiezer.
 * Een `<input type="date">` toont zijn formaat (dag/maand/jaar vs.
 * maand/dag/jaar) op basis van de taalinstelling van de browser/het
 * besturingssysteem van de bezoeker, niet op basis van deze website. Door
 * zelf drie dropdowns te renderen, tonen we altijd dag, maand, jaar,
 * ongeacht de instellingen van de bezoeker.
 *
 * Houdt de drie losse keuzes in lokale state bij (in plaats van steeds
 * terug te lezen uit de ISO-waarde), zodat een al gekozen dag niet
 * verdwijnt zolang maand of jaar nog niet zijn gekozen.
 */
export function DateField({
  id,
  label,
  value,
  onChange,
  error,
  helperText,
  minYear,
  maxYear,
}: DateFieldProps) {
  const huidigJaar = new Date().getFullYear();
  const jaarMin = minYear ?? huidigJaar - 120;
  const jaarMax = maxYear ?? huidigJaar + 10;

  const [parts, setParts] = useState(() => parseIso(value));
  const [touched, setTouched] = useState(false);
  const { dag, maand, jaar } = parts;
  const maxDagen = maand && jaar ? daysInMonth(Number(maand), Number(jaar)) : 31;
  const toonFout = touched ? error : undefined;

  function update(nieuweDag: string, nieuweMaand: string, nieuwJaar: string) {
    setParts({ dag: nieuweDag, maand: nieuweMaand, jaar: nieuwJaar });
    setTouched(true);

    if (!nieuweDag || !nieuweMaand || !nieuwJaar) {
      onChange("");
      return;
    }
    const geclampteDag = Math.min(
      Number(nieuweDag),
      daysInMonth(Number(nieuweMaand), Number(nieuwJaar)),
    );
    onChange(
      `${nieuwJaar}-${String(nieuweMaand).padStart(2, "0")}-${String(geclampteDag).padStart(2, "0")}`,
    );
  }

  const selectClass = `rounded-lg border bg-surface px-2.5 py-2.5 text-base text-foreground outline-none transition-colors focus:ring-2 focus:ring-brand/40 ${
    toonFout ? "border-danger" : "border-border"
  }`;

  return (
    <div>
      <p id={`${id}-label`} className="mb-1.5 block text-sm font-medium text-foreground">
        {label}
      </p>
      <div className="grid grid-cols-3 gap-2" role="group" aria-labelledby={`${id}-label`}>
        <select
          id={id}
          aria-label="Dag"
          value={dag}
          onChange={(event) => update(event.target.value, maand, jaar)}
          className={selectClass}
        >
          <option value="">Dag</option>
          {Array.from({ length: maxDagen }, (_, i) => i + 1).map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </select>
        <select
          aria-label="Maand"
          value={maand}
          onChange={(event) => update(dag, event.target.value, jaar)}
          className={selectClass}
        >
          <option value="">Maand</option>
          {MAAND_NAMEN.map((naam, index) => (
            <option key={naam} value={index + 1}>
              {naam}
            </option>
          ))}
        </select>
        <select
          aria-label="Jaar"
          value={jaar}
          onChange={(event) => update(dag, maand, event.target.value)}
          className={selectClass}
        >
          <option value="">Jaar</option>
          {Array.from({ length: jaarMax - jaarMin + 1 }, (_, i) => jaarMax - i).map((j) => (
            <option key={j} value={j}>
              {j}
            </option>
          ))}
        </select>
      </div>
      {toonFout ? (
        <p id={`${id}-error`} className="mt-1.5 text-sm text-danger">
          {toonFout}
        </p>
      ) : (
        helperText && <p className="mt-1.5 text-sm text-muted">{helperText}</p>
      )}
    </div>
  );
}
