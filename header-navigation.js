(() => {
  // Enhance native Mintlify tabs without replacing links or routing handlers.
  const mounted = new Map();
  let scheduled = false;
  const reducedMotion = () => matchMedia('(prefers-reduced-motion: reduce)').matches;

  function mount(bar) {
    const host = bar.parentElement;
    if (!host || mounted.has(bar)) return;
    host.classList.add('hub-technology-row');
    bar.classList.add('hub-technology-scroll');
    bar.setAttribute('role', 'navigation');
    bar.setAttribute('aria-label', 'Technologies and learning areas');
    if (!bar.id) bar.id = 'hub-technology-tabs';
    const controls = [-1, 1].map(direction => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'hub-scroll-arrow ' + (direction < 0 ? 'hub-scroll-left' : 'hub-scroll-right');
      button.textContent = direction < 0 ? '‹' : '›';
      button.setAttribute('aria-label', direction < 0 ? 'Scroll technologies left' : 'Scroll technologies right');
      button.setAttribute('aria-controls', bar.id);
      button.addEventListener('click', () => bar.scrollBy({
        left: direction * Math.max(160, bar.clientWidth * 0.65),
        behavior: reducedMotion() ? 'instant' : 'smooth'
      }));
      host.append(button);
      return button;
    });
    function update() {
      const overflow = bar.scrollWidth > bar.clientWidth + 2;
      host.classList.toggle('hub-technology-overflow', overflow);
      controls.forEach(button => { button.hidden = !overflow; });
      // Keep controls focusable at an edge so keyboard focus is not lost.
      controls[0].setAttribute('aria-disabled', String(bar.scrollLeft <= 1));
      controls[1].setAttribute('aria-disabled', String(bar.scrollLeft + bar.clientWidth >= bar.scrollWidth - 2));
    }
    function reveal(event) {
      const link = event.target.closest?.('a');
      if (!link || !bar.contains(link)) return;
      const rect = link.getBoundingClientRect();
      const viewport = bar.getBoundingClientRect();
      if (rect.left < viewport.left) bar.scrollBy({left: rect.left - viewport.left - 8});
      else if (rect.right > viewport.right) bar.scrollBy({left: rect.right - viewport.right + 8});
    }
    bar.addEventListener('scroll', update, {passive: true});
    bar.addEventListener('focusin', reveal);
    const resize = new ResizeObserver(() => {
      update();
      reveal({target: document.activeElement});
    });
    resize.observe(bar);
    let lastPath;
    const state = {update() {
      update();
      if (lastPath !== location.pathname) {
        lastPath = location.pathname;
        const active = bar.querySelector('a[data-active="true"], a[aria-current="location"]');
        if (active) reveal({target: active});
      }
    }, cleanup() {
      resize.disconnect();
      bar.removeEventListener('scroll', update);
      bar.removeEventListener('focusin', reveal);
      controls.forEach(button => button.remove());
      host.classList.remove('hub-technology-row', 'hub-technology-overflow');
    }};
    mounted.set(bar, state);
    state.update();
  }

  function reconcile() {
    scheduled = false;
    const search = document.querySelector('#search-bar-entry');
    const searchWrapper = search?.parentElement;
    const row = searchWrapper?.parentElement;
    if (row) {
      row.classList.add('hub-top-row');
      searchWrapper.classList.add('hub-search-container');
      for (const child of row.children) {
        if (child.querySelector('nav[aria-label="Main"]')) {
          child.classList.add('hub-category-container');
          child.querySelector('nav[aria-label="Main"]').parentElement.classList.add('hub-category-nav');
        }
      }
    }
    for (const [bar, state] of mounted) {
      if (!bar.isConnected) { state.cleanup(); mounted.delete(bar); }
      else state.update();
    }
    document.querySelectorAll('#navbar .nav-tabs').forEach(mount);
  }
  function schedule() {
    if (!scheduled) { scheduled = true; requestAnimationFrame(reconcile); }
  }
  // Child changes cover client-side navigation and header remounts. Attribute
  // changes are deliberately excluded to avoid reacting to our own updates.
  new MutationObserver(schedule).observe(document.documentElement, {childList: true, subtree: true});
  window.addEventListener('popstate', schedule);
  schedule();
})();
