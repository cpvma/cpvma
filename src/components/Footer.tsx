
const SOCIAL_LINKS = [
  { href: "https://www.facebook.com/cpvma.acpmv", label: "Facebook" },
  { href: "https://www.instagram.com/cpvma.acpmv", label: "Instagram" },
  {
    href: "https://www.linkedin.com/company/canadian-pre-veterinary-medical-association/?originalSubdomain=ca",
    label: "LinkedIn"
  }
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="flex flex-col items-center justify-between gap-4 bg-forest px-6 py-6 text-roseCream md:flex-row">
      <p className="text-sm font-medium uppercase tracking-wide">
        © {year} CPVMA. All rights reserved.
      </p>
      <nav className="flex items-center gap-4 text-sm font-medium uppercase tracking-wide">
        {SOCIAL_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="transition-colors hover:text-herbalGreen"
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </footer>
  );
}
