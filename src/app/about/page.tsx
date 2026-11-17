import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
export const metadata: Metadata = {
  title: "About | Ojo Ifeanyi Ukiwe",
};
type Stage = {
  title: string;
  text: string;
  period: string;
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

const stages: Stage[] = [
  {
    period: "2015",
    title: "Economics: learning to think with evidence",
    text: "My first degree, a BSc in Economics, taught me to work with data, test assumptions and think about how decisions affect real people. I still use that habit when I decide what to build and why.",
  },
  {
    period: "2017–2021",
    title: "Solving everyday problems with technology",
    text: "In my first roles I supported colleagues with IT and helped a business that ran on paper records move to digital ones. I taught myself Excel VBA to automate recurring reports and cut the time they took by 80%. That was when I realised I wanted to build software, not just use it.",
  },
  {
    period: "2021–2025",
    title: "Front-end developer",
    text: "At Exagorazo Global Ventures I built websites and web applications in an Agile team with designers, back-end developers and project managers, working in HTML, CSS, JavaScript, React, TypeScript and Tailwind CSS. I turned designs into responsive, accessible components, integrated REST APIs, helped cut an e-commerce platform's page-load time by 60%, and mentored junior developers in our team.",
  },
  {
    period: "2025–2026",
    title: "MSc Computing and research",
    text: "I moved to the UK to study for an MSc in Computing at the University of Sunderland, to grow from front-end into full-stack development. My web development work scored 80%, the highest in my class, and my e-commerce platform was my highest-scoring project. For my dissertation I built WebAudit and ran a controlled experiment with 35 developers on how accessibility reports affect what they fix.",
  },
  {
    period: "Now",
    title: "Building with purpose",
    text: "I'm building full-stack tools that are tested from the first line, such as a redaction assistant that helps caseworkers protect personal data. I volunteer my skills, with a booking platform for a local business and CareProNest for carers, and I'm a member of Rotary International in Morpeth. My long-term aim is to build assistive technology that makes everyday life easier for people with disabilities.",
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

const quickFacts = [
  "Based in Northumberland",
  "MSc Computing (Distinction)",
  "Accessibility specialist",
  "Open to work",
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="ABOUT ME"
        title="Front-end developer, accessibility first"
        intro="I'm a front-end developer in Northumberland. I care about building software that works for everyone, including people who use a keyboard, a screen reader or a magnifier. I'm looking for a role in a development team where I can keep learning, contribute from day one and help make services more accessible."
        image={{
          src: "/images/ojo-ukiwe-removebg-preview.png",
          alt: "Ojo Ifeanyi Ukiwe",
        }}
      >
        <ul aria-label="Quick facts" className="flex flex-wrap gap-2">
          {quickFacts.map((fact) => (
            <li
              key={fact}
              className="rounded-full border border-white/30 bg-white/10 px-3 py-1 text-sm text-white"
            >
              {fact}
            </li>
          ))}
        </ul>

        <a
          href="/ifeanyi_ukiwe_cv.pdf"
          download
          className="mt-2 inline-flex min-h-12 items-center self-start rounded bg-white px-6 font-bold text-petrol-deep no-underline shadow-[0_3px_0_#0f2c36] hover:bg-page"
        >
          Download my CV (PDF, 74 KB)
        </a>
      </PageHero>

      <section aria-labelledby="why-h" className="bg-petrol-deep text-white">
        <div className="container-page mt-16 py-18 flex flex-wrap gap-10 items-start">
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
      <section aria-labelledby="growth-h" className="container-page py-16">
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
              <p className="font-mono text-sm text-muted">{stage.period}</p>
            </li>
          ))}
        </ol>
      </section>
      <section aria-labelledby="work-h" className="container-page py-16">
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
      <section aria-labelledby="tools-h" className="container-page py-16">
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
      <section aria-labelledby="ahead-h" className="container-page py-16">
        <h2 id="ahead-h" className="text-3xl font-bold">
          Looking ahead
        </h2>
        <p className="mt-4 text-lg max-w-3xl leading-relaxed">
          I don’t want to stop at web development. In the long run I’d like to
          build assistive tools, and one day robotics, that use technology to
          make life easier for the people who need it most.
        </p>
      </section>
      <section aria-labelledby="fun-h" className="container-page py-16">
        <h2 id="fun-h" className="text-3xl font-bold">
          Outside work
        </h2>
        <p className="mt-4 text-lg max-w-3xl leading-relaxed">
          Outside work, I love history, and spend a lot of my free time visiting
          historic places across Northumberland: the castles at Bamburgh and
          Warkworth, Lindisfarne on Holy Island, and the harbour at Amble.
          Closer to home, you’ll find me walking my dogs on the beach at Cambois
          or Newbiggin-by-the-Sea, or along the River Wansbeck. I also enjoy
          time with my family, playing football.
        </p>
      </section>
    </>
  );
}
