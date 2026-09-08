const currencyFormatter = new Intl.NumberFormat("nl-NL", {
  style: "currency",
  currency: "EUR",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const currencyFormatterWhole = new Intl.NumberFormat("nl-NL", {
  style: "currency",
  currency: "EUR",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

export function formatCurrency(value: number, decimals: boolean = true): string {
  if (!Number.isFinite(value)) return "€ 0,00";
  return decimals ? currencyFormatter.format(value) : currencyFormatterWhole.format(value);
}
