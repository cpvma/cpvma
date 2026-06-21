import Image from "next/image";
import { Metadata } from "next";
import SectionWrapper from "@/components/SectionWrapper";
import { directory, type Club } from "@/data/clubs";

const getClubEmails = (club: Club) => (Array.isArray(club.email) ? club.email : club.email ? [club.email] : []);

export const metadata: Metadata = {
  title: "Pre-Vet Club Directory | CPVMA",
  description: "Browse the Canadian directory of CPVMA-affiliated pre-vet clubs."
};

export default function ClubDirectoryPage() {
  return (
    <SectionWrapper className="bg-roseCream/70 rounded-[2.5rem] border border-forest/10 p-8 md:p-12 shadow-[0_24px_48px_rgba(0,0,0,0.08)]">
      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-herbalGreen">Directory</p>
      <h1 className="mt-3 text-4xl font-serif font-bold text-forest md:text-[2.8rem]">
        The Canadian Pre-Vet Club Directory
      </h1>
      <p className="mt-4 max-w-3xl text-base leading-relaxed text-forest/85">
        Welcome to the CPVMA.ACPMV Pre-Vet Club Directory! If your pre-vet club is not currently listed, please email{" "}
        <a href="mailto:cpvma.acpmv@gmail.com" className="font-semibold text-herbalGreen underline underline-offset-4">
          cpvma.acpmv@gmail.com
        </a>{" "}
        and include your pre-vet club name, the university/college that it is affiliated with, and your club email / Instagram /
        Facebook plus your logo.
      </p>

      <div className="mt-10 space-y-10">
        {directory.map((entry) => (
          <section key={entry.province} className="rounded-3xl border border-forest/10 bg-white/80 p-6 shadow-[0_10px_26px_rgba(0,0,0,0.05)]">
            <div className="flex flex-col gap-2 border-b border-forest/10 pb-4 md:flex-row md:items-center md:justify-between">
              <h2 className="text-2xl font-serif text-forest">{entry.province}</h2>
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-herbalGreen">
                {entry.clubs.length > 0 ? `${entry.clubs.length} club${entry.clubs.length > 1 ? "s" : ""}` : "Seeking listings"}
              </span>
            </div>

            {entry.clubs.length === 0 ? (
              <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-forest/70">
                  We&apos;re gathering contact information for this province.
                </p>
                <a
                  href="mailto:cpvma.acpmv@gmail.com?subject=Club%20Listing%20Request"
                  className="inline-flex items-center justify-center rounded-full border border-herbalGreen/50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-herbalGreen transition hover:bg-herbalGreen/10 shrink-0"
                >
                  + List your club
                </a>
              </div>
            ) : (
              <div className="mt-6 grid gap-6 md:grid-cols-2">
                {entry.clubs.map((club) => {
                  const emails = getClubEmails(club);

                  return (
                    <article
                      key={`${entry.province}-${club.name}`}
                      className="flex flex-col gap-4 rounded-2xl border border-forest/10 bg-roseCream/70 p-5 text-forest shadow-sm"
                    >
                      {club.logo && (
                        <div className="flex items-center justify-center rounded-2xl border border-forest/10 bg-white/80 p-3">
                          <Image
                            src={club.logo}
                            alt={`${club.name} logo`}
                            className="h-16 w-auto object-contain"
                            sizes="128px"
                          />
                        </div>
                      )}
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-herbalGreen">Club</p>
                      <h3 className="mt-2 text-xl font-serif text-forest">{club.name}</h3>
                      <p className="text-sm text-forest/80">{club.university}</p>

                      <div className="mt-4 space-y-1 text-sm text-forest/85">
                        {emails.length > 0 && (
                          <p>
                            {emails.length > 1 ? "Emails: " : "Email: "}
                            {emails.map((email, index) => (
                              <span key={email}>
                                {index > 0 && ", "}
                                <a href={`mailto:${email}`} className="underline decoration-lavender decoration-2 underline-offset-4">
                                  {email}
                                </a>
                              </span>
                            ))}
                          </p>
                        )}
                        {club.instagram && <p>Instagram: {club.instagram}</p>}
                        {club.facebook && (
                          <p>
                            Facebook:{" "}
                            {club.facebook.startsWith("http") ? (
                              <a href={club.facebook} target="_blank" rel="noreferrer" className="underline decoration-lavender">
                                View Page
                              </a>
                            ) : (
                              club.facebook
                            )}
                          </p>
                        )}
                        {club.website && (
                          <p>
                            <a href={club.website} target="_blank" rel="noreferrer" className="underline decoration-lavender decoration-2 underline-offset-4">
                              Website
                            </a>
                          </p>
                        )}
                      </div>
                    </article>
                  );
                })}
              </div>
            )}
          </section>
        ))}
      </div>
    </SectionWrapper>
  );
}
