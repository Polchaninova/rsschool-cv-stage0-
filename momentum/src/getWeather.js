const weatherContainer = document.querySelector(".weather");
const weatherIcon = document.querySelector(".weather-icon");
const temperature = document.querySelector(".temperature");
const weatherDescription = document.querySelector(".weather-description");
const wind = document.querySelector(".wind");
const humidity = document.querySelector(".humidity");
let appid = `12b765e58ad1df7247a7dd8bf64421e7`;
let units = "metric";

let city = document.querySelector(".city");
let cityName =
  localStorage.getItem("cityNameNew") !== null
    ? `${localStorage.getItem("cityNameNew")}`
    : "Kharkiv";
city.placeholder = "Kharkiv";
//
city.addEventListener("change", () => {
  cityName = city.value;
  weatherContainer.classList.toggle("weather_enter");
  getWeather();
});
//
export async function getWeather() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${appid}&units=${units}`;
  const res = await fetch(url);
  const data = await res.json();
  console.log(data.weather[0].id, data.weather[0].description, data.main.temp);

  weatherIcon.classList.add(`owf-${data.weather[0].id}`);
  temperature.textContent = `${Math.round(data.main.temp)}°C`;
  weatherDescription.textContent = data.weather[0].description;

  wind.textContent = `Wind speed: ${Math.round(data.wind.speed)}
   m/s`;
  humidity.textContent = `Humidity: ${Math.round(data.main.humidity)}%`;
}

//  `https://api.openweathermap.org/data/2.5/weather?lat=50&lon=36.23&appid=12b765e58ad1df7247a7dd8bf64421e7&units=metric`;
// const weatherError = document.querySelector(".weather-error");
