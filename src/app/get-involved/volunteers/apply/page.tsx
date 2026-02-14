import { Metadata } from "next";
import Link from "next/link";
import SectionWrapper from "@/components/SectionWrapper";

export const metadata: Metadata = {
  title: "Apply | CPVMA Volunteers",
  description: "Submit your volunteer application to support CPVMA events and sponsorship teams."
};

const instructions = [
  "Download the volunteer application below.",
  "Submit the completed application to cpvma.acpmv@gmail.com."
];

export default function VolunteerApplyPage() {
  return (
    <SectionWrapper className="bg-white/90 rounded-[2.5rem] border border-forest/10 p-8 md:p-12 shadow-[0_24px_48px_rgba(0,0,0,0.08)]">
      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-herbalGreen">Get Involved</p>
      <h1 className="mt-3 text-4xl font-serif font-bold text-forest md:text-[2.8rem]">Get Involved: CPVMA Volunteers</h1>
      <p className="mt-4 max-w-3xl text-base leading-relaxed text-forest/85">
        We are so excited to officially announce our volunteer program! Now that our projects have grown we would like to begin
        offering volunteer positions to individuals within the pre-veterinary community who would like to help us plan and organize
        our CPVMA events.
      </p>

      <div className="mt-8 space-y-6">
        <section>
          <h2 className="text-2xl font-serif text-forest">Volunteer with Us</h2>
          <p className="mt-3 text-sm leading-relaxed text-forest/80">
            Being a volunteer means joining a CPVMA subcommittee and attending meetings where you become a vital member of a team,
            helping plan and organize events, spreading the word, and brainstorming ideas on how we can be better! If you are looking for
            a virtual position that provides event planning experience, then this is the role for you!
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-serif text-forest">Perks of Volunteering</h2>
          <p className="mt-3 text-sm leading-relaxed text-forest/80">
            You will have the opportunity to work alongside the CPVMA executive team, gain both independent and collaborative work
            experience, improve your organization skills through supervisory feedback, and meet fellow pre-veterinary students. We are
            also happy to help you track your hours and provide references and verification for those hoping to include this position on
            any future applications.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-serif text-forest">Instructions</h2>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-forest/80">
            {instructions.map((item, index) => (
              <li key={item}>
                {index === 0 ? (
                  <>
                    {item}
                    <div>
                      <a
                        href="/cpvma-volunteer-application-1.docx"
                        className="inline-flex items-center gap-2 rounded-full border border-herbalGreen/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-herbalGreen transition hover:bg-herbalGreen/10"
                      >
                        Download Application (.docx)
                      </a>
                    </div>
                  </>
                ) : (
                  item
                )}
              </li>
            ))}
          </ol>
          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.3em] text-forest/70">
            Please note: Applications are reviewed on a rolling basis. Expect a response within 1–2 weeks. Interviews may be scheduled
            for further consideration.
          </p>
        </section>
      </div>
    </SectionWrapper>
  );
}
