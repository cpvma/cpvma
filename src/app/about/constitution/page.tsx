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
      </div>

      <iframe
        src="/constitution.pdf#toolbar=0&navpanes=0&scrollbar=0&view=FitH"
        title="CPVMA Constitution PDF"
        className="h-[80vh] w-full border border-forest/30 shadow-[0_10px_24px_rgba(0,0,0,0.08)]"
        loading="lazy"
      />
    </SectionWrapper>
  );
}
