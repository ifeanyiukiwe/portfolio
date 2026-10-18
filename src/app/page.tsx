import Link from "next/link";
export default function Home() {
  return (
    <section className="bg-surface border-b border-line">
      <div className="mx-auto max-w-6xl px-5 py-20 flex flex-col gap-6">
        <p className="font-mono text-sm tracking-wide text-muted">
          FRONT-END DEVELOPER · NORTH EAST ENGLAND
        </p>
        <h1 className="text-5xl font-bold leading-tight max-w-[16ch]">
          I build web applications that everyone can use.
        </h1>
        <p className="text-xl text-muted max-w-2xl">
          Five years building React and TypeScript interfaces in an Agile team,
          an MSc in Computing from the University of Sunderland, and research
          into how accessibility reports help developers fix real problems.
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
      </div>
    </section>
  );
}
