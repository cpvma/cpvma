import { Metadata } from "next";
import SectionWrapper from "@/components/SectionWrapper";
import TeamSection from "./TeamSection";
import { executiveRoles } from "@/data/executiveTeam";

export const metadata: Metadata = {
  title: "Executive Team | CPVMA",
  description: "Meet the student-led board of the Canadian Pre-Veterinary Medical Association."
};

export default function ExecutiveTeamPage() {
  return (
    <>
      <SectionWrapper>
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-herbalGreen">CPVMA</p>
          <h1 className="mt-3 text-4xl font-serif font-bold text-forest md:text-5xl">Executive Team</h1>
          <div className="mx-auto my-5 h-[2px] w-24 rounded-full bg-gradient-to-r from-lavender to-herbalGreen" />
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-forest/80">
            Meet the student-led board keeping Canada&apos;s pre-veterinary community growing through programming, outreach,
            fundraising, and mentorship. Click any portfolio to meet its members.
          </p>
        </div>
      </SectionWrapper>

      <TeamSection roles={executiveRoles} showHeading={false} />
    </>
  );
}
