const swiper = new Swiper(".swiper", {
  loop: false,
  direction: "vertical",
  // spaveBetween: 100,

  slidesPerView: 3,

  // If we need pagination
  //   pagination: {
  //     el: ".swiper-pagination",
  //   },

  scrollbar: {
    el: ".swiper-scrollbar",
  },

  keyboard: {
    enabled: true,
  },

  // And if we need scrollbar
  //   scrollbar: {
  //     el: ".swiper-scrollbar",
  //   },

  mousewheel: {
    releaseOnEdges: true,
    // enabled: true,
    eventsTarget: ".swiper",
  },

  //   slide effect
  effect: "coverflow",
  coverflowEffect: {
    rotate: 20,
  },
});
