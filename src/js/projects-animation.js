import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// onScroll
gsap.from(".projects__item", {
  scrollTrigger: {
    trigger: ".projects",
    start: "top center",
    end: "bottom bottm",
    scrub: true,
    // markers: true,
  },
  scale: 0.8,
  transformOrigin: "bottom center",
  stagger: 1,
  duration: 2,
});
