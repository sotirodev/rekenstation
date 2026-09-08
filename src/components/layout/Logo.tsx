import Link from "next/link";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center gap-2 ${className}`}>
      <span className="grid grid-cols-2 gap-0.5" aria-hidden>
        <span className="flex h-4 w-4 items-center justify-center rounded-[3px] bg-ink text-[10px] font-bold leading-none text-white">
          +
        </span>
        <span className="flex h-4 w-4 items-center justify-center rounded-[3px] bg-brand text-[10px] font-bold leading-none text-white">
          −
        </span>
        <span className="flex h-4 w-4 items-center justify-center rounded-[3px] bg-brand text-[10px] font-bold leading-none text-white">
          ×
        </span>
        <span className="flex h-4 w-4 items-center justify-center rounded-[3px] bg-ink text-[10px] font-bold leading-none text-white">
          =
        </span>
      </span>
      <span className="text-lg font-bold tracking-tight text-ink dark:text-foreground">
        Rekenstation
      </span>
    </Link>
  );
}
