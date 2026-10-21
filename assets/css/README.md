# CSS teaching assets

The practice ZIP contains 27 isolated lesson examples, separate suggested CSS solutions, and a semantic HTML starting portfolio. Four portfolio ZIPs provide Beginner, Intermediate, Advanced, and Final suggested implementations.

Source snapshots live in practice-source/ and the four *-solution/ folders. Stylesheet filenames end in .css.source because Mintlify auto-loads ordinary CSS files as site styles. Never rename these source snapshots to .css inside the docs repository. The build script removes .source only in ZIP entry names.

To update an example, edit its source snapshot and matching MDX code blocks together. Run `python assets/css/build_archives.py` from the repository root (or use `py` on Windows). Extract archives outside the documentation repository before browser testing. Verify the rendered behaviour, relative paths, focus, forms, media, and applicable preference states. Do not add runtime scripts or global styles to the hub for these examples.

Examples i09 and a09 intentionally start with defective CSS; their separate solution stylesheets demonstrate repairs. The Final portfolio integrates the Advanced stylesheet; its additional requirement is personalised content and complete review evidence. No automatic grading, accounts, API keys, external fonts, or paid tools are required.
