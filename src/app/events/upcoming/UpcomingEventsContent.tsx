"use client";

import { useState } from "react";
import { upcomingEvents } from "@/data/upcomingEvents";
import PastEventTimeline from "../past/PastEventTimeline";
import type { PastEvent } from "@/data/pastEvents";

type View = "speakers" | "sponsors";

export default function UpcomingEventsContent() {
  const [activeEventId, setActiveEventId] = useState<string>(upcomingEvents[0]?.id ?? "");
  const [view, setView] = useState<View>("speakers");
  const activeEvent: PastEvent = upcomingEvents.find((event) => event.id === activeEventId) ?? upcomingEvents[0];

  return (
    <PastEventTimeline
      events={upcomingEvents}
      activeEventId={activeEventId}
      onEventChange={setActiveEventId}
      view={view}
      onViewChange={setView}
      activeEvent={activeEvent}
      showTimeline={false}
    />
  );
}
