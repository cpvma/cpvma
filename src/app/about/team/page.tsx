import { Metadata } from "next";
import SectionWrapper from "@/components/SectionWrapper";
import TeamSection from "./TeamSection";
import { executiveRoles } from "@/data/executiveTeam";

export const metadata: Metadata = {
  title: "Executive Team | CPVMA",
  description: "Meet the leaders of the Canadian Pre-Veterinary Medical Association."
};

export default function ExecutiveTeamPage() {
  return (
    <>
      <SectionWrapper>
        <h1 className="mb-4 text-center text-4xl font-serif font-bold text-forest md:text-5xl">
          Executive Leadership
        </h1>
        <p className="mb-10 text-center text-herbalGreen">
          Passionate students and advisors moving veterinary education forward.
        </p>
        <p className="mx-auto max-w-3xl text-center text-base leading-relaxed text-forest">
          Meet the team driving CPVMA’s mission and learn how they support aspiring veterinarians
          across Canada.
        </p>
      </SectionWrapper>

      <TeamSection
        roles={executiveRoles}
        showHeading={false}
      />
    </>
  );
}
