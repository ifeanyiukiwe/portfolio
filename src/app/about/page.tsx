import type { Metadata } from "next";
import Image from "next/image";
export const metadata: Metadata = {
  title: "About | Ojo Ifeanyi Ukiwe",
};
const tools = [
  {
    title: "Frontend",
    stack:
      "React, TypeScript, Next.js, JavaScript, Svelte 5 and SvelteKit, Vite, HTML, CSS, Tailwind CSS, Bootstrap",
  },
  {
    title: "Backend",
    stack:
      "PHP (OOP, PDO), Python, Node.js and Express, REST APIs, MySQL, PostgreSQL, MongoDB",
  },
  {
    title: "Quality and Tools",
    stack:
      "Git and GitHub, GitHub Actions CI, unit testing with Jest and Vitest, Jira, Agile Sprint, code review, mentoring, Vercel deployment and serverless functions, Render",
  },
  {
    title: "Accessibility",
    stack:
      "WCAG 2.1 AA, semantic HTML, keyboard access, colour contrast, automated auditing, ARIA (live regions, aria-pressed), inclusive design",
  },
];

const stages = [
  {
    title: "Starting in IT support",
    text: "I began in IT support and administration, where I automated recurring reports with Excel VBA and cut the time they took by 80%. It taught me to look for the repetitive problem behind the everyday one.",
  },
  {
    title: "Front-end developer",
    text: "I spent almost five years building production web applications in React and TypeScript in an Agile team with designers, back-end developers and project managers. I turned designs into accessible components, integrated REST APIs, helped cut an e-commerce platform’s page-load time by 60%, and mentored junior developers in debugging and Git.",
  },
  {
    title: "MSc and research",
    text: "I moved to the UK to study for an MSc in Computing at the University of Sunderland. For my dissertation I built WebAudit and ran a controlled experiment with 35 developers on how the format of an accessibility report affects what they fix.",
  },
];

const strengths = [
  {
    title: "I solve problems at the root",
    text: "When my map project worked in development but showed blank tiles in production, I traced it to a background worker the build had broken and fixed the cause, not the symptom. In a commercial team, I spotted a production failure 48 hours before a client deadline, escalated it straight away and applied the fix, and we delivered on time.",
  },
  {
    title: "I adapt quickly",
    text: "I’ve moved country, gone back to study, and picked up new tools when a project needed them. I learnt SvelteKit by building and deploying a tested map application with it.",
  },
  {
    title: "I work well with others",
    text: "I’ve reviewed colleagues’ code, delivered work in sprints and mentored junior developers. I’d rather explain how I fixed something than just fix it.",
  },
  {
    title: "I build for real people",
    text: "In a customer-facing role alongside my studies, I help people who find self-checkout technology confusing. I see every day what happens when an interface leaves someone behind.",
  },
];

export default function About() {
  return (
    <>
      <section className="bg-surface border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-20 flex flex-col md:flex-row items-center gap-12">
          <div className="shrink-0">
            <Image
              src="/images/ojo-ukiwe.jpg"
              alt="Ojo Ifeanyi Ukiwe"
              width={800}
              height={1000}
              priority
              className="w-full max-w-[280px] h-auto rounded"
            />
          </div>
          <div className="text-left flex flex-col gap-5">
            <h1 className="text-4xl md:text-5xl font-bold">About me</h1>
            <p className="text-xl text-muted max-w-2xl">
              I’m a front-end developer in Northumberland. I care about building
              software that works for everyone, including people who use a
              keyboard, a screen reader or a magnifier. I’m looking for a role
              in a development team where I can keep learning, contribute from
              day one and help make services more accessible.
            </p>
            <a
              href="/cv.pdf"
              download
              className="self-start inline-flex items-center min-h-12 px-6 rounded border-2 border-ink text-ink font-bold no-underline hover:bg-petrol-dark hover:border-petrol-dark hover:text-white"
            >
              Download my CV (PDF, 74 KB)
            </a>
          </div>
        </div>
      </section>
      <section aria-labelledby="why-h" className="bg-petrol-deep text-white">
        <div className="mx-auto max-w-6xl px-5 py-18 flex flex-wrap gap-10 items-start">
          <div className="flex flex-col gap-1">
            <p className="font-mono text-sm tracking-wide uppercase">
              MSc research
            </p>
            <h2 id="why-h" className="text-3xl font-bold">
              Why accessibility
            </h2>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-lg max-w-3xl leading-relaxed">
              I built WebAudit first, then used it as the basis of my
              dissertation: a controlled experiment with 35 developers on how
              the format of an accessibility report affects which problems get
              fixed. The paper is being prepared for publication.
            </p>
            <p className="text-lg max-w-3xl leading-relaxed">
              I care about accessibility because nobody should be shut out of a
              service that everyone else can use because of a health condition
              they didn’t choose. If my work makes everyday life easier for
              people living with disability, that is work I want to do.
            </p>
            <p className="text-lg max-w-3xl leading-relaxed">
              Accessibility is also about quality. A website that some people
              can’t use is a great design with poor delivery: if the person it
              was built for can’t use it, it has lost its value the moment it
              arrives.
            </p>
          </div>
        </div>
      </section>
      <section
        aria-labelledby="growth-h"
        className="mx-auto max-w-6xl px-5 py-16"
      >
        <h2 id="growth-h" className="text-3xl font-bold">
          How I’ve grown
        </h2>
        <ol className="mt-8 flex flex-col gap-8">
          {stages.map((stage) => (
            <li key={stage.title} className="border-l-4 border-petrol pl-6">
              <h3 className="text-xl font-bold">{stage.title}</h3>
              <p className="mt-2 text-muted max-w-3xl leading-relaxed">
                {stage.text}
              </p>
            </li>
          ))}
        </ol>
      </section>
      <section
        aria-labelledby="work-h"
        className="mx-auto max-w-6xl px-5 py-16"
      >
        <h2 id="work-h" className="text-3xl font-bold">
          How I work
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {strengths.map((strength) => (
            <div
              key={strength.title}
              className="bg-surface border border-line rounded p-6 flex flex-col gap-2"
            >
              <h3 className="text-xl font-bold">{strength.title}</h3>
              <p className="text-muted leading-relaxed">{strength.text}</p>
            </div>
          ))}
        </div>
      </section>
      <section
        aria-labelledby="tools-h"
        className="mx-auto max-w-6xl px-5 py-16"
      >
        <h2 id="tools-h" className="text-3xl font-bold">
          What I work with
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {tools.map((tool) => (
            <div
              key={tool.title}
              className="bg-surface border border-line rounded gap-2 p-6 flex flex-col"
            >
              <h3 className="text-xl font-bold">{tool.title}</h3>
              <p className="text-muted">{tool.stack}</p>
            </div>
          ))}
        </div>
      </section>
      <section
        aria-labelledby="ahead-h"
        className="mx-auto max-w-6xl px-5 py-16"
      >
        <h2 id="ahead-h" className="text-3xl font-bold">
          Looking ahead
        </h2>
        <p className="mt-4 text-lg max-w-3xl leading-relaxed">
          I don’t want to stop at web development. In the long run I’d like to
          build assistive tools, and one day robotics, that use technology to
          make life easier for the people who need it most.
        </p>
      </section>
      <section aria-labelledby="fun-h" className="mx-auto max-w-6xl px-5 py-16">
        <h2 id="fun-h" className="text-3xl font-bold">
          Outside work
        </h2>
        <p className="mt-4 text-lg max-w-3xl leading-relaxed">
          I’m a member of Rotary International (Morpeth Club). Outside work, I
          love history and politics, and I spend a lot of my free time visiting
          historic places across Northumberland: the castles at Bamburgh and
          Warkworth, Lindisfarne on Holy Island, and the harbour at Amble.
          Closer to home, you’ll find me walking my dogs on the beach at Cambois
          or Newbiggin-by-the-Sea, or along the River Wansbeck. I also enjoy
          time with my family, playing football
        </p>
      </section>
    </>
  );
}
