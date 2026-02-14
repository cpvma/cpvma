import SectionWrapper from "@/components/SectionWrapper";

export default function Page() {
  return (
    <SectionWrapper>
      <h1 className="mb-4 text-center text-4xl font-serif font-bold text-forest md:text-5xl">
        About CPVMA
      </h1>
      <p className="mb-10 text-center text-herbalGreen">
        Championing future veterinary leaders across Canada.
      </p>
      <p className="mx-auto max-w-3xl text-center text-base leading-relaxed text-forest">
        The Canadian Pre-Veterinary Medical Association unites students who are passionate about
        animal health, scientific inquiry, and community impact. We foster mentorship, provide
        professional development resources, and create spaces where members can learn from peers
        and experts alike.
      </p>
    </SectionWrapper>
  );
}
