let addBtn = document.getElementById("addTask");
let taskList = document.getElementById("taskList");

addBtn.addEventListener("click", function () {
  let task = document.getElementById("todo");
  if (task.value.trim() === "") {
    task.setCustomValidity("Add your task.");
    task.reportValidity();
    return;
  }
  let li = document.createElement("li");
  li.className = "list-group-item";
  li.innerText = task.value;
  taskList.appendChild(li);
  task.value = "";
});
