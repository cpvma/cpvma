import { Metadata } from "next";
import Link from "next/link";
import SectionWrapper from "@/components/SectionWrapper";
import TeamSection from "../about/team/TeamSection";
import { executiveRoles } from "@/data/executiveTeam";

export const metadata: Metadata = {
  title: "Executive Team | CPVMA",
  description: "Explore every CPVMA executive portfolio and meet the members driving each initiative."
};

export default function ExecutiveTeamPage() {
  return (
    <>
      <SectionWrapper className="bg-roseCream/40 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-herbalGreen">CPVMA</p>
        <h1 className="mt-3 text-4xl font-serif font-bold text-forest md:text-5xl">
          Meet the Executive Team
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-forest/85">
          Our student-led board keeps the community growing through programming, outreach,
          fundraising, and mentorship.
        </p>
      </SectionWrapper>

      <TeamSection roles={executiveRoles} showHeading={false} />
    </>
  );
}
