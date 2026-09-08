interface ResultRow {
  label: string;
  value: string;
  emphasis?: boolean;
}

interface ResultCardProps {
  heading: string;
  primary: {
    label: string;
    value: string;
  };
  rows?: ResultRow[];
}

export function ResultCard({ heading, primary, rows = [] }: ResultCardProps) {
  return (
    <div className="rounded-xl border border-border bg-mint p-6">
      <p className="text-sm font-medium text-muted">{heading}</p>
      <p className="mt-1 text-sm text-muted">{primary.label}</p>
      <p className="text-4xl font-bold tracking-tight text-brand-dark">
        {primary.value}
      </p>

      {rows.length > 0 && (
        <dl className="mt-4 space-y-2 border-t border-border/60 pt-4">
          {rows.map((row) => (
            <div key={row.label} className="flex items-center justify-between text-sm">
              <dt className="text-muted">{row.label}</dt>
              <dd className={row.emphasis ? "font-semibold text-foreground" : "text-foreground"}>
                {row.value}
              </dd>
            </div>
          ))}
        </dl>
      )}
    </div>
  );
}
