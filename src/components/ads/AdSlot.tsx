type AdPosition = "top" | "between-content" | "sidebar";

const sizeByPosition: Record<AdPosition, string> = {
  top: "h-24 w-full",
  "between-content": "h-32 w-full",
  sidebar: "h-[600px] w-full max-w-[300px]",
};

/**
 * Placeholder-advertentieruimte. Reserveert een vaste grootte zodat de layout
 * niet verspringt (CLS) wanneer hier later echte advertenties komen.
 */
export function AdSlot({ position }: { position: AdPosition }) {
  return (
    <div
      className={`flex items-center justify-center rounded-lg border border-dashed border-border bg-surface-muted text-xs text-muted ${sizeByPosition[position]}`}
      aria-hidden
    >
      Advertentieruimte
    </div>
  );
}
