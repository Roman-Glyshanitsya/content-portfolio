document.addEventListener("DOMContentLoaded", function () {
  (function initPlayVideo() {
    var videoCover = document.querySelector(".projects__item__img");
    var videoPlayerIframe = document.querySelector(
      ".pojects__item__thumb iframe"
    );

    videoCover.addEventListener("click", function () {
      videoCover.style.display = "none";
      videoPlayerIframe.src += "&autoplay=1";
    });
  })();
});
