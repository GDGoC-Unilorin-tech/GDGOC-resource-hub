# React course verification

Checked on 26 October 2026 on `feat/react-course`.

- Mintlify configuration validates. All 232 navigation entries resolve to existing pages; the 27 React entries are unique. Existing repeated machine-learning entries were not altered.
- All 27 React MDX pages compile. Their 79 internal links resolve; Previous/Next ordering matches the React sidebar. All 15 topic lessons include prerequisites, explanation, example, practice, hints, a separate suggested solution, and completion checklist.
- External learner references are Google-affiliated and placed on further-learning.mdx. React and Vite are not described as Google products.
- Fresh extraction of the ZIP followed by npm ci succeeds. Dependencies are locked to React/React DOM 19.3.1 and Vite 8.3.5; verification used Node 24.22.1. All nine logic tests and the production build pass.
- The built app passed Chrome and Edge checks for Beginner saved-only/toggle behaviour; Intermediate and Advanced query/category/sort/reset; saved counts; loading/empty/invalid/failed requests and retry; suppression of a deliberately delayed stale response; direct hash navigation, Back, unknown views, titles, and route-change focus.
- Layout checks passed at 320, 768, and 1440 CSS pixels. Dark mode was checked and the mobile screenshot visually reviewed. No page runtime errors were captured in these journeys.
- Runnable JS/JSX/CSS stays suffixed .source inside the documentation repository. ZIP extraction restores normal extensions. Git whitespace checks pass.

Limits: Chrome and Edge both use Chromium. Screen-reader review, manual browser zoom, full Mintlify UI preview, and Firebase account/deployment operations were not performed. No cloud resource was created or published. The course's hash routing is an educational implementation, not a full routing framework. The pack intentionally resets local state on stage/view changes and has no saved-progress backend.

Maintenance: regenerate with `python assets/react/build_archives.py`, extract the ZIP, run npm ci, npm test, npm run build, and the REVIEW.md browser checks. Verify any changed dependency/runtime combination before updating the recorded versions.
