import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { CalculatorConfig } from "@/types/calculator";
import { FavoriteButton } from "@/components/calculator/FavoriteButton";

export function CalculatorCard({ calculator }: { calculator: CalculatorConfig }) {
  const Icon = calculator.icon;

  return (
    <div className="group relative flex flex-col gap-3 rounded-xl border border-border bg-surface p-5 transition-all duration-200 ease-out hover:-translate-y-1 hover:border-brand hover:shadow-md">
      <Link href={`/${calculator.slug}`} className="absolute inset-0" aria-label={calculator.shortTitle} />
      <div className="flex items-start justify-between">
        <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-mint text-brand-dark transition-transform duration-200 group-hover:scale-110">
          <Icon className="h-5 w-5" strokeWidth={2} aria-hidden />
        </span>
        <FavoriteButton slug={calculator.slug} />
      </div>
      <div>
        <h3 className="font-semibold text-foreground">{calculator.shortTitle}</h3>
        <p className="mt-1 text-sm text-muted">{calculator.summary}</p>
      </div>
      <span className="mt-auto flex items-center gap-1 text-sm font-medium text-brand-dark">
        Bereken
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
      </span>
    </div>
  );
}
