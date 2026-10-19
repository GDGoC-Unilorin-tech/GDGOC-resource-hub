# JavaScript final worked project

Attempt the hub project before comparing this implementation. This code is a standalone teaching example; copy its behaviour into a separate branch of your own portfolio once you understand it.

Extract the ZIP completely. For Beginner, index.html can open directly. For every level, the recommended setup is an editor's local HTTP preview server. With Python installed, open a terminal in this extracted folder and run:

    py -m http.server 8000 --bind 127.0.0.1

On macOS/Linux use python3 instead of py. Open http://localhost:8000 and stop the server with Ctrl+C. No packages, API keys, cloud billing, or accounts are required. Use only a practice folder for the server.

For Advanced/Final, also open tests.html through the server. See REVIEW.md for manual checks. Keep source files and your own review evidence.

File roles: index.html defines controls and content; app.js wires events and rendering; style.css supplies minimal presentation. Intermediate and later load projects.json. Advanced/Final separate pure logic and storage into modules and include a test page.

Missing file failure exercise: temporarily rename projects.json, activate Reload projects, then restore it and retry. Back up the fixture before editing it. To test empty or malformed data, replace its contents temporarily and restore them afterward.
