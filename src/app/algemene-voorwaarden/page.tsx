import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Algemene voorwaarden",
  description: "De algemene voorwaarden voor het gebruik van Rekenstation.nl.",
  alternates: { canonical: "/algemene-voorwaarden" },
};

export default function AlgemeneVoorwaardenPage() {
  return (
    <LegalPage
      title="Algemene voorwaarden"
      intro="Laatst bijgewerkt: 8 september 2026."
      sections={[
        {
          heading: "Gebruik van de website",
          body: [
            "Rekenstation.nl stelt gratis online calculators beschikbaar voor persoonlijk, niet-commercieel gebruik. Vragen kun je stellen via contact@rekenstation.nl.",
          ],
        },
        {
          heading: "Geen advies",
          body: [
            "De informatie en berekeningen op Rekenstation.nl zijn bedoeld ter indicatie en vormen geen financieel, fiscaal, juridisch of medisch advies. Zie ook onze disclaimer.",
          ],
        },
        {
          heading: "Aansprakelijkheid",
          body: [
            "Rekenstation spant zich in om de calculators zo nauwkeurig mogelijk te houden, maar kan niet garanderen dat alle berekeningen te allen tijde volledig foutloos of actueel zijn. Aan de resultaten kunnen geen rechten worden ontleend.",
          ],
        },
        {
          heading: "Wijzigingen",
          body: [
            "Deze algemene voorwaarden kunnen worden aangepast. De meest actuele versie staat op deze pagina.",
          ],
        },
      ]}
    />
  );
}
