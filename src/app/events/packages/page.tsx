import { Metadata } from "next";
import SectionWrapper from "@/components/SectionWrapper";

const SPONSOR_PACKAGE_SRC = "/cpvma-sponsorship-package-25_26.pdf";

export const metadata: Metadata = {
  title: "Sponsorship Packages | CPVMA",
  description: "Download CPVMA symposium sponsorship packages and explore current partnership opportunities."
};

export default function SponsorshipPackagesPage() {
  return (
    <SectionWrapper className="space-y-10">
      <div className="text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-herbalGreen">CPVMA Events</p>
        <h1 className="mt-3 text-4xl font-serif font-bold text-forest md:text-[2.8rem]">Sponsorship Packages</h1>
        <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-forest/80">
          Partner with the Canadian Pre-Veterinary Medical Association to support national symposium programming. Review the
          sponsorship package below to explore partnership tiers, deliverables, and activation timelines.
        </p>
      </div>

      <div className="mx-auto max-w-4xl">
        <iframe
          src={`${SPONSOR_PACKAGE_SRC}#toolbar=1&navpanes=0`}
          title="CPVMA Sponsorship Package"
          className="h-[80vh] w-full rounded-3xl border border-forest/15 shadow-[0_24px_60px_rgba(0,0,0,0.12)]"
        />
      </div>
    </SectionWrapper>
  );
}
