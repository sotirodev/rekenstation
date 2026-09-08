type AdPosition = "top" | "between-content" | "sidebar";

const sizeByPosition: Record<AdPosition, string> = {
  top: "h-24 w-full",
  "between-content": "h-32 w-full",
  sidebar: "h-[600px] w-full max-w-[300px]",
};

/**
 * Zet op true zodra er een AdSense-account is goedgekeurd en er echte
 * advertentiecode in deze component is gezet. Tot die tijd rendert dit
 * component niets, zodat bezoekers geen lege placeholder te zien krijgen.
 */
const ADS_ENABLED = false;

/**
 * Advertentieruimte. Reserveert een vaste grootte zodat de layout niet
 * verspringt (CLS) zodra hier echte advertenties komen.
 */
export function AdSlot({ position }: { position: AdPosition }) {
  if (!ADS_ENABLED) return null;

  return (
    <div
      className={`flex items-center justify-center rounded-lg border border-dashed border-border bg-surface-muted text-xs text-muted ${sizeByPosition[position]}`}
      aria-hidden
    >
      Advertentieruimte
    </div>
  );
}
