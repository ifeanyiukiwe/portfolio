"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/accessibility", label: "Accessibility" },
];

const mobileLinks = [{ href: "/", label: "Home" }, ...links];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  // "/projects" also counts as current on any page inside it
  const isCurrent = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-surface/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 md:h-20">
        {/* Logo: monogram + name */}
        <Link
          href="/"
          onClick={close}
          aria-label="Ojo Ifeanyi Ukiwe, home"
          className="flex items-center gap-3 text-ink no-underline"
        >
          <span
            aria-hidden="true"
            className="grid h-10 w-10 place-items-center rounded-lg bg-petrol text-sm font-bold tracking-wide text-white"
          >
            OU
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-lg font-bold">Ojo Ifeanyi Ukiwe</span>
            <span className="mt-1 text-[11px] font-bold uppercase tracking-[0.18em] text-muted">
              Front-end developer
            </span>
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {links.map((link) => {
              const current = isCurrent(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={current ? "page" : undefined}
                    className={`inline-block py-2.5 text-ink hover:text-petrol-dark ${
                      current
                        ? "font-bold underline decoration-[3px] underline-offset-8"
                        : "no-underline hover:underline"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            aria-current={isCurrent("/contact") ? "page" : undefined}
            className="hidden rounded-lg bg-petrol px-5 py-2.5 font-bold text-white no-underline shadow-[0_2px_0_#0f2c36] hover:bg-petrol-dark sm:inline-flex"
          >
            Get in touch
          </Link>

          {/* Hamburger: phones and tablets */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid h-11 w-11 place-items-center rounded-lg border border-line text-ink lg:hidden"
          >
            {open ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile panel */}
      {open && (
        <div
          id="mobile-menu"
          className="absolute inset-x-0 top-full border-b border-line bg-surface shadow-lg lg:hidden"
        >
          <nav aria-label="Mobile" className="mx-auto max-w-6xl px-5 py-4">
            <ul className="flex flex-col">
              {mobileLinks.map((link) => {
                const current = isCurrent(link.href);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={close}
                      aria-current={current ? "page" : undefined}
                      className={`block rounded-lg px-3 py-3 text-lg text-ink no-underline hover:bg-page ${
                        current ? "font-bold" : ""
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="mt-4 border-t border-line pt-4 sm:hidden">
              <Link
                href="/contact"
                onClick={close}
                className="block rounded-lg bg-petrol px-4 py-3 text-center font-bold text-white no-underline shadow-[0_2px_0_#0f2c36] hover:bg-petrol-dark"
              >
                Get in touch
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
