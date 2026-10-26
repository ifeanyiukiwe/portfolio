# Ojo Ifeanyi Ukiwe – Portfolio

My personal portfolio: who I am, five project case studies, and an accessibility statement backed by real test results.

**Live site:** (add after deploying)

## Pages

- **Home** – introduction, skills and a link to my CV
- **Projects** – case studies: WebAudit, North East Places, Padfect Store, Infinisculpt and Foodash
- **About** – my background and why accessibility matters to me
- **Accessibility** – how the site meets WCAG 2.1 AA and how it was tested

## Built with

Next.js (App Router) · TypeScript · Tailwind CSS · Vercel

## Accessibility

Built to meet WCAG 2.1 AA from the start, not checked at the end:

- skip link, semantic landmarks and one `h1` per page
- visible yellow focus outline on every interactive element
- descriptive alt text, and unique accessible names for repeated links
- text contrast of at least 4.5:1; content reflows at 400% zoom

Tested on 26 October 2026: Lighthouse 13.4.1 scored 100 on every page (desktop and mobile), axe DevTools (axe-core 4.13.0) found 0 issues, plus manual keyboard and 400% zoom checks. Screen reader testing with NVDA is planned.

## Running locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Contact

duio1541@gmail.com · [GitHub](https://github.com/ifeanyiukiwe)
