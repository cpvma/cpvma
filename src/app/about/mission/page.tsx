import type { Metadata } from "next";
import Link from "next/link";
import SectionWrapper from "@/components/SectionWrapper";

export const metadata: Metadata = {
  title: "Our Mission | CPVMA",
  description: "CPVMA is committed to advancing veterinary education and fostering connections among pre-vet students across Canada."
};

const pillars = [
  {
    label: "Access",
    title: "National Platform",
    body: "A dedicated space for pre-veterinary students across Canada to connect, share resources, and stay informed about the profession."
  },
  {
    label: "Experience",
    title: "Hands-On Learning",
    body: "Annual symposia, excursion trips, and collaborative events offering innovative labs, informative lectures, and real-world exposure."
  },
  {
    label: "Community",
    title: "Lasting Connections",
    body: "Building relationships between pre-veterinary students, undergraduate clubs, veterinary schools, and practicing veterinarians."
  },
  {
    label: "Opportunity",
    title: "Career Development",
    body: "Networking events, mentorship programs, and professional development resources to support every stage of the pre-vet journey."
  }
];

export default function MissionPage() {
  return (
    <SectionWrapper>
      <div className="text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-herbalGreen">Our Mission</p>
        <h1 className="mt-3 text-4xl font-serif font-bold text-forest md:text-[2.8rem]">
          Advancing Veterinary Education
        </h1>
        <div className="mx-auto my-5 h-[2px] w-24 bg-gradient-to-r from-lavender to-herbalGreen rounded-full" />
        <p className="mx-auto max-w-2xl text-sm font-semibold uppercase tracking-[0.3em] text-forest/60">
          Collaboration &bull; Compassion &bull; Community
        </p>
      </div>

      <div className="mx-auto mt-10 max-w-3xl rounded-[2rem] bg-roseCream/80 p-8 shadow-[0_12px_32px_rgba(0,0,0,0.06)]">
        <p className="text-[1.05rem] leading-[1.85] text-forest/90">
          The Canadian Pre-Veterinary Medical Association is committed to fostering connections and
          providing resources to pre-veterinary students across Canada. As a student-run initiative,
          it was created to address the growing need for a national platform to bring together those
          interested in pursuing a career in veterinary medicine. Through this organization we aim to
          improve access to resources and increase opportunities for hands-on learning through events
          such as our annual Symposium, excursion trips, and nationwide fundraisers. Through our
          Symposium we offer innovative labs, informative lectures, and networking opportunities with
          the goal of strengthening the pre-veterinary community and developing long-lasting
          relationships between pre-veterinary students, undergraduate veterinary clubs, veterinary
          schools, and veterinarians.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {pillars.map((pillar) => (
          <div
            key={pillar.label}
            className="rounded-3xl border border-forest/10 bg-white/80 p-6 shadow-[0_8px_24px_rgba(0,0,0,0.05)]"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-herbalGreen">{pillar.label}</p>
            <h2 className="mt-2 text-xl font-serif text-forest">{pillar.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-forest/75">{pillar.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-3xl bg-forest px-8 py-8 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-lavender">Get Involved</p>
        <p className="mt-3 text-xl font-serif text-roseCream">
          Ready to be part of Canada&apos;s pre-vet community?
        </p>
        <Link
          href="/about/join-us"
          className="mt-6 inline-flex items-center justify-center rounded-full bg-lavender px-8 py-3 text-sm font-semibold uppercase tracking-[0.28em] text-forest transition hover:bg-herbalGreen hover:text-roseCream"
        >
          Join CPVMA
        </Link>
      </div>
    </SectionWrapper>
  );
}
