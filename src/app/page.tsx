"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const sectionFade = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

const cardFade = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 }
};

const involvementCards = [
  {
    title: "Join as a Member",
    description:
      "Connect with a national network of pre-veterinary students and professionals."
  },
  {
    title: "Attend Our Events",
    description:
      "Participate in educational conferences, guest lectures, and hands-on workshops."
  },
  {
    title: "Partner With Us",
    description:
      "Collaborate as a speaker, sponsor, or institutional member to support future veterinarians."
  }
];


export default function Page() {
  return (
    <main className="bg-mistGray text-forest">
      {/* Hero */}
      <section className="relative flex min-h-[90vh] w-full flex-col items-center justify-center overflow-hidden bg-mistGray px-6 py-24 text-center md:py-32">
        <div className="absolute inset-0 -z-10 bg-hero-gradient" aria-hidden />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="flex w-full max-w-[540px] flex-col items-center"
        >
          <div
            className="flex w-full justify-center"
            style={{
              maskImage: "radial-gradient(circle at center, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)",
              WebkitMaskImage: "radial-gradient(circle at center, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)",
              maskRepeat: "no-repeat",
              WebkitMaskRepeat: "no-repeat",
              maskMode: "alpha"
            }}
          >
            <motion.img
              src="/cpvma-acpmv-logo.webp"
              alt="CPVMA | ACPMV logo"
              className="h-auto w-[65vw] max-w-[520px] md:w-[40vw]"
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              whileHover={{ scale: 1.02, filter: "drop-shadow(0 8px 24px rgba(28,36,23,0.15))" }}
            />
          </div>

          <motion.div
            className="animate-gradient-line mt-6 h-[2px] w-[120px] rounded-full"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
          />

          <motion.p
            className="mt-6 max-w-[60ch] text-[1.05rem] leading-[1.65] text-forest/85"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6, ease: "easeOut" }}
          >
            Building Canada&apos;s community for aspiring veterinary professionals — uniting students,
            Veterinary Professionals, and opportunities across the nation.
          </motion.p>

          <motion.div
            className="mt-8 flex w-full flex-col items-center gap-4 text-sm font-semibold uppercase tracking-[0.12em] md:flex-row md:justify-center"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6, ease: "easeOut" }}
          >
            <Link
              href="/about/mission"
              className="inline-flex w-full items-center justify-center rounded-full bg-lavender px-8 py-3 text-forest transition duration-300 hover:bg-herbalGreen hover:text-roseCream hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)] md:w-auto"
            >
              Our Mission
            </Link>
            <Link
              href="/about/join-us"
              className="inline-flex w-full items-center justify-center rounded-full border border-forest px-8 py-3 text-forest transition duration-300 hover:bg-forest hover:text-roseCream hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)] md:w-auto"
            >
              Join Us
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-12 flex flex-col items-center text-forest/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-xs font-medium tracking-[0.35em] uppercase">Scroll</span>
          <span className="animate-scroll-indicator mt-2 text-2xl">⌄</span>
        </motion.div>
      </section>

      {/* Mission Section */}
      <motion.section
        className="bg-mistGray px-6 py-24"
        variants={sectionFade}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="mx-auto max-w-3xl text-center">
          <motion.h2
            className="font-serif text-3xl font-bold text-forest md:text-[2.25rem]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Our Mission
          </motion.h2>
          <motion.div
            className="animate-gradient-line mx-auto mt-5 h-[2px] w-24 rounded-full"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          />
          <motion.p
            className="mt-8 text-[1.05rem] leading-[1.8] text-forest/80"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          >
            The Canadian Pre-Veterinary Medical Association is a student-led network connecting
            pre-veterinary students across Canada with mentors, resources, and hands-on experiences
            through our annual symposium, excursion trips, and collaborative events.
          </motion.p>
          <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
          >
            <Link
              href="/about/mission"
              className="inline-flex items-center justify-center rounded-full border border-lavender px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-forest transition duration-300 hover:border-herbalGreen hover:bg-herbalGreen hover:text-roseCream"
            >
              Learn More About Our Mission
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Who We Are */}
      <motion.section
        className="bg-roseCream px-6 py-28"
        variants={sectionFade}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
          <motion.div
            className="relative min-h-[320px] overflow-hidden rounded-3xl"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-forest/60 via-forest/35 to-herbalGreen/25" />
            <Image
              src="/cpvma-acpmv-logo.webp"
              alt="CPVMA crest"
              fill
              className="object-contain object-center opacity-90"
              priority
            />
          </motion.div>
          <motion.div
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="font-serif text-[2.25rem] font-bold text-forest">Who We Are</h2>
            <div className="animate-gradient-line mt-4 h-[2px] w-20 rounded-full" />
            <p className="mt-6 text-[1.05rem] leading-[1.7] text-forest/80">
              Founded by dedicated pre-veterinary students, CPVMA | ACPMV represents future
              veterinarians from coast to coast. We collaborate with universities, professionals,
              and organizations to create meaningful academic and career-building opportunities.
            </p>
            <div className="mt-8">
            <Link
              href="/about/team"
              className="inline-flex items-center justify-center rounded-full bg-lavender px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-forest transition duration-300 hover:bg-herbalGreen hover:text-roseCream hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)]"
            >
              Meet the Team
            </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Get Involved */}
      <motion.section
        className="bg-mistGray px-6 py-28"
        variants={sectionFade}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="font-serif text-[2.25rem] font-bold text-forest">Get Involved</h2>
            <div className="animate-gradient-line mx-auto mt-4 h-[2px] w-20 rounded-full" />
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {involvementCards.map((card, index) => (
              <motion.div
                key={card.title}
                className="rounded-3xl border border-forest/10 bg-roseCream/90 p-8 text-left shadow-[0_8px_24px_rgba(0,0,0,0.04)] transition duration-300 hover:-translate-y-2 hover:border-lavender/70 hover:shadow-[0_16px_32px_rgba(0,0,0,0.08)]"
                variants={cardFade}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
              >
                <h3 className="font-serif text-xl font-semibold text-forest">{card.title}</h3>
                <p className="mt-4 text-[0.98rem] leading-relaxed text-forest/75">{card.description}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <Link
              href="/membership"
              className="inline-flex items-center justify-center rounded-full bg-forest px-10 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-roseCream transition duration-300 hover:bg-herbalGreen hover:text-forest"
            >
              Become a Member
            </Link>
          </div>
        </div>
      </motion.section>

      {/* Reach Us */}
    </main>
  );
}
