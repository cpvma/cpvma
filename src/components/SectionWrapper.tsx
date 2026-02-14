import { ReactNode } from "react";

type SectionWrapperProps = {
  children: ReactNode;
  className?: string;
};

export default function SectionWrapper({ children, className }: SectionWrapperProps) {
  const base = "mx-auto max-w-7xl px-6 py-16";
  const composed = className ? `${base} ${className}` : base;

  return <section className={composed}>{children}</section>;
}
