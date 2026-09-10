import type { ComponentType } from "react";
import { EenhedenCalculator } from "./Calculator";
import type { EenhedenCategorie, LengteEenheid, GewichtEenheid } from "@/lib/calculations/eenheden";

/**
 * Maakt een variant van de generieke eenhedencalculator met vooraf ingevulde
 * eenheden, voor gebruik als losse landingspagina per veelgezochte
 * omrekening (bijvoorbeeld "cm naar inch"). De gebruiker kan de eenheden
 * nog altijd wijzigen; alleen de startwaarden verschillen per pagina.
 */
export function createEenheidConversieCalculator(
  categorie: EenhedenCategorie,
  van: LengteEenheid | GewichtEenheid,
  naar: LengteEenheid | GewichtEenheid,
): ComponentType {
  return function EenheidConversieCalculator() {
    return <EenhedenCalculator initialCategorie={categorie} initialVan={van} initialNaar={naar} />;
  };
}
