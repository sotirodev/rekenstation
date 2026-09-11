import {
  PiggyBank,
  Stethoscope,
  Route,
  Building2,
  Landmark,
  CalendarClock,
  ArrowLeftRight,
  Wrench,
  HandCoins,
  Zap,
  GraduationCap,
  Leaf,
} from "lucide-react";
import type { Category } from "@/types/calculator";

export const categories: Category[] = [
  {
    slug: "geld-salaris",
    title: "Geld & Salaris",
    description: "Salaris, bruto-netto en uurloon berekenen.",
    intro:
      "Deze calculators helpen je bij dagelijkse geldzaken: van je bruto salaris omrekenen naar netto, tot uurloon, jaarsalaris en spaarrente. Handig of je nu een nieuwe baan overweegt, je uurtarief als zzp'er bepaalt, of wilt weten wat een loonsverhoging je oplevert.",
    icon: PiggyBank,
  },
  {
    slug: "gezondheid",
    title: "Gezondheid",
    description: "BMI, calorieën en andere gezondheidstools.",
    intro:
      "Bereken je BMI, ideale gewicht, lichaamsvetpercentage, calorieverbruik en meer. Deze calculators geven een indicatie op basis van bekende formules uit de gezondheidszorg, en vervangen geen advies van een arts of diëtist.",
    icon: Stethoscope,
  },
  {
    slug: "auto-vervoer",
    title: "Auto & Vervoer",
    description: "Autokosten en brandstofkosten berekenen.",
    intro:
      "Vergelijk brandstofkosten, bereken de bijtelling van je auto van de zaak, of zet elektrisch tegenover benzine. Handig bij de aanschaf van een auto of om je maandelijkse autokosten in kaart te brengen.",
    icon: Route,
  },
  {
    slug: "wonen-hypotheek",
    title: "Wonen & Hypotheek",
    description: "Hypotheek en woonlasten berekenen.",
    intro:
      "Bereken je hypotheeklasten of de overdrachtsbelasting bij een woningaankoop. Handig bij het kopen van een huis, van eerste oriëntatie tot de uiteindelijke overdracht bij de notaris.",
    icon: Building2,
  },
  {
    slug: "btw-belastingen",
    title: "BTW & Belastingen",
    description: "BTW en andere belastingen berekenen.",
    intro:
      "Reken snel BTW om, inclusief of exclusief, voor de tarieven 21%, 9% en 0%. Handig voor zzp'ers en ondernemers, of gewoon om een factuur te controleren.",
    icon: Landmark,
  },
  {
    slug: "tijd",
    title: "Tijd",
    description: "Leeftijd, datums en tijdsberekeningen.",
    intro:
      "Bereken je leeftijd, het verschil tussen twee datums, of het tijdsverschil tussen twee steden. Deze calculators werken zonder poespas: vul een datum of tijdzone in en zie direct het antwoord.",
    icon: CalendarClock,
  },
  {
    slug: "maten-eenheden",
    title: "Maten & Eenheden",
    description: "Eenheden en maten omrekenen.",
    intro:
      "Reken lengte- en gewichtseenheden om, van centimeters naar inches tot kilogram naar pond. Handig bij internationale recepten, technische specificaties, of gewoon nieuwsgierigheid naar wat een Amerikaanse maat in het Nederlands betekent.",
    icon: ArrowLeftRight,
  },
  {
    slug: "toeslagen",
    title: "Toeslagen",
    description: "Zorgtoeslag en andere overheidstoeslagen berekenen.",
    intro:
      "Bereken een indicatie van je zorgtoeslag op basis van je inkomen, met of zonder toeslagpartner. Vervangt geen officiële berekening van de Belastingdienst, maar geeft snel een eerste inschatting.",
    icon: HandCoins,
  },
  {
    slug: "energie",
    title: "Energie",
    description: "Energieverbruik en -kosten berekenen.",
    intro:
      "Bereken je energieverbruik en -kosten, of wat zonnepanelen en een warmtepomp je opleveren. Handig om inzicht te krijgen in je energierekening of om een investering in verduurzaming te overwegen.",
    icon: Zap,
  },
  {
    slug: "studie",
    title: "Studie",
    description: "Studieschuld en studentenbudget berekenen.",
    intro:
      "Bereken je studieschuld of een studentenbudget. Gericht op studenten die snel inzicht willen in hun financiële situatie, tijdens of na de studie.",
    icon: GraduationCap,
  },
  {
    slug: "duurzaamheid",
    title: "Duurzaamheid",
    description: "Zonnepanelen, warmtepomp en elektrisch rijden berekenen.",
    intro:
      "Bereken wat zonnepanelen, een warmtepomp of elektrisch rijden je opleveren ten opzichte van de traditionele alternatieven. Handig bij het overwegen van een investering in een duurzamer huis of duurzamer vervoer.",
    icon: Leaf,
  },
  {
    slug: "overige",
    title: "Overige",
    description: "Overige handige calculators.",
    intro:
      "Handige rekentools die niet in een andere categorie passen, van percentages berekenen tot samengestelde interest. Voor alles wat je snel even wilt uitrekenen.",
    icon: Wrench,
  },
];

export function getCategory(slug: string): Category | undefined {
  return categories.find((category) => category.slug === slug);
}
