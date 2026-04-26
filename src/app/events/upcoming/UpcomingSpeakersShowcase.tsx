"use client";

import Image, { type StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import type { PastEvent, Speaker } from "@/data/pastEvents";
import SponsorsShowcase from "../past/SponsorsShowcase";
import alisonCuffleyImage from "../../../../logos/2025-2026 speakers/Alison Cuffley.png";
import alannaBackxImage from "../../../../logos/2025-2026 speakers/Dr. Alanna Backx.png";
import alexandraWhittakerImage from "../../../../logos/2025-2026 speakers/Dr. Alexandra Whittaker.png";
import bernadetteAbelaRidderImage from "../../../../logos/2025-2026 speakers/Dr. Bernadette Abela-Ridder.png";
import cateDeweyImage from "../../../../logos/2025-2026 speakers/Dr. Cate Dewey.png";
import juanSebastianOrjuelaImage from "../../../../logos/2025-2026 speakers/Dr. Juan Sebastian Orjuela.png";
import kayleeByersImage from "../../../../logos/2025-2026 speakers/Dr. Kaylee Byers.png";
import keithWarrinerImage from "../../../../logos/2025-2026 speakers/Dr. Keith Warriner.png";
import marieHolowaychukImage from "../../../../logos/2025-2026 speakers/Dr. Marie Holowaychuk.png";
import melanieMooreImage from "../../../../logos/2025-2026 speakers/Dr. Melanie Moore.png";
import ivanaBlagojevicImage from "../../../../logos/2025-2026 speakers/Ivana Blagojevic.png";
import janineMitchellImage from "../../../../logos/2025-2026 speakers/Janine Mitchell.png";
import kaseyPedersenImage from "../../../../logos/2025-2026 speakers/Kasey Pedersen.png";
import tijanaSelakImage from "../../../../logos/2025-2026 speakers/Tijana Selak.png";

type ActiveSpeaker = {
  speaker: Speaker;
  imageSrc?: StaticImageData | string;
  eventTitle: string;
  dayLabel: string;
  date: string;
  theme: string;
};

const speakerImages: Record<string, StaticImageData | string> = {
  "Alison Cuffley": alisonCuffleyImage,
  "Dr. Alanna Backx": alannaBackxImage,
  "Dr. Alexandra Whittaker": alexandraWhittakerImage,
  "Dr. Bernadette Abela-Ridder": bernadetteAbelaRidderImage,
  "Dr. Cate Dewey": cateDeweyImage,
  "Dr. Juan Sebastian Orjuela": juanSebastianOrjuelaImage,
  "Dr. Kaylee Byers": kayleeByersImage,
  "Dr. Keith Warriner": keithWarrinerImage,
  "Dr. Marie Holowaychuk": marieHolowaychukImage,
  "Dr. Melanie Moore": melanieMooreImage,
  "Ivana Blagojevic": ivanaBlagojevicImage,
  "Janine Mitchell": janineMitchellImage,
  "Kasey Pedersen": kaseyPedersenImage,
  "Tijana Selak": tijanaSelakImage
};

type UpcomingSpeakersShowcaseProps = {
  event: PastEvent;
};

export default function UpcomingSpeakersShowcase({ event }: UpcomingSpeakersShowcaseProps) {
  const [activeSpeaker, setActiveSpeaker] = useState<ActiveSpeaker | null>(null);
  const [view, setView] = useState<"speakers" | "sponsors">("speakers");

  useEffect(() => {
    if (!activeSpeaker) {
      return;
    }

    const handleKeyDown = (pageEvent: KeyboardEvent) => {
      if (pageEvent.key === "Escape") {
        setActiveSpeaker(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [activeSpeaker]);

  useEffect(() => {
    if (!activeSpeaker) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [activeSpeaker]);

  if (event.days.length === 0) {
    return null;
  }

  return (
    <>
      <section className="rounded-[2.5rem] border border-forest/10 bg-white/95 p-8 shadow-[0_18px_40px_rgba(0,0,0,0.08)] md:p-10">
        <div className="space-y-1 text-center">
          <p className="text-sm font-medium text-herbalGreen">{event.season}</p>
          <h3 className="text-3xl font-serif text-forest md:text-[2.4rem]">{event.title}</h3>
          <p className="text-sm text-forest/60">{event.dateRange}</p>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-forest/80">
            Explore the current speaker lineup or view the sponsors supporting the 2025-2026 symposium.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          {[
            { id: "speakers" as const, label: "Guest Speakers" },
            { id: "sponsors" as const, label: "Sponsors" }
          ].map((tab) => {
            const active = tab.id === view;

            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setView(tab.id)}
                className={`rounded-full border px-6 py-2 text-xs font-semibold uppercase tracking-[0.35em] transition ${
                  active
                    ? "border-herbalGreen bg-herbalGreen text-forest shadow-[0_8px_24px_rgba(18,69,59,0.26)]"
                    : "border-forest/15 bg-white/70 text-forest hover:border-herbalGreen/50 hover:text-herbalGreen"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {view === "speakers" ? (
          <div className="mt-10 space-y-8">
            {event.days.map((day) => (
              <div key={day.id} className="rounded-3xl border border-forest/10 bg-white/90 p-6">
                <div className="flex flex-wrap items-end justify-between gap-4 border-b border-forest/10 pb-4">
                  <div>
                    <p className="text-sm font-semibold text-herbalGreen">{day.label}</p>
                    <p className="text-xl font-serif text-forest">{day.date}</p>
                  </div>
                  {day.theme ? <p className="text-sm font-medium text-forest/70">{day.theme}</p> : null}
                </div>

                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  {day.speakers.map((speaker) => (
                    <SpeakerCard
                      key={`${day.id}-${speaker.name}`}
                      speaker={speaker}
                      imageSrc={speakerImages[speaker.name]}
                      onSelect={() =>
                        setActiveSpeaker({
                          speaker,
                          imageSrc: speakerImages[speaker.name],
                          eventTitle: event.title,
                          dayLabel: day.label,
                          date: day.date,
                          theme: day.theme
                        })
                      }
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-10">
            <SponsorsShowcase season={event.season} />
          </div>
        )}
      </section>

      {activeSpeaker ? <SpeakerModal data={activeSpeaker} onClose={() => setActiveSpeaker(null)} /> : null}
    </>
  );
}

function SpeakerCard({
  speaker,
  imageSrc,
  onSelect
}: {
  speaker: Speaker;
  imageSrc?: StaticImageData | string;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className="group flex items-center gap-4 rounded-2xl border border-forest/10 bg-roseCream/60 p-4 text-left text-forest shadow-[0_6px_16px_rgba(0,0,0,0.05)] transition duration-200 hover:border-herbalGreen/60 hover:shadow-[0_12px_24px_rgba(97,156,113,0.35)] focus-visible:border-herbalGreen/60 focus-visible:shadow-[0_12px_24px_rgba(97,156,113,0.35)] focus-visible:outline-none"
    >
      <div className="relative h-16 w-16 overflow-hidden rounded-xl border border-forest/10 bg-white">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={speaker.name}
            fill
            sizes="64px"
            className="object-contain p-1"
            unoptimized
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-xs font-semibold text-forest/60">CPVMA</div>
        )}
      </div>

      <div className="flex-1">
        <p className="font-serif text-lg text-forest">{speaker.name}</p>
        <p className="text-sm font-medium text-forest/70">{speaker.role}</p>
        <p className="mt-1 text-xs font-semibold uppercase tracking-[0.25em] text-herbalGreen opacity-0 transition group-hover:opacity-100">
          Click to view profile
        </p>
      </div>
    </button>
  );
}

function SpeakerModal({ data, onClose }: { data: ActiveSpeaker; onClose: () => void }) {
  const { speaker, imageSrc, eventTitle, dayLabel, date, theme } = data;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0f1611]/90 px-4 py-10"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-[2.5rem] border border-herbalGreen/30 bg-forest p-8 text-white shadow-[0_35px_120px_rgba(0,0,0,0.45)]"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="absolute right-6 top-6 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition hover:border-herbalGreen/50 hover:text-herbalGreen"
          onClick={onClose}
          aria-label="Close speaker details"
        >
          ×
        </button>

        <div className="grid max-h-full gap-8 overflow-y-auto pr-2 md:grid-cols-[260px,1fr]">
          <div className="md:sticky md:top-0">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-3xl border border-white/10 bg-white shadow-[0_22px_45px_rgba(0,0,0,0.2)]">
              {imageSrc ? (
                <Image
                  src={imageSrc}
                  alt={speaker.name}
                  fill
                  sizes="320px"
                  className="object-contain p-3"
                  unoptimized
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-sm font-semibold text-forest/60">CPVMA</div>
              )}
            </div>
          </div>

          <div className="space-y-4 pr-2 text-white">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-herbalGreen">
                {eventTitle} • {dayLabel}
              </p>
              <p className="text-sm text-white/80">
                {theme ? `${date} · ${theme}` : date}
              </p>
            </div>

            <div>
              <h4 className="text-3xl font-serif text-white">{speaker.name}</h4>
              <p className="mt-2 text-base font-medium text-white/80">{speaker.role}</p>
            </div>

            {speaker.bio ? (
              <div className="max-h-[45vh] overflow-y-auto whitespace-pre-line pr-1 text-base leading-relaxed text-white">
                {speaker.bio}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
