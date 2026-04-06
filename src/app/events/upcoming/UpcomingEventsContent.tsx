"use client";

import { useEffect, useState } from "react";
import { upcomingEvents } from "@/data/upcomingEvents";

const REGISTER_URL = "https://cpvma2026symposium.vfairs.ca/en/registration-form";
const AGENDA_URL = "https://cpvma2026symposium.vfairs.ca/en/";
const COUNTDOWN_TARGET = new Date("2026-05-01T00:00:00-04:00").getTime();

type CountdownState = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const getCountdownState = (): CountdownState => {
  const difference = Math.max(0, COUNTDOWN_TARGET - Date.now());
  const totalSeconds = Math.floor(difference / 1000);

  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60
  };
};

const formatUnit = (value: number) => value.toString().padStart(2, "0");

export default function UpcomingEventsContent() {
  const event = upcomingEvents[0];
  const [countdown, setCountdown] = useState<CountdownState | null>(null);

  useEffect(() => {
    setCountdown(getCountdownState());

    const intervalId = window.setInterval(() => {
      setCountdown(getCountdownState());
    }, 1000);

    return () => window.clearInterval(intervalId);
  }, []);

  if (!event) {
    return null;
  }

  const countdownUnits = [
    { label: "Days", value: countdown ? formatUnit(countdown.days) : "--" },
    { label: "Hours", value: countdown ? formatUnit(countdown.hours) : "--" },
    { label: "Minutes", value: countdown ? formatUnit(countdown.minutes) : "--" },
    { label: "Seconds", value: countdown ? formatUnit(countdown.seconds) : "--" }
  ];

  return (
    <div className="space-y-8">
      <section className="rounded-[2.5rem] border border-forest/10 bg-white/90 p-8 shadow-[0_24px_52px_rgba(0,0,0,0.08)] md:p-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-herbalGreen">
              {event.season} Symposium
            </p>
            <h2 className="mt-3 text-3xl font-serif font-bold text-forest md:text-[2.6rem]">
              {event.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-forest/80">{event.description}</p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm text-forest/75">
              <span className="rounded-full border border-forest/10 bg-roseCream/80 px-4 py-2">
                Dates: {event.dateRange}
              </span>
            </div>
          </div>

          <div className="flex w-full flex-col gap-3 sm:flex-row lg:w-auto">
            <a
              href={REGISTER_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-forest px-8 py-3 text-sm font-semibold uppercase tracking-[0.28em] text-roseCream transition hover:bg-herbalGreen hover:text-forest"
            >
              Register
            </a>
            <a
              href={AGENDA_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-forest px-8 py-3 text-sm font-semibold uppercase tracking-[0.28em] text-forest transition hover:border-herbalGreen hover:bg-herbalGreen hover:text-roseCream"
            >
              Agenda
            </a>
          </div>
        </div>
      </section>

      <section className="rounded-[2.5rem] border border-forest/10 bg-roseCream/80 p-8 shadow-[0_18px_40px_rgba(0,0,0,0.06)]">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-herbalGreen">
            Countdown
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-forest/80">
            The symposium runs from May 1 through May 3, 2026.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {countdownUnits.map((unit) => (
            <div
              key={unit.label}
              className="rounded-3xl border border-forest/10 bg-white/95 px-6 py-8 text-center shadow-[0_12px_28px_rgba(0,0,0,0.05)]"
            >
              <p className="text-4xl font-serif font-bold text-forest md:text-5xl">{unit.value}</p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-[0.35em] text-herbalGreen">
                {unit.label}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
