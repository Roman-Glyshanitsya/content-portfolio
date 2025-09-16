import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.from(".service__line", {
  scrollTrigger: {
    trigger: ".services",
    markers: true,
    start: "-10% center",
    end: "-=100px",
    scrub: true,
  },
  x: -500,
  //   opacity: 0,
  //   transformOrigin: "left center",
  ease: "none",
  stagger: 1,
});
