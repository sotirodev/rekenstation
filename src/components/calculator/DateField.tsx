interface DateFieldProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  helperText?: string;
}

export function DateField({ id, label, value, onChange, error, helperText }: DateFieldProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-foreground">
        {label}
      </label>
      <input
        id={id}
        type="date"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`w-full rounded-lg border bg-surface px-3 py-2.5 text-base text-foreground outline-none transition-colors focus:ring-2 focus:ring-brand/40 ${
          error ? "border-danger" : "border-border"
        }`}
      />
      {error ? (
        <p id={`${id}-error`} className="mt-1.5 text-sm text-danger">
          {error}
        </p>
      ) : (
        helperText && <p className="mt-1.5 text-sm text-muted">{helperText}</p>
      )}
    </div>
  );
}
