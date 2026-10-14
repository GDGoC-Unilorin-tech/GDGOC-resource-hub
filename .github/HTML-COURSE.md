# HTML course maintenance

## Scope

HTML is the completed content baseline for later skill courses. It contains 29 topic lessons, 11 module checkpoints, three portfolio milestones, a final building challenge, an overview, and a reference page: 46 MDX pages in total.

Course pattern: **Overview → Modules → Topic practice → Checkpoints → Building challenge → Further learning**.

Keep each lesson as a separate MDX file. The HTML tab in `docs.json` owns its sidebar; level groups contain modules in prerequisite order. The data-and-text module intentionally places I10 before the forms module. IDs identify lessons; navigation defines their teaching order.

## Teaching standards

- Define objectives and prerequisites before explanations.
- Teach core material inside the hub; optional external reading belongs on the final reference page.
- Use language-labelled code fences, native Mintlify callouts, and separately revealed hints and solutions.
- Distinguish complete documents, body snippets, head snippets, and deliberately broken examples.
- Include observable exercise criteria and explain the solution.
- Checkpoints require independent demonstrations; they do not supply a complete answer to copy.
- Checklists are self-assessment unless an actual reviewer checks the evidence. No automatic grading, saved completion, or stage locks are implemented.

## Connected portfolio

1. Beginner: two-page personal introduction, preserved as the portfolio foundation.
2. Intermediate: extend to five main pages with semantic regions, a learning log, a practice form, and accessible media.
3. Advanced: improve image selection, native features, metadata, and audit evidence.
4. Final: independently refine and demonstrate the same portfolio, with an additional content/navigation improvement.

CSS styling, JavaScript functionality, production form handling, and deployment are not HTML assessment requirements. Preserve project files for those later courses.

## Practice assets and solutions

`assets/html/` contains original diagrams with known dimensions, an approximately six-second silent WebM demonstration, a WebVTT visual-description track, and a transcript. The media is silent: do not describe its track as a worked example of transcribing speech. Real spoken media needs speech and meaningful-sound captions.

`html-practice-assets.zip` supplies the learner's assets. Four `portfolio-*-solution.zip` files include complete source, local assets, decision notes, and a review template. To edit a worked solution, extract it into a temporary folder, change the source, test it, and repackage the same archive. Do not add a backend or real personal data to practice forms.

Each solution contains portable relative paths. Intermediate and later forms use GET to a static local demonstration destination; this does not send email or store messages. Fictional values appear in the URL. Serve projects over HTTP for reliable text-track testing, as explained in the media lesson and archive README.

## Review rubric

Record **Met**, **Needs revision**, or **Not yet attempted** against every published requirement. Require source/browser evidence and an explanation, not matching the worked solution word for word. Review structure, content meaning, working navigation/assets, labels and groups, keyboard operation, media equivalents, and audit quality. Valid markup alone does not establish full accessibility.

Course completion prepares learners for review; the Technical Innovation & Development team decides readiness, task assignment, review, and production release.

## Verification before publishing

- Compile all HTML MDX files and confirm frontmatter.
- Verify every configured page and sequential Previous/Next link.
- Verify asset/download links and archive integrity.
- Open the worked portfolios over HTTP; test links, images, labels, invalid/valid fictional form entries, media, tracks, and native disclosures.
- Check HTML-tab isolation, module expansion, callouts, code formatting, and mobile navigation in Mintlify's preview.
- Run `mint validate` with a working Node runtime. A compiler-only check is not equivalent to full native Mintlify validation.
- Do not claim production publication or technical-team approval unless it has occurred.
