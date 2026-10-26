# React practice portfolio

Requires Node.js 22.12 or newer and npm. Run `npm ci`, `npm run dev`, then open the printed local URL. Dependencies need network access on first install. Stop the server with Ctrl+C. Run `npm test` for logic checks, `npm run build` for dist/, and `npm run preview` to inspect that production build.

Open Projects and choose Beginner, Intermediate, or Advanced. Beginner.jsx uses local data, state, stable keys, and saved-only filtering. Intermediate in Explorer.jsx owns filters with useState. Advanced owns them with a reducer; both use the shared presentation and request Hook. App.jsx demonstrates hash navigation, history, document titles, and navigation focus. useProjects.js handles validated data and cleanup. logic.test.js tests pure logic, not component rendering.

Stage changes and leaving the Projects view remount examples and reset their local state. No saving survives a reload. There is no authentication, database, message-delivery service, or server rendering. Hash navigation is an educational exercise. A production application may need a routing framework and a different rendering strategy.

Use REVIEW.md to record your own checks. The examples are worked references: personalise the content and attempt lesson challenges before reading solutions. src/ files in this ZIP are runnable; the resource-hub repository stores code with .source suffixes to prevent global injection.

For Firebase Hosting use dist as the public folder and keep its generated index.html. This hash-routed example does not need SPA rewrites. Never deploy the entire source checkout. Use your own project, review a preview, and document whether deployment actually happened.
