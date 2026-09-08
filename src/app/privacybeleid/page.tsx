import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Privacybeleid",
  description: "Lees hoe Rekenstation.nl omgaat met jouw persoonsgegevens.",
  alternates: { canonical: "/privacybeleid" },
};

export default function PrivacybeleidPage() {
  return (
    <LegalPage
      title="Privacybeleid"
      intro="Laatst bijgewerkt: [datum]. Dit privacybeleid is opgesteld met inachtneming van de Algemene Verordening Gegevensbescherming (AVG)."
      sections={[
        {
          heading: "Wie zijn wij",
          body: [
            "Rekenstation.nl wordt beheerd door [Bedrijfsnaam], gevestigd te [Adres] (KVK-nummer: [KVK-nummer indien van toepassing]). Voor vragen over dit privacybeleid kun je contact opnemen via [Contact e-mail].",
          ],
        },
        {
          heading: "Welke gegevens verwerken wij",
          body: [
            "De calculators op Rekenstation.nl werken volledig in je browser: de bedragen en waarden die je invult, worden niet naar onze servers verzonden of opgeslagen.",
            "Als je het contactformulier gebruikt, verwerken wij de gegevens die je zelf invult (naam, e-mailadres en bericht) om je vraag te kunnen beantwoorden.",
            "Wanneer analytics of andere trackingtools worden toegevoegd, wordt dit privacybeleid aangevuld met informatie over welke gegevens hiervoor worden verwerkt en op welke rechtsgrond.",
          ],
        },
        {
          heading: "Jouw rechten",
          body: [
            "Je hebt het recht om je gegevens in te zien, te laten corrigeren of te laten verwijderen. Neem hiervoor contact met ons op via [Contact e-mail].",
          ],
        },
        {
          heading: "Wijzigingen",
          body: [
            "We kunnen dit privacybeleid van tijd tot tijd aanpassen. De meest actuele versie staat altijd op deze pagina.",
          ],
        },
      ]}
    />
  );
}
