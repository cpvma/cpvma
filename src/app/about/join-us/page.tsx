import { Metadata } from "next";
import Link from "next/link";
import SectionWrapper from "@/components/SectionWrapper";

export const metadata: Metadata = {
  title: "Join Us | CPVMA",
  description: "Explore volunteer roles, delegate registration, and other ways to get involved with CPVMA."
};

export default function JoinUsPage() {
  return (
    <SectionWrapper className="space-y-10 bg-roseCream/70 rounded-[2.5rem] border border-forest/10 p-8 md:p-12 shadow-[0_24px_48px_rgba(0,0,0,0.08)]">
      <div className="text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-herbalGreen">Get Involved</p>
        <h1 className="mt-3 text-4xl font-serif font-bold text-forest md:text-[2.8rem]">Join CPVMA</h1>
        <p className="mt-4 mx-auto max-w-3xl text-base leading-relaxed text-forest/85">
          Lend your voice to national initiatives, apply for volunteer roles, or represent your club as a delegate across Canada.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2">
        <article className="flex h-full flex-col rounded-3xl border border-forest/10 bg-white/90 p-6 text-center shadow-[0_12px_32px_rgba(0,0,0,0.06)]">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-herbalGreen">Membership</p>
          <h2 className="mt-2 text-2xl font-serif text-forest">Join the CPVMA Network</h2>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-forest/80">
            Become part of a national community of aspiring veterinarians. Details on dues, timelines, and member benefits will be shared
            soon so you can stay informed, supported, and connected.
          </p>
          <Link
            href="/contact"
            className="mt-4 inline-flex items-center justify-center rounded-full border border-forest/20 px-6 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-forest transition hover:border-herbalGreen hover:text-herbalGreen"
          >
            Contact Us
          </Link>
        </article>

        <article className="flex h-full flex-col rounded-3xl border border-forest/10 bg-white/90 p-6 text-center shadow-[0_12px_32px_rgba(0,0,0,0.06)]">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-herbalGreen">Volunteer with Us</p>
          <h2 className="mt-2 text-2xl font-serif text-forest">CPVMA Volunteers</h2>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-forest/80">
            Support our event and sponsorship committees for major national programming. Roles are virtual, collaborative, and perfect
            for gaining planning experience.
          </p>
          <Link
            href="/get-involved/volunteers"
            className="mt-4 inline-flex items-center justify-center rounded-full bg-forest px-6 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-roseCream transition hover:bg-herbalGreen hover:text-forest"
          >
            Learn More
          </Link>
        </article>

        <article className="flex h-full flex-col rounded-3xl border border-forest/10 bg-white/90 p-6 text-center shadow-[0_12px_32px_rgba(0,0,0,0.06)]">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-herbalGreen">University & College Delegates</p>
          <h2 className="mt-2 text-2xl font-serif text-forest">Club Representatives</h2>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-forest/80">
            Delegates liaise between CPVMA.ACPMV and their campus clubs, sharing resources, and tailoring programs to their region.
            Email {" "}
            <Link href="mailto:cpvma.acpmv@gmail.com" className="font-semibold text-herbalGreen underline underline-offset-4">
              cpvma.acpmv@gmail.com
            </Link>{" "}
            with meeting minutes confirming your appointment.
          </p>
        </article>

        <article className="md:col-span-2 lg:col-span-3 md:mx-auto md:max-w-3xl rounded-3xl border border-forest/10 bg-white/90 p-6 text-center shadow-[0_12px_32px_rgba(0,0,0,0.06)]">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-herbalGreen">High School Delegates</p>
          <h2 className="mt-2 text-2xl font-serif text-forest">Pre-Vet Leaders</h2>
          <p className="mt-3 text-sm leading-relaxed text-forest/80">
            We’ve expanded the delegate program to include high school clubs. Act as a liaison for your pre-vet group, help amplify CPVMA
            events, and share resources with your peers. Email {" "}
            <Link href="mailto:cpvma.acpmv@gmail.com" className="font-semibold text-herbalGreen underline underline-offset-4">
              cpvma.acpmv@gmail.com
            </Link>{" "}
            with club minutes showing your election.
          </p>
        </article>
      </div>
    </SectionWrapper>
  );
}
