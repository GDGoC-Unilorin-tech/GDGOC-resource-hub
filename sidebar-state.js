
(() => {
  const storageKey = 'gdgoc-sidebar-state-v2';
  let saved = {};
  try {
    const stored = JSON.parse(sessionStorage.getItem(storageKey) || '{}');
    if (stored && typeof stored === 'object' && !Array.isArray(stored)) saved = stored;
  } catch {}
  let scheduled = false;
  const normalise = value => {
    try { value = decodeURI(value); } catch {}
    return value.replace(/\\/g, '/').replace(/\/+$/, '') || '/';
  };
  const keyFor = button => {
    const names = [];
    for (let node = button.parentElement; node; node = node.parentElement) {
      if (node.matches('li[data-title]')) names.unshift(node.dataset.title);
    }
    return names.join(' / ');
  };
  function reconcile() {
    scheduled = false;
    for (const sidebar of document.querySelectorAll('#sidebar, #mobile-nav-content')) {
      for (const button of sidebar.querySelectorAll('button[aria-expanded]')) {
        const collapsed = saved[keyFor(button)] === false;
        const group = button.closest('li[data-title]');
        if (group) group.classList.toggle('hub-collapsed', collapsed);
        // Presentation only: never replay a click that could navigate to a parent.
        const expanded = String(!collapsed);
        if (button.getAttribute('aria-expanded') !== expanded) button.setAttribute('aria-expanded', expanded);
      }
      for (const link of sidebar.querySelectorAll('a[href]')) {
        const active = normalise(new URL(link.href, location.href).pathname) === normalise(location.pathname);
        link.classList.toggle('hub-active-link', active);
        if (active) {
          if (link.getAttribute('aria-current') !== 'page') link.setAttribute('aria-current', 'page');
        } else if (link.getAttribute('aria-current') === 'page') link.removeAttribute('aria-current');
      }
    }
  }
  function schedule() {
    if (!scheduled) { scheduled = true; requestAnimationFrame(reconcile); }
  }
  document.addEventListener('click', event => {
    const button = event.target.closest?.('#sidebar button[aria-expanded], #mobile-nav-content button[aria-expanded]');
    if (!button) return;
    const group = button.closest('li[data-title]');
    if (!group) return;
    // Group controls only expand/collapse; lesson links perform navigation.
    event.preventDefault();
    event.stopImmediatePropagation();
    saved[keyFor(button)] = saved[keyFor(button)] === false;
    try { sessionStorage.setItem(storageKey, JSON.stringify(saved)); } catch {}
    schedule();
  }, true);
  new MutationObserver(schedule).observe(document.documentElement, {childList: true, subtree: true});
  window.addEventListener('popstate', schedule);
  schedule();
})();
