# Resource Hub Structure and Contributor Guide

Updated: 21 October 2026 (CSS course completion)

## Purpose and current scope

Build a structured learning experience that takes students through **Learn → Practise → Build → Demonstrate → Contribute → Ship**. Learners should understand what to learn, why it matters, how to practise it, and what they can build.

Core teaching lives inside this Mintlify MDX site. Each topic has its own page. Skill cards lead to internal course overviews; curated external learning resources belong at the end of a course, in Further Learning & References.

This guide describes the current repository structure and the standards for extending it. It is contributor documentation, not a learner lesson or confirmation that local changes have been deployed. `docs.json` is the source of truth for navigation and reading order.

## What exists and what comes next

| Area | Current state | Next work |
| --- | --- | --- |
| HTML | 48 MDX pages: 29 topic lessons, 11 module checkpoints, 3 stage projects, a final challenge, 3 overviews, and further learning | Maintain, review, and improve the existing course |
| CSS | 45 MDX pages: 27 lessons, 9 checkpoints, 3 stage projects, final challenge, 4 overviews, and further learning; practice pack and 4 solution ZIPs | Learner review and portfolio integration |
| JavaScript | 49 MDX pages: 31 lessons, 9 checkpoints, 3 stage projects, final challenge, 4 overviews, and further learning; 4 worked-project ZIPs | Learner review and cross-course portfolio integration |
| Frontend roadmap | Overview, prerequisites, learning order, and links to skill courses | Keep aligned with course availability |
| Frontend capstone | Proposed framework page | Agree the shared brief and assessment rubric; implement after core courses |
| Contribution pathway | Proposed pathway page | Technical Innovation & Development team confirms readiness, tasks, and reviewers |
| Frameworks and tools | Landing pages | Develop after the core foundations, with prerequisites |
| Backend, databases, cloud, and other paths | Existing landing/resource pages retained | Restructure their curricula in later phases |

A visible tab or page does not mean its course is finished. Keep planned content clearly labelled. JavaScript now follows the same learning pattern. HTML Intermediate and Advanced now include stage overviews, topic-specific experiments and answer explanations, checkpoint solutions and test tables, and project assessment rubrics. CSS now follows the same pattern across all three levels, with isolated runnable examples and a continuing portfolio.

## Learning architecture

The conceptual hierarchy is **Learning path → Track → Skill → Level → Module → Topic**, with checkpoints after modules and projects after levels.

```text
Resource Hub
├── Start Here
├── Web Development
│   ├── Frontend Development: overview, roadmap, prerequisites
│   │   ├── HTML
│   │   ├── CSS
│   │   ├── JavaScript
│   │   ├── Frameworks & Libraries
│   │   ├── Frontend Tools & Workflow
│   │   ├── Frontend Capstone
│   │   └── Contribution Pathway
│   ├── Backend Development
│   └── Databases
├── Cloud Computing
├── Other Learning Paths
├── Career Resources
└── About and Contributing
```

The header has two navigation rows:

1. **Track links:** Resource Hub, Frontend, Backend, Frameworks, Cloud, and Databases open their internal overview pages. Category links sit between the logo and search without horizontal scrolling. Compact spacing accommodates smaller desktop screens; mobile navigation uses Mintlify's menu. Search and Join Community remain available. Tools, Other Paths, and Support are omitted from the top links; existing content pages remain intact.
2. **Technology tabs:** HTML, CSS, JavaScript, React, and Angular. The row stays on one line and scrolls horizontally when space is limited. Arrow buttons, touch scrolling, and keyboard focus expose off-screen links.

Selecting a technology displays only its own sidebar. Existing HTML, CSS, and JavaScript level/module structures remain unchanged. React and Angular currently have planned-course landing pages only; do not imply their lessons are available. Roadmaps, capstone, and contribution pathway remain under Resource Hub.

### Maintaining the header

- Category tabs remain registered for routing and their own sidebars, but CSS hides their duplicate links in the technology row. Resource Hub stays first in the configuration so the home page resolves to its own navigation.
- `docs.json` owns the category links (`navbar.links`) and course tabs (`navigation.tabs`). Each tab owns its sidebar groups and existing routes remain stable.
- `header-navigation.js` progressively enhances Mintlify's native `.nav-tabs` with overflow controls. It preserves native links and client-side routing, handles header remounts, and uses ResizeObserver to update controls.
- The header CSS at the end of `style.css` scopes layout to `#navbar`; never add global body width constraints. The native mobile menu remains available.
- When adding a skill, create a real overview page and a tab with its own sidebar. Label unfinished curricula as planned. Check light/dark themes, narrow screens, keyboard access, overflow arrows, and direct lesson URLs.
- Keep example `.css.source` and `.js.source` snapshots inert; only intentional hub styles/scripts should load globally.


## Standard course structure

**Overview → Learning modules with topic practice → Module checkpoints → Stage projects → Final building challenge → Further learning**

```text
Skill
├── Overview: audience, prerequisites, outcomes, tools, course order
├── Beginner
│   ├── Modules: individual topic pages followed by a checkpoint
│   └── Stage project
├── Intermediate
│   ├── Modules: individual topic pages followed by a checkpoint
│   └── Stage project
├── Advanced
│   ├── Modules: individual topic pages followed by a checkpoint
│   └── Stage project
└── Build and explore
    ├── Final building challenge
    └── Further learning and references
```

Levels must describe increasing skill, with observable outcomes. Advanced HTML stays focused on HTML; CSS styling and JavaScript functionality belong to their own courses. Categories such as Frameworks & Libraries can contain courses; they do not all need artificial Beginner/Intermediate/Advanced sections themselves.

## HTML modules and outcomes

| Level | Modules in reading order | What learners demonstrate |
| --- | --- | --- |
| Beginner | Getting started; Writing content; Connecting content; Reviewing your work | Create and inspect complete documents, structure text, connect pages, use local assets, and repair basic mistakes |
| Intermediate | Semantic and accessible pages; Data and meaningful text; Accessible forms; Accessible media | Build meaningful page structure, tables, labelled forms, and media with appropriate alternatives |
| Advanced | Reliable documents and images; Native features and document context; Audit and demonstrate | Apply content rules, responsive images, native features, metadata, and a documented website audit |

Each module ends with its own checkpoint. The full current page inventory appears at the end of this document. Follow navigation order rather than sorting filenames: for example, `i10-quotations-code-and-dates` appears with data tables before the forms module.

### Connected portfolio projects

1. **Beginner:** Build a two-page personal introduction website.
2. **Intermediate:** Extend the same work into a semantic, accessible portfolio.
3. **Advanced:** Improve and audit that portfolio using advanced HTML features.
4. **HTML final challenge:** Refine, review, and demonstrate the complete HTML portfolio.
5. **CSS:** Add styling and responsive design to that foundation.
6. **JavaScript, available:** Add search, filtering, local data loading, saved preferences, and tested interactions.
7. **Frontend capstone, proposed:** Integrate, test, demonstrate, and deploy a complete website.

The HTML final challenge assesses HTML. It is distinct from the future frontend capstone, which combines technologies. The capstone's final shared brief and review criteria still require team agreement.

## Where files belong

```text
GDGOC-resource-hub/
├── docs.json                         # Tabs, sidebar groups, page order, branding
├── site-restructure.md               # This contributor guide
├── style.css                         # Shared lesson and navigation styling
├── sidebar-state.js                  # Native group state restoration and active links
├── share-progress.js                 # Optional progress-post copying helper
├── index.mdx
├── frontend-development.mdx          # Frontend roadmap
├── web-development.mdx
├── backend-development.mdx
├── start-here/
├── web-development/
│   ├── frontend/
│   │   ├── html/
│   │   │   ├── overview.mdx
│   │   │   ├── beginner/             # b01–b11, checkpoint-*.mdx, project.mdx
│   │   │   ├── intermediate/         # i01–i10, checkpoint-*.mdx, project.mdx
│   │   │   ├── advanced/             # a01–a08, checkpoint-*.mdx, project.mdx
│   │   │   ├── final-project.mdx
│   │   │   └── further-learning.mdx
│   │   ├── css/                      # Course and level scaffolds
│   │   ├── javascript/               # Complete course; see its curriculum.md
│   │   ├── frameworks-and-libraries.mdx
│   │   ├── tools-and-workflow.mdx
│   │   ├── capstone.mdx
│   │   └── contribution-pathway.mdx
│   ├── backend/
│   └── databases/
├── assets/html/                      # Practice media and worked-project ZIPs
├── cloud-computing/
├── paths/                            # Existing cloud and machine-learning entry pages
├── other-learning-paths/
├── job-hunting/
├── images/
└── logo/
```

Keep one topic per `.mdx` file. Modules are navigation groups, not necessarily extra folders or overview pages. Preserve existing paths when editing so links remain valid.

## Lesson and assessment standards

Assume no previous coding experience in Beginner. Explain terms and file setup before relying on them. State prerequisites for later courses.

Each topic lesson should contain:

1. Learning objectives and relevant prerequisites.
2. A clear explanation with small, runnable examples.
3. Expected output or an explanation of what the example demonstrates.
4. A practice challenge with concrete instructions.
5. A checklist of observable completion criteria.
6. Optional hints, separate from the answer.
7. A suggested solution that learners can reveal after attempting the task.
8. Previous and Next links in the course's reading order.

Use fenced code blocks with language labels such as `html` for syntax highlighting. Use existing Mintlify callouts (`Note`, `Info`, `Tip`, `Warning`) and separate `Accordion` components for hints and solutions. Use quotes for quotations, not as a substitute for code formatting. Follow shared styles rather than adding one-off colors to every page; meaning must remain clear without color alone.

**Topic exercises** teach through practice and worked solutions. **Module checkpoints** ask learners to demonstrate skills independently: task, completion criteria, evidence to keep, hints, and review guidance. Current checkpoints intentionally omit complete implementations; related lessons provide worked examples.

**Stage projects and the final challenge** combine skills. Include a brief, requirements, checklist, hints, and a separate suggested implementation. Existing downloadable solutions and practice media live under `assets/html/`. When changing a project, keep its worked ZIP and instructions consistent. Check that examples can run with the supplied files and relative paths.

## Navigation behavior to preserve

- Register pages in `docs.json` without `.mdx`, using forward slashes.
- Use root-relative internal routes in MDX, for example `/web-development/frontend/html/overview`.
- Creating a file does not automatically place it in the intended sidebar: add it to the correct tab, level, and module.
- Keep each lesson's explicit Previous/Next links aligned with `docs.json`, including checkpoints and stage projects.
- Keep `interaction.drilldown` set to `false`: module controls expand/collapse their children.
- Mintlify owns the native dropdown behavior. `sidebar-state.js` remembers manual choices in `sessionStorage` and restores them through native controls, across lesson navigation and refreshes in the same tab.
- Do not replace native expansion with CSS hiding, manual `aria-expanded` changes, or click interception that blocks links. This previously caused navigation failures.
- Preserve visible dropdown arrows and check light/dark themes, keyboard use, and mobile navigation after navigation changes.

Saved dropdown state is not course completion tracking. Closing the browser session may discard it.

## Progress, evidence, and contribution

Current progression is guided by checklists and evidence. There are no learner accounts, automatic grading, or enforced stage locks. Suggested completion order is Beginner → Intermediate → Advanced → Final Challenge; moving forward is not technically blocked.

Stage locking remains a proposed feature awaiting approval and a defined assessment model. A checklist alone does not prove code correctness. Do not describe saved progress, automatic unlocks, or verified completion as implemented.

Learners should retain source files, explanations, and records of testing and repairs. The contribution pathway proposes demonstrating readiness, choosing a reviewed starter task, submitting changes, responding to review, and shipping through maintainer approval. Course completion does not grant production access or guarantee an assignment. The Technical Innovation & Development team must confirm that process.

## Contributor workflow

1. Read this guide and [the contribution guide](how-to-contribute.mdx). Inspect `git status` and work on a dedicated branch without discarding unrelated changes.
2. Identify whether the task is a lesson change, curriculum change, navigation change, or shared UI change. Use the existing HTML pages as examples.
3. From the repository root (the folder containing `docs.json`), install the Mintlify CLI if needed and launch the preview:

   ```powershell
   npm install -g mint
   mint dev
   ```

   Use a Node.js version supported by the CLI you install. Open the local URL printed by the command; another port may be used if the default is occupied. The repository uses the `mint` CLI.

4. Edit or create MDX with `title` and `description` frontmatter. Put shared downloadable files under `assets/`, not beside unrelated lessons.
5. For added, moved, or reordered pages, update `docs.json`, Previous/Next links, overview links, and affected references together. Reconcile the inventory below when changing the structure.
6. Preview every changed page. Attempt its exercise from the instructions, reveal hints and solutions, and verify downloads and example paths.
7. Run the relevant checks below, then review the diff and submit a pull request with the problem, changes, and validation performed. Maintainers handle approval and release.

### Checks before review

- MDX renders without errors; code fences, callouts, and accordions display correctly.
- Every configured route exists; internal cards, sidebar links, and Previous/Next links reach the intended page.
- Changes work in light and dark themes and on a narrow/mobile viewport.
- Keyboard users can reach links, operate dropdowns, and see focus.
- Manually opened sidebar groups remain open through lesson changes; manually closed groups remain closed.
- Exercises use only already-taught skills and have observable success criteria.
- Downloads contain the files referenced in the instructions.
- Planned content is labelled, and course cards do not redirect learners to external courses.
- `git diff --check` reports no whitespace errors.

For larger navigation/content changes, also use the installed CLI's validation and broken-link checks (`mint --help` lists available commands). Do not equate a successful local preview with deployment.

## Delivery sequence

1. Maintain and review the implemented HTML course and navigation.
2. Review the completed CSS course with learners and preserve the shared portfolio through JavaScript.
3. Review the completed JavaScript course and coordinate portfolio integration with HTML/CSS owners.
4. Finalise the frontend capstone brief and assessment with the Lead.
5. Expand frameworks and workflow content, then remaining tracks.
6. Confirm the contribution pathway with the technical team.

Keep foundational courses distinct from frameworks and tools. Useful external references supplement the internal teaching at the end of each course.

## Current navigation inventory

The following inventory mirrors `docs.json` as of the update date. Links point to repository source files for collaborators. Grouping and sequence, especially checkpoint placement, are intentional.

### Resource Hub

- **Start Here**
  - [GDGOC Unilorin Resource Hub](index.mdx)
  - [How to use the hub](start-here/how-to-use-the-hub.mdx)
  - [Choose a learning path](start-here/choose-a-learning-path.mdx)
  - [Set up your learning tools](start-here/set-up-your-learning-tools.mdx)
- **Learning roadmaps**
  - [Overview and learning roadmap](web-development.mdx)
  - [Frontend Development](frontend-development.mdx)
  - [Frontend Capstone](web-development/frontend/capstone.mdx)
  - [From learning to contribution](web-development/frontend/contribution-pathway.mdx)
- **Career Resources**
  - [Job Hunting & Resume Guide](job-hunting/resume.mdx)
- **About and Contributing**
  - [Purpose of the Hub](purpose-of-this-guide.mdx)
  - [How to Contribute](how-to-contribute.mdx)

### HTML

- **Start HTML**
  - [Learn HTML](web-development/frontend/html/overview.mdx)
- **Beginner**
  - **Getting started**
    - [How web pages work](web-development/frontend/html/beginner/b01-how-web-pages-work.mdx)
    - [Set up and open your first page](web-development/frontend/html/beginner/b02-set-up-and-open-your-first-page.mdx)
    - [Elements, tags, and attributes](web-development/frontend/html/beginner/b03-elements-tags-and-attributes.mdx)
    - [The HTML document skeleton](web-development/frontend/html/beginner/b04-the-html-document-skeleton.mdx)
    - [Checkpoint: Getting started](web-development/frontend/html/beginner/checkpoint-getting-started.mdx)
  - **Writing content**
    - [Headings and paragraphs](web-development/frontend/html/beginner/b05-headings-and-paragraphs.mdx)
    - [Meaningful text markup](web-development/frontend/html/beginner/b06-meaningful-text-markup.mdx)
    - [Lists](web-development/frontend/html/beginner/b07-lists.mdx)
    - [Checkpoint: Writing content](web-development/frontend/html/beginner/checkpoint-writing-content.mdx)
  - **Connecting content**
    - [Links and page navigation](web-development/frontend/html/beginner/b08-links-and-page-navigation.mdx)
    - [Files, folders, and relative paths](web-development/frontend/html/beginner/b09-files-folders-and-relative-paths.mdx)
    - [Images and text alternatives](web-development/frontend/html/beginner/b10-images-and-text-alternatives.mdx)
    - [Checkpoint: Connecting content](web-development/frontend/html/beginner/checkpoint-connecting-content.mdx)
  - **Reviewing your work**
    - [Inspect and fix your HTML](web-development/frontend/html/beginner/b11-inspect-and-fix-your-html.mdx)
    - [Checkpoint: Reviewing your work](web-development/frontend/html/beginner/checkpoint-reviewing-your-work.mdx)
  - [Beginner project: Personal introduction website](web-development/frontend/html/beginner/project.mdx)
- **Intermediate**
  - [Intermediate: Structured and accessible content](web-development/frontend/html/intermediate/overview.mdx)
  - **Semantic and accessible pages**
    - [Semantic page structure](web-development/frontend/html/intermediate/i01-semantic-page-structure.mdx)
    - [Articles, sections, and supporting content](web-development/frontend/html/intermediate/i02-articles-sections-and-supporting-content.mdx)
    - [Accessible content and keyboard navigation](web-development/frontend/html/intermediate/i03-accessible-content-and-keyboard-navigation.mdx)
    - [Checkpoint: Semantic and accessible pages](web-development/frontend/html/intermediate/checkpoint-semantic-pages.mdx)
  - **Data and meaningful text**
    - [Data tables](web-development/frontend/html/intermediate/i04-data-tables.mdx)
    - [Quotations, code, and dates](web-development/frontend/html/intermediate/i10-quotations-code-and-dates.mdx)
    - [Checkpoint: Data and meaningful text](web-development/frontend/html/intermediate/checkpoint-data-and-text.mdx)
  - **Accessible forms**
    - [Forms, labels, and submission basics](web-development/frontend/html/intermediate/i05-forms-labels-and-submission-basics.mdx)
    - [Input types and browser validation](web-development/frontend/html/intermediate/i06-input-types-and-browser-validation.mdx)
    - [Choices and longer responses](web-development/frontend/html/intermediate/i07-choices-and-longer-responses.mdx)
    - [Clear and accessible forms](web-development/frontend/html/intermediate/i08-clear-and-accessible-forms.mdx)
    - [Checkpoint: Accessible forms](web-development/frontend/html/intermediate/checkpoint-accessible-forms.mdx)
  - **Accessible media**
    - [Audio, video, and captions](web-development/frontend/html/intermediate/i09-audio-video-and-captions.mdx)
    - [Checkpoint: Accessible media](web-development/frontend/html/intermediate/checkpoint-accessible-media.mdx)
  - [Intermediate project: Extend your portfolio](web-development/frontend/html/intermediate/project.mdx)
- **Advanced**
  - [Advanced: Robust HTML and native features](web-development/frontend/html/advanced/overview.mdx)
  - **Reliable documents and images**
    - [Content rules and browser error recovery](web-development/frontend/html/advanced/a01-content-rules-and-browser-error-recovery.mdx)
    - [Responsive image markup](web-development/frontend/html/advanced/a02-responsive-image-markup.mdx)
    - [Image loading choices](web-development/frontend/html/advanced/a03-image-loading-choices.mdx)
    - [Checkpoint: Reliable documents and images](web-development/frontend/html/advanced/checkpoint-reliable-documents.mdx)
  - **Native features and document context**
    - [Native disclosure widgets](web-development/frontend/html/advanced/a04-native-disclosure-widgets.mdx)
    - [Embedded pages and boundaries](web-development/frontend/html/advanced/a05-embedded-pages-and-boundaries.mdx)
    - [Metadata and meaningful document context](web-development/frontend/html/advanced/a06-metadata-and-meaningful-document-context.mdx)
    - [Form boundaries and safe practice](web-development/frontend/html/advanced/a07-form-boundaries-and-safe-practice.mdx)
    - [Checkpoint: Native features and document context](web-development/frontend/html/advanced/checkpoint-native-features.mdx)
  - **Audit and demonstrate**
    - [Validate and audit a complete website](web-development/frontend/html/advanced/a08-validate-and-audit-a-complete-website.mdx)
    - [Checkpoint: Audit and demonstrate](web-development/frontend/html/advanced/checkpoint-audit-and-demonstrate.mdx)
  - [Advanced project: Improve and audit your portfolio](web-development/frontend/html/advanced/project.mdx)
- **Build and explore**
  - [Final building challenge: HTML portfolio](web-development/frontend/html/final-project.mdx)
  - [Further learning and references](web-development/frontend/html/further-learning.mdx)

### CSS

- **Start CSS**
  - [Learn CSS](web-development/frontend/css/overview.mdx)
- **Beginner**
  - [Beginner: CSS foundations](web-development/frontend/css/beginner/overview.mdx)
  - **Writing and understanding CSS**
    - [Connect your first stylesheet](web-development/frontend/css/beginner/b01-connect-a-stylesheet.mdx)
    - [Select elements with reusable classes](web-development/frontend/css/beginner/b02-selectors-and-classes.mdx)
    - [Understand the cascade and inheritance](web-development/frontend/css/beginner/b03-cascade-and-inheritance.mdx)
    - [Checkpoint: Writing and understanding CSS](web-development/frontend/css/beginner/checkpoint-css-foundations.mdx)
  - **Sizing and readable text**
    - [Use the box model and predictable spacing](web-development/frontend/css/beginner/b04-box-model-and-spacing.mdx)
    - [Choose units and flexible widths](web-development/frontend/css/beginner/b05-units-and-sizing.mdx)
    - [Build readable typography](web-development/frontend/css/beginner/b06-readable-typography.mdx)
    - [Checkpoint: Sizing and readable text](web-development/frontend/css/beginner/checkpoint-readable-layout.mdx)
  - **Colour and dependable presentation**
    - [Use colour with sufficient contrast](web-development/frontend/css/beginner/b07-colour-and-contrast.mdx)
    - [Separate decoration from content](web-development/frontend/css/beginner/b08-borders-backgrounds-and-decoration.mdx)
    - [Understand flow, display, and overflow](web-development/frontend/css/beginner/b09-flow-display-and-overflow.mdx)
    - [Checkpoint: Colour and dependable presentation](web-development/frontend/css/beginner/checkpoint-visual-foundations.mdx)
  - [Beginner project: Readable portfolio styling](web-development/frontend/css/beginner/project.mdx)
- **Intermediate**
  - [Intermediate: Responsive interfaces](web-development/frontend/css/intermediate/overview.mdx)
  - **Flexible page layouts**
    - [Arrange navigation with Flexbox](web-development/frontend/css/intermediate/i01-flexbox-for-navigation.mdx)
    - [Build a project grid](web-development/frontend/css/intermediate/i02-grid-for-projects.mdx)
    - [Adapt layouts with media queries](web-development/frontend/css/intermediate/i03-mobile-first-media-queries.mdx)
    - [Checkpoint: Flexible page layouts](web-development/frontend/css/intermediate/checkpoint-responsive-layout.mdx)
  - **Fluid content and positioning**
    - [Use fluid sizing with limits](web-development/frontend/css/intermediate/i04-fluid-spacing-and-type.mdx)
    - [Fit images and media without distortion](web-development/frontend/css/intermediate/i05-images-and-responsive-media.mdx)
    - [Position small details deliberately](web-development/frontend/css/intermediate/i06-positioning-and-stacking.mdx)
    - [Checkpoint: Fluid content and positioning](web-development/frontend/css/intermediate/checkpoint-fluid-content.mdx)
  - **Usable components and debugging**
    - [Style focus, links, and form controls](web-development/frontend/css/intermediate/i07-interaction-states-and-forms.mdx)
    - [Reuse design values with custom properties](web-development/frontend/css/intermediate/i08-custom-properties.mdx)
    - [Debug responsive layouts systematically](web-development/frontend/css/intermediate/i09-debug-responsive-layouts.mdx)
    - [Checkpoint: Usable components and debugging](web-development/frontend/css/intermediate/checkpoint-component-review.mdx)
  - [Intermediate project: Responsive portfolio](web-development/frontend/css/intermediate/project.mdx)
- **Advanced**
  - [Advanced: Maintainable and adaptable CSS](web-development/frontend/css/advanced/overview.mdx)
  - **Architecture and progressive layout**
    - [Organise the cascade with layers](web-development/frontend/css/advanced/a01-cascade-layers.mdx)
    - [Adapt components with container queries](web-development/frontend/css/advanced/a02-container-queries.mdx)
    - [Align card content with subgrid](web-development/frontend/css/advanced/a03-subgrid-and-fallbacks.mdx)
    - [Checkpoint: Architecture and progressive layout](web-development/frontend/css/advanced/checkpoint-progressive-layout.mdx)
  - **Direction, themes, and motion**
    - [Use logical properties for adaptable layouts](web-development/frontend/css/advanced/a04-logical-properties.mdx)
    - [Build light and dark themes with tokens](web-development/frontend/css/advanced/a05-themes-and-user-preferences.mdx)
    - [Use transitions with reduced-motion support](web-development/frontend/css/advanced/a06-transitions-and-reduced-motion.mdx)
    - [Checkpoint: Direction, themes, and motion](web-development/frontend/css/advanced/checkpoint-user-preferences.mdx)
  - **Animation, print, and evidence**
    - [Create a restrained keyframe animation](web-development/frontend/css/advanced/a07-keyframes-and-finite-animation.mdx)
    - [Maintain styles and support printing](web-development/frontend/css/advanced/a08-maintainable-css-and-print.mdx)
    - [Audit and demonstrate a styled website](web-development/frontend/css/advanced/a09-audit-and-demonstrate.mdx)
    - [Checkpoint: Animation, print, and evidence](web-development/frontend/css/advanced/checkpoint-final-audit.mdx)
  - [Advanced project: Adaptable portfolio design system](web-development/frontend/css/advanced/project.mdx)
- **Build and explore**
  - [Final challenge: Build and audit your styled portfolio](web-development/frontend/css/final-project.mdx)
  - [CSS further learning and Google references](web-development/frontend/css/further-learning.mdx)

### JavaScript

- **Start JavaScript**
  - [Learn JavaScript](web-development/frontend/javascript/overview.mdx)
- **Beginner**
  - [Beginner: Language and browser foundations](web-development/frontend/javascript/beginner/overview.mdx)
  - **Programming foundations**
    - [Run your first JavaScript](web-development/frontend/javascript/beginner/b01-run-your-first-javascript.mdx)
    - [Variables and values](web-development/frontend/javascript/beginner/b02-variables-and-values.mdx)
    - [Expressions, numbers, and messages](web-development/frontend/javascript/beginner/b03-expressions-and-messages.mdx)
    - [Comparisons and decisions](web-development/frontend/javascript/beginner/b04-comparisons-and-decisions.mdx)
    - [Checkpoint: Programming foundations](web-development/frontend/javascript/beginner/checkpoint-programming-foundations.mdx)
  - **Reusable logic and collections**
    - [Functions, parameters, and return values](web-development/frontend/javascript/beginner/b05-functions-parameters-and-return.mdx)
    - [Scope and local variables](web-development/frontend/javascript/beginner/b06-scope-and-local-variables.mdx)
    - [Arrays and indexes](web-development/frontend/javascript/beginner/b07-arrays-and-indexes.mdx)
    - [Objects and properties](web-development/frontend/javascript/beginner/b08-objects-and-properties.mdx)
    - [Loops and collections](web-development/frontend/javascript/beginner/b09-loops-and-collections.mdx)
    - [Checkpoint: Summarise a project collection](web-development/frontend/javascript/beginner/checkpoint-collections.mdx)
  - **Your first interactive page**
    - [Selecting DOM elements](web-development/frontend/javascript/beginner/b10-selecting-dom-elements.mdx)
    - [Updating text and classes](web-development/frontend/javascript/beginner/b11-updating-text-and-classes.mdx)
    - [Buttons and events](web-development/frontend/javascript/beginner/b12-buttons-and-events.mdx)
    - [Debugging and tracing](web-development/frontend/javascript/beginner/b13-debugging-and-tracing.mdx)
    - [Checkpoint: Build a practice counter](web-development/frontend/javascript/beginner/checkpoint-interactions.mdx)
  - [Beginner project: Interactive portfolio filters](web-development/frontend/javascript/beginner/project.mdx)
- **Intermediate**
  - [Intermediate: Data and asynchronous interfaces](web-development/frontend/javascript/intermediate/overview.mdx)
  - **Data-driven interfaces**
    - [Array transformations and callbacks](web-development/frontend/javascript/intermediate/i01-array-transformations.mdx)
    - [Copying, updating, and sorting data](web-development/frontend/javascript/intermediate/i02-copying-and-sorting.mdx)
    - [Rendering lists safely](web-development/frontend/javascript/intermediate/i03-rendering-lists.mdx)
    - [Checkpoint: Render a filtered project list](web-development/frontend/javascript/intermediate/checkpoint-data-interfaces.mdx)
  - **Forms and saved preferences**
    - [Forms and input validation](web-development/frontend/javascript/intermediate/i04-forms-and-input-validation.mdx)
    - [JSON and data shapes](web-development/frontend/javascript/intermediate/i05-json-and-data-shapes.mdx)
    - [Remembering a preference](web-development/frontend/javascript/intermediate/i06-local-storage.mdx)
    - [Checkpoint: Validate and remember a study target](web-development/frontend/javascript/intermediate/checkpoint-forms-storage.mdx)
  - **Asynchronous JavaScript**
    - [Promises and asynchronous work](web-development/frontend/javascript/intermediate/i07-promises-and-async.mdx)
    - [Fetching and checking local data](web-development/frontend/javascript/intermediate/i08-fetching-local-data.mdx)
    - [Loading, empty, and error states](web-development/frontend/javascript/intermediate/i09-loading-and-error-states.mdx)
    - [Checkpoint: Load and recover](web-development/frontend/javascript/intermediate/checkpoint-async.mdx)
  - [Intermediate project: Searchable project explorer](web-development/frontend/javascript/intermediate/project.mdx)
- **Advanced**
  - [Advanced: Reliable browser applications](web-development/frontend/javascript/advanced/overview.mdx)
  - **Code organisation**
    - [Organising code with ES modules](web-development/frontend/javascript/advanced/a01-es-modules.mdx)
    - [Closures and private state](web-development/frontend/javascript/advanced/a02-closures-and-state.mdx)
    - [State, identity, and pure functions](web-development/frontend/javascript/advanced/a03-state-and-pure-functions.mdx)
    - [Checkpoint: Refactor without changing behaviour](web-development/frontend/javascript/advanced/checkpoint-organisation.mdx)
  - **Reliable interactions**
    - [Event delegation](web-development/frontend/javascript/advanced/a04-event-delegation.mdx)
    - [The event loop and task order](web-development/frontend/javascript/advanced/a05-event-loop-and-task-order.mdx)
    - [Cancellation and stale results](web-development/frontend/javascript/advanced/a06-cancellation-and-stale-results.mdx)
    - [Checkpoint: Protect the latest result](web-development/frontend/javascript/advanced/checkpoint-reliable-interactions.mdx)
  - **Test and demonstrate**
    - [Testing functions and boundary cases](web-development/frontend/javascript/advanced/a07-testing-functions.mdx)
    - [Testing accessible interactions](web-development/frontend/javascript/advanced/a08-testing-accessible-interactions.mdx)
    - [Performance and regression review](web-development/frontend/javascript/advanced/a09-performance-and-regression-review.mdx)
    - [Checkpoint: Demonstrate reliability](web-development/frontend/javascript/advanced/checkpoint-audit.mdx)
  - [Advanced project: Reliable modular explorer](web-development/frontend/javascript/advanced/project.mdx)
- **Build and explore**
  - [Final challenge: Demonstrate your JavaScript portfolio](web-development/frontend/javascript/final-project.mdx)
  - [JavaScript further learning and references](web-development/frontend/javascript/further-learning.mdx)

### Frameworks

- **Frameworks and libraries**
  - [Frameworks and libraries](web-development/frontend/frameworks-and-libraries.mdx)

### Tools

- **Frontend workflow**
  - [Frontend tools and workflow](web-development/frontend/tools-and-workflow.mdx)

### Backend

- **Backend Development**
  - [Backend Development](backend-development.mdx)
  - [Backend foundations](web-development/backend/foundations.mdx)
  - [Languages and frameworks](web-development/backend/languages-and-frameworks.mdx)
  - [APIs](web-development/backend/apis.mdx)
  - [Authentication and security](web-development/backend/authentication-and-security.mdx)
  - [Testing and deployment](web-development/backend/testing-and-deployment.mdx)

### Databases

- **Databases**
  - [Databases](web-development/databases/overview.mdx)
  - [Database foundations](web-development/databases/foundations.mdx)
  - [Relational databases and SQL](web-development/databases/relational-databases-and-sql.mdx)
  - [Non-relational databases](web-development/databases/non-relational-databases.mdx)
  - [Data modelling and database tools](web-development/databases/data-modelling-and-tools.mdx)

### Cloud

- **Cloud Computing**
  - [Overview and learning roadmap](paths/cloud-computing.mdx)
  - [Cloud foundations](cloud-computing/foundations.mdx)
  - [Cloud providers](cloud-computing/providers.mdx)
  - [Compute, storage, and networking](cloud-computing/compute-storage-and-networking.mdx)
  - [Identity and security](cloud-computing/identity-and-security.mdx)
  - [Deployment, operations, and automation](cloud-computing/deployment-operations-and-automation.mdx)

### Other Paths

- **Other Learning Paths**
  - [Other Learning Paths](other-learning-paths/overview.mdx)
  - [Machine Learning](paths/machine-learning.mdx)
  - [Frontend Development Track](other-learning-paths/frontend-resources.mdx)
  - [Backend Development Track](other-learning-paths/backend-resources.mdx)

## HTML Intermediate and Advanced contributor checks

The two stage overview pages are the entry points in the HTML sidebar. Preserve the module order in `docs.json`, including Data tables followed by Quotations, code, and dates before the forms module. Each of the 18 lessons includes an observation exercise and a topic-specific answer explanation; each of the seven checkpoints includes expected test evidence and a separate suggested solution. Keep stage-project checklists, rubrics, and downloadable solutions aligned. External references remain on `further-learning.mdx` and use Google resources. Automated grading and enforced stage locks remain unimplemented.
