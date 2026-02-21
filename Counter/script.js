let increment = document.getElementById("increment");
let reset = document.getElementById("reset");
let decrement = document.getElementById("decrement");
let counter = document.getElementById("counter");

let cnt = 0;

function updateCounter() {
  counter.innerText = `Counter: ${cnt}`;

  counter.classList.remove("bg-success", "bg-primary", "bg-danger");

  if (cnt > 0) {
    counter.classList.add("bg-success");
  } else if (cnt < 0) {
    counter.classList.add("bg-primary");
  } else {
    counter.classList.add("bg-danger");
  }
}
increment.addEventListener("click", function () {
  cnt++;
  updateCounter();
});
decrement.addEventListener("click", function () {
  cnt--;
  updateCounter();
});
reset.addEventListener("click", function () {
  cnt = 0;
  updateCounter();
});
