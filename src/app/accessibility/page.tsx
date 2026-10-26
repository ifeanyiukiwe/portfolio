import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Accessibility | Ojo Ifeanyi Ukiwe",
};
export default function AccessibilityPage() {
  return (
    <>
      <section className="bg-surface border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-20 flex flex-col gap-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            Accessibility statement
          </h1>
          <p className="text-xl text-muted max-w-2xl">
            I want everyone to be able to use this website. This statement
            explains how accessible it is, how I test it, and how to tell me
            about a problem.
          </p>
        </div>
      </section>
      <div className="mx-auto max-w-6xl px-5 py-16 flex flex-col gap-14">
        <section aria-labelledby="use-h" className="flex flex-col gap-4">
          <h2 className="text-3xl font-bold" id="use-h">
            How you can use this website
          </h2>
          <p className="max-w-3xl text-lg">You should be able to:</p>
          <ul className="list-disc pl-6">
            <li>
              move through every page using only a keyboard, with a clear yellow
              focus highlight
            </li>
            <li>
              skip straight to the main content with the first link on each page
            </li>
            <li>zoom in up to 400% without text spilling off the screen</li>
            <li>
              use a screen reader, with headings, landmarks and image
              descriptions in place
            </li>
            <li>
              read all text against its background at a contrast ratio of at
              least 4.5:1
            </li>
          </ul>
          <p className="max-w-3xl text-lg">
            The text is set in Atkinson Hyperlegible, a typeface designed by the
            Braille Institute to be easier to read for people with low vision.
          </p>
        </section>
        <section aria-labelledby="compliance-h" className="flex flex-col gap-4">
          <h2 className="text-3xl font-bold" id="compliance-h">
            Complaince status
          </h2>
          <p className="max-w-3xl text-lg">
            This website aims to fully meet the Web Content Accessibility
            Guidelines (WCAG) version 2.1 to level AA. Automated and manual
            testing has found no failures. Screen reader testing is still to be
            done, so I can’t yet claim full conformance.
          </p>
        </section>
        <section aria-labelledby="testing-h" className="flex flex-col gap-4">
          <h2 id="testing-h" className="text-3xl font-bold">
            How I tested this website
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <caption className="text-left text-muted mb-2">
                Accessibility test results, 26 October 2026
              </caption>
              <thead>
                <tr>
                  <th scope="col" className="border-b border-line py-3 pr-4">
                    Method
                  </th>
                  <th scope="col" className="border-b border-line py-3 pr-4">
                    Pages
                  </th>
                  <th scope="col" className="border-b border-line py-3 pr-4">
                    Result
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-b border-line py-3 pr-4">
                    Lighthouse 13.4.1, desktop and mobile
                  </td>
                  <td className="border-b border-line py-3 pr-4">All pages</td>
                  <td className="border-b border-line py-3 pr-4">
                    100 out of 100 on every page
                  </td>
                </tr>
                <tr>
                  <td className="border-b border-line py-3 pr-4">
                    axe DevTools (axe-core 4.13.0), WCAG 2.1 AA
                  </td>
                  <td className="border-b border-line py-3 pr-4">All pages</td>
                  <td className="border-b border-line py-3 pr-4">0 issues</td>
                </tr>
                <tr>
                  <td className="border-b border-line py-3 pr-4">
                    Keyboard-only walkthrough
                  </td>
                  <td className="border-b border-line py-3 pr-4">All pages</td>
                  <td className="border-b border-line py-3 pr-4">
                    Every link and button reachable and usable; focus always
                    visible
                  </td>
                </tr>
                <tr>
                  <td className="border-b border-line py-3 pr-4">
                    Zoom to 400%
                  </td>
                  <td className="border-b border-line py-3 pr-4">All pages</td>
                  <td className="border-b border-line py-3 pr-4">
                    No sideways scrolling; all content readable
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <section aria-labelledby="issues-h" className="flex flex-col gap-4">
          <h2 className="text-3xl font-bold" id="issues-h">
            Known issues
          </h2>
          <p className="max-w-3xl text-lg">
            No accessibility failures are currently known. Earlier testing found
            repeated “Code and README on GitHub” links that were hard to tell
            apart in a screen reader’s list of links. Each now includes the
            project’s name for screen readers.
          </p>
        </section>
        <section
          aria-labelledby="reporting-h"
          className="flex flex-col gap-4 items-start"
        >
          <h2 className="text-3xl font-bold" id="reporting-h">
            Reporting a problem
          </h2>
          <p className="max-w-3xl text-lg">
            If something on this site doesn’t work for you, or you need
            information in a different format, please email me{" "}
            <span className="underline text-petrol font-italic">
              duio1541@gmail.com
            </span>{" "}
            and I’ll reply within 5 working days.
          </p>
          <a
            href="mailto:duio1541@gmail.com"
            className="inline-flex items-center min-h-12 px-6 rounded bg-petrol text-white font-bold no-underline shadow-[0_3px_0_var(--color-petrol-shadow)] hover:bg-petrol-dark"
          >
            Email me
          </a>
        </section>
        <p className="text-muted">
          This statement was prepared on 26 October 2026. It was last reviewed
          on 26 October 2026.
        </p>
      </div>
    </>
  );
}
