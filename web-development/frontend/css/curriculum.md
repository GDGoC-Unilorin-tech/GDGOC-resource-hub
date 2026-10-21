# CSS curriculum and collaborator handoff

Updated: 21 October 2026

## Delivered scope

45 MDX pages: 27 topic lessons, nine module checkpoints, three stage projects, a final challenge, four overviews, and further learning. Each stage has nine lessons in three modules. Topic pages include objectives, setup, explanation, runnable examples, observation steps, a challenge, checklist, hint, suggested solution, and an answer explanation. Checkpoints include independent requirements and a separate suggested approach with a complete stage example.

The course extends the HTML portfolio and prepares it for JavaScript. Preserve HTML semantics, native controls, media alternatives, and honest static-form wording. The course teaches CSS; it does not implement application state, message delivery, automated grading, or stage locks.

## Module order

### Beginner

- Writing and understanding CSS
- Sizing and readable text
- Colour and dependable presentation
### Intermediate

- Flexible page layouts
- Fluid content and positioning
- Usable components and debugging
### Advanced

- Architecture and progressive layout
- Direction, themes, and motion
- Animation, print, and evidence

## Assets and maintenance

assets/css contains a practice pack and four worked-portfolio ZIPs, editable source snapshots, and build_archives.py. Keep stylesheet source filenames ending in .source to prevent Mintlify global injection. Rebuild downloads whenever source snapshots change. See assets/css/README.md for the workflow.

docs.json is the navigation source of truth. Update sidebar order and Previous/Next links together. External learning links belong only on further-learning.mdx and must use verified Google resources. No changes to the hub's shared header CSS or behaviour are needed for these lessons.

## Review expectations

Compile every MDX page and validate docs.json. Check route and asset links. Test worked examples and challenge solutions in a browser. Review each portfolio at narrow, medium, and wide widths, keyboard focus, valid/invalid forms, media, and long text. For Advanced/Final also test themes, reduced motion, direction, print, and disabled enhancements. Record limits: automated checks do not establish complete accessibility, and a browser-engine test does not prove all-browser support.
