# Kush Patel / Signal Atlas

An original editorial portfolio built with Next.js App Router, TypeScript and Tailwind CSS. Lightweight SVG interactions, Framer Motion and desktop Lenis enhancement; native phone scrolling, reduced-motion support, two themes and thirteen static case-study routes.

The complete project index supports technology search and counted Research / AI products / Systems filters. Status labels distinguish deployed work, prototypes, research, competitions and ongoing experiments. The hero walks through three actual architectures with selectable processing steps, tools and input/output explanations; case studies include sticky contents navigation and evidence context.

The Credentials section highlights three AI learning records and provides a native, keyboard-accessible archive of all eighteen credentials, grouped into AI/data, software/systems and math/engineering. Course certificates, specialization, attendance, participation and badge records retain their exact type. Original PDFs/PNG are served from `public/certificates/` and load only when opened; the supplied Drive collection and source verification links are also available.

## Run

Requires Node.js 20.9+.

```sh
npm install
npm run dev
```

Open http://localhost:3000. Production preview:

```sh
npm run build
npm run preview
```

The app exports to `out/`; `next start` is not applicable to static exports.

## Edit content

All personal copy, links, timeline entries, grouped skills and project narratives live in `src/data/portfolio.ts`. Add a project there (including its discipline, status and diagram type) and its route and sitemap entry are generated automatically. Add an optional `evidenceNote` for benchmark context or implementation limits. Replace `public/resume/Kush-Patel-Resume.pdf` to update the download. Current PDF is the selected **Lexsi Labs AI Research** version, unchanged from the original.

Edit `portfolio.hero.systems` in that file to change the architecture walkthrough: four steps per system, with tool, input, output and explanation. Edit the typed `certifications` array to change credentials. Each entry includes title, issuer, credential type, ISO date, date meaning, discipline, document path and optional verification link. Set `featured: true` and a short `summary` for highlight cards. Java component courses identify their parent specialization through `context`.

Two font families are self-hosted in `src/fonts/` (Manrope, Instrument Serif; OFL licenses alongside them). All diagrams are original code; no Codrops assets or source were reused. `public/og.png` is a local 1200 × 630 social image. To regenerate it, run `node scripts/create-og.mjs`.

## Deploy to Vercel

Production: https://portfolio-pink-seven-75.vercel.app. This repository (`Kush5699/portfolio`) is connected to the existing Vercel `portfolio` project. Pushes to `main` automatically build and deploy the latest version. The previous Vite implementation remains recoverable in Git history.

`vercel.json` selects Next.js, installs the lockfile with `npm ci` and removes the previous Vite output override. No services, keys or extra setup are required. Vercel's production domain automatically supplies canonical, OG and sitemap origins. Optionally set `NEXT_PUBLIC_SITE_URL=https://your-custom-domain` before rebuilding for a custom domain. Static hosting can serve `out/` directly, including directory indexes and `404.html`.

## Verify

```sh
npm run typecheck
npm run build
npm run preview
# In another terminal, with Chrome installed:
npm run audit
```

Audit defaults to local Chrome on Windows; set `CHROME_PATH` on another system and `AUDIT_URL` for another preview origin. Four production Lighthouse reports (mobile home, desktop home, mobile GSSTB and OpenEnv cases) are saved under `docs/audits/`. Set `AUDIT_CASE=/work/project-slug/` to run only a new mobile case. The audit exits nonzero if any category falls below 90. Browser checks and measured results are documented in `docs/validation.md` and `docs/enhancement-validation.md`.

## Research & provenance

- `docs/research.md`: 16 Codrops articles, live access notes and five inspiration patterns.
- `docs/design-direction.md`: three concepts, chosen direction, project ranking and content provenance.
- `docs/resume-review.md`: comparison of multiple recent resumes and download selection.
- `docs/github-research-extra.md`: source-level review of seven additional GitHub projects, evidence links and claim limits.
- `docs/enhancement-plan.md`: project explorer and case-study design decisions.
- `docs/certification-review.md`: eighteen source documents, exact dates/types and attribution notes.

Confirm the conflicting ICPR placement/accuracy figures before refreshing the resume PDF. The website omits disputed figures. Illustrations describe systems; they are not screenshots of a product. Email uses a direct mailto link and an optional copy button; there is no form backend.
