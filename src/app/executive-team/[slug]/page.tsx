import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import SectionWrapper from "@/components/SectionWrapper";
import { executiveRoles, getExecutiveRoleBySlug } from "@/data/executiveTeam";

type RolePageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return executiveRoles.map((role) => ({ slug: role.slug }));
}

export function generateMetadata({ params }: RolePageProps): Metadata {
  const role = getExecutiveRoleBySlug(params.slug);

  if (!role) {
    return {
      title: "Executive Role | CPVMA",
      description: "Find executive role highlights from the Canadian Pre-Veterinary Medical Association."
    };
  }

  return {
    title: `${role.title} | CPVMA`,
    description: role.summary
  };
}

export default function ExecutiveRolePage({ params }: RolePageProps) {
  const role = getExecutiveRoleBySlug(params.slug);

  if (!role) {
    notFound();
  }

  return (
    <div className="bg-mistGray py-16 md:py-24">
      <SectionWrapper className="bg-white/80 rounded-[2.5rem] border border-forest/10 p-8 md:p-12 shadow-[0_18px_40px_rgba(0,0,0,0.08)]">
        <Link
          href="/executive-team"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.35em] text-forest/70 transition hover:text-herbalGreen"
        >
          ← Back to Executive Team
        </Link>

        <div className="mt-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-herbalGreen">Portfolio</p>
          <h1 className="mt-3 text-4xl font-serif font-bold text-forest md:text-[2.8rem]">{role.title}</h1>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-forest/80">{role.description}</p>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {role.members.map((member) => (
            <article
              key={`${role.slug}-${member.name}`}
              className="flex w-full flex-col items-center rounded-3xl border border-lavender/40 bg-roseCream/70 px-6 py-8 text-center shadow-[0_18px_34px_rgba(0,0,0,0.08)]"
            >
              <div className="h-28 w-28 rounded-full border-4 border-white bg-mistGray shadow-[0_8px_24px_rgba(0,0,0,0.12)]">
                <Image
                  src={member.photo}
                  alt={member.name}
                  className="h-full w-full rounded-full object-cover"
                  sizes="112px"
                  style={member.imagePosition ? { objectPosition: member.imagePosition } : undefined}
                />
              </div>
              <span className="mt-6 text-xs font-semibold uppercase tracking-[0.35em] text-herbalGreen">
                {member.role}
              </span>
              <h2 className="mt-2 text-2xl font-serif text-forest">{member.name}</h2>
              <p className="mt-4 text-sm leading-relaxed text-forest/80">{member.bio}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-3xl bg-forest px-6 py-6 text-center text-roseCream">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-lavender">Stay Connected</p>
          <p className="mt-3 text-base leading-relaxed text-roseCream/90">
            Ready to collaborate with the {role.title.toLowerCase()}? Reach out through the contact logos above
            or email <a href="mailto:cpvma.acpmv@gmail.com" className="underline decoration-lavender decoration-2 underline-offset-4">cpvma.acpmv@gmail.com</a>.
          </p>
        </div>
      </SectionWrapper>
    </div>
  );
}
