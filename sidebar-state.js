
(() => {
  // Let Mintlify mount/unmount groups. Remember manual choices and restore
  // them through its native controls (docs.json disables group drilldown).
  const storageKey = 'gdgoc-sidebar-expansion-v3';
  let saved = {};
  try {
    const value = JSON.parse(sessionStorage.getItem(storageKey) || '{}');
    if (value && typeof value === 'object' && !Array.isArray(value)) saved = value;
  } catch {}
  const groupSelector = ':is(#sidebar, #mobile-nav, #mobile-nav-content) li[data-title] > button[aria-expanded]';
  const keyFor = button => {
    const names = [];
    for (let node = button.parentElement; node; node = node.parentElement) {
      if (node.matches('li[data-title]')) names.unshift(node.dataset.title);
    }
    const course = location.pathname.match(/^\/web-development\/frontend\/[^/]+/)?.[0] || 'hub';
    return course + '|' + names.join(' / ');
  };
  const restoring = new WeakSet();
  const pending = new WeakSet();
  let scheduled = false;
  const normalise = value => {
    try { value = decodeURI(value); } catch {}
    return value.replace(/\\/g, '/').replace(/\/+$/, '') || '/';
  };
  function reconcile() {
    scheduled = false;
    for (const button of document.querySelectorAll(groupSelector)) {
      const key = keyFor(button);
      if (typeof saved[key] !== 'boolean' || pending.has(button)) continue;
      if ((button.getAttribute('aria-expanded') === 'true') === saved[key]) continue;
      // Native expansion is required: changing aria-expanded or hiding a list
      // with CSS alone leaves React's actual state and rendered children stale.
      pending.add(button);
      restoring.add(button);
      try { button.click(); } finally { restoring.delete(button); }
      setTimeout(() => {
        pending.delete(button);
        if (button.isConnected) schedule();
      }, 100);
    }
    for (const sidebar of document.querySelectorAll('#sidebar, #mobile-nav, #mobile-nav-content')) {
      for (const group of sidebar.querySelectorAll('.hub-collapsed')) {
        group.classList.remove('hub-collapsed');
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
    const button = event.target.closest?.(groupSelector);
    if (!button || restoring.has(button)) return;
    saved[keyFor(button)] = button.getAttribute('aria-expanded') !== 'true';
    try { sessionStorage.setItem(storageKey, JSON.stringify(saved)); } catch {}
    // Do not preventDefault or stop propagation: Mintlify handles this click.
    schedule();
  }, true);
  new MutationObserver(schedule).observe(document.documentElement, {
    childList: true, subtree: true, attributes: true, attributeFilter: ['aria-expanded']
  });
  window.addEventListener('popstate', schedule);
  schedule();
})();
