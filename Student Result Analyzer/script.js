let studName = document.getElementById("studName");
let studRoll = document.getElementById("studRoll");
let mark1 = document.getElementById("mark1");
let mark2 = document.getElementById("mark2");
let mark3 = document.getElementById("mark3");
let studForm = document.getElementById("studForm");
let tbody = document.querySelector("tbody");

// Access button elements
let passedStud = document.getElementById("passedStud");
let classAvg = document.getElementById("classAvg");
let allPass = document.getElementById("allPass");
let anyFailed = document.getElementById("anyFailed");
// result table access elements
let tableBody = document.getElementById("tableBody");
let resultTable = document.getElementById("resultTable");

// Access title for analyzer
let title = document.getElementById("title");

// ---------------------------------------------------
let arr = [];
studForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let students = {
    name: studName.value,
    rollno: studRoll.value,
    mark1: Number(mark1.value),
    mark2: Number(mark2.value),
    mark3: Number(mark3.value),
  };

  arr.push(students);
  tbody.innerHTML = "";
  arr.map((student, i) => {
    tbody.innerHTML += `<tr>
    <td>${i + 1}</td>
    <td>${student.name}</td>
    <td>${student.rollno}</td>
    <td>Physics: ${student.mark1}<br>Chemistry:${student.mark2}<br>Maths:${student.mark3}</td>
    `;
  });

  studName.value = "";
  studRoll.value = "";
  mark1.value = "";
  mark2.value = "";
  mark3.value = "";

  studName.focus();
});

passedStud.addEventListener("click", function () {
  title.innerText = "";

  let students = arr.filter(
    (student) =>
      student.mark1 >= 40 && student.mark2 >= 40 && student.mark3 >= 40,
  );

  if (students.length > 0) {
    resultTable.classList.remove("d-none");
    title.innerText = "Passed Students List";
    tableBody.innerHTML = "";
    students.forEach((stud, i) => {
      tableBody.innerHTML += `<tr>
      <td>${i + 1}</td>
      <td>${stud.name}</td>
      <td>${(((stud.mark1 + stud.mark2 + stud.mark3) / 300) * 100).toFixed(2)}%</td>
      `;
    });
  } else {
    alert("Enter Student details first");
    studName.focus();
  }
});

classAvg.addEventListener("click", function () {
  if (arr.length > 0) {
    let totalMarksofClass = arr.reduce((sum, student) => {
      return sum + student.mark1 + student.mark2 + student.mark3;
    }, 0);

    title.innerText =
      "Class Average : " +
      ((totalMarksofClass / (arr.length * 300)) * 100).toFixed(2) +
      "%";
    resultTable.classList.add("d-none");
  } else {
    alert("Enter Student details first");
    studName.focus();
  }
});

allPass.addEventListener("click", function () {
  if (arr.length > 0) {
    let everyonePassed = arr.every(
      (student) =>
        student.mark1 >= 40 && student.mark2 >= 40 && student.mark3 >= 40,
    );

    if (everyonePassed) {
      title.innerText = "Congratulations! All students passed successfully 🎉";
    } else {
      title.innerText = "At least one student failed ❌";
    }
  } else {
    alert("Enter Student details first");
    studName.focus();
  }

  resultTable.classList.add("d-none");
});

anyFailed.addEventListener("click", function () {
  if (arr.length > 0) {
    let hasFailed = arr.some(
      (student) =>
        student.mark1 < 40 || student.mark2 < 40 || student.mark3 < 40,
    );

    if (hasFailed) {
      title.innerText = "Yes, at least one student failed ❌";
    } else {
      title.innerText = "No student failed 🎉";
    }
  } else {
    alert("Enter Student details first");
    studName.focus();
  }
  resultTable.classList.add("d-none");
});
