# React course assets

Source uses .source suffixes for JavaScript, JSX, and CSS to prevent Mintlify global injection. Rebuild with `python assets/react/build_archives.py`. The ZIP excludes node_modules and dist, includes package-lock.json, and supports npm ci. Test with a fresh extraction before publishing a changed archive. Beginner/Intermediate/Advanced are selectable worked stages; README.md maps the components. Keep intentional stage-reset behaviour documented.
