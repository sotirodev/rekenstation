import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center px-4 py-24 text-center sm:px-6 lg:px-8">
      <p className="text-sm font-semibold text-brand-dark">404</p>
      <h1 className="mt-3 text-3xl font-bold tracking-tight text-ink dark:text-foreground">
        Pagina niet gevonden
      </h1>
      <p className="mt-3 text-muted">
        De pagina die je zoekt bestaat niet (meer). Probeer een van onze calculators te vinden via
        onderstaande links.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/"
          className="rounded-full bg-brand px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-brand-dark"
        >
          Naar de homepage
        </Link>
        <Link
          href="/calculators"
          className="rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-brand"
        >
          Alle calculators
        </Link>
      </div>
    </div>
  );
}
