import type { Metadata } from "next";

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
    </>
  );
}
