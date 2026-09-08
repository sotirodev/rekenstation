import { parseNlNumber } from "@/lib/formatting/number";

export interface ValidationResult {
  valid: boolean;
  error?: string;
  value: number;
}

interface ValidateNumberOptions {
  min?: number;
  max?: number;
  fieldLabel: string;
  allowZero?: boolean;
}

export function validateNumberInput(
  rawValue: string,
  { min = 0, max = Infinity, fieldLabel, allowZero = true }: ValidateNumberOptions,
): ValidationResult {
  if (rawValue.trim() === "") {
    return { valid: false, error: `Vul een geldige ${fieldLabel} in.`, value: NaN };
  }

  const value = parseNlNumber(rawValue);

  if (Number.isNaN(value)) {
    return { valid: false, error: `Vul een geldig getal in voor ${fieldLabel}.`, value: NaN };
  }

  if (!allowZero && value === 0) {
    return { valid: false, error: `${fieldLabel} mag niet 0 zijn.`, value };
  }

  if (value < min) {
    return {
      valid: false,
      error: `${fieldLabel} moet minimaal ${min} zijn.`,
      value,
    };
  }

  if (value > max) {
    return {
      valid: false,
      error: `${fieldLabel} moet maximaal ${max} zijn.`,
      value,
    };
  }

  return { valid: true, value };
}
