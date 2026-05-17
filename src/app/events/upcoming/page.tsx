import SectionWrapper from "@/components/SectionWrapper";
import UpcomingEventsContent from "./UpcomingEventsContent";

export default function UpcomingEventsPage() {
  return (
    <SectionWrapper className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-serif font-bold text-forest md:text-5xl">Upcoming Events</h1>
        <p className="mx-auto mt-3 max-w-3xl text-base leading-relaxed text-forest/80">
          Upcoming CPVMA/ACPMV event details will be shared here when registration opens.
        </p>
      </div>

      <UpcomingEventsContent />
    </SectionWrapper>
  );
}
