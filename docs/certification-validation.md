# Credential section validation / October 7, 2026

## Scope and implementation

Reviewed all eighteen local originals and compared filenames with the publicly readable Drive folder. Three featured cards highlight Amazon ML Summer School attendance, the Google/Kaggle AI Agents completion badge and DeepLearning.AI PyTorch Fundamentals. A native details archive groups all eighteen entries into AI/data (5), software/systems (10) and math/engineering (3), with source document links and sixteen source-recovered verification URLs.

The section uses server-rendered HTML, native keyboard-accessible details/summary and the existing palette/fonts. It adds no JavaScript bundle or homepage PDF/image requests. The global Credentials navigation anchor works on home and case pages. Course, specialization, attendance, badge and participation records keep their source type; four Java courses identify their Core Java specialization context.

## Automated checks

- Production build and TypeScript pass; all nineteen static routes are generated.
- All eighteen original files serve HTTP 200 with expected PDF/PNG content types. Every served file's SHA-256 matches the source inventory. Total evidence assets: 5,982,531 bytes, fetched only on demand.
- Lighthouse after the architecture hero update: home mobile 94 / 100 / 100 / 100; home desktop 96 / 100 / 100 / 100; GSSTB and OpenEnv mobile cases 97 / 100 / 100 / 100 (Performance / Accessibility / Best practices / SEO). All four scenarios have zero CLS. Complete reports are in `audits/`.

## Visual and interaction review

Production browser checks are performed on the existing private hosted Site. Local production measurement uses the static export at port 3001. Verification URLs are those printed or encoded in the originals; live issuer validation is separate from the document-content review.

- Inspected the featured cards at 1440px; no horizontal overflow. Optional verification action appears above the shared footer so dates and proof links align across cards.
- Keyboard Enter opens the native archive; all eighteen entries and 5/10/3 discipline counts are present, with a visible solid focus outline on summary.
- At 360px the mobile menu exposes Credentials and closes on selection. Found same-hash Next.js navigation retaining a stale position after resize; section links now use native anchors to ensure repeated navigation repositions the reader.
- Inspected the Google/Kaggle and PyTorch cards at 360px, including credential dates and verification links. The expanded archive contains all eighteen entries without horizontal overflow.
- Checked dark theme and native Credentials navigation from the deployed CodeResidency case. No console warnings or errors in the deployed walkthrough/case review. Desktop proof is saved as `portfolio-credentials.jpg`.
