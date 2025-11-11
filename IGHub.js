if (window.innerWidth > 768) {
  let scrollTarget = window.scrollY;
  let currentScroll = window.scrollY;

  function smoothScroll() {
    currentScroll += (scrollTarget - currentScroll) * 0.1;
    window.scrollTo(0, currentScroll);
    requestAnimationFrame(smoothScroll);
  }

  window.addEventListener('wheel', (e) => {
    e.preventDefault();
    scrollTarget += e.deltaY;
    scrollTarget = Math.max(0, Math.min(scrollTarget, document.body.scrollHeight - window.innerHeight));
  }, { passive: false });

  smoothScroll();
}
