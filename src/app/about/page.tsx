import type { Metadata } from "next";
import type { Route } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";

export const metadata: Metadata = {
  title: "About CPVMA | Canadian Pre-Veterinary Medical Association",
  description: "Learn about CPVMA's mission, executive team, club directory, newsletters, and how to join the national pre-vet community."
};

const sections = [
  {
    label: "Mission",
    title: "Our Mission",
    description: "Advancing veterinary education and professional development for aspiring veterinarians across Canada.",
    href: "/about/mission"
  },
  {
    label: "Team",
    title: "Executive Team",
    description: "Meet the student-led board of 13 portfolios driving programming, outreach, fundraising, and mentorship nationally.",
    href: "/about/team"
  },
  {
    label: "Directory",
    title: "Club Directory",
    description: "Browse pre-vet clubs at universities and colleges across every Canadian province.",
    href: "/about/clubs"
  },
  {
    label: "Newsletters",
    title: "Newsletters",
    description: "Download our monthly newsletter archive going back to 2024, covering news, opportunities, and community highlights.",
    href: "/about/newsletters"
  },
  {
    label: "Governance",
    title: "Constitution",
    description: "Review CPVMA's founding constitution and bylaws, including the most recent amendments.",
    href: "/about/constitution"
  },
  {
    label: "Get Involved",
    title: "Join Us",
    description: "Become a member, volunteer for the symposium, or represent your campus as a university or high school delegate.",
    href: "/about/join-us"
  }
];

export default function AboutPage() {
  return (
    <SectionWrapper>
      <div className="text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-herbalGreen">CPVMA</p>
        <h1 className="mt-3 text-4xl font-serif font-bold text-forest md:text-5xl">About CPVMA</h1>
        <div className="mx-auto my-5 h-[2px] w-24 bg-gradient-to-r from-lavender to-herbalGreen rounded-full" />
        <p className="mx-auto max-w-3xl text-base leading-relaxed text-forest/80">
          The Canadian Pre-Veterinary Medical Association unites students who are passionate about
          animal health, scientific inquiry, and community impact. We foster mentorship, provide
          professional development resources, and create spaces where members can learn from peers
          and experts alike.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {sections.map((section) => (
          <Link
            key={section.href}
            href={section.href as Route<string>}
            className="group flex flex-col rounded-3xl border border-forest/10 bg-roseCream/90 p-6 shadow-[0_8px_24px_rgba(0,0,0,0.05)] transition duration-300 hover:-translate-y-1.5 hover:border-herbalGreen/50 hover:shadow-[0_16px_32px_rgba(0,0,0,0.09)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-herbalGreen/50"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-herbalGreen">
              {section.label}
            </p>
            <h2 className="mt-2 text-xl font-serif text-forest">{section.title}</h2>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-forest/75">{section.description}</p>
            <div className="mt-5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-forest/60 transition-colors duration-200 group-hover:text-herbalGreen">
              <span>Explore</span>
              <ArrowRight size={11} aria-hidden className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </div>
          </Link>
        ))}
      </div>
    </SectionWrapper>
  );
}
