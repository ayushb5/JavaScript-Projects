let alarmTime = null;

document.getElementById("setAlarm").addEventListener("click", function () {
  alarmTime = document.getElementById("alarmTime").value;

  if (alarmTime) {
    let modal = bootstrap.Modal.getInstance(
      document.getElementById("alarmModal"),
    );
    modal.hide();

    alert("Alarm Set for " + alarmTime);
  }
});
setInterval(function () {
  let date = new Date();
  let hrs = String(date.getHours()).padStart(2, "0");
  let mins = String(date.getMinutes()).padStart(2, "0");
  let seconds = String(date.getSeconds()).padStart(2, "0");
  document.getElementById("hrs").innerHTML = hrs;
  document.getElementById("min").innerHTML = mins;
  document.getElementById("seconds").innerHTML = seconds;

  document.getElementById("date").innerHTML = date.getDate();
  document.getElementById("month").innerHTML = date.toLocaleString("en-GB", {
    month: "short",
  });
  document.getElementById("year").innerHTML = date.getFullYear();

  if (alarmTime !== null) {
    let currentTime = hrs + ":" + mins;

    if (currentTime === alarmTime) {
      document.getElementById("alarmSound").play();
      document.getElementById("stopAlarm").classList.remove("d-none");

      alarmTime = null;
    }
  }
}, 1000);

document.getElementById("stopAlarm").addEventListener("click", function () {
  let audio = document.getElementById("alarmSound");

  audio.pause();
  audio.currentTime = 0;

  this.classList.add("d-none");
});
