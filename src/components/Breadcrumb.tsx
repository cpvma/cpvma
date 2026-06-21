import type { Route } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em]">
      {items.map((item, index) => (
        <span key={item.label} className="flex items-center gap-2">
          {index > 0 && <ChevronRight size={10} aria-hidden className="text-forest/30" />}
          {item.href ? (
            <Link
              href={item.href as Route<string>}
              className="text-forest/50 transition-colors hover:text-herbalGreen"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-forest">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
