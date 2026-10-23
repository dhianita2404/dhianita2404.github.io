// Light/dark theme toggle and mobile menu. The chosen theme is saved in the visitor's browser.
(function () {
  const root = document.documentElement;
  let saved = null;
  try { saved = localStorage.getItem('tema'); } catch (e) {}
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (saved === 'dark' || (!saved && prefersDark)) root.setAttribute('data-theme', 'dark');

  document.addEventListener('DOMContentLoaded', function () {
    const btn = document.getElementById('theme-btn');
    if (btn) {
      const label = () => { btn.textContent = root.getAttribute('data-theme') === 'dark' ? 'Light mode' : 'Dark mode'; };
      label();
      btn.addEventListener('click', function () {
        const dark = root.getAttribute('data-theme') === 'dark';
        if (dark) root.removeAttribute('data-theme'); else root.setAttribute('data-theme', 'dark');
        try { localStorage.setItem('tema', dark ? 'light' : 'dark'); } catch (e) {}
        label();
      });
    }

    // Mobile menu: open/close, and close again after a link is clicked
    const menuBtn = document.getElementById('menu-btn');
    const nav = document.getElementById('nav');
    if (menuBtn && nav) {
      menuBtn.addEventListener('click', function () {
        const open = nav.classList.toggle('open');
        menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
      nav.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
          nav.classList.remove('open');
          menuBtn.setAttribute('aria-expanded', 'false');
        });
      });
    }
  });
})();
