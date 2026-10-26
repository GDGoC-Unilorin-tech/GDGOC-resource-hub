# React review record

Browser/version, viewport/zoom, date, and source commit:

| Action | Expected | Actual | Repair and retest |
| --- | --- | --- | --- |
| Logic tests | All checks pass | Not tested | |
| Save, unsave, saved-only | Accurate count and empty state | Not tested | |
| Query/category/order/reset | Consistent visible results | Not tested | |
| Missing/invalid/empty JSON | Distinct error/empty feedback and retry | Not tested | |
| Fast reload/navigation | No stale result update | Not tested | |
| Direct hash, Back, unknown route | Correct view/title/focus | Not tested | |
| Keyboard and narrow viewport | Controls usable; no lost content | Not tested | |
| Built preview | Same required behaviours | Not tested | |

Also review dark mode, 200%/400% zoom, screen-reader use if available, and literal HTML-like titles. Keep screen-reader and physical-device checks separate from browser emulation. Record cloud release URL/project/commit or Not deployed. Do not copy expected outcomes into Actual without running them.
