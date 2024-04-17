const projectsSection = document.querySelector(".projects");

window.addEventListener("scroll", (e) => {
  projectsSection.style.cssText = `--scrollTop: ${scrollY - 1500}px`;
});
