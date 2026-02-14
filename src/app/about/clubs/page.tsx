import Image, { StaticImageData } from "next/image";
import { Metadata } from "next";
import SectionWrapper from "@/components/SectionWrapper";
import albertaLogo from "../../../../logos/clubs/alberta.webp";
import calgaryLogo from "../../../../logos/clubs/calgary.webp";
import carletonLogo from "../../../../logos/clubs/carleton.webp";
import fvcLogo from "../../../../logos/clubs/fvc.webp";
import manitobaLogo from "../../../../logos/clubs/manitoba.webp";
import newfoundlandLogo from "../../../../logos/clubs/newfoundland.webp";
import peiLogo from "../../../../logos/clubs/pei.webp";
import saskatchewanLogo from "../../../../logos/clubs/saskatchewan.webp";
import unbcLogo from "../../../../logos/clubs/unbc-prevet-club-logo.webp";
import sfuLogo from "../../../../logos/clubs/sfu.webp";
import vmcLogo from "../../../../logos/clubs/vmc.webp";
import westernLogo from "../../../../logos/clubs/western.webp";
import yorkLogo from "../../../../logos/clubs/york.webp";

type Club = {
  name: string;
  university: string;
  email?: string;
  instagram?: string;
  facebook?: string;
  logo?: StaticImageData;
};

type ProvinceDirectory = {
  province: string;
  clubs: Club[];
};

const directory: ProvinceDirectory[] = [
  {
    province: "Alberta",
    clubs: [
      {
        name: "University of Alberta Pre-Vet/Animal Health Club",
        university: "University of Alberta",
        email: "prevet@ualberta.ca",
        instagram: "@uofaprevetclub",
        facebook: "Pre-Vet Animal Health Club UofA",
        logo: albertaLogo
      },
      {
        name: "Pre-Veterinary Students’ Association",
        university: "University of Calgary",
        email: "pvsa.ucalgary@gmail.com",
        instagram: "@pvsaucalgary",
        facebook: "U of C Pre-Veterinary Students’ Association",
        logo: calgaryLogo
      }
    ]
  },
  {
    province: "British Columbia",
    clubs: [
      {
        name: "SFU Pre-Vet Club",
        university: "Simon Fraser University",
        email: "sfuprevetclub@gmail.com",
        instagram: "@sfupaw_",
        facebook: "@sfuprevet",
        logo: sfuLogo
      },
      {
        name: "UBCO Pre-Vet Club",
        university: "University of British Columbia Okanagan Campus",
        email: "prevetclub.okanagan@outlook.com",
        instagram: "@uprevet_okanagan"
      },
      {
        name: "UNBC Pre-Veterinary Club",
        university: "University of Northern British Columbia",
        email: "prevetclub@unbc.ca",
        instagram: "@unbc_prevetclub",
        facebook: "UNBC Pre-Vet Club",
        logo: unbcLogo
      }
    ]
  },
  {
    province: "Manitoba",
    clubs: [
      {
        name: "University of Manitoba Pre-Vet Club",
        university: "University of Manitoba",
        email: "uofmprevetclub@gmail.com",
        instagram: "@prevetclubuofm",
        logo: manitobaLogo
      },
      {
        name: "The University of Winnipeg’s Pre-Veterinary Club (UWPVC)",
        university: "University of Winnipeg",
        email: "uwprevet@outlook.com",
        instagram: "@uwprevetclub"
      }
    ]
  },
  { province: "New Brunswick", clubs: [] },
  {
    province: "Newfoundland and Labrador",
    clubs: [
      {
        name: "MUN Pre-Vet Club",
        university: "Memorial University of Newfoundland",
        email: "munprevetclub@gmail.com",
        instagram: "@munprevet",
        facebook: "https://www.facebook.com/profile.php?id=61575069338953&sk=about",
        logo: newfoundlandLogo
      }
    ]
  },
  { province: "Northwest Territories", clubs: [] },
  { province: "Nova Scotia", clubs: [] },
  { province: "Nunavut", clubs: [] },
  {
    province: "Ontario",
    clubs: [
      {
        name: "Carleton Pre-Veterinary Medicine Club",
        university: "Carleton University",
        email: "carleton.prevetmed@gmail.com",
        instagram: "@carleton.prevetmed",
        facebook: "@carleton.prevetmed",
        logo: carletonLogo
      },
      {
        name: "Future Vets Club",
        university: "University of Guelph",
        email: "fvc@uoguelph.ca",
        instagram: "@fvcguelph",
        facebook: "@fvcguelph",
        logo: fvcLogo
      },
      {
        name: "Laurentian University Pre Vet Club",
        university: "Laurentian University",
        email: "evan_rassel@laurentian.ca",
        instagram: "@laurentian_prevetclub"
      },
      {
        name: "UofT’s Veterinary Medicine Club",
        university: "University of Toronto",
        email: "vmc@utoronto.ca",
        instagram: "@vmc_uoft",
        facebook: "@uoftvmc",
        logo: vmcLogo
      },
      {
        name: "Western University’s Pre-Veterinary Society",
        university: "Western University",
        email: "prevet.club@westernusc.ca",
        instagram: "@westernprevet",
        facebook: "@westernprevet",
        logo: westernLogo
      },
      {
        name: "YorkU Pre-Veterinary Medicine Club",
        university: "York University",
        email: "prevetclub.yorku@gmail.com",
        instagram: "@yuprevet",
        logo: yorkLogo
      }
    ]
  },
  {
    province: "Prince Edward Island",
    clubs: [
      {
        name: "UPEI Pre-Veterinary & Animal Welfare Society",
        university: "University of Prince Edward Island",
        email: "Prevet@upeisu.ca",
        instagram: "@upeiprevetsociety",
        logo: peiLogo
      }
    ]
  },
  {
    province: "Quebec",
    clubs: [
      {
        name: "McGill Pre-Vet Society",
        university: "McGill University",
        email: "mcgill.pre-vet.society@outlook.com",
        instagram: "@mcgillprevetsociety"
      }
    ]
  },
  {
    province: "Saskatchewan",
    clubs: [
      {
        name: "U of S PreVet Club",
        university: "University of Saskatchewan",
        email: "u_of_s_prevet@hotmail.com",
        instagram: "@u_of_s_prevet",
        facebook: "@UofSPVC",
        logo: saskatchewanLogo
      }
    ]
  }
];

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
              <p className="mt-4 text-sm text-forest/70">
                We&apos;re gathering contact information for this province. Email us to add your club.
              </p>
            ) : (
              <div className="mt-6 grid gap-6 md:grid-cols-2">
                {entry.clubs.map((club) => (
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
                      {club.email && (
                        <p>
                          Email:{" "}
                          <a href={`mailto:${club.email}`} className="underline decoration-lavender decoration-2 underline-offset-4">
                            {club.email}
                          </a>
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
                    </div>
                  </article>
                ))}
              </div>
            )}
          </section>
        ))}
      </div>
    </SectionWrapper>
  );
}
