import SectionWrapper from "@/components/SectionWrapper";

export default function Page() {
  return (
    <SectionWrapper>
      <h1 className="mb-4 text-center text-4xl font-serif font-bold text-forest md:text-5xl">
        Events Overview
      </h1>
      <p className="mb-10 text-center text-herbalGreen">
        Workshops, outreach, and experiential learning for aspiring veterinarians.
      </p>
      <p className="mx-auto max-w-3xl text-center text-base leading-relaxed text-forest">
        CPVMA events bring members together for skill-building sessions, networking
        opportunities, and collaborative service projects. From clinical simulations to community
        engagement, our programming supports every stage of the pre-veterinary journey.
      </p>
    </SectionWrapper>
  );
}
