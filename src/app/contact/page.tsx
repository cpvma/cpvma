import { Metadata } from "next";
import SectionWrapper from "@/components/SectionWrapper";

const contactCards = [
  {
    title: "Email",
    content: (
      <a
        href="mailto:cpvma.acpmv@gmail.com"
        className="text-lg font-semibold text-forest underline decoration-lavender decoration-2 underline-offset-4 transition hover:text-herbalGreen"
      >
        cpvma.acpmv@gmail.com
      </a>
    )
  },
  {
    title: "Mailing Address",
    content: <p className="text-base text-forest/80">3-304 Stone Rd West, Guelph ON, N1G 4W4</p>
  },
  {
    title: "Follow CPVMA",
    content: (
      <div className="flex flex-wrap gap-2">
        {[
          { label: "Instagram", href: "https://www.instagram.com/cpvma.acpmv" },
          { label: "Facebook", href: "https://www.facebook.com/cpvma.acpmv" },
          {
            label: "LinkedIn",
            href: "https://www.linkedin.com/company/canadian-pre-veterinary-medical-association/?originalSubdomain=ca"
          }
        ].map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center rounded-full border border-lavender px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-forest transition duration-200 hover:border-herbalGreen hover:bg-herbalGreen hover:text-roseCream sm:w-auto"
          >
            {social.label}
          </a>
        ))}
      </div>
    )
  }
];

export const metadata: Metadata = {
  title: "Contact CPVMA | ACPMV",
  description: "Get in touch with the Canadian Pre-Veterinary Medical Association leadership team."
};

export default function ContactPage() {
  return (
    <SectionWrapper className="bg-gradient-to-br from-mistGray via-white to-white">
      <div className="mx-auto max-w-5xl rounded-3xl border border-forest/10 bg-white/85 p-8 shadow-[0_12px_36px_rgba(0,0,0,0.06)] backdrop-blur-sm md:p-14">
        <div>
          <h1 className="text-4xl font-serif font-bold text-forest md:text-[2.6rem]">Reach Us</h1>
          <p className="mt-3 text-sm font-semibold uppercase tracking-[0.3em] text-herbalGreen">We&apos;re listening</p>
          <p className="mt-4 text-base leading-[1.7] text-forest/75">
            Whether you have program questions, partnership ideas, or want to share club highlights, the CPVMA national team is here to
            help. Choose the channel that works best for you and we&apos;ll follow up shortly.
          </p>

          <a
            href="mailto:cpvma.acpmv@gmail.com"
            className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-forest px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-roseCream transition hover:bg-herbalGreen hover:text-forest"
          >
            Email CPVMA
          </a>

          <div className="mt-8 space-y-5">
            {contactCards.map((card) => (
              <div
                key={card.title}
                className="rounded-2xl border border-forest/10 bg-roseCream/70 p-5 shadow-[0_10px_20px_rgba(0,0,0,0.04)]"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-herbalGreen">{card.title}</p>
                <div className="mt-4">{card.content}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
