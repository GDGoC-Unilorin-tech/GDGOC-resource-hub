# JavaScript curriculum and handoff

Updated: 19 October 2026

## Scope and current state

JavaScript development is now active. HTML and CSS are handled by other collaborators; do not edit those courses as part of JavaScript work. At inspection, JavaScript had six scaffold pages and only its overview was registered in docs.json. The header uses separate track tabs: Resource Hub, HTML, CSS, JavaScript, Frameworks, Tools, Backend, Databases, Cloud, and Other Paths. JavaScript has its own sidebar with level and module groups. Preserve these tabs; do not collapse courses into the Resource Hub sidebar.

This pass delivers four Beginner lessons and one checkpoint, plus course/level roadmaps and Google-only further reading. It does not complete the JavaScript course. There are 11 learner-facing MDX pages; this Markdown handoff is not in learner navigation.

## Teaching contract

Each topic is a separate MDX page with objectives, prerequisites, explanation, runnable examples and expected output, a challenge, checklist, hint, and separately revealed suggested solution. Modules finish with independent checkpoints and review guidance. Stage projects and the final challenge will include full briefs and worked solutions when their prerequisite lessons exist. Checklists are self-assessment, not grading or locks.

Use language-labelled code fences, existing callouts and accordions, and the shared lesson-navigation classes. Avoid new shared CSS or JavaScript unless required. Explain every new construct before using it. Keep external learning links in further-learning.mdx and use only verified Google resources, such as web.dev and developer.chrome.com. Local practice-server addresses are not external learning resources.

## Sequence and ownership

| Level | Module | Status | Deliverable |
| --- | --- | --- | --- |
| Beginner | Programming foundations | Available | b01 run a script; b02 variables/types; b03 expressions/messages; b04 comparisons/decisions; checkpoint-programming-foundations |
| Beginner | Reusable logic and collections | Next | Functions/parameters/returns; scope; arrays; objects; loops; collection-summary checkpoint |
| Beginner | First interactive page | Planned | DOM selection; safe text/classes; events; debugging; interaction checkpoint |
| Beginner | Stage project | Planned | Portfolio project-category filter |
| Intermediate | Data-driven interfaces | Planned | Array methods; object updates; DOM list rendering; filtering/sorting; checkpoint |
| Intermediate | Forms and saved preferences | Planned | Input conversion/checks; accessible feedback; JSON; localStorage failures; checkpoint |
| Intermediate | Asynchronous JavaScript | Planned | Promises; async/await; fetch/status checks; loading/empty/error states; checkpoint |
| Intermediate | Stage project | Planned | Searchable project explorer with local JSON and preference storage |
| Advanced | Code organisation | Planned | Modules; closures; data/state/rendering separation; identity/mutation; checkpoint |
| Advanced | Reliable interactions | Planned | Delegation; event loop; stale requests/cancellation; accessibility; checkpoint |
| Advanced | Test and demonstrate | Planned | Function and DOM tests; debugging/performance; regression evidence; checkpoint |
| Advanced | Stage project | Planned | Refactor and audit the project explorer |
| Course | Final challenge | Planned | Demonstrate the complete feature with source, checks, and limitations |

## Next contributor task

Write b05-functions-parameters-and-return.mdx, followed by scope, arrays, objects, and loops. Finish that module with its own checkpoint. Register only finished pages, update the Beginner roadmap and status counts, and connect the existing foundations checkpoint to b05 with Next. Keep the final published page explicit about where available content ends. Do not link to missing lessons or present planned projects as complete.

Before DOM lessons, agree the portfolio integration points with the HTML/CSS collaborators. Until then, use a separate javascript-practice folder and supplied minimal HTML. No Node.js or package installation is needed for the current module. Introduce a local HTTP server before fetch and ES modules, and provide a local data fixture rather than requiring a paid external API.

## Validation for each addition

- Compile MDX and preview callouts, code blocks, accordions, and navigation.
- Execute complete examples and solutions; verify expected output and boundary cases.
- Confirm internal routes and Previous/Next targets exist.
- Verify external reference destinations belong to Google and still match their descriptions.
- Compare the shared docs.json edit against the pre-edit file; change only JavaScript navigation within its dedicated tab.
- Preserve all HTML/CSS files and unrelated uncommitted changes.
