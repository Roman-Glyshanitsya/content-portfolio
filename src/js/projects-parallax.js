const projectsSection = document.querySelector(".projects");

window.addEventListener("scroll", (e) => {
  projectsSection.style.cssText = `--scrollTop: ${scrollY - 1000}px`;
});
