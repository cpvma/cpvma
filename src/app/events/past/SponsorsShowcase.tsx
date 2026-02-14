"use client";

import Image from "next/image";
import { sponsors, type SponsorTier } from "@/data/sponsors";

const tierOrder: SponsorTier[] = ["Platinum", "Gold", "Silver", "Bronze"];

const tierThemes: Record<SponsorTier, { section: string; card: string }> = {
  Platinum: {
    section: "bg-gradient-to-br from-[#f4f2ff] to-[#d9d1f2]",
    card: "bg-white/95"
  },
  Gold: {
    section: "bg-gradient-to-br from-[#fff6da] to-[#ffe3a0]",
    card: "bg-white/95"
  },
  Silver: {
    section: "bg-gradient-to-br from-[#eef2f7] to-[#cbd4e1]",
    card: "bg-white/90"
  },
  Bronze: {
    section: "bg-gradient-to-br from-[#fbe8d3] to-[#f4c89d]",
    card: "bg-white/95"
  }
};

type SponsorsShowcaseProps = {
  season: string;
};

export default function SponsorsShowcase({ season }: SponsorsShowcaseProps) {
  const seasonSponsors = sponsors.filter((sponsor) => sponsor.season === season);

  if (seasonSponsors.length === 0) {
    return (
      <p className="text-center text-sm text-forest/60">Sponsor information for {season || "this season"} is coming soon.</p>
    );
  }

  return (
    <div className="space-y-10">
      {tierOrder.map((tier) => {
        const tierSponsors = seasonSponsors.filter((sponsor) => sponsor.tier === tier);
        if (tierSponsors.length === 0) {
          return null;
        }

        const theme = tierThemes[tier];

        return (
          <section
            key={tier}
            className={`rounded-3xl border border-forest/10 p-6 shadow-[0_12px_34px_rgba(0,0,0,0.12)] ${theme.section}`}
          >
            <header className="text-center text-forest">
              <h2 className="text-2xl font-serif">{tier}</h2>
            </header>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {tierSponsors.map((sponsor) => (
                <article
                  key={sponsor.name}
                  className={`flex flex-col gap-4 rounded-2xl border border-white/50 p-4 text-forest shadow-[0_6px_18px_rgba(0,0,0,0.08)] ${theme.card}`}
                >
                  <div className="flex items-center gap-4">
                    <div className="relative h-16 w-16 overflow-hidden rounded-xl border border-forest/10 bg-white">
                      <Image src={sponsor.logo} alt={sponsor.name} fill sizes="64px" className="object-contain p-2" />
                    </div>
                    <div>
                      <p className="text-lg font-serif text-forest">{sponsor.name}</p>
                    </div>
                  </div>
                  <div className="max-h-64 overflow-y-auto pr-2 text-sm leading-relaxed text-forest/85 whitespace-pre-line">
                    {sponsor.description}
                  </div>
                </article>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
