import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Cookiebeleid",
  description: "Lees welke cookies Rekenstation.nl gebruikt.",
  alternates: { canonical: "/cookiebeleid" },
};

export default function CookiebeleidPage() {
  return (
    <LegalPage
      title="Cookiebeleid"
      intro="Laatst bijgewerkt: 14 september 2026."
      sections={[
        {
          heading: "Wat zijn cookies",
          body: [
            "Cookies zijn kleine tekstbestanden die op je apparaat worden opgeslagen wanneer je een website bezoekt.",
          ],
        },
        {
          heading: "Noodzakelijke cookies en lokale opslag",
          body: [
            "Rekenstation.nl gebruikt technisch noodzakelijke lokale opslag, zoals het onthouden van je voorkeur voor licht of donker thema, je cookiekeuze, en (optioneel) je favoriete calculators. Hiervoor is geen toestemming vereist, omdat dit nodig is om de site te laten werken zoals je verwacht.",
          ],
        },
        {
          heading: "Niet-noodzakelijke cookies",
          body: [
            "Rekenstation.nl gebruikt Google Analytics om websitestatistieken bij te houden (bijvoorbeeld hoeveel bezoekers de site heeft), en Google AdSense om straks advertenties te kunnen tonen. Beide diensten kunnen cookies plaatsen op je apparaat.",
            "Deze cookies worden pas geplaatst nadat je hier toestemming voor hebt gegeven via de cookiemelding. Weiger je, dan worden deze cookies niet geplaatst.",
          ],
        },
        {
          heading: "Je toestemming aanpassen",
          body: [
            "Je kunt je keuze op elk moment wijzigen via 'Cookie-instellingen' onderaan de site.",
          ],
        },
        {
          heading: "Cookies beheren",
          body: [
            "Je kunt cookies ook altijd zelf beheren of verwijderen via de instellingen van je browser.",
          ],
        },
      ]}
    />
  );
}
