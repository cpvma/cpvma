"use client";

import { useEffect, useState } from "react";
import { pastEvents } from "@/data/pastEvents";
import PastEventTimeline from "./PastEventTimeline";

type View = "speakers" | "sponsors";

export default function PastEventsContent() {
  const [activeEventId, setActiveEventId] = useState<string>(pastEvents[0]?.id ?? "");
  const [view, setView] = useState<View>("speakers");
  const activeEvent = pastEvents.find((event) => event.id === activeEventId) ?? pastEvents[0];

  return (
    <PastEventTimeline
      events={pastEvents}
      activeEventId={activeEventId}
      onEventChange={setActiveEventId}
      view={view}
      onViewChange={setView}
      activeEvent={activeEvent}
    />
  );
}
