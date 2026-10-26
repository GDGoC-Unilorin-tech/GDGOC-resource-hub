# Workflow practice verification

Checked on 22 October 2026 on `feat/frontend-workflow`.

- Mintlify configuration schema passes. All 204 registered page paths exist without duplicates.
- All 21 workflow pages compile as MDX; 60 internal links resolve, and the sequential Previous/Next links agree with the Tools sidebar.
- All nine topic lessons include objectives, prerequisites, explanation, worked example, practice, hints, separate suggested solution, and completion checklist.
- New external learning references are on the further-learning page and use Google-affiliated domains.
- The extracted practice pack was run with its supplied Node server in Chrome and Edge. Starter overflow, concatenation, and missing-data failures reproduced. The solution passed its nine logic assertions and UI checks for normal/negative/decimal/empty calculation inputs, 320/768/1440px layouts, keyboard focus, empty/invalid/missing data, and reload recovery. The server rejected a request outside its selected directory.
- The mobile solution screenshot was visually inspected. Source files retain `.source` suffixes to prevent global Mintlify execution.

Limits: Chrome and Edge both use Chromium. This is not a full accessibility review. GitHub account authentication, a real pull request, Firebase provisioning/deployment, and the complete Mintlify browser preview were not exercised. The lesson templates deliberately leave results blank for learners to record. No remote repository or hosting project was changed.

Maintenance: regenerate the ZIP with `python assets/workflow/build_archives.py`, extract it, and follow README.md. Run tests.html through the supplied server for both starter and solution, preserving intentional starter failures. Repeat UI and course-link checks after changes.
