// window.addEventListener("load", function () {
//   // hide loader after load page
//   var loader = document.querySelector(".loader");
//   loader.style.display = "none";
// });
import { gsap } from "gsap";

// gsap.registerPlugin(TextPlugin);

let letters = ["B", "A", "Z", "A", "L", "E", "V", "S", "K", "I", "Y"];
let title = document.querySelector(".loader__title");
let animation = gsap.timeline({ repeat: 1, repeatDelay: 0.1 });

function createLayers() {
  letters.forEach((value) => {
    let layer = document.createElement("div");
    layer.innerHTML = value;
    title.appendChild(layer);
  });
}

function animateText() {
  let layers = document.querySelectorAll(".loader__title div");
  layers.forEach(function (element, index) {
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
        // repeatDelay: 0.6,
      }
    );
  });
  gsap.set(".loader__title", {
    visibility: "visible",
  });
}

createLayers();
animateText();

window.addEventListener("animationend", function () {
  // hide loader after load page
  const loader = document.querySelector(".loader");
  loader.style.display = "none";
});
