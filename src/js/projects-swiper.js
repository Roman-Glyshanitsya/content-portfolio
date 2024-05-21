import Swiper from "swiper";

const swiper = new Swiper(".swiper", {
  direction: "vertical",
  loop: false,

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    stopOnLastSlide: true,
  },

  mousewheel: {
    enabled: true,
    invert: false,
    releaseOnEdges: true,
    sensitivity: 1,
    eventsTarget: ".projects__thumb",
  },
});
