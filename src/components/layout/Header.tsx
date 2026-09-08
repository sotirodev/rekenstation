import Link from "next/link";
import { Logo } from "./Logo";
import { MobileNav } from "./MobileNav";
import { ThemeToggle } from "./ThemeToggle";
import { CategoryMegaMenu } from "@/components/navigation/CategoryMegaMenu";

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-border bg-surface/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-6 md:flex">
          <Link href="/" className="text-sm font-medium text-foreground hover:text-brand-dark">
            Home
          </Link>
          <Link
            href="/calculators"
            className="text-sm font-medium text-foreground hover:text-brand-dark"
          >
            Alle calculators
          </Link>
          <CategoryMegaMenu />
          <Link
            href="/over-ons"
            className="text-sm font-medium text-foreground hover:text-brand-dark"
          >
            Over ons
          </Link>
          <Link href="/contact" className="text-sm font-medium text-foreground hover:text-brand-dark">
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
