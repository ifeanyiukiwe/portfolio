import Link from "next/link";
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
        "Bootstrap CSS",
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
            Five years building React and TypeScript interfaces in an Agile
            team, an MSc in Computing from the University of Sunderland, and
            research into how accessibility reports help developers fix real
            problems.
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
              className="inline-flex items-center min-h-12 px-6 rounded border-2 border-ink text-ink font-bold no-underline hover:bg-page"
            >
              Download my CV (PDF, 66 KB)
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
                    including almost five years in a commercial Agile Team
                  </p>
                </li>
                <li className="border-t border-white/30 pt-6">
                  <p className="text-xl font-bold">MSc Computing</p>
                  <p>University of Sunderland 2026</p>
                </li>
                <li className="border-t border-white/30 pt-6">
                  <p className="text-xl font-bold">35 developers</p>
                  <p>took part in the accessibility reseearch</p>
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
    </>
  );
}
