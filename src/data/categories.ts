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
    faq: [
      {
        question: "Wat is het verschil tussen bruto en netto salaris?",
        answer:
          "Je brutosalaris is het bedrag vóór belastingen en premies. Je nettosalaris is wat je daadwerkelijk op je rekening krijgt, nadat loonheffing is ingehouden.",
      },
      {
        question: "Hoe bereken ik mijn uurloon uit mijn maandsalaris?",
        answer:
          "Deel je maandsalaris door het gemiddeld aantal uren dat je per maand werkt. Gebruik de uurloon calculator hierboven voor een directe berekening.",
      },
    ],
    icon: PiggyBank,
  },
  {
    slug: "gezondheid",
    title: "Gezondheid",
    description: "BMI, calorieën en andere gezondheidstools.",
    intro:
      "Bereken je BMI, ideale gewicht, lichaamsvetpercentage, calorieverbruik en meer. Deze calculators geven een indicatie op basis van bekende formules uit de gezondheidszorg, en vervangen geen advies van een arts of diëtist.",
    faq: [
      {
        question: "Wat zegt BMI over mijn gezondheid?",
        answer:
          "BMI is een globale indicator die je gewicht afzet tegen je lengte, maar houdt geen rekening met spiermassa of lichaamsbouw. Gebruik het als eerste indicatie, niet als diagnose.",
      },
      {
        question: "Welke calculator moet ik gebruiken voor mijn gewicht?",
        answer:
          "BMI geeft een verhoudingsgetal, het ideaal gewicht een concreet kilogram-advies, en het lichaamsvetpercentage een schatting van je vetpercentage. Ze meten alle drie iets anders.",
      },
    ],
    icon: Stethoscope,
  },
  {
    slug: "auto-vervoer",
    title: "Auto & Vervoer",
    description: "Autokosten en brandstofkosten berekenen.",
    intro:
      "Vergelijk brandstofkosten, bereken de bijtelling van je auto van de zaak, of zet elektrisch tegenover benzine. Handig bij de aanschaf van een auto of om je maandelijkse autokosten in kaart te brengen.",
    faq: [
      {
        question: "Wat is bijtelling?",
        answer:
          "Bijtelling is een fiscale toevoeging aan je belastbaar inkomen als je een auto van de zaak ook privé gebruikt, berekend als percentage van de cataloguswaarde.",
      },
      {
        question: "Hoe bereken ik wat mijn auto me per maand kost?",
        answer:
          "Tel brandstofkosten, verzekering, wegenbelasting, afschrijving en onderhoud bij elkaar op. Gebruik de autokosten calculator om dit in kaart te brengen.",
      },
    ],
    icon: Route,
  },
  {
    slug: "wonen-hypotheek",
    title: "Wonen & Hypotheek",
    description: "Hypotheek en woonlasten berekenen.",
    intro:
      "Bereken je hypotheeklasten of de overdrachtsbelasting bij een woningaankoop. Handig bij het kopen van een huis, van eerste oriëntatie tot de uiteindelijke overdracht bij de notaris.",
    faq: [
      {
        question: "Wat is het verschil tussen annuïtair en lineair aflossen?",
        answer:
          "Bij annuïtair aflossen blijft je maandlast gelijk. Bij lineair aflossen daalt je maandlast geleidelijk, omdat je steeds hetzelfde bedrag aflost over een dalende restschuld.",
      },
      {
        question: "Wanneer betaal ik overdrachtsbelasting?",
        answer:
          "Bij de aankoop van een woning of ander onroerend goed, tenzij je in aanmerking komt voor de startersvrijstelling.",
      },
    ],
    icon: Building2,
  },
  {
    slug: "btw-belastingen",
    title: "BTW & Belastingen",
    description: "BTW en andere belastingen berekenen.",
    intro:
      "Reken snel BTW om, inclusief of exclusief, voor de tarieven 21%, 9% en 0%. Handig voor zzp'ers en ondernemers, of gewoon om een factuur te controleren.",
    faq: [
      {
        question: "Welke BTW-tarieven gelden in Nederland?",
        answer: "21% (algemeen tarief), 9% (verlaagd tarief, bijvoorbeeld voedingsmiddelen) en 0% (bijvoorbeeld bij export).",
      },
      {
        question: "Moet ik als zzp'er BTW berekenen?",
        answer:
          "In de meeste gevallen wel, tenzij je gebruikmaakt van de kleineondernemersregeling (KOR). Raadpleeg de Belastingdienst voor jouw situatie.",
      },
    ],
    icon: Landmark,
  },
  {
    slug: "tijd",
    title: "Tijd",
    description: "Leeftijd, datums en tijdsberekeningen.",
    intro:
      "Bereken je leeftijd, het verschil tussen twee datums, of het tijdsverschil tussen twee steden. Deze calculators werken zonder poespas: vul een datum of tijdzone in en zie direct het antwoord.",
    faq: [
      {
        question: "Hoe bereken ik mijn exacte leeftijd?",
        answer: "Vul je geboortedatum in bij de leeftijd calculator voor je exacte leeftijd in jaren, maanden en dagen.",
      },
      {
        question: "Waarom verschilt het tijdsverschil met een ander land door het jaar heen?",
        answer:
          "Omdat niet elk land op dezelfde datum overschakelt tussen zomer- en wintertijd, kan het verschil tussen twee plaatsen op sommige dagen van het jaar afwijken.",
      },
    ],
    icon: CalendarClock,
  },
  {
    slug: "maten-eenheden",
    title: "Maten & Eenheden",
    description: "Eenheden en maten omrekenen.",
    intro:
      "Reken lengte- en gewichtseenheden om, van centimeters naar inches tot kilogram naar pond. Handig bij internationale recepten, technische specificaties, of gewoon nieuwsgierigheid naar wat een Amerikaanse maat in het Nederlands betekent.",
    faq: [
      {
        question: "Hoeveel is 1 inch in cm?",
        answer: "1 inch is precies 2,54 centimeter.",
      },
      {
        question: "Wat is het verschil tussen het Nederlandse en Engelse pond?",
        answer:
          "Het Nederlandse pond is 500 gram, het Engelse pound (lb) is 453,59 gram. Kies de juiste eenheid om verwarring te voorkomen.",
      },
    ],
    icon: ArrowLeftRight,
  },
  {
    slug: "toeslagen",
    title: "Toeslagen",
    description: "Zorgtoeslag en andere overheidstoeslagen berekenen.",
    intro:
      "Bereken een indicatie van je zorgtoeslag op basis van je inkomen, met of zonder toeslagpartner. Vervangt geen officiële berekening van de Belastingdienst, maar geeft snel een eerste inschatting.",
    faq: [
      {
        question: "Wat is een verzamelinkomen?",
        answer: "Je totale inkomen vóór aftrekposten, zoals vermeld in je belastingaangifte.",
      },
      {
        question: "Vanaf welk inkomen vervalt mijn recht op zorgtoeslag?",
        answer:
          "Dat hangt af van of je een toeslagpartner hebt. Vul je inkomen in bij de zorgtoeslag calculator voor de exacte grens.",
      },
    ],
    icon: HandCoins,
  },
  {
    slug: "energie",
    title: "Energie",
    description: "Energieverbruik en -kosten berekenen.",
    intro:
      "Bereken je energieverbruik en -kosten, of wat zonnepanelen en een warmtepomp je opleveren. Handig om inzicht te krijgen in je energierekening of om een investering in verduurzaming te overwegen.",
    faq: [
      {
        question: "Hoe bereken ik mijn jaarlijkse energiekosten?",
        answer:
          "Vermenigvuldig je verbruik in kWh en m³ met de tarieven van je energieleverancier. Gebruik de energieverbruik calculator voor een schatting.",
      },
      {
        question: "Wat levert een warmtepomp op ten opzichte van gas?",
        answer:
          "Dat hangt af van je huidige gasverbruik, de stroomprijs en het rendement van de warmtepomp. Gebruik de warmtepomp calculator voor een indicatie.",
      },
    ],
    icon: Zap,
  },
  {
    slug: "studie",
    title: "Studie",
    description: "Studieschuld en studentenbudget berekenen.",
    intro:
      "Bereken je studieschuld of een studentenbudget. Gericht op studenten die snel inzicht willen in hun financiële situatie, tijdens of na de studie.",
    faq: [
      {
        question: "Hoeveel rente betaal ik over mijn studieschuld?",
        answer:
          "Dat hangt af van het rentepercentage dat DUO hanteert in het jaar waarin je hebt geleend. Gebruik de studieschuld calculator voor een indicatie.",
      },
      {
        question: "Hoeveel budget heb ik nodig als student?",
        answer:
          "Dat verschilt sterk per situatie, zoals uitwonend of thuiswonend en wel of niet werken. Gebruik de studentenbudget calculator als startpunt.",
      },
    ],
    icon: GraduationCap,
  },
  {
    slug: "duurzaamheid",
    title: "Duurzaamheid",
    description: "Zonnepanelen, warmtepomp en elektrisch rijden berekenen.",
    intro:
      "Bereken wat zonnepanelen, een warmtepomp of elektrisch rijden je opleveren ten opzichte van de traditionele alternatieven. Handig bij het overwegen van een investering in een duurzamer huis of duurzamer vervoer.",
    faq: [
      {
        question: "Verdien ik zonnepanelen terug?",
        answer:
          "Dat hangt af van je stroomverbruik, de kosten van de panelen en de huidige energieprijzen. Gebruik de zonnepanelen calculator voor een indicatie van de terugverdientijd.",
      },
      {
        question: "Is elektrisch rijden goedkoper dan benzine?",
        answer:
          "Meestal wel qua brandstofkosten per kilometer, maar dat hangt af van je rijgedrag en de stroom- en benzineprijzen. Gebruik de vergelijkingscalculator voor jouw situatie.",
      },
    ],
    icon: Leaf,
  },
  {
    slug: "overige",
    title: "Overige",
    description: "Overige handige calculators.",
    intro:
      "Handige rekentools die niet in een andere categorie passen, van percentages berekenen tot samengestelde interest. Voor alles wat je snel even wilt uitrekenen.",
    faq: [
      {
        question: "Welke calculator gebruik ik om een percentage te berekenen?",
        answer:
          "Dat hangt af van je vraag: 'X% van Y', 'welk percentage is X van Y', of de procentuele verandering tussen twee waarden. Kies de bijbehorende calculator voor een direct antwoord.",
      },
    ],
    icon: Wrench,
  },
];

export function getCategory(slug: string): Category | undefined {
  return categories.find((category) => category.slug === slug);
}
