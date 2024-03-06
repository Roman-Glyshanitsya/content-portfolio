// const heroSection = document.querySelector(".hero");
// const servicesSection = document.querySelector(".services");
const projectsList = document.querySelector(".projects");

window.addEventListener("scroll", (e) => {
  //   const scrollYFromSection =
  //     window.screenY - (heroSection.offsetHeight + servicesSection.offsetHeight);
  projectsList.style.cssText = `--scrollTop: ${scrollY - 1500}px`;
});
