export interface TijdzoneOptie {
  id: string;
  label: string;
}

export const TIJDZONES: TijdzoneOptie[] = [
  { id: "Europe/Amsterdam", label: "Amsterdam" },
  { id: "Europe/London", label: "Londen" },
  { id: "Europe/Moscow", label: "Moskou" },
  { id: "Europe/Istanbul", label: "Istanbul" },
  { id: "America/New_York", label: "New York" },
  { id: "America/Chicago", label: "Chicago" },
  { id: "America/Denver", label: "Denver" },
  { id: "America/Los_Angeles", label: "Los Angeles" },
  { id: "America/Sao_Paulo", label: "São Paulo" },
  { id: "America/Toronto", label: "Toronto" },
  { id: "Asia/Dubai", label: "Dubai" },
  { id: "Asia/Kolkata", label: "Mumbai / New Delhi" },
  { id: "Asia/Bangkok", label: "Bangkok" },
  { id: "Asia/Jakarta", label: "Jakarta" },
  { id: "Asia/Singapore", label: "Singapore" },
  { id: "Asia/Hong_Kong", label: "Hongkong" },
  { id: "Asia/Shanghai", label: "Peking / Shanghai" },
  { id: "Asia/Tokyo", label: "Tokio" },
  { id: "Australia/Sydney", label: "Sydney" },
  { id: "Pacific/Auckland", label: "Auckland" },
  { id: "Africa/Johannesburg", label: "Johannesburg" },
];

/**
 * Bepaalt de UTC-offset (in minuten) van een tijdzone op een gegeven moment,
 * via de door de browser/Node.js meegeleverde IANA-tijdzonedatabase (Intl).
 * Houdt hierdoor automatisch rekening met zomer-/wintertijd, zonder dat wij
 * zelf offsets of DST-regels hoeven bij te houden.
 */
function offsetInMinuten(timeZone: string, moment: Date): number {
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone,
    hourCycle: "h23",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  const parts = formatter.formatToParts(moment).reduce<Record<string, string>>((acc, part) => {
    acc[part.type] = part.value;
    return acc;
  }, {});

  const alsUtc = Date.UTC(
    Number(parts.year),
    Number(parts.month) - 1,
    Number(parts.day),
    Number(parts.hour),
    Number(parts.minute),
    Number(parts.second),
  );

  return (alsUtc - moment.getTime()) / 60_000;
}

export interface TijdsverschilResult {
  verschilInMinuten: number;
  offsetVan: number;
  offsetNaar: number;
}

export function berekenTijdsverschil(van: string, naar: string, moment: Date): TijdsverschilResult {
  const offsetVan = offsetInMinuten(van, moment);
  const offsetNaar = offsetInMinuten(naar, moment);
  return { verschilInMinuten: offsetNaar - offsetVan, offsetVan, offsetNaar };
}
