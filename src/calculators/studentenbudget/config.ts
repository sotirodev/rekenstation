import { ClipboardList } from "lucide-react";
import type { CalculatorConfig } from "@/types/calculator";
import { StudentenbudgetCalculator } from "./Calculator";

export const studentenbudgetConfig: CalculatorConfig = {
  slug: "studentenbudget-calculator",
  title: "Studentenbudget calculator",
  shortTitle: "Studentenbudget calculator",
  category: "studie",
  icon: ClipboardList,
  summary: "Bereken snel of je maandelijkse inkomsten en uitgaven in balans zijn.",
  metaDescription:
    "Bereken gratis of je als student rondkomt: vul je maandelijkse inkomsten en uitgaven in en zie direct je saldo.",
  intro: "Vul je inkomsten en uitgaven per maand in om je saldo te zien.",
  explanation: {
    heading: "Hoe werkt deze berekening?",
    body: [
      "Tel al je inkomsten per maand bij elkaar op (bijvoorbeeld bijbaan, toelage van ouders en studiefinanciering), en doe hetzelfde voor je vaste en variabele uitgaven. Het verschil is wat je overhoudt of tekortkomt.",
    ],
  },
  faq: [
    {
      question: "Wat reken ik mee als uitgaven?",
      answer:
        "Denk aan huur, boodschappen, zorgverzekering, abonnementen, vervoer en een post voor onvoorziene of sociale uitgaven.",
    },
  ],
  relatedSlugs: ["studieschuld-calculator", "bruto-netto-calculator"],
  Component: StudentenbudgetCalculator,
};
