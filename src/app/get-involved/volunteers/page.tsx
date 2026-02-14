import { Metadata } from "next";
import Link from "next/link";
import SectionWrapper from "@/components/SectionWrapper";

export const metadata: Metadata = {
  title: "CPVMA Volunteers",
  description: "Learn how to get involved and support CPVMA events as a volunteer."
};

const volunteerSteps = [
  {
    title: "Event Operations",
    description:
      "Assist the Events Team with workshop logistics, check-ins, and attendee support during the 2026 Symposium."
  },
  {
    title: "Sponsorship Outreach",
    description:
      "Collaborate with Sponsorship to coordinate partner deliverables, track swag shipments, and share success stories."
  },
  {
    title: "Member Experience",
    description:
      "Serve as an on-site liaison helping members navigate programming, answer questions, and capture feedback."
  }
];

export default function VolunteersPage() {
  return (
    <SectionWrapper className="bg-roseCream/70 rounded-[2.5rem] border border-forest/10 p-8 md:p-12 shadow-[0_20px_46px_rgba(0,0,0,0.08)]">
      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-herbalGreen">Get Involved</p>
      <h1 className="mt-3 text-4xl font-serif font-bold text-forest md:text-[2.8rem]">CPVMA Volunteers</h1>
      <p className="mt-4 max-w-3xl text-base leading-relaxed text-forest/85">
        We are looking to hire volunteers to support our event and sponsorship committees for the 2026 Symposium.
        Volunteers play a vital role in bringing our programming to life and ensuring every attendee feels welcomed.
      </p>
      <p className="mt-4 max-w-3xl text-base leading-relaxed text-forest/85">
        Please review the focus areas below and submit your interest form to join the roster. Positions are open to
        students across Canada, and remote prep meetings will start early 2026.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {volunteerSteps.map((step) => (
          <div key={step.title} className="rounded-3xl border border-forest/10 bg-white/80 p-6 text-forest shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-herbalGreen">{step.title}</p>
            <p className="mt-3 text-sm leading-relaxed text-forest/80">{step.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-3xl bg-forest px-6 py-6 text-center text-roseCream">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-lavender">Ready to help?</p>
        <p className="mt-3 text-base leading-relaxed text-roseCream/90">
          Learn more about the application process and submit your interest form.
        </p>
        <Link
          href="/get-involved/volunteers/apply"
          className="mt-4 inline-flex items-center justify-center rounded-full bg-lavender px-6 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-forest transition hover:bg-herbalGreen hover:text-roseCream"
        >
          Apply Now
        </Link>
      </div>
    </SectionWrapper>
  );
}
