const heroSection = document.querySelector(".hero");

window.addEventListener("scroll", (e) => {
  heroSection.style.cssText = `--scrollTop: ${scrollY}px`;
});
