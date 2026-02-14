import SectionWrapper from "@/components/SectionWrapper";

export default function Page() {
  return (
    <SectionWrapper>
      <h1 className="mb-4 text-center text-4xl font-serif font-bold text-forest md:text-5xl">
        Our Mission
      </h1>
      <p className="mb-10 text-center text-herbalGreen">
        Advancing veterinary education through collaboration and compassion.
      </p>
      <p className="mx-auto max-w-3xl text-center text-base leading-relaxed text-forest">
        The Canadian Pre-Veterinary Medical Association is committed to fostering connections and
        providing resources to pre-veterinary students across Canada. As a student-run initiative,
        it was created to address the growing need for a national platform to bring together those
        interested in pursuing a career in veterinary medicine. Through this organization we aim to
        improve access to resources and increase opportunities for hands-on learning through events
        such as our annual Symposium, excursion trips, and nationwide fundraisers. Through our
        Symposium we offer innovative labs, informative lectures, and networking opportunities with
        the goal of strengthening the pre-veterinary community and developing long-lasting
        relationships between pre-veterinary students, undergraduate veterinary clubs, veterinary
        schools, and veterinarians.
      </p>
    </SectionWrapper>
  );
}
