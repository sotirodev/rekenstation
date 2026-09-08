export type BmiCategorie =
  | "ondergewicht"
  | "gezond gewicht"
  | "overgewicht"
  | "obesitas";

export interface BmiInput {
  gewichtKg: number;
  lengteCm: number;
}

export interface BmiResult {
  bmi: number;
  categorie: BmiCategorie;
}

export function bepaalBmiCategorie(bmi: number): BmiCategorie {
  if (bmi < 18.5) return "ondergewicht";
  if (bmi < 25) return "gezond gewicht";
  if (bmi < 30) return "overgewicht";
  return "obesitas";
}

export function berekenBmi({ gewichtKg, lengteCm }: BmiInput): BmiResult {
  const lengteM = lengteCm / 100;
  const bmi = gewichtKg / (lengteM * lengteM);

  return {
    bmi,
    categorie: bepaalBmiCategorie(bmi),
  };
}
