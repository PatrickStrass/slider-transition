const slider = document.querySelector("#slider");
const before = document.querySelector(".before-image");
const dragger = document.querySelector("#dragger");

slider.addEventListener("input", (e) => {
  before.style.width = e.target.value + "%";
  dragger.style.left = `${e.target.value}%`;
});