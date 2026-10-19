# JavaScript curriculum and collaborator handoff

Updated: 19 October 2026

## Delivered scope

The JavaScript course now contains 31 lessons, 9 independent module checkpoints, 3 stage projects, a final challenge, 4 overview pages, and further learning: 49 MDX pages. All pages are linked in the JavaScript header tab and in sequential Previous/Next navigation. Preserve the separate header tabs and interaction.drilldown=false.

HTML and CSS remain owned by other collaborators. No course-source edits outside JavaScript are part of this delivery. Shared docs.json changes affect only the JavaScript tab. The shared frontend roadmap and site-restructure.md reflect JavaScript completion; HTML/CSS course files remain untouched.

## Levels

- Beginner: programming foundations; reusable logic and collections; DOM interactions and debugging; portfolio category-filter project.
- Intermediate: data transformations and rendering; forms/JSON/storage; promises/fetch/recovery; searchable explorer project.
- Advanced: modules/closures/pure functions; delegation/event loop/request races; tests/accessibility/performance review; modular explorer project.
- Final challenge: integrate search, categories, data loading, persistence, sorting, reset, tests, and review evidence.

## Authoring contract

Every topic contains objectives, setup, explanation, runnable examples, expected results, a task, checklist, hint, and suggested solution. Checkpoints deliberately omit full answers and assess independent application; related lessons provide solutions. All four projects have complete ZIP implementations under assets/javascript. Source snapshots are retained beside the ZIPs for maintenance. Their CSS and JavaScript filenames end in .source to prevent Mintlify from loading example code globally. Rebuild each ZIP when changing its source, removing the trailing .source suffix from archive entry names. Extract and test ZIPs outside the Mintlify repository; see assets/javascript/README.md. Project READMEs describe local setup and REVIEW.md lists manual checks.

Keep external learning references in further-learning.mdx and use verified Google resources only. Current references use web.dev and developer.chrome.com. Localhost examples describe local practice, not an external learning resource. There are no paid APIs, credentials, Node dependencies, automatic grades, or enforced stage locks in this course.

## Running the worked projects

Extract a solution ZIP. Serve that extracted folder through an editor preview server or Python's HTTP server, as described in its README. Beginner also supports direct file opening; Intermediate and later require HTTP. Advanced and Final include tests.html, which runs ten pure-logic checks. Manual keyboard, failure, and storage checks remain necessary.

## Maintenance and integration

Coordinate portfolio DOM hooks and shared layout changes with HTML/CSS owners before integration. The worked projects are standalone teaching examples. Preserve readable fallback content, native controls, textContent rendering, and explicit loading/error states. Never store secrets in localStorage. Keep storage failures recoverable and protect asynchronous UI updates from stale requests.

When adding a topic, update the JavaScript tab, sequential links, overview counts, and this guide together. Check MDX compilation, internal paths, worked examples, project ZIP/source consistency, keyboard operation, and failure scenarios. Do not interpret passing automated checks as proof of complete accessibility or production readiness. The next curricular work is cross-course capstone coordination, learner review, and other tracks; no JavaScript pages remain marked planned.

## Verification on 19 October 2026

All 49 MDX pages compiled. Sequential links and 156 internal/external link occurrences were checked. All 54 new topic examples/solutions ran in a browser; worked projects passed applicable filter/search, persistence, invalid-data, retry, request-race, keyboard, and narrow-viewport checks. Advanced/Final test pages each reported ten checks passed. All four ZIPs match their source directories. Full Mintlify theme rendering still needs a local preview check: the CLI did not start a listening preview during this session.
