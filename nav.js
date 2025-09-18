(function () {
  const nav = document.getElementById('site-nav');
  if (!nav) return;

  let lastY = window.scrollY;
  let ticking = false;

  function onScroll() {
    const y = window.scrollY;
    const goingDown = y > lastY;
    const passedHeader = y > 80;

    if (goingDown && passedHeader) {
      nav.classList.add('hide');
    } else {
      nav.classList.remove('hide');
    }
    lastY = y;
    ticking = false;
  }

  window.addEventListener('scroll', function () {
    if (!ticking) {
      window.requestAnimationFrame(onScroll);
      ticking = true;
    }
  }, { passive: true });
})();
