import Link from "next/link";
import { Logo } from "./Logo";

const calculatorLinks = [
  { href: "/calculators", label: "Alle calculators" },
  { href: "/categorieen", label: "Categorieën" },
];

const overigeLinks = [
  { href: "/over-ons", label: "Over ons" },
  { href: "/contact", label: "Contact" },
  { href: "/privacybeleid", label: "Privacybeleid" },
  { href: "/cookiebeleid", label: "Cookiebeleid" },
  { href: "/algemene-voorwaarden", label: "Algemene voorwaarden" },
  { href: "/disclaimer", label: "Disclaimer" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <Logo />
            <p className="mt-3 max-w-xs text-sm text-muted">
              Handige online calculators voor dagelijks gebruik.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-foreground">Calculators</p>
            <ul className="mt-3 space-y-2">
              {calculatorLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted transition-colors duration-150 hover:text-brand-dark">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-foreground">Overig</p>
            <ul className="mt-3 space-y-2">
              {overigeLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted transition-colors duration-150 hover:text-brand-dark">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-10 border-t border-border pt-6 text-xs text-muted">
          © {new Date().getFullYear()} Rekenstation.nl
        </p>
      </div>
    </footer>
  );
}
