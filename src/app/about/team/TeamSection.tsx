"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { ExecutiveRole } from "@/data/executiveTeam";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 }
};

type TeamSectionProps = {
  title?: string;
  subtitle?: string;
  blurb?: string;
  roles: ExecutiveRole[];
  showHeading?: boolean;
};

export default function TeamSection({
  title = "Executive Team",
  subtitle = "Leadership across Canada",
  blurb = "Learn how every executive portfolio advances CPVMA’s mission. Click any role to explore the members, their focus areas, and their contact logos.",
  roles,
  showHeading = true
}: TeamSectionProps) {
  return (
    <section id="executive-team" className="bg-roseCream px-6 py-24 md:py-28">
      <div className="mx-auto max-w-6xl">
        {showHeading && (
          <div className="mb-14 text-center">
            <h1 className="text-4xl font-serif text-forest md:text-[2.6rem]">{title}</h1>
            <div className="mx-auto my-3 h-[2px] w-24 bg-gradient-to-r from-lavender to-herbalGreen" />
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-herbalGreen">
              {subtitle}
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-base text-forest/80">
              {blurb}
            </p>
          </div>
        )}

        <div className="grid gap-8 md:grid-cols-2">
          {roles.map((role, index) => (
            <motion.div
              key={role.slug}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: index * 0.04, duration: 0.5, ease: "easeOut" }}
            >
              <Link
                href={`/executive-team/${role.slug}`}
                className="group block h-full rounded-3xl border border-forest/10 bg-white/80 p-6 text-left shadow-[0_16px_34px_rgba(0,0,0,0.06)] transition duration-300 hover:-translate-y-1.5 hover:border-herbalGreen/60 hover:bg-roseCream/80 hover:shadow-[0_18px_38px_rgba(0,0,0,0.08)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-herbalGreen/60"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.35em] text-herbalGreen">
                  {role.members.length} {role.members.length === 1 ? "member" : "members"}
                </span>
                <h3 className="mt-3 text-2xl font-serif text-forest">{role.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-forest/85">
                  {role.summary}
                </p>

                <div className="mt-5 flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {role.members.slice(0, 3).map((member) => (
                      <div
                        key={member.name}
                        className="h-12 w-12 rounded-full border-2 border-roseCream bg-mistGray p-0.5 shadow-[0_4px_12px_rgba(0,0,0,0.08)]"
                      >
                        <Image
                          src={member.photo}
                          alt={member.name}
                          className="h-full w-full rounded-full object-cover"
                          sizes="48px"
                        />
                      </div>
                    ))}
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-forest/70">
                      Featured
                    </p>
                    <p className="text-sm font-medium text-forest">
                      {role.members.map((member) => member.name).slice(0, 2).join(" • ")}
                      {role.members.length > 2 ? " +" : ""}
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.3em] text-forest/70">
                  <span>View role details</span>
                  <span
                    aria-hidden="true"
                    className="translate-x-0 transition-transform duration-200 group-hover:translate-x-1"
                  >
                    ↗
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
