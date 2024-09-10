// window.addEventListener("load", function () {
//   // hide loader after load page
//   var loader = document.querySelector(".loader");
//   loader.style.display = "none";
// });
import { gsap } from "gsap";

gsap.registerPlugin(TextPlugin);

//replaces yourElement's text with "This is the new text"
gsap.to(yourElement, {
  duration: 2,
  text: {
    value: "Your new text",
    newClass: "class2",
    delimiter: " ",
  },
});

// window.addEventListener("load", function () {
//   // hide loader after load page
//   const loader = document.querySelector(".loader");
//   gsap.to(".loader", {
//     duration: 2,
//     text: "This is the new text",
//     ease: "none",
//   });
//   loader.style.display = "none";
// });
