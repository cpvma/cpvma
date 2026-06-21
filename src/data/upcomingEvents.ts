import type { PastEvent } from "./pastEvents";

export type UpcomingEvent = PastEvent & {
  registerUrl?: string;
  agendaUrl?: string;
  countdownTarget?: string;
  countdownLabel?: string;
};

export const upcomingEvents: UpcomingEvent[] = [];
