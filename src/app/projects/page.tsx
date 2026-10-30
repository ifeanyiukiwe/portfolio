import type { Metadata } from "next";
import Image from "next/image";
import ExternalLink from "@/components/ExternalLink";
import { Truck } from "lucide-react";

export const metadata: Metadata = {
  title: "Projects | Ojo Ifeanyi Ukiwe",
};

const sections = [
  { id: "webaudit", label: "WebAudit" },
  { id: "north-east-places", label: "North East Places" },
  { id: "padfect", label: "Padfect Store" },
  { id: "infinisculpt", label: "Infinisculpt" },
  { id: "foodash", label: "Foodash" },
];
type CaseStudy = {
  id: string;
  title: string;
  stack: string;
  summary: string;
  github?: string;
  liveSite?: string;
  image?: string;
  alt?: string;
  problem: string;
  built: string;
  decision: string;
  learnt: string;
};
const caseStudies: CaseStudy[] = [
  {
    id: "webaudit",
    title: "WebAudit: accessibility auditing tool",
    stack: "PHP 8.2 (OOP, PDO) · MySQL · JavaScript · Chart.js",
    summary:
      "Enter a public web address and WebAudit runs 15 automated WCAG 2.1 AA checks, explains each issue with the offending HTML and a fix, scores the page out of 100 and tracks the score over time.",
    github: "https://github.com/ifeanyiukiwe/webaudit",
    image: "/images/dashboard.png",
    alt: "WebAudit dashboard showing 3 audits run, 33 critical issues, an average score of 63 and 1 project; a score trend rising from 0 to 100 then 89 across three runs; a doughnut chart of issues by severity; and a recent audits table for gov.uk (89), the W3C demo after page (100) and the W3C demo before page (0)",
    problem:
      "Accessibility reports are often long lists of errors. Developers struggle to see what matters most, so serious problems stay unfixed.",
    built:
      "An object-oriented PHP audit engine using DOMDocument and XPath, a JSON API, and a six-table MySQL schema with foreign keys. Every query that uses input is a prepared statement.",
    decision:
      "Because the tool fetches any address a user types, I protected it against server-side request forgery: only public http and https addresses are allowed, private ranges are blocked, and every redirect is checked again.",
    learnt:
      "Auditing my own React app gave a perfect score, because the crawler only sees the empty root element before JavaScript runs. I documented the limitation and planned a warning for JavaScript-rendered pages.",
  },
  {
    id: "north-east-places",
    title: "North East Places: accessible map",
    stack:
      "SvelteKit · Svelte 5 · TypeScript · MapLibre GL JS · Tailwind CSS · Vitest",
    summary:
      "An interactive map of towns across North East England, with a searchable list beside it. Selecting a place in the list flies the map to it, and clicking a marker highlights it in the list.",
    github: "https://github.com/ifeanyiukiwe/north-east-places",
    liveSite: "https://north-east-places.vercel.app",
    image: "/images/north-east-places2.png",
    alt: "North East Places: a street map zoomed in on Hartlepool with its popup open, beside a search box showing 10 places found and Hartlepool highlighted in the list.",
    problem:
      "Interactive maps are hard or impossible to use with a keyboard or a screen reader, so the information on them is often out of reach for the people who need it most.",
    built:
      "A SvelteKit app using Svelte 5 runes. One piece of shared state keeps the MapLibre map and the place list in sync in both directions, and a search filters the list by town or county. The search logic is a separate function covered by five Vitest unit tests.",
    decision:
      "I built the list as the accessible alternative to the map, not an afterthought: real buttons with aria-pressed, a labelled search box, and a results count that screen readers announce as you type.",
    learnt:
      "The map worked in development but its tiles were blank in production. I traced it to MapLibre's background worker, whose path broke when the build bundled the library, and fixed it by importing the worker as a URL. Now I always check a production build locally before deploying.",
  },
  {
    id: "padfect",
    title: "Padfect Store: gaming e-commerce platform",
    stack: "PHP · MySQL · JavaScript · HTML · CSS",
    summary:
      "My highest-scoring MSc project: an online shop where gamers can browse and buy gaming accessories, with customer accounts, live search, a cart, checkout and an admin dashboard for managing orders.",
    github: "https://github.com/ifeanyiukiwe/msc-ecommerce",
    image: "/images/e-commerce.png",
    alt: 'Padfect Store home page: a purple navigation bar with Home, Product, Cart, Search, Contact, Resources, Login and Admin links, above a photo of a white game controller on a bowl of tortilla chips, with the heading "Everything Game", the tagline "Fascinating. Fun. Affordable." and a Shop Now button.',
    problem:
      "Gamers needed one place to find accessories, compare them and buy them, and the shop needed a simple way to manage orders.",
    built:
      "A full-stack PHP application with sign-up and login using hashed passwords, separate session-based access for customers and admins, and a six-table MySQL database (users, admins, products, cart, orders and order items) queried with joins.",
    decision:
      "I made the PHP endpoints return JSON, so JavaScript could update the search results and cart without reloading the page, and I used prepared statements for every query that takes user input.",
    // CHECK: is this a lesson you'd stand behind? Rewrite in your own words if not.
    learnt:
      "Looking back, the white tagline over a busy hero photo does not meet colour contrast requirements. Since specialising in accessibility, I check contrast while designing rather than after.",
  },
  {
    id: "infinisculpt",
    title: "Infinisculpt: booking platform for a local business",
    stack: "React · Tailwind CSS · Node.js · Express · MongoDB · Vercel",
    summary:
      "A full website and booking system I built, unpaid, for a local beauty business, so customers could choose a treatment and book a time online.",
    liveSite: "https://infinisculpt.com",
    image: "/images/infinisculpt.png",
    alt: 'Infinisculpt home page: a navigation bar with the IS Sculpt logo, a 24-hour badge and Book, Express, Gallery and Find Us links, above a large nail-polish bottle image with the heading "Enhance Your Natural Beauty", the line "Premium nail, lash and beauty treatments tailored just for you" and a Book Now button.',
    problem:
      "The business needed customers to book treatments online without the risk of two people booking the same slot.",
    built:
      "A five-step booking journey backed by a REST API, with an admin area secured by bcrypt and JWT, a CORS allowlist, a health-check route and clear error responses.",
    decision:
      "I generated the available slots and checked for overlaps on the server, not in the browser, so double bookings could not happen even if two customers booked at the same moment.",
    // CHECK: what did you learn from this project? Write it in your own words.
    learnt:
      "Working for a real client taught me to turn their needs into features and to keep the booking journey simple for customers on their phones.",
  },
  {
    id: "foodash",
    title: "Foodash: delivery app for corner shops (in progress)",
    stack: "Next.js · TypeScript · Tailwind CSS · Jest · GitHub Actions",
    summary:
      "A delivery app for local corner shops, which I'm building the way a professional team would: planned on a Jira board, with unit tests and a CI pipeline from the start.",
    github: "https://github.com/ifeanyiukiwe/fooddash",
    problem:
      "Local corner shops rarely have a simple way to take orders for delivery, so customers go to larger chains instead.",
    built:
      "So far: postcode validation covered by Jest unit tests, and a GitHub Actions pipeline with branch protection and preview deployments.",
    decision:
      "I set up testing and continuous integration before building features, so every change is checked automatically from the first commit.",
    // CHECK: what have you learnt so far? Write it in your own words.
    learnt:
      "Planning work in sprints on a Jira board has helped me break a large app into small, testable pieces.",
  },
];

export default function ProjectsPage() {
  return (
    <>
      <section className="bg-surface border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-20 flex flex-col gap-6">
          <h1 className="text-4xl md:text-5xl font-bold">Projects</h1>
          <p className="text-xl text-muted max-w-2xl">
            Projects I’ve designed and built myself, from an accessibility
            auditing tool that became my MSc research to a tested SvelteKit map
            application. Each case study covers the problem, what I built, a
            decision I made and what I learnt.
          </p>
          <nav aria-label="On this page">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="text-petrol underline hover:text-petrol-dark"
                  >
                    {section.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>
      <div className="mx-auto max-w-6xl px-5 py-16 flex flex-col gap-14">
        {caseStudies.map((study) => {
          const blocks = [
            { heading: "The problem", text: study.problem },
            { heading: "What I built", text: study.built },
            { heading: "A decision I made", text: study.decision },
            { heading: "What I learnt", text: study.learnt },
          ];
          return (
            <article
              key={study.id}
              id={study.id}
              aria-labelledby={`${study.id}-heading`}
              className="bg-surface border border-line rounded p-8 flex flex-col gap-6"
            >
              <p className="font-mono text-sm text-muted">{study.stack}</p>
              <h2 id={`${study.id}-heading`} className="text-3xl font-bold">
                {study.title}
              </h2>
              <p className="max-w-3xl text-lg">{study.summary}</p>
              <div className="flex flex-wrap gap-6">
                {study.github && (
                  <ExternalLink
                    href={study.github}
                    className="underline text-petrol hover:text-petrol-dark"
                  >
                    Code and README on GitHub
                    <span className="sr-only"> for {study.title}</span>
                  </ExternalLink>
                )}
                {study.liveSite && (
                  <ExternalLink
                    href={study.liveSite}
                    className="underline text-petrol hover:text-petrol-dark"
                  >
                    View live site
                    <span className="sr-only"> for {study.title}</span>
                  </ExternalLink>
                )}
              </div>
              {study.image ? (
                <Image
                  src={study.image}
                  alt={study.alt ?? ""}
                  width={1200}
                  height={700}
                  className="w-full h-auto rounded border border-line"
                />
              ) : (
                <div className="h-[240px] flex items-center justify-center rounded border border-line bg-[#eaf1f3]">
                  <Truck
                    aria-hidden="true"
                    size={120}
                    strokeWidth={1.5}
                    className="text-petrol"
                  />
                </div>
              )}
              <div className="grid gap-8 md:grid-cols-2">
                {blocks.map((block) => (
                  <div key={block.heading}>
                    <h3 className="text-xl font-bold">{block.heading}</h3>
                    <p className="mt-2 text-muted">{block.text}</p>
                  </div>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
}
