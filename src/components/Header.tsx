"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/accessibility", label: "Accessibility" },
];
export default function Header() {
  const pathname = usePathname();
  return (
    <header className="bg-surface border-b border-line ">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-4">
        <Link href="/" className="font-bold text-xl text-ink no-underline">
          Ojo Ifeanyi Ukiwe
        </Link>
        <nav aria-label="Main">
          <ul className="flex flex-wrap gap-x-7 gap-y-1">
            {links.map((link) => {
              const isCurrent = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={isCurrent ? "page" : undefined}
                    className={`inline-block py-2.5 text-ink hover:text-petrol-dark ${isCurrent ? "font-bold underline decoration-[3px] underline-offset-8" : "no-underline hover:underline"}`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
