import { Metadata } from "next";
import SectionWrapper from "@/components/SectionWrapper";

export const metadata: Metadata = {
  title: "Constitution | CPVMA",
  description: "Review CPVMA's constitution and bylaws directly from your browser."
};

export default function ConstitutionPage() {
  return (
    <SectionWrapper className="space-y-8">
      <div className="text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-herbalGreen">Governance</p>
        <h1 className="mt-3 text-4xl font-serif font-bold text-forest md:text-[2.8rem]">CPVMA Constitution</h1>
        <div className="mx-auto my-5 h-[2px] w-24 rounded-full bg-gradient-to-r from-lavender to-herbalGreen" />
        <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-forest/80">
          Review the CPVMA founding constitution and bylaws, including amendments passed at the May 2024 general assembly.
        </p>
        <a
          href="/constitution.pdf"
          download
          className="mt-4 inline-flex items-center justify-center rounded-full border border-forest/20 px-6 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-forest transition hover:border-herbalGreen hover:text-herbalGreen"
        >
          Download PDF
        </a>
      </div>

      <iframe
        src="/constitution.pdf#toolbar=0&navpanes=0&scrollbar=0&view=FitH"
        title="CPVMA Constitution PDF"
        className="h-[80vh] w-full rounded-3xl border border-forest/15 shadow-[0_24px_60px_rgba(0,0,0,0.12)]"
        loading="lazy"
      />

      <p className="text-center text-sm text-forest/50">
        If the document does not load, use the{" "}
        <a href="/constitution.pdf" className="underline decoration-lavender underline-offset-4 hover:text-herbalGreen">
          direct PDF link
        </a>
        .
      </p>
    </SectionWrapper>
  );
}
