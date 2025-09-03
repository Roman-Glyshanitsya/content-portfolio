// ES6+: авто-клон треку + динамічна швидкість від ширини контенту
const marquee = document.getElementById("marquee");
const track = document.getElementById("track");

// Клон: щоб створити «нескінченність» без розривів
const clone = track.cloneNode(true);
clone.classList.add("marquee__track--clone");
marquee.appendChild(clone);

// Налаштування швидкості: px за секунду (менше = повільніше)
const SPEED_PX_PER_SEC = 50;

// Функція перерахунку тривалості анімації під реальну ширину
function setDuration() {
  // Загальна ширина одного треку
  const width = track.scrollWidth;
  // Час = шлях / швидкість
  const duration = width / SPEED_PX_PER_SEC;
  document.documentElement.style.setProperty("--duration", `${duration}s`);
}

// Перший розрахунок
setDuration();

// Перерахунок при ресайзі/зміні шрифтів/завантаженні картинок
let resizeRaf;
const recalc = () => {
  cancelAnimationFrame(resizeRaf);
  resizeRaf = requestAnimationFrame(setDuration);
};
window.addEventListener("resize", recalc);
window.addEventListener("load", recalc);

// Коли конкретне зображення дозавантажилось, ширина може змінитись
document.querySelectorAll(".marquee__img").forEach((img) => {
  if (img.complete) return; // уже завантажене
  img.addEventListener("load", recalc, { once: true });
  img.addEventListener("error", recalc, { once: true });
});
