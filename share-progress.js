
(() => {
  document.addEventListener('click', event => {
    const link = event.target.closest?.('a[data-share-progress]');
    if (!link || event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    const section = link.closest('.progress-share');
    const draft = section?.querySelector('[data-share-draft]')?.textContent.trim();
    const status = section?.querySelector('[data-share-status]');
    if (!draft) return;
    // Keep the normal link working, even if clipboard permission is unavailable.
    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(draft).then(() => {
        if (status) status.textContent = 'Post copied. Paste it into LinkedIn, add your project link, and review before publishing.';
      }).catch(() => {
        if (status) status.textContent = 'Copy the suggested post above, then paste it into LinkedIn.';
      });
    } else if (status) status.textContent = 'Copy the suggested post above, then paste it into LinkedIn.';
  });
})();
