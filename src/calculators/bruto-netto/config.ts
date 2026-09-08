import { Wallet } from "lucide-react";
import type { CalculatorConfig } from "@/types/calculator";
import { defaultTaxYear } from "@/lib/tax-data";
import { BrutoNettoCalculator } from "./Calculator";

export const brutoNettoConfig: CalculatorConfig = {
  slug: "bruto-netto-calculator",
  title: "Bruto netto calculator",
  shortTitle: "Bruto-netto calculator",
  category: "geld-salaris",
  icon: Wallet,
  summary: "Bereken je netto salaris op basis van je brutosalaris.",
  metaDescription:
    "Bereken snel je netto salaris uit je brutosalaris met de actuele Belastingdienst-tarieven. Gratis bruto-netto calculator voor " +
    defaultTaxYear +
    " en eerdere jaren.",
  intro:
    "Vul je brutosalaris in en zie direct wat je netto overhoudt, op basis van de officiële Belastingdienst-tarieven.",
  explanation: {
    heading: "Hoe werkt deze berekening?",
    body: [
      "Deze calculator berekent je loonheffing op basis van de officiële Nederlandse belastingschijven (box 1) voor het gekozen belastingjaar. Van je brutoloon wordt eerst de belasting over de schijven berekend, waarna de algemene heffingskorting en arbeidskorting worden afgetrokken (tenzij je aangeeft dat de loonheffingskorting niet van toepassing is).",
      "Vul je geboortedatum in als je wilt dat de calculator rekening houdt met het lagere AOW-tarief in de eerste schijf. Laat je dit veld leeg, dan gaat de berekening uit van iemand onder de AOW-leeftijd.",
      "Het resultaat is een indicatie. De werkelijke inhoudingen op je loonstrook kunnen afwijken door bijvoorbeeld pensioenpremie, de inkomensafhankelijke bijdrage Zvw, of persoonlijke omstandigheden die niet in deze berekening zijn meegenomen.",
    ],
  },
  faq: [
    {
      question: "Waarom verschilt dit resultaat met mijn loonstrook of een andere rekentool?",
      answer:
        "Twee redenen. Ten eerste houdt je werkgever mogelijk ook pensioenpremie of andere inhoudingen in. Ten tweede rekent deze calculator op jaarbasis en deelt dat gelijkmatig over de gekozen periode, terwijl officiële loonstroken de aparte Belastingdienst-tabellen per loontijdvak gebruiken. Dat geeft door afronding meestal een verschil van een paar euro per maand.",
    },
    {
      question: "Welk belastingjaar moet ik kiezen?",
      answer:
        "Kies het jaar waarin je het salaris ontvangt of hebt ontvangen. De tarieven en heffingskortingen verschillen per jaar.",
    },
    {
      question: "Wat is loonheffingskorting en wanneer zet ik dit op 'nee'?",
      answer:
        "De loonheffingskorting bestaat uit de algemene heffingskorting en arbeidskorting, en mag maar bij één werkgever of uitkeringsinstantie tegelijk worden toegepast. Heb je een tweede baan of uitkering ernaast, zet deze dan op 'nee' voor die inkomstenbron.",
    },
    {
      question: "Houdt de calculator rekening met de AOW-leeftijd?",
      answer:
        "Ja, als je een geboortedatum invult. De calculator bepaalt dan automatisch of je de AOW-leeftijd hebt bereikt en past het bijbehorende (lagere) tarief in de eerste schijf toe.",
    },
  ],
  relatedSlugs: ["uurloon-calculator", "btw-calculator", "bmi-calculator"],
  popular: true,
  Component: BrutoNettoCalculator,
};
