import Link from "next/link";
import ExternalLink from "./ExternalLink";
export default function Footer() {
  return (
    <footer className="bg-surface text-muted text-base border-t border-line">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 flex-col gap-3 sm:flex-row">
        <p>© 2026 Ojo Ifeanyi Ukiwe. Northumberland, UK</p>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-6 ">
            <li>
              <Link
                href="/accessibility"
                className="underline hover:text-petrol-dark"
              >
                Accessibility
              </Link>
            </li>
            <li>
              <a
                href="mailto:duio1541@gmail.com"
                className="underline hover:text-petrol-dark"
              >
                Email me
              </a>
            </li>
            <li>
              <ExternalLink
                href="https://www.linkedin.com/in/ifeanyiukiwe"
                className="underline hover:text-petrol-dark"
              >
                LinkedIn
              </ExternalLink>
            </li>
            <li>
              <ExternalLink
                href="https://github.com/ifeanyiukiwe"
                className="underline hover:text-petrol-dark"
              >
                GitHub
              </ExternalLink>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
