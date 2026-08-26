(function () {
  function getBarHeight() {
    var bar = document.querySelector('[class*="announcementBar"]');
    if (!bar) return 0;
    return bar.getBoundingClientRect().height;
  }

  function update() {
    var barHeight = getBarHeight();
    var scrolledPast = window.scrollY > barHeight;
    var barGone = barHeight === 0;

    // Set the CSS variable so the navbar knows how far down to sit
    document.documentElement.style.setProperty('--bar-height', barHeight + 'px');

    if (scrolledPast || barGone) {
      document.body.setAttribute('data-bar-hidden', 'true');
    } else {
      document.body.removeAttribute('data-bar-hidden');
    }
  }

  window.addEventListener('scroll', update, { passive: true });

  new MutationObserver(update).observe(document.body, {
    childList: true,
    subtree: true,
    attributeFilter: ['style', 'class'],
  });

  window.addEventListener('popstate', update);

  document.addEventListener('docusaurus.routeUpdate', function () {
    setTimeout(update, 50);
  });

  function init() {
    update();
    // Re-run once fonts/layout settle
    setTimeout(update, 200);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
