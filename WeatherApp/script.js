const apiKey = ""; //Provide your api key by registering to https://home.openweathermap.org/users/sign_up
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const city = document.getElementById("search");
const searchBtn = document.getElementById("searchBtn");
const weatherIcon = document.getElementById("weatherIcon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  var data = await response.json();

  console.log(data);

  document.getElementById("city").innerHTML = data.name;
  document.getElementById("temp").innerHTML = Math.round(data.main.temp) + "°c";
  document.getElementById("humidity").innerHTML = data.main.humidity + "%";
  document.getElementById("wind").innerHTML = data.wind.speed + " km/hr";

  if (data.weather[0].main == "Clouds") {
    weatherIcon.src = "assets/images/clouds.png";
  } else if (data.weather[0].main == "Clear") {
    weatherIcon.src = "assets/images/clear.png";
  } else if (data.weather[0].main == "Rain") {
    weatherIcon.src = "assets/images/rain.png";
  } else if (data.weather[0].main == "Drizzle") {
    weatherIcon.src = "assets/images/drizzle.png";
  } else if (data.weather[0].main == "Mist") {
    weatherIcon.src = "assets/images/mist.png";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(city.value);
  city.value = "";
});
