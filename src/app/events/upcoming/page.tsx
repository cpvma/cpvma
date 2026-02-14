import SectionWrapper from "@/components/SectionWrapper";
import UpcomingEventsContent from "./UpcomingEventsContent";

export default function UpcomingEventsPage() {
  return (
    <SectionWrapper className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-serif font-bold text-forest md:text-5xl">Upcoming Events</h1>
        <p className="mx-auto mt-3 max-w-3xl text-base leading-relaxed text-forest/80">
          The 2025-2026 CPVMA/ACPMV Symposium is in development. Check back soon for the complete lineup and registration
          updates.
        </p>
      </div>

      <UpcomingEventsContent />
    </SectionWrapper>
  );
}
