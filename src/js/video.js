document.addEventListener("DOMContentLoaded", function () {
  (function initPlayVideo() {
    const videoCover = document.querySelectorAll(".projects__item__img");
    const videoPlayerIframe = document.querySelector(
      ".pojects__item__thumb iframe"
    );

    console.log(videoCover);
    videoCover.forEach((item) => {
      return item.addEventListener("click", function () {
        item.style.display = "none";
        videoPlayerIframe.src += "&autoplay=1";
      });
    });
  })();
});
