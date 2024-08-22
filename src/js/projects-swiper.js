const swiper = new Swiper(".swiper", {
  loop: false,
  direction: "vertical",
  // spaveBetween: 100,

  slidesPerView: 3,

  scrollbar: {
    el: ".swiper-scrollbar",
  },

  mousewheel: {
    releaseOnEdges: true,
    eventsTarget: ".swiper",
  },

  //   slide effect
  effect: "coverflow",
  coverflowEffect: {
    rotate: 20,
  },
});
