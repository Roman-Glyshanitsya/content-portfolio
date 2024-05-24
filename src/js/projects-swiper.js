import Swiper from "swiper";

const swiper = new Swiper(".swiper", {
  loop: false,

  // autoplay: {
  //   delay: 2000,
  //   disableOnInteraction: false,
  //   stopOnLastSlide: true,
  // },

  mousewheel: {
    invert: false,
    releaseOnEdges: true,
    eventsTarget: ".projects",
  },
});
