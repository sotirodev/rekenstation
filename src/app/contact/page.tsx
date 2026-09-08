import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/navigation/Breadcrumbs";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Neem contact op met Rekenstation.nl.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-ink dark:text-foreground">
        Contact
      </h1>
      <p className="mt-3 max-w-2xl text-muted">
        Heb je een vraag, suggestie of opmerking? Laat het ons weten via onderstaand formulier of
        stuur een e-mail naar{" "}
        <a href="mailto:contact@rekenstation.nl" className="font-medium text-brand-dark hover:underline">
          contact@rekenstation.nl
        </a>
        .
      </p>

      <div className="mt-8">
        <ContactForm />
      </div>
    </div>
  );
}
