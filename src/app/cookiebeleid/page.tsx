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
      intro="Laatst bijgewerkt: 8 september 2026."
      sections={[
        {
          heading: "Wat zijn cookies",
          body: [
            "Cookies zijn kleine tekstbestanden die op je apparaat worden opgeslagen wanneer je een website bezoekt.",
          ],
        },
        {
          heading: "Noodzakelijke cookies",
          body: [
            "Rekenstation.nl gebruikt momenteel alleen technisch noodzakelijke functionaliteit, zoals het onthouden van je voorkeur voor licht of donker thema. Hiervoor is geen toestemming vereist.",
          ],
        },
        {
          heading: "Niet-noodzakelijke cookies",
          body: [
            "Op dit moment plaatst Rekenstation.nl geen niet-noodzakelijke cookies (zoals analytics- of advertentiecookies). Zodra dit verandert, bijvoorbeeld bij het toevoegen van advertenties of statistieken, wordt hier een toestemmingsmechanisme (cookiebanner) voor toegevoegd en dit beleid bijgewerkt.",
          ],
        },
        {
          heading: "Cookies beheren",
          body: [
            "Je kunt cookies altijd zelf beheren of verwijderen via de instellingen van je browser.",
          ],
        },
      ]}
    />
  );
}
