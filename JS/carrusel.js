// JS/carrusel.js
document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector(".carousel");
  if (!carousel) return;

  const track = carousel.querySelector(".carousel__track");
  const slides = Array.from(track.children);
  const nextBtn = carousel.querySelector(".carousel__control.next");
  const prevBtn = carousel.querySelector(".carousel__control.prev");
  const dotsNav = carousel.querySelector(".carousel__nav.dots");
  const dots = dotsNav ? Array.from(dotsNav.children) : [];

  let index = 0;
  let timer = null;

  function paintDots() {
    dots.forEach((d, i) => d.classList.toggle("active", i === index));
  }

  function update() {
    track.style.transform = `translateX(-${index * 100}%)`;
    paintDots();
  }

  function next() {
    index = (index + 1) % slides.length;
    update();
  }

  function prev() {
    index = (index - 1 + slides.length) % slides.length;
    update();
  }

  if (nextBtn) nextBtn.addEventListener("click", next);
  if (prevBtn) prevBtn.addEventListener("click", prev);

  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      index = i;
      update();
    });
  });

  function start() { timer = setInterval(next, 5000); }
  function stop() { if (timer) clearInterval(timer); }

  carousel.addEventListener("mouseenter", stop);
  carousel.addEventListener("mouseleave", start);

  update();
  start();
});
