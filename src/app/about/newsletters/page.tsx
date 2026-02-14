import { Metadata } from "next";
import SectionWrapper from "@/components/SectionWrapper";
import { newsletters } from "@/data/newsletters";
import NewsletterCalendar from "./NewsletterCalendar";

export const metadata: Metadata = {
  title: "Newsletters | CPVMA",
  description: "Browse CPVMA's monthly newsletters and download the latest issues."
};

export default function NewslettersPage() {
  const latest = newsletters[0];

  return (
    <SectionWrapper className="space-y-10">
      <div className="text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-herbalGreen">CPVMA Updates</p>
        <h1 className="mt-3 text-4xl font-serif font-bold text-forest md:text-[2.8rem]">Newsletter Archive</h1>
      </div>

      <div className="rounded-3xl border border-forest/10 bg-white/90 p-6 text-center shadow-[0_14px_32px_rgba(0,0,0,0.08)]">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-herbalGreen">Latest Issue</p>
        <h2 className="mt-2 text-2xl font-serif text-forest">{latest.title}</h2>
        <p className="mt-1 text-sm text-forest/70">{latest.date}</p>
        <a
          href={latest.href}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-flex items-center justify-center rounded-full bg-forest px-6 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-roseCream transition hover:bg-herbalGreen hover:text-forest"
        >
          Download Latest PDF
        </a>
      </div>

      <NewsletterCalendar />
    </SectionWrapper>
  );
}
