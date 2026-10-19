# Project review record

Record the browser, date, setup, input, expected result, actual result, and any repair.

- All/Web/Design filters: 3/2/1 results with the supplied data.
- Keyboard: Tab reaches controls; Enter/Space operate buttons; focus stays visible.
- Search (Intermediate+): a mixed-case title matches; missing text produces an empty message.
- Storage (Intermediate+): category survives refresh; invalid/blocked storage does not break filtering.
- Data (Intermediate+): [] gives an empty state; missing file, invalid JSON, and [null] show failure; restoring the file and reloading recovers.
- Rapid reload (Advanced+): only the newest request may update the interface.
- Safe text: a title containing <b> remains text and creates no b element.
- Tests (Advanced+): tests.html reports 10 checks passed; deliberately break filtering and confirm a failure before restoring it.
- Final: title ordering changes display without mutating source order; Reset restores blank query, All, and Original order.

Known limitations: local demo only; no accounts, backend, analytics, or automatic grading. Preferences are browser-local. Automated checks do not establish complete accessibility. The fixture is small and is not a large-data performance benchmark.
