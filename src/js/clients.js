import Swiper from "swiper";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const swiper = new Swiper(".swiper", {
  modules: [Autoplay],

  loop: true,
  spaceBetween: 30,

  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },

  speed: 1000,
});
