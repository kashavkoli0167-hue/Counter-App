let count = 0;
const countBtn = document.getElementById("count");
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");

increase.addEventListener("click", () => {
  count++;
  countBtn.textContent = count;
  updateColor();
});

decrease.addEventListener("click", () => {
  count--;
  countBtn.textContent = count;
  updateColor();
});

reset.addEventListener("click", () => {
  countBtn.textContent = "0";
  count = 0;
  updateColor();
});

function updateColor() {
  if (count < 0) {
    countBtn.style.color = "red";
  } else {
    countBtn.style.color = "greenyellow";
  }
}
