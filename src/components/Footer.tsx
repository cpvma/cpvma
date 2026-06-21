import Link from "next/link";

const SOCIAL_LINKS = [
  { href: "https://www.instagram.com/cpvma.acpmv", label: "Instagram" },
  { href: "https://www.facebook.com/cpvma.acpmv", label: "Facebook" },
  { href: "https://www.linkedin.com/company/canadian-pre-veterinary-medical-association/?originalSubdomain=ca", label: "LinkedIn" }
];

const FOOTER_NAV = [
  {
    heading: "About",
    links: [
      { label: "Our Mission", href: "/about/mission" },
      { label: "Executive Team", href: "/about/team" },
      { label: "Club Directory", href: "/about/clubs" },
      { label: "Newsletters", href: "/about/newsletters" },
      { label: "Join Us", href: "/about/join-us" }
    ]
  },
  {
    heading: "Events",
    links: [
      { label: "Upcoming", href: "/events/upcoming" },
      { label: "Past Events", href: "/events/past" },
      { label: "Sponsorship Packages", href: "/events/packages" }
    ]
  },
  {
    heading: "Connect",
    links: [
      { label: "Contact", href: "/contact" },
      { label: "Volunteers", href: "/get-involved/volunteers" },
      { label: "Store", href: "https://cpvmamerch.myshopify.com", external: true }
    ]
  }
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-forest text-roseCream">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-[1fr,auto,auto,auto]">
          {/* Brand */}
          <div className="max-w-xs">
            <p className="font-serif text-xl font-bold tracking-[0.2em] text-lavender">CPVMA | ACPMV</p>
            <p className="mt-3 text-sm leading-relaxed text-roseCream/65">
              The Canadian Pre-Veterinary Medical Association , connecting pre-vet students, clubs, and professionals across Canada.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold uppercase tracking-[0.25em] text-roseCream/50 transition-colors hover:text-lavender"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {FOOTER_NAV.map((col) => (
            <div key={col.heading}>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-lavender/70">{col.heading}</p>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {"external" in link && link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm text-roseCream/55 transition-colors hover:text-roseCream"
                      >
                        {link.label} ↗
                      </a>
                    ) : (
                      <Link
                        href={link.href as "/about/mission"}
                        className="text-sm text-roseCream/55 transition-colors hover:text-roseCream"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-roseCream/10 pt-6 text-xs font-medium uppercase tracking-wide text-roseCream/40 sm:flex-row">
          <p>© {year} CPVMA | ACPMV. All rights reserved.</p>
          <a href="mailto:cpvma.acpmv@gmail.com" className="transition-colors hover:text-roseCream/70">
            cpvma.acpmv@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}
