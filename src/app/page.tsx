import Link from "next/link";
import Image from "next/image";
import ExternalLink from "@/components/ExternalLink";
import { Truck } from "lucide-react";
export default function Home() {
  const stack = [
    {
      title: "Front end",
      items: [
        "React",
        "TypeScript",
        "Next.js",
        "JavaScript",
        "HTML and CSS",
        "Bootstrap",
        "Tailwind CSS",
      ],
    },
    {
      title: "Accessibility",
      items: [
        "WCAG 2.1 AA",
        "Semantic HTML",
        "Keyboard access",
        "Colour contrast",
        "Automated auditing",
      ],
      highlight: true,
    },
    {
      title: "Back end and data",
      items: [
        "PHP",
        "Node.js and Express",
        "REST APIs",
        "MySQL",
        "PostgreSQL",
        "MongoDB",
      ],
    },
    {
      title: "Ways of working",
      items: [
        "Git and GitHub",
        "GitHub Actions",
        "Jest",
        "Jira and Agile sprints",
        "Code review",
      ],
    },
  ];
  const featured = [
    {
      title: "WebAudit",
      tech: "PHP 8.2 · MySQL · JavaScript · Chart.js",
      description:
        "An accessibility auditing tool that checks a page against WCAG 2.1 AA, explains each issue with a fix, and tracks scores over time. It became the basis of my dissertation.",
      image: "/images/dashboard.png",
      alt: "WebAudit dashboard showing three audits, an average score of 63 and a score trend rising from 0 to 100",
      caseStudy: "/projects#webaudit",
      github: "https://github.com/ifeanyiukiwe/webaudit",
    },
    {
      title: "Gaming e-commerce platform",
      tech: "PHP · MySQL · JavaScript · HTML · CSS",
      description:
        "My highest-scoring MSc project: a full PHP shop with secure login, product search, cart, checkout and an admin dashboard for orders.",
      image: "/images/ecommerce.png",
      alt: "Gaming e-commerce shop home page showing a grid of games with prices, a search bar and a cart button",
      caseStudy: "/projects#ecommerce",
      github: "https://github.com/ifeanyiukiwe/msc-ecommerce",
    },
    {
      title: "Infinisculpt",
      tech: "React · Node.js · Express · MongoDB",
      description:
        "A booking platform I built and launched for a local beauty business: a five-step booking journey, a REST API that checks for overlapping appointments, and a secure admin area.",
      image: "/images/infinisculpt.png",
      alt: "Infinisculpt booking page showing beauty treatments with prices and a button to choose a date and time",
      caseStudy: "/projects#infinisculpt",
      liveSite: "https://infinisculpt.com",
    },
    {
      title: "Foodash",
      tech: "Next.js · TypeScript · Tailwind · Jest · GitHub Actions",
      description:
        "A delivery app for local corner shops, built the way a team would: planned on a Jira board, with unit tests and a CI pipeline from day one.",
      caseStudy: "/projects#foodash",
      github: "https://github.com/ifeanyiukiwe/fooddash",
      inProgress: true,
    },
  ];
  return (
    <>
      <section className="bg-surface border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-20 flex flex-col gap-6">
          <p className="font-mono text-sm tracking-wide text-muted">
            FRONT-END DEVELOPER · NORTH EAST ENGLAND
          </p>
          <h1 className="text-5xl font-bold leading-tight max-w-[16ch]">
            I build web applications that everyone can use.
          </h1>
          <p className="text-xl text-muted max-w-2xl">
            Over five years building React and TypeScript interfaces, most of
            them in an Agile team, an MSc in Computing from the University of
            Sunderland, and research into how accessibility reports help
            developers fix real problems.
          </p>
          <div className="flex flex-wrap gap-4 mt-2">
            <Link
              href="/projects"
              className="inline-flex items-center min-h-12 px-6 rounded bg-petrol text-white font-bold no-underline shadow-[0_3px_0_var(--color-petrol-shadow)] hover:bg-petrol-dark"
            >
              View my projects
            </Link>
            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center min-h-12 px-6 rounded border-2 border-ink text-ink font-bold no-underline hover:bg-petrol-dark hover:border-petrol-dark hover:text-white"
            >
              Download my CV (PDF, 76 KB)
            </a>
          </div>
          <p>
            <span className="border rounded px-2 py-1 text-petrol border-petrol font-mono text-sm">
              WCAG 2.1 AA
            </span>{" "}
            This site is built to meet WCAG 2.1 AA.{" "}
            <Link
              href="/accessibility"
              className="underline text-petrol hover:text-petrol-dark"
            >
              Read the accessibility statement
            </Link>
          </p>
        </div>
      </section>
      <section aria-labelledby="bring-h">
        <div className="mx-auto max-w-6xl px-5 py-18 flex flex-col gap-8">
          <h2 id="bring-h" className="text-4xl font-bold">
            What I bring
          </h2>
          <div className="flex flex-wrap gap-6">
            <div
              id="card-1"
              className="bg-petrol text-white rounded p-9 flex-1 basis-80"
            >
              <ul className="flex flex-col gap-7">
                <li>
                  <p className="text-6xl font-bold leading-none mb-2">
                    5+ years
                  </p>
                  <p>
                    building web applications with React and TypeScript
                    including almost five years in a commercial Agile team
                  </p>
                </li>
                <li className="border-t border-white/30 pt-6">
                  <p className="text-xl font-bold">MSc Computing</p>
                  <p>University of Sunderland 2026</p>
                </li>
                <li className="border-t border-white/30 pt-6">
                  <p className="text-xl font-bold">35 developers</p>
                  <p>took part in my accessibility research</p>
                </li>
              </ul>
            </div>
            <div
              id="card-2"
              className="bg-surface border border-line rounded p-9 flex-[2] basis-[480px] flex flex-col gap-6"
            >
              {stack.map((group) => (
                <div key={group.title} className="flex flex-col gap-3">
                  <h3 className="text-xl font-bold">{group.title}</h3>
                  <ul className="flex flex-wrap gap-2.5">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className={`px-3.5 py-1.5 rounded border ${
                          group.highlight
                            ? "border-petrol bg-[#eaf1f3] text-petrol-dark"
                            : "border-line bg-page"
                        }`}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section aria-labelledby="work-h">
        <div className="mx-auto max-w-6xl px-5 py-18 flex flex-col gap-8">
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <h2 id="work-h" className="text-4xl font-bold">
              Selected work
            </h2>
            <Link
              href="/projects"
              className="text-lg underline text-petrol hover:text-petrol-dark"
            >
              All projects
            </Link>
          </div>
          {featured.map((work, index) => (
            <article
              key={work.title}
              className={`bg-surface border border-line rounded overflow-hidden flex flex-wrap ${
                index % 2 === 1 ? "flex-row-reverse" : ""
              }`}
            >
              {work.image ? (
                <Image
                  src={work.image}
                  alt={work.alt ?? ""}
                  width={1200}
                  height={700}
                  className="flex-1 basis-[480px] min-w-0 h-[340px] object-cover object-left-top bg-ink"
                />
              ) : (
                <div className="flex-1 basis-[480px] min-w-0 h-[340px] flex items-center justify-center bg-[#eaf1f3]">
                  <Truck
                    aria-hidden="true"
                    size={140}
                    strokeWidth={1.5}
                    className="text-petrol"
                  />
                </div>
              )}
              <div className="flex-1 basis-[380px] p-9 flex flex-col gap-4">
                <p className="font-mono text-sm text-muted">{work.tech}</p>
                <h3 className="text-3xl font-bold">
                  {work.title}
                  {work.inProgress && (
                    <span className="ml-3 align-middle text-sm font-normal px-2.5 py-1 rounded bg-notice-bg text-notice-text">
                      In progress
                    </span>
                  )}
                </h3>
                <p className="text-lg leading-relaxed">{work.description}</p>
                <div className="flex flex-wrap gap-5 mt-auto text-lg">
                  <Link
                    href={work.caseStudy}
                    className="font-bold underline text-petrol hover:text-petrol-dark"
                  >
                    Read the case study
                  </Link>
                  {work.github && (
                    <ExternalLink
                      href={work.github}
                      className="underline text-petrol hover:text-petrol-dark"
                    >
                      {work.inProgress
                        ? "Follow progress on GitHub"
                        : "Code on GitHub"}
                    </ExternalLink>
                  )}
                  {work.liveSite && (
                    <ExternalLink
                      href={work.liveSite}
                      className="underline text-petrol hover:text-petrol-dark"
                    >
                      View live site
                    </ExternalLink>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section
        aria-labelledby="research-h"
        className="bg-petrol-deep text-white"
      >
        <div className="mx-auto max-w-6xl px-5 py-18 flex flex-wrap gap-10 items-start">
          <div className="flex-1 basis-[420px] flex flex-col gap-4">
            <p className="font-mono text-sm tracking-wide text-[#cde5e4]">
              MSC RESEARCH
            </p>
            <h2 id="research-h" className="text-4xl font-bold leading-tight">
              Do accessibility reports actually help developers fix things?
            </h2>
          </div>
          <div className="flex-1 basis-[420px] flex flex-col gap-4">
            <p className="text-[#e9f2f1] text-lg leading-relaxed">
              For my dissertation I ran a controlled experiment with 35
              developers, testing how different report formats affect which
              accessibility problems get fixed. The paper is being prepared for
              publication.
            </p>
            <Link
              href="/about#research"
              className="font-bold underline text-white self-start hover:text-[#cde5e4]"
            >
              More about my research
            </Link>
          </div>
        </div>
      </section>
      <section id="contact" aria-labelledby="contact-h">
        <div className="mx-auto max-w-6xl px-5 py-18 flex flex-col gap-6">
          <h2 id="contact-h" className="text-4xl font-bold">
            Get in touch
          </h2>
          <p className="text-xl text-muted max-w-2xl leading-relaxed">
            I’m looking for a developer role in a team that cares about building
            for everyone. The quickest way to reach me is by email.
          </p>
          <ul className="flex flex-wrap gap-4">
            <li>
              <a
                href="mailto:duio1541@gmail.com"
                className="inline-flex items-center min-h-12 px-6 rounded bg-petrol text-white font-bold no-underline shadow-[0_3px_0_var(--color-petrol-shadow)] hover:bg-petrol-dark"
              >
                Email me
              </a>
            </li>
            <li>
              <ExternalLink
                href="https://www.linkedin.com/in/ifeanyiukiwe"
                className="inline-flex items-center min-h-12 px-6 rounded border-2 border-ink text-ink font-bold no-underline hover:bg-petrol-dark hover:border-petrol-dark hover:text-white"
              >
                LinkedIn
              </ExternalLink>
            </li>
            <li>
              <ExternalLink
                href="https://github.com/ifeanyiukiwe"
                className="inline-flex items-center min-h-12 px-6 rounded border-2 border-ink text-ink font-bold no-underline hover:bg-petrol-dark hover:border-petrol-dark hover:text-white"
              >
                GitHub
              </ExternalLink>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
