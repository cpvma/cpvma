import { Metadata } from "next";
import SectionWrapper from "@/components/SectionWrapper";

const SPONSOR_PACKAGE_SRC = "/cpvma-sponsorship-package-25_26.pdf";

export const metadata: Metadata = {
  title: "Sponsorship Packages | CPVMA",
  description: "Partner with CPVMA to reach aspiring veterinary professionals at Canada's national pre-vet symposium."
};

const tiers = [
  {
    name: "Platinum",
    price: "$1,000+",
    highlights: [
      "Virtual channel at our symposium",
      "Address attendees at your sponsored session (2–3 min)",
      "Full-day CPVMA social media takeover & Q&A",
      "Video post featuring your organization before the symposium",
      "Extra-large logo on symposium complementary gift",
      "Website listing with extended organization description",
      "One question included in the attendee feedback survey"
    ],
    gradient: "from-[#f4f2ff] to-[#e2daf5]",
    border: "border-[#c4b8f0]",
    badge: "bg-[#9b87e8] text-white"
  },
  {
    name: "Gold",
    price: "$750 – $999",
    highlights: [
      "Virtual channel at our symposium",
      "Welcome attendees at the start of your sponsored session",
      "Social media post announcing your organization",
      "Logo on the first slide of your sponsored lecture/lab",
      "Large logo on symposium complementary gift",
      "Website listing with organization description"
    ],
    gradient: "from-[#fff9e6] to-[#fde8a0]",
    border: "border-[#f0d060]",
    badge: "bg-[#c49a10] text-white"
  },
  {
    name: "Silver",
    price: "$500 – $749",
    highlights: [
      "Virtual channel at our symposium",
      "Named recognition during your sponsored session",
      "Social media post announcing your organization",
      "Logo on the first slide of your sponsored lecture/lab",
      "Medium logo on symposium complementary gift",
      "Website listing with organization description"
    ],
    gradient: "from-[#eef2f7] to-[#d0dae8]",
    border: "border-[#a8bdd0]",
    badge: "bg-[#6e8eaa] text-white"
  },
  {
    name: "Bronze",
    price: "$250 – $499",
    highlights: [
      "Virtual channel at our symposium",
      "Social media post announcing your organization",
      "Small logo on symposium complementary gift",
      "Listed as a Bronze Sponsor on the CPVMA website"
    ],
    gradient: "from-[#fdf0e6] to-[#f5cca0]",
    border: "border-[#d4956a]",
    badge: "bg-[#b06830] text-white"
  }
];

export default function SponsorshipPackagesPage() {
  return (
    <SectionWrapper className="space-y-12">
      <div className="text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-herbalGreen">Partner With CPVMA</p>
        <h1 className="mt-3 text-4xl font-serif font-bold text-forest md:text-[2.8rem]">Sponsorship Packages</h1>
        <div className="mx-auto my-5 h-[2px] w-24 rounded-full bg-gradient-to-r from-lavender to-herbalGreen" />
        <p className="mx-auto max-w-3xl text-base leading-relaxed text-forest/80">
          Each year our symposium brings together pre-veterinary students, veterinary professionals, and academic partners
          from across Canada. Download the full package below for deliverables and how to get in touch.
        </p>
      </div>

      {/* Tier cards */}
      <div className="grid gap-6 sm:grid-cols-2">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className={`flex flex-col rounded-3xl border bg-gradient-to-br p-7 shadow-[0_10px_28px_rgba(0,0,0,0.07)] ${tier.gradient} ${tier.border}`}
          >
            {/* Header */}
            <div className="flex items-baseline gap-4">
              <span className={`rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.3em] ${tier.badge}`}>
                {tier.name}
              </span>
              <p className="font-serif text-lg font-bold text-forest">{tier.price}</p>
            </div>

            {/* What's included */}
            <div className="mt-5 border-t border-forest/10 pt-5">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-forest/50">What&apos;s included</p>
              <ul className="space-y-2">
                {tier.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-forest/80">
                    <span className="mt-[3px] shrink-0 h-3.5 w-3.5 rounded-full bg-herbalGreen/20 flex items-center justify-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-herbalGreen" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="rounded-3xl bg-forest px-8 py-8 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-lavender">Full Package</p>
        <p className="mt-3 text-lg font-serif text-roseCream">
          Download the PDF for complete details, timelines, and contact information.
        </p>
        <a
          href={SPONSOR_PACKAGE_SRC}
          download
          className="mt-5 inline-flex items-center justify-center rounded-full bg-lavender px-8 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-forest transition hover:bg-herbalGreen hover:text-roseCream"
        >
          Download Sponsorship Package
        </a>
      </div>

      {/* PDF embed */}
      <div className="mx-auto max-w-4xl">
        <iframe
          src={`${SPONSOR_PACKAGE_SRC}#toolbar=1&navpanes=0`}
          title="CPVMA Sponsorship Package"
          className="h-[80vh] w-full rounded-3xl border border-forest/15 shadow-[0_24px_60px_rgba(0,0,0,0.12)]"
        />
      </div>
    </SectionWrapper>
  );
}
