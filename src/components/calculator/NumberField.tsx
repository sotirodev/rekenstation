interface NumberFieldProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  prefix?: string;
  suffix?: string;
  placeholder?: string;
  inputMode?: "decimal" | "numeric";
}

export function NumberField({
  id,
  label,
  value,
  onChange,
  error,
  prefix,
  suffix,
  placeholder,
  inputMode = "decimal",
}: NumberFieldProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-foreground">
        {label}
      </label>
      <div
        className={`flex items-center rounded-lg border bg-surface transition-colors focus-within:ring-2 focus-within:ring-brand/40 ${
          error ? "border-danger" : "border-border"
        }`}
      >
        {prefix && (
          <span className="pl-3 text-sm text-muted select-none">{prefix}</span>
        )}
        <input
          id={id}
          type="text"
          inputMode={inputMode}
          value={value}
          placeholder={placeholder}
          onChange={(event) => onChange(event.target.value)}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : undefined}
          className="w-full rounded-lg bg-transparent px-3 py-2.5 text-base text-foreground outline-none placeholder:text-muted"
        />
        {suffix && (
          <span className="pr-3 text-sm text-muted select-none">{suffix}</span>
        )}
      </div>
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-sm text-danger">
          {error}
        </p>
      )}
    </div>
  );
}
