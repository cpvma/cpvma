import SectionWrapper from "@/components/SectionWrapper";
import PastEventsContent from "./PastEventsContent";

export default function PastEventsPage() {
  return (
    <SectionWrapper className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-serif font-bold text-forest md:text-5xl">Past Events</h1>
        <p className="mx-auto mt-3 max-w-3xl text-base leading-relaxed text-forest/80">
          Relive the milestones that shaped CPVMA/ACPMV through our guest speaker timeline or explore the partners who
          fueled every symposium.
        </p>
      </div>

      <PastEventsContent />
    </SectionWrapper>
  );
}
