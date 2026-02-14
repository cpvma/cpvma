"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { PastEvent, Speaker } from "@/data/pastEvents";
import SponsorsShowcase from "./SponsorsShowcase";

const indicatorBase =
  "absolute -left-[32px] h-4 w-4 rounded-full border-[3px] border-roseCream bg-forest transition duration-200";

type ActiveSpeaker = {
  speaker: Speaker;
  imageSrc?: string;
  eventTitle: string;
  dayLabel: string;
  date: string;
  theme: string;
};

type View = "speakers" | "sponsors";

const speakerImages: Record<string, string> = {
  "Dr. Marie Holowaychuk": "/guest-speakers-2021-2022/marie-holowaychuk-head-shot-aug-2019.webp",
  "Dr. Louis Kwantes": "/guest-speakers-2021-2022/louis_kwantes.webp",
  "Dr. Heather Reid": "/guest-speakers-2021-2022/dr.-heather-reid-1.webp",
  "Dr. Ian Barker": "/guest-speakers-2021-2022/ian_barker.webp",
  "Dr. Tiago Afonso": "/guest-speakers-2021-2022/t.afonso.webp",
  "Dr. Jessica Law": "/guest-speakers-2021-2022/dr.-law-hs.webp",
  "Dr. Ryan Appleby": "/guest-speakers-2021-2022/ryan-appleby_10092019_img_7505.webp",
  "Dr. Linda Jacobson": "/guest-speakers-2021-2022/linda_jacobson.webp",
  "Dr. Claire Card": "/guest-speakers-2021-2022/dr.-claire-card-.webp",
  "Dr. Dave McRuer": "/guest-speakers-2021-2022/dave-and-spark.webp",
  "Angie Arora": "/guest-speakers-2021-2022/angie_arora.webp",
  "Asadeh Behnam-Shabahang": "/guest-speakers-2021-2022/asadeh.jpeg",
  "Charlie Wyatt-Swain": "/guest-speakers-2021-2022/charlie.webp",
  "Juan Sebastian Orjuela": "/guest-speakers-2021-2022/juancho-1.png",
  "Keisha Harris": "/guest-speakers-2021-2022/harris_keisha_cpvma.webp",
  "Sarah Lokaisingh": "/guest-speakers-2021-2022/sarah-lokaisingh.webp",
  "Dr. Dayle Poitras-Oster": "/guest-speakers-2021-2022/dayleprofile.webp",
  "Dr. Kim Murphy": "/guest-speakers-2021-2022/kim_murphy.webp",
  "Dr. Fernando Salgado-Bierman": "/guest-speakers-2021-2022/fernando_salgado-bierman.webp",
  "Dr. Veronique Lepage": "/guest-speakers-2021-2022/dr.-lepage-photo.jpeg",
  "Lesli Bisgould": "/guest-speakers-2021-2022/lesli-bisgould-hs.jpg",
  "Dr. Eric Maguet": "/guest-speakers-2021-2022/eric_maguet.webp",
  "Dr. Ellen Williamson": "/guest-speakers-2021-2022/ellen-williamson.jpeg",
  "Dr. Emilia Wong Gordon": "/guest-speakers-2021-2022/e-gordon-head-shot.webp",
  "Dr. Izzy Hirji": "/guest-speakers-2021-2022/izzy-hirji-.jpeg",
  "Dr. Jesse Benjamin": "/guest-speakers-2021-2022/dr.-jesse-benjamin.webp",
  "Dr. Mouhamadou Diaw": "/guest-speakers-2021-2022/mdiaw.webp",
  "Dr. Michelle Lem": "/guest-speakers-2021-2022/michelle_lem_color.webp",
  "Dr. Christine Calder": "/guest-speakers-2021-2022/christine-calder.webp",
  "Dr. John Tait": "/guest-speakers-2021-2022/dr.-tait.webp",
  "Dr. Mary Jane Ireland": "/guest-speakers-2021-2022/photo-doctor_mary_jane_ireland.jpg",
  "Dr. Jennifer Loewen": "/guest-speakers-2022-2023/jennifer_loewen.webp",
  "Dr. Faith Banks": "/guest-speakers-2022-2023/dr_faith.webp",
  "Dr. Arinjay Banerjee": "/guest-speakers-2022-2023/dr_arinjay.png",
  "Dr. Javier Sanchez": "/guest-speakers-2022-2023/dr_javier.png",
  "Dr. Candace Lowe": "/guest-speakers-2022-2023/dr_candace.png",
  "Dr. Charlotte Pye": "/guest-speakers-2022-2023/dr_charlie_pye.png",
  "Dr. Trisha Dowling": "/guest-speakers-2022-2023/dr_trisha_dowling.png",
  "Dr. Tessa Baker": "/guest-speakers-2022-2023/tessa_baker.png",
  "Dr. Kelsey Spence": "/guest-speakers-2022-2023/kelsey_spence.png",
  "Janelle Jiminez": "/guest-speakers-2022-2023/janelle_jiminez.png",
  "Dr. Murray Gillies": "/guest-speakers-2022-2023/dr_murray.webp",
  "Dr. Valerie Macdonald": "/guest-speakers-2022-2023/dr_valerie.png",
  "Dr. Ryan Llera": "/guest-speakers-2022-2023/dr_ryan.webp",
  "Dr. Beverly McEwen": "/guest-speakers-2022-2023/dr_beverly.png",
  "Dr. Victoria Bowes": "/guest-speakers-2022-2023/dr_victoria_bowes.webp",
  "Dr. Karin Orsel": "/guest-speakers-2022-2023/karin_orsel.webp",
  "Dr. Shane Bateman": "/guest-speakers-2022-2023/dr_shane.webp",
  "Laura Zehr": "/guest-speakers-2022-2023/laura_zehr.webp",
  "Dr. Natasha Kutryk": "/guest-speakers-2023-2024/natasha_kutryk.webp",
  "Dr. Katy Proudfoot": "/guest-speakers-2023-2024/dr.-katy-proudfoot.webp",
  "Dr. Sarah Lim": "/guest-speakers-2023-2024/dr.-sarah-lim.jpg",
  "Dr. Melanie Pinel": "/guest-speakers-2023-2024/melanie_pinel.jpg",
  "Dr. Cathy Furness": "/guest-speakers-2023-2024/dr.-cathy-furness.jpg",
  "Dr. Stephanie Smith": "/guest-speakers-2023-2024/dr.-stephanie-smith.webp",
  "Dr. Melanie Barham": "/guest-speakers-2023-2024/dr.-melanie-barham-2.webp",
  "Dr. Jordan Woodsworth": "/guest-speakers-2023-2024/dr.-jordan-woodsworth.webp",
  "Dr. Leann Benedetti": "/guest-speakers-2023-2024/dr.-leann-benedetti.jpeg",
  "Dr. Ian Sandler": "/guest-speakers-2023-2024/driansandlerheadshot.webp",
  "Cerys Goodall": "/guest-speakers-2023-2024/jbs-cerysgoodall_07-1.webp",
  "Dr. Charlotte Williams": "/guest-speakers-2023-2024/charlotte-williams.jpeg",
  "Dr. Marty Becker": "/guest-speakers-2023-2024/martyheadshot2020-e1580262440629.jpeg",
  "Dr. Samuel J. Ujewe": "/guest-speakers-2023-2024/dr.-samuel-ujewe.webp",
  "Dr. Colleen Duncan": "/guest-speakers-2023-2024/dr.-colleen-duncan-2.webp",
  "Dr. Cliff Redford": "/guest-speakers-2023-2024/dr.-cliff-redford-3.jpeg",
  "Susan Groenveld": "/guest-speakers-2023-2024/susangroeneveld-1.webp",
  "Dr. Michael Accardi": "/guest-speakers-2023-2024/dr.-michael-accardi.png",
  "Dr. Michael Blackwell": "/guest-speakers-2023-2024/dr.-michael-blackwell-4.jpeg",
  "Darren Osborne": "/guest-speakers-2023-2024/darren-osborne.webp",
  "Dr. Kat Sutherland": "/guest-speakers-2023-2024/dr.-kat-sutherland.webp",
  "Dr. Paul Manesis": "/guest-speakers-2023-2024/paul-manesis.webp",
  "Dr. Gillian Muir": "/guest-speakers-2023-2024/dr.-gillian-muir-1.webp",
  "Dr. Crystal Lee": "/guest-speakers-2024-2025/crystal-lee.webp",
  "Dr. Juan Sebastian Orjuela": "/guest-speakers-2024-2025/juan-orjuela.webp",
  "Dr. Michelle Yee": "/guest-speakers-2024-2025/michelle-yee.webp",
  "Tracey Brown": "/guest-speakers-2024-2025/tracey-brown.webp",
  "Maria-Victoria Walker-Genovese": "/guest-speakers-2024-2025/maria-victoria-walker-genovese.webp",
  "Dr. Kristy Haines": "/guest-speakers-2024-2025/kristy-haines.webp",
  "Dr. Colleen Fisher": "/guest-speakers-2024-2025/colleen-fisher.webp",
  "Dr. Sue Burlatschenko": "/guest-speakers-2024-2025/sue-burlatschenko.webp",
  "Dr. Matthew Richardson": "/guest-speakers-2024-2025/matthew-richardson.webp",
  "Dr. Christian Catalano": "/guest-speakers-2024-2025/christian-catalano.webp",
  "Dr. Diccon Westworth": "/guest-speakers-2024-2025/diccon-westworth.webp",
  "Antonia Laoutaris": "/guest-speakers-2024-2025/antonia-laoutaris.webp",
  "Tracey Lawrence": "/guest-speakers-2024-2025/tracey-lawrence.webp",
  "Dr. Susan Kilborn": "/guest-speakers-2024-2025/susan-kilborn.webp",
  "Dr. Stef Lim": "/guest-speakers-2024-2025/stef-lim.webp",
  "Melanie Savage": "/guest-speakers-2024-2025/melanie-savage.webp",
  "Dr. Jim Berry": "/guest-speakers-2024-2025/jim-berry.webp",
  "Dr. Bettina Bobsien": "/guest-speakers-2024-2025/bettina-bobsien.webp",
  "Dr. Stephanie Schiavone": "/guest-speakers-2024-2025/stephanie-schiavone.webp",
  "Dr. Emma Borkowski": "/guest-speakers-2024-2025/emma-borkowski.webp",
  "Dr. Stephen Atkinson": "/guest-speakers-2024-2025/stephen-atkinson.webp",
  "Dr. Tracey Young": "/guest-speakers-2024-2025/tracey-young.webp"
};

type PastEventTimelineProps = {
  events: PastEvent[];
  activeEventId: string;
  onEventChange: (id: string) => void;
  view: View;
  onViewChange: (view: View) => void;
  activeEvent: PastEvent;
  showTimeline?: boolean;
};

export default function PastEventTimeline({
  events,
  activeEventId,
  onEventChange,
  view,
  onViewChange,
  activeEvent,
  showTimeline = true
}: PastEventTimelineProps) {
  const [activeSpeaker, setActiveSpeaker] = useState<ActiveSpeaker | null>(null);

  useEffect(() => {
    if (!activeSpeaker) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveSpeaker(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [activeSpeaker]);

  useEffect(() => {
    if (activeSpeaker) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
    return;
  }, [activeSpeaker]);

  useEffect(() => {
    setActiveSpeaker(null);
  }, [activeEventId]);

  if (!activeEvent) {
    return null;
  }

  const tabs: { id: View; label: string }[] = [
    { id: "speakers", label: "Guest Speakers" },
    { id: "sponsors", label: "Sponsors" }
  ];

  return (
    <>
      <div className={`mt-12 ${showTimeline ? "grid gap-10 lg:grid-cols-[320px,1fr]" : ""}`}>
        {showTimeline && (
          <ol className="relative space-y-6 border-l border-forest/15 pl-8">
            {events.map((event) => {
              const isActive = event.id === activeEvent.id;

              return (
                <li key={event.id} className="relative pl-4">
                  <span
                    className={`${indicatorBase} ${isActive ? "scale-125 border-herbalGreen bg-herbalGreen" : ""}`}
                    aria-hidden="true"
                  />

                  <button
                    type="button"
                    onMouseEnter={() => onEventChange(event.id)}
                    onFocus={() => onEventChange(event.id)}
                    onClick={() => onEventChange(event.id)}
                    className={`w-full rounded-2xl border px-5 py-4 text-left transition ${
                      isActive
                        ? "border-herbalGreen/50 bg-roseCream/90 text-forest shadow-[0_8px_24px_rgba(19,56,42,0.2)]"
                        : "border-forest/10 bg-white/70 text-forest/80 hover:border-forest/25"
                    }`}
                    aria-pressed={isActive}
                  >
                    <p className="text-sm font-semibold text-herbalGreen">{event.season}</p>
                    <p className="mt-1 font-serif text-xl text-forest">{event.topic ?? event.title}</p>
                    {event.dateRange && <p className="text-xs text-forest/60">{event.dateRange}</p>}
                  </button>
                </li>
              );
            })}
          </ol>
        )}

        <div className="rounded-3xl border border-forest/10 bg-white/95 p-8 shadow-[0_18px_40px_rgba(0,0,0,0.08)]">
          <div className="space-y-1">
            <p className="text-sm font-medium text-herbalGreen">{activeEvent.season}</p>
            <h3 className="text-3xl font-serif text-forest md:text-[2.4rem]">
              {activeEvent.topic ?? activeEvent.title}
            </h3>
            {activeEvent.dateRange && <p className="text-sm text-forest/60">{activeEvent.dateRange}</p>}
          </div>
          <p className="mt-4 text-base leading-relaxed text-forest/80">{activeEvent.description}</p>

          <ul className="mt-5 list-disc space-y-2 pl-5 text-sm text-forest/80">
            {activeEvent.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            {tabs.map((tab) => {
              const active = tab.id === view;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => onViewChange(tab.id as View)}
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
              {activeEvent.days.map((day) => (
                <div key={day.id} className="rounded-3xl border border-forest/10 bg-white/90 p-6">
                  <div className="flex flex-wrap items-end justify-between gap-4 border-b border-forest/10 pb-4">
                    <div>
                      <p className="text-sm font-semibold text-herbalGreen">{day.label}</p>
                      <p className="text-xl font-serif text-forest">{day.date}</p>
                    </div>
                    <p className="text-sm font-medium text-forest/70">{day.theme}</p>
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
                            eventTitle: activeEvent.title,
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
              <SponsorsShowcase season={activeEvent.season} />
            </div>
          )}

        </div>
      </div>

      {activeSpeaker && <SpeakerModal data={activeSpeaker} onClose={() => setActiveSpeaker(null)} />}
    </>
  );
}

function SpeakerCard({
  speaker,
  imageSrc,
  onSelect
}: {
  speaker: Speaker;
  imageSrc?: string;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className="group flex items-center gap-4 rounded-2xl border border-forest/10 bg-roseCream/60 p-4 text-left text-forest shadow-[0_6px_16px_rgba(0,0,0,0.05)] transition duration-200 hover:border-herbalGreen/60 hover:shadow-[0_12px_24px_rgba(97,156,113,0.35)] focus-visible:border-herbalGreen/60 focus-visible:shadow-[0_12px_24px_rgba(97,156,113,0.35)] focus-visible:outline-none"
    >
      <div className="relative h-16 w-16 overflow-hidden rounded-xl border border-forest/10 bg-mistGray">
        {imageSrc ? (
          <Image src={imageSrc} alt={speaker.name} fill sizes="64px" className="object-cover" />
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
        className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-[2.5rem] border border-herbalGreen/30 bg-white/98 p-8 text-forest shadow-[0_35px_120px_rgba(0,0,0,0.45)]"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="absolute right-6 top-6 inline-flex h-10 w-10 items-center justify-center rounded-full border border-forest/15 text-forest/70 transition hover:border-herbalGreen/50 hover:text-herbalGreen"
          onClick={onClose}
          aria-label="Close speaker details"
        >
          ×
        </button>

        <div className="grid max-h-full gap-8 overflow-y-auto pr-2 md:grid-cols-[260px,1fr]">
          <div className="md:sticky md:top-0">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-3xl border border-forest/15 bg-mistGray shadow-[0_22px_45px_rgba(0,0,0,0.2)]">
              {imageSrc ? (
                <Image src={imageSrc} alt={speaker.name} fill sizes="320px" className="object-cover" />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-sm font-semibold text-forest/60">CPVMA</div>
              )}
            </div>
          </div>

          <div className="space-y-4 text-white pr-2">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-herbalGreen">
                {eventTitle} • {dayLabel}
              </p>
              <p className="text-sm text-white/80">
                {date} · {theme}
              </p>
            </div>

            <div>
              <h4 className="text-3xl font-serif text-white">{speaker.name}</h4>
              <p className="mt-2 text-base font-medium text-white/80">{speaker.role}</p>
            </div>

            <div className="max-h-[45vh] overflow-y-auto pr-1 text-base leading-relaxed text-white">
              {speaker.bio}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
