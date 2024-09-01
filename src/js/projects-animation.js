import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// onScroll
// gsap.from(".projects__item", {
//   scrollTrigger: {
//     trigger: ".projects",
//     start: "-7% center",
//     end: "bottom bottom",
//     scrub: true,
//     markers: true,
//   },
//   scale: 0.9,
//   transformOrigin: "bottom center",
//   stagger: 0.7,
//   duration: 2,
// });

// img parallax ================================
// const projectsSection = document.querySelector(".projects");

// window.addEventListener("scroll", (e) => {
//   projectsSection.style.cssText = `--scrollTop: ${scrollY - 1500}px`;
// });
gsap.to(".projects__up", {
  scrollTrigger: {
    trigger: ".projects",
    scrub: true,
  },
  yPercent: -20,
  stagger: 0.7,
});

gsap.to(".projects__down", {
  scrollTrigger: {
    trigger: ".projects",
    scrub: true,
  },
  yPercent: 60,
  stagger: 0.7,
});
