# Suggested repairs

1. CSS: replace the panel's fixed 900px width with width:100% and max-width:56rem. Check 320px and a wide viewport after reload.
2. JavaScript: convert permitted non-empty numeric values, reject invalid and non-finite inputs, and reject a non-finite sum. The UI catches errors in a status message.
3. Network: correct item.json to items.json. Preserve HTTP and array-of-strings checks, empty feedback, textContent rendering, and the disabled-during-load guard.

Expected UI: 2 + 3 gives Total: 5; negative and decimal cases work; an empty input gives an error. Three learning items load. [] gives No items yet. Invalid data and missing resources give errors; restoring data and pressing Reload recovers. Tests show 9 passed, 0 failed. These are expected outcomes; record your own observations.

Commit and release histories are not included: create your own history and evidence. This example is a local lab, not a deployed service or an automatically assessed submission.
