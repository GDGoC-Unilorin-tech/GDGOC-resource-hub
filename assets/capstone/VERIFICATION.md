# Capstone restoration verification

Verified on 22 October 2026 on `feat/capstone` after restoration into the GDGoC-Unilorin-tech repository.

- Mintlify configuration schema passes; all 184 registered routes exist with no duplicate page entries.
- Seven capstone pages, the contribution pathway, and contribution setup compile as MDX. Their 25 internal links resolve. Capstone external references use Google-affiliated domains.
- Existing HTML and CSS curriculum validation passes, including page compilation, internal links, lesson patterns, and previous/next order.
- The freshly extracted portfolio ZIP passes checks in Chrome and Edge: ten logic assertions; eight HTML pages at 320, 768, and 1440 CSS pixels; local links and assets; combined search/category filtering; sorting/reset; saved preferences; empty/invalid data; failed requests and recovery; repeated reload; safe text insertion; blocked storage; and no-JavaScript fallback.
- Dark-mode and reduced-motion emulation were exercised. Git whitespace checks pass.

Limits: Chrome and Edge both use Chromium. These checks do not replace screen-reader, manual zoom, or independent learner review. The full Mintlify runtime preview and Firebase deployment were not run during this restoration. No cloud project was created or deployed.

To check future changes, regenerate the ZIP with `python assets/capstone/build_archives.py`, extract it, serve `public/` over HTTP, run `tests.html`, and follow the capstone testing page. Record actual results for the version being reviewed.
