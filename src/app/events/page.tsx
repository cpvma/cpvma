import type { Metadata } from "next";
import type { Route } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";

export const metadata: Metadata = {
  title: "Events | CPVMA",
  description: "Explore CPVMA's upcoming and past symposia, guest speaker lineups, and sponsorship packages."
};

const sections = [
  {
    label: "Upcoming",
    title: "Upcoming Events",
    description: "Registration details, countdown, and speaker lineup for the next CPVMA symposium. Details posted here when open.",
    href: "/events/upcoming"
  },
  {
    label: "Past Events",
    title: "Event Archive",
    description: "Explore four years of past symposia. Browse guest speaker profiles, sponsor showcases, and event highlights.",
    href: "/events/past"
  },
  {
    label: "Sponsorship",
    title: "Packages",
    description: "Review current sponsorship tiers, deliverables, and activation timelines for the annual symposium.",
    href: "/events/packages"
  }
];

export default function EventsPage() {
  return (
    <SectionWrapper>
      <div className="text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-herbalGreen">CPVMA Events</p>
        <h1 className="mt-3 text-4xl font-serif font-bold text-forest md:text-5xl">Events</h1>
        <div className="mx-auto my-5 h-[2px] w-24 bg-gradient-to-r from-lavender to-herbalGreen rounded-full" />
        <p className="mx-auto max-w-3xl text-base leading-relaxed text-forest/80">
          CPVMA events bring members together for skill-building sessions, networking
          opportunities, and collaborative service projects. From clinical simulations to community
          engagement, our programming supports every stage of the pre-veterinary journey.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
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
              <span>View</span>
              <ArrowRight size={11} aria-hidden className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </div>
          </Link>
        ))}
      </div>
    </SectionWrapper>
  );
}
