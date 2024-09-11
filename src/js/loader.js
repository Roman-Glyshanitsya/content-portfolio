import { gsap } from "gsap";

let letters = ["B", "A", "Z", "A", "L", "E", "V", "S", "K", "I", "Y"];
let title = document.querySelector(".loader__title");
let animation = gsap.timeline({
  repeatDelay: 0.1,
  onComplete: hideLoader,
});

function createLayers() {
  letters.forEach((value) => {
    let layer = document.createElement("div");
    layer.innerHTML = value;
    title.appendChild(layer);
  });
}

function animateText() {
  let layers = document.querySelectorAll(".loader__title div");
  layers.forEach(function (element) {
    animation.fromTo(
      element,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        repeat: 1,
        yoyo: true,
        yoyoEase: true,
        duration: 0.1,
        // repeatDelay: 0.9,
      }
    );
  });
  gsap.set(".loader__title", {
    visibility: "visible",
  });
}

function hideLoader() {
  const loader = document.querySelector(".loader");
  loader.style.display = "none";
}

createLayers();
animateText();
