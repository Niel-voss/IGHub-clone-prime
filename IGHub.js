  // Smooth scroll effect
let scrollTarget = window.scrollY;
let currentScroll = window.scrollY;

function smoothScroll() {
  currentScroll += (scrollTarget - currentScroll) * 0.1; // smooth easing
  window.scrollTo(0, currentScroll);
  requestAnimationFrame(smoothScroll);
}

window.addEventListener('wheel', (e) => {
  e.preventDefault(); // stop native scroll
  scrollTarget += e.deltaY; // track scroll direction and speed
  scrollTarget = Math.max(0, Math.min(scrollTarget, document.body.scrollHeight - window.innerHeight)); // keep in range
}, { passive: false });

smoothScroll();

      let lastScrollY = window.scrollY;
const header = document.querySelector('.curved-sides-header');

window.addEventListener('scroll', () => {
  if (window.scrollY < lastScrollY) {
    // scrolling down → show header
    header.classList.remove('hide');
  } else {
    // scrolling up → hide header
    header.classList.add('hide');
  }
  lastScrollY = window.scrollY;
});

      

window.addEventListener("scroll", () => {
  const imgOne = document.querySelector('.scaled-js');
  const speed = 0.1;
  const y = window.scrollY * speed;
  imgOne.style.transform = `translateX(${y}px) scale(${1 + y / 1000})`})


window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const speed = 0.4;

  const gridTop = document.querySelector('.top-grid-js');
  const gridBottom = document.querySelector('.bottom-grid-js');

  // Move top grid right as you scroll down
  gridTop.style.transform = `translateX(${-scrollY * speed}px)`;

  // Move bottom grid left as you scroll down
  gridBottom.style.transform = `translateX(${scrollY * speed}px)`;
});




window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const speed = -0.18;

  const lastLeft = document.querySelector('.last-white-border');
  const lastRight = document.querySelector('.last-image');

  // Move top grid right as you scroll down
  lastLeft.style.transform = `translateX(${-scrollY * speed}px)`;

  // Move bottom grid left as you scroll down
  lastRight.style.transform = `translateX(${scrollY * speed}px)`;
});

document.querySelector('.chike-btn').addEventListener('click', () => {
  http//wame+2348109832570
})