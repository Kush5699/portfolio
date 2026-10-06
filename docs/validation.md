# Production validation

Updated with the thirteen-project enhancement, eighteen-credential section and architecture walkthrough hero. Source selection and interaction notes are in [enhancement-validation.md](enhancement-validation.md), [certification-review.md](certification-review.md) and [design-direction.md](design-direction.md).

Validated October 7, 2026 (Asia/Kolkata) against the optimized static Next.js export served at `http://127.0.0.1:3001`. These are local production lab results, not measurements of an untested Vercel deployment or physical phone.

## Lighthouse

Lighthouse 13.5.0, installed Chrome, default mobile simulation and desktop preset. All requested categories exceed 90. The final source build produced these results:

| Page / profile | Performance | Accessibility | Best practices | SEO | LCP | TBT | CLS |
| --- | --- | --- | --- | --- | --- | --- | --- |
| [Home / mobile](audits/home-mobile.html) | 94 | 100 | 100 | 100 | 2.9 s | 110 ms | 0 |
| [Home / desktop](audits/home-desktop.html) | 96 | 100 | 100 | 100 | 2.7 s | 80 ms | 0 |
| [GSSTB case / mobile](audits/case-mobile.html) | 97 | 100 | 100 | 100 | 2.5 s | 40 ms | 0 |
| [OpenEnv case / mobile](audits/case-extra-mobile.html) | 97 | 100 | 100 | 100 | 2.5 s | 70 ms | 0 |

Condensed JSON evidence is alongside each HTML report. Scores vary with machine load and hosting. `npm run audit` reproduces all four scenarios and fails if any category is below 90.

## Build and routes

- TypeScript `tsc --noEmit` passed; `next build` passed and generated 19 static routes.
- Home, thirteen project pages, sitemap, robots, favicon, Open Graph image and resume return HTTP 200 with the expected MIME type.
- Sitemap contains the home page and thirteen cases. Titles, descriptions, canonical links and social metadata are generated from typed content and the deployment origin.
- Two self-hosted font families; original inline SVG diagrams; no remote page imagery or font requests. Measured layout shift is zero in all four audit scenarios.
- All eighteen credential assets return HTTP 200 with the correct PDF/PNG type. SHA-256 of every served asset matches its source file. Credential files are loaded only when opened.

## Browser and interaction checks

- Inspected hero, work index, about, experience, education, grouped skills, publication, contact and footer at 360px and 1440px. Also inspected the hero/navigation at 768px and 1920px. No horizontal document overflow at these widths.
- Inspected GSSTB case hero, problem/approach/result and narrative at phone and desktop widths. Checked all six case titles at 360px; adjusted the mobile heading size so CodeResidency stays intact.
- Checked light and dark themes; selection persists across navigation/reload.
- The hero uses three real project architectures and four selectable processing steps per system. Native buttons expose pressed state and update a polite live region with the selected tool, purpose, input and output. The arbitrary torus slider has been removed.
- Deployed walkthrough: exercised all twelve steps at 1440px and 360px; exactly one stage remains selected. The figure height remains constant across all selections at both widths. Keyboard Enter activates a stage and its focus outline is solid. No horizontal overflow at 360, 768, 1440 or 1920px. The CodeResidency case link navigates to its correct H1; native Credentials navigation from that case opens the homepage section.
- Mobile menu opens, closes and exposes expanded state. Escape from a menu link closes it and returns focus to its toggle. Keyboard focus produces a visible solid outline.
- Desktop anchor navigation settles below the sticky header. Lenis uses CSS scroll padding and native smooth behavior is disabled while Lenis owns scrolling. Resizing below the desktop threshold destroys Lenis.
- Email copy reports “Email copied”; mailto and professional social links are present.
- Resume button downloaded a PDF successfully. Original, public asset and browser download SHA-256 match: `B617B46141440586399A6D794FA243C2A41E78B2E9B7AA3C9C952F3875195571`.
- The hosted home page, hero interaction and case-study client navigation were verified in the browser. No console warnings or errors recorded during final production browser checks. Earlier SVG hydration rounding differences were fixed before the final build.
- The credentials section was inspected in light and dark themes. All three highlights fit at 360px, and the native expanded archive contains eighteen entries without overflow. Desktop proof: `portfolio-credentials.jpg`; revised hero proof: `portfolio-system-walkthrough.jpg`.

## Accessibility and motion implementation

Semantic landmarks, one H1 per route, sequential section headings, skip link, labeled controls, descriptive SVG alternatives, native anchors and visible focus are implemented. Lighthouse accessibility is 100 on the audited pages; this does not replace testing with every assistive technology.

Reduced-motion paths were reviewed in source: global CSS disables transitions, animation and smooth scrolling; the enhancement does not initialize for reduced motion and destroys active scrolling when the preference changes. The architecture walkthrough uses state updates with no continuous animation. No OS preference was changed during testing. Phones use native scrolling; no WebGL, shader or continuously animated canvas is required.

## Content limits

Thirteen project narratives use repository evidence; personal history uses the reviewed resume variants. Springer verifies the publication. Resume/header and repository Results disagree on ICPR placement and accuracy, so the public website omits those figures. The selected Lexsi PDF is preserved unchanged and should be refreshed once those claims are confirmed. A custom domain is optional and currently unspecified.
