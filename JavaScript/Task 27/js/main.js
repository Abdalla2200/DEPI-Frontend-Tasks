const colorCircle = document.querySelector(".color-circle");
const buttons = document.querySelectorAll("button");

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    colorCircle.style.backgroundColor = button.dataset.color;
    colorCircle.style.margin = button.dataset.location;
  });
});
