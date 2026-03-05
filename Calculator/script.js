document.querySelectorAll(".btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    let textBox = document.getElementById("inputVal");
    let value = textBox.value;
    let allClear = btn.innerText === "AC";
    let backSpace = btn.dataset.value === "backSpace";
    let resultBox = document.getElementById("result");

    if (!allClear && !backSpace && !(btn.innerText == "=")) {
      if (value.length > 15) return;
      textBox.classList.add("fw-bold");
      resultBox.classList.add("fw-normal");
      resultBox.classList.remove("fw-bold");

      if (btn.innerText == ".") {
        let lastOperator = Math.max(
          value.lastIndexOf("+"),
          value.lastIndexOf("-"),
          value.lastIndexOf("*"),
          value.lastIndexOf("/"),
        );
        let lastNumber = value.substring(lastOperator + 1);
        if (lastNumber.includes(".")) return;
      }
      textBox.value = value + btn.innerText;
    } else if (allClear) {
      textBox.value = "";
      resultBox.value = "";
    } else if (backSpace) {
      if (value.length > 0) {
        textBox.value = value.slice(0, -1);
      }
    }
    if (btn.innerText === "=") {
      let result = eval(textBox.value);

      resultBox.innerText = result;
      textBox.value = result;

      resultBox.classList.add("fw-bold");
      textBox.classList.remove("fw-bold");
    }

    updateResult();
  });
});
document.getElementById("inputVal").addEventListener("input", updateResult);
function updateResult() {
  let expression = document.getElementById("inputVal").value;
  let resultBox = document.getElementById("result");

  try {
    if (expression !== "") {
      let result = eval(expression);
      resultBox.innerText = Number(result).toLocaleString("en-IN");
    } else {
      resultBox.innerText = "";
    }
  } catch {
    resultBox.innerText = "";
  }
}

document.getElementById("inputVal").addEventListener("keydown", (e) => {
  let allowed = "0123456789+-*/.";

  if (
    !allowed.includes(e.key) &&
    e.key !== "Backspace" &&
    e.key !== "Delete" &&
    e.key !== "ArrowLeft" &&
    e.key !== "ArrowRight" &&
    e.key !== "Tab"
  ) {
    e.preventDefault();
  }
});
