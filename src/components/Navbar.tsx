"use client";

import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState, type FocusEvent } from "react";

type NavChild = {
  label: string;
  href: string;
};

type NavItem = {
  id: string;
  label: string;
  href?: string;
  children?: NavChild[];
};

const NAV_ITEMS: NavItem[] = [
  { id: "home", label: "Home", href: "/" },
      {
        id: "about",
        label: "About",
        href: "/about",
        children: [
          { label: "Mission", href: "/about/mission" },
          { label: "Team", href: "/about/team" },
          { label: "Clubs", href: "/about/clubs" },
          { label: "Newsletters", href: "/about/newsletters" },
          { label: "Constitution", href: "/about/constitution" },
          { label: "Join Us", href: "/about/join-us" }
        ]
      },
  {
    id: "events",
    label: "Events",
    href: "/events",
    children: [
      { label: "Upcoming", href: "/events/upcoming" },
      { label: "Past", href: "/events/past" },
      { label: "Packages", href: "/events/packages" }
    ]
  },
  { id: "contact", label: "Contact", href: "/contact" }
];

const dropdownMotion = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.12, ease: "easeOut" }
};

export default function Navbar() {
  const pathname = usePathname();
  const normalizedPath = pathname?.split("?")[0] ?? "/";

  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  useEffect(() => {
    setOpenDropdown(null);
    setMobileOpen(false);
    setMobileExpanded(null);
  }, [normalizedPath]);

  const linkBaseClasses =
    "relative inline-flex items-center px-2 py-1 text-[0.95rem] font-medium uppercase tracking-[0.28em] transition-colors duration-200 before:absolute before:left-0 before:-bottom-1 before:h-[2px] before:w-0 before:bg-gradient-to-r before:from-lavender before:to-transparent before:content-[''] before:transition-[width] before:duration-300 hover:before:w-full focus-visible:before:w-full";
  const linkActiveClasses = "text-lavender before:w-full opacity-100";
  const linkInactiveClasses = "text-roseCream hover:text-lavender";

  const isItemActive = (item: NavItem) => {
    if (item.href) {
      if (item.href === "/" && normalizedPath === "/") {
        return true;
      }

      if (item.href !== "/" && (normalizedPath === item.href || normalizedPath.startsWith(`${item.href}/`))) {
        return true;
      }
    }

    if (item.children) {
      return item.children.some((child) => normalizedPath === child.href);
    }

    return false;
  };

  const handleMouseEnter = (id: string, hasDropdown: boolean) => {
    if (hasDropdown) {
      setOpenDropdown(id);
    }
  };

  const handleMouseLeave = (hasDropdown: boolean) => {
    if (hasDropdown) {
      setOpenDropdown(null);
    }
  };

  const handleBlur = (event: FocusEvent<HTMLLIElement>, hasDropdown: boolean) => {
    if (!hasDropdown) {
      return;
    }

    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
      setOpenDropdown(null);
    }
  };

  const toggleMobileDropdown = (id: string) => {
    setMobileExpanded((current) => (current === id ? null : id));
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 bg-forest text-roseCream">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4">
        <a href="/" className="text-xl font-serif font-bold uppercase tracking-[0.35em] text-lavender">
          CPVMA | ACPMV
        </a>

        <ul className="hidden items-center space-x-8 font-sans font-medium uppercase tracking-[0.28em] text-[0.95rem] md:flex">
          {NAV_ITEMS.map((item) => {
            const hasDropdown = Boolean(item.children && item.children.length > 0);
            const active = isItemActive(item);
            const desktopLinkClasses = `${linkBaseClasses} ${active ? linkActiveClasses : linkInactiveClasses}`;

            return (
              <li
                key={item.id}
                className="group relative flex flex-col items-center"
                onMouseEnter={() => handleMouseEnter(item.id, hasDropdown)}
                onMouseLeave={() => handleMouseLeave(hasDropdown)}
                onFocus={() => handleMouseEnter(item.id, hasDropdown)}
                onBlur={(event) => handleBlur(event, hasDropdown)}
                onKeyDown={(event) => {
                  if (event.key === "Escape") {
                    setOpenDropdown(null);
                  }
                }}
              >
                {item.href ? (
                  <a
                    href={item.href}
                    className={`${desktopLinkClasses} group-hover:text-lavender group-hover:before:w-full focus-visible:text-lavender focus-visible:before:w-full`}
                    aria-haspopup={hasDropdown ? "true" : undefined}
                    aria-expanded={hasDropdown ? openDropdown === item.id : undefined}
                    style={{ opacity: active ? 1 : 0.85 }}
                  >
                    {item.label}
                  </a>
                ) : (
                  <button
                    type="button"
                    className={`${desktopLinkClasses} group-hover:text-lavender group-hover:before:w-full focus-visible:text-lavender focus-visible:before:w-full`}
                    onClick={() => setOpenDropdown((current) => (current === item.id ? null : item.id))}
                    aria-haspopup="true"
                    aria-expanded={openDropdown === item.id}
                    style={{ opacity: active ? 1 : 0.85 }}
                  >
                    {item.label}
                  </button>
                )}

                {hasDropdown && (
                  <AnimatePresence>
                    {openDropdown === item.id && (
                      <motion.div
                        {...dropdownMotion}
                        className="absolute left-1/2 top-[calc(100%+0.4rem)] z-50 w-max -translate-x-1/2 rounded-lg bg-roseCream/95 px-4 py-2 text-forest backdrop-blur-[2px] shadow-[0_4px_16px_rgba(0,0,0,0.03)]"
                      >
                        {item.children!.map((child, index) => (
                          <a
                            key={child.href}
                            href={child.href}
                            className="block pl-4 pr-6 py-2 text-[0.93rem] font-medium tracking-wide text-forest transition-colors duration-200 hover:bg-lavender/40 hover:text-herbalGreen focus-visible:bg-lavender/40 focus-visible:text-herbalGreen"
                            style={{ transitionDelay: `${index * 50}ms` }}
                          >
                            {child.label}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </li>
            );
          })}
        </ul>

        <a
          href="https://cpvmamerch.myshopify.com"
          target="_blank"
          rel="noreferrer"
          className="hidden rounded-full bg-roseCream px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-forest transition hover:bg-lavender hover:text-forest md:inline-flex"
        >
          Store
        </a>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-md border border-roseCream/60 text-roseCream transition-colors duration-200 hover:border-lavender hover:text-lavender md:hidden"
          onClick={() => setMobileOpen((open) => !open)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="relative flex h-4 w-6 flex-col justify-between">
            <span
              className={`block h-0.5 w-full bg-current transition-transform duration-200 ${
                mobileOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-current transition-opacity duration-200 ${
                mobileOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-current transition-transform duration-200 ${
                mobileOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      <AnimatePresence initial={false}>
        {mobileOpen && (
          <motion.div
            key="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="md:hidden border-t border-roseCream/20 bg-forest"
            id="mobile-navigation"
          >
            <div className="space-y-2 px-6 py-4">
              {NAV_ITEMS.map((item) => {
                const hasDropdown = Boolean(item.children && item.children.length > 0);
                const active = isItemActive(item);

                return (
                    <div key={item.id} className="border-b border-roseCream/15 pb-2">
                      <div className="flex items-center justify-between gap-4">
                        {item.href ? (
                          <a
                            href={item.href}
                            onClick={() => setMobileOpen(false)}
                          className={`text-[0.95rem] font-medium uppercase tracking-wide transition-colors duration-200 ${
                            active ? "text-lavender" : "text-roseCream hover:text-lavender"
                          }`}
                          >
                          {item.label}
                        </a>
                      ) : (
                        <span className="text-sm font-medium uppercase tracking-[0.25em] text-roseCream">
                          {item.label}
                        </span>
                      )}

                      {hasDropdown && (
                        <button
                          type="button"
                          onClick={() => toggleMobileDropdown(item.id)}
                          className="flex h-8 w-8 items-center justify-center rounded-md border border-roseCream/40 text-roseCream transition-colors duration-200 hover:border-lavender hover:text-lavender"
                          aria-expanded={mobileExpanded === item.id}
                          aria-controls={`${item.id}-mobile-submenu`}
                        >
                          <span className="sr-only">Toggle {item.label} submenu</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className={`h-4 w-4 transition-transform duration-200 ${
                              mobileExpanded === item.id ? "rotate-180" : "rotate-0"
                            }`}
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.23 7.21a.75.75 0 011.06.02L10 11.125l3.71-3.896a.75.75 0 111.08 1.04l-4.24 4.456a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </button>
                      )}
                    </div>

                        {hasDropdown && (
                      <AnimatePresence initial={false}>
                        {mobileExpanded === item.id && (
                          <motion.ul
                            id={`${item.id}-mobile-submenu`}
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="mt-2 space-y-2 overflow-hidden rounded-lg bg-roseCream/95 px-3 py-2 shadow-[0_4px_16px_rgba(0,0,0,0.03)] backdrop-blur-[2px]"
                          >
                            {item.children!.map((child, index) => (
                              <li key={child.href}>
                                <a
                                  href={child.href}
                                  onClick={() => setMobileOpen(false)}
                                  className="block rounded-md pl-3 pr-6 py-2 text-[0.93rem] font-medium tracking-wide text-forest transition-colors duration-200 hover:bg-lavender/40 hover:text-herbalGreen focus-visible:bg-lavender/40 focus-visible:text-herbalGreen"
                                  style={{ transitionDelay: `${index * 50}ms` }}
                                >
                                  {child.label}
                                </a>
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    )}
                  </div>
                );
              })}
              <div className="flex justify-center pt-2">
                <a
                  href="https://cpvmamerch.myshopify.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center rounded-full bg-roseCream px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-forest transition hover:bg-lavender/60"
                >
                  Store
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
