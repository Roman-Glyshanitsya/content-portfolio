import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// onScroll
gsap.from(".projects__item", {
  scrollTrigger: {
    trigger: ".projects",
    start: "-7% center",
    end: "bottom bottm",
    scrub: true,
    // markers: true,
  },
  scale: 0.9,
  transformOrigin: "bottom center",
  stagger: 0.7,
  duration: 2,
});

// ================================
const projectsSection = document.querySelector(".projects");

window.addEventListener("scroll", (e) => {
  projectsSection.style.cssText = `--scrollTop: ${scrollY - 1500}px`;
});
