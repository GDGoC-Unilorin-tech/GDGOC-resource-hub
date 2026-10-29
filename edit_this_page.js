// Adds a floating "Edit this page" link to every Mintlify page.
// Put this file in the docs root, next to docs.json. Mintlify loads it on every page.
(function () {
  // Set this to where the backend is hosted (no trailing slash).
  var FORM_URL = "https://gdgocresourcehubeditor.vercel.app";
  var LINK_ID = "edit-this-page-link";

  function pagePath() {
    var p = decodeURIComponent(location.pathname).replace(/^\/+|\/+$/g, "");
    return p || "index"; // site root maps to index.mdx
  }

  function render() {
    var href = FORM_URL + "/?page=" + encodeURIComponent(pagePath());
    var link = document.getElementById(LINK_ID);

    if (!link) {
      link = document.createElement("a");
      link.id = LINK_ID;
      link.textContent = "Edit this page";
      link.target = "_blank";
      link.rel = "noopener";
      link.style.cssText = [
        "position:fixed",
        "right:20px",
        "bottom:20px",
        "z-index:50",
        "padding:10px 16px",
        "border-radius:8px",
        "background:#1a6ef0",
        "color:#fff",
        "font:600 14px/1 system-ui,-apple-system,sans-serif",
        "text-decoration:none",
        "box-shadow:0 2px 8px rgba(0,0,0,.25)",
      ].join(";");
      document.body.appendChild(link);
    }

    if (link.href !== href) link.href = href;
  }

  // Mintlify is a single-page app: update the link when the route changes.
  var timer;
  function schedule() {
    clearTimeout(timer);
    timer = setTimeout(render, 100);
  }

  ["pushState", "replaceState"].forEach(function (fn) {
    var orig = history[fn];
    history[fn] = function () {
      var out = orig.apply(this, arguments);
      schedule();
      return out;
    };
  });
  window.addEventListener("popstate", schedule);
  new MutationObserver(schedule).observe(document.body, { childList: true, subtree: true });

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", render);
  } else {
    render();
  }
})();
