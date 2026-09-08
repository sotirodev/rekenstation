import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: "Disclaimer voor de calculators op Rekenstation.nl.",
  alternates: { canonical: "/disclaimer" },
};

export default function DisclaimerPage() {
  return (
    <LegalPage
      title="Disclaimer"
      sections={[
        {
          heading: "Indicatieve berekeningen",
          body: [
            "De resultaten van de calculators op Rekenstation.nl zijn bedoeld als indicatie en kunnen afwijken van je werkelijke situatie. Aan de uitkomsten kunnen geen rechten worden ontleend.",
          ],
        },
        {
          heading: "Financiële, fiscale en hypotheekcalculators",
          body: [
            "Calculators zoals de bruto-netto calculator en de hypotheek calculator houden geen rekening met alle persoonlijke omstandigheden. Voor persoonlijk financieel, fiscaal of hypotheekadvies raden we aan een erkend adviseur te raadplegen.",
          ],
        },
        {
          heading: "Gezondheidscalculators",
          body: [
            "Calculators zoals de BMI calculator zijn niet bedoeld als medisch advies. Raadpleeg bij vragen over je gezondheid altijd een arts.",
          ],
        },
      ]}
    />
  );
}
