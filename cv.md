# [rsschool-cv](адрес "https://github.com/Polchaninova/rsschool-cv/branches")

## **Hi I am**

# **Olga Polchaninova**

## **Junior Frontend Developer**

---

## **Contact me:**

- Phone: +38095732014
- E-mail: polchaninovaolha089@gmail.com
- linkedin: [linkedin](адрес "https://www.linkedin.com")

---

## **About me:**

I am currently looking for new opportunities in front-end development. I am open to remote work and a flexible schedule.

I recently completed the "front-end development" course at the "SheCodes" company. I learned a fairly good knowledge base of HTML, CSS, JS and React languages.

Currently, I came to the RS Schools Course «JavaScript/Front-end. Stage 0» to improve my knowledge and get a job in the company EPAM Systems.

---

## **Skills:**

- HTML, Markdown, CSS
- VS Code
- API,GitHub
- Bootstrap,Hosting
- Responsive
- SEO, Flexbox

---

## **Courses:**

- [SheCodes](адрес "https://www.shecodes.io/graduates/46664-olha-polchaninova") course period from July 18, 2022 to 12 December, 2022 (completed)
- RS Schools Course «JavaScript/Front-end. Stage 0» (in progress)

---

## **Code example:**

### _**Project Weather App :** When a user searches for a city (example: Kharkiv), it should display the name of the city on the result page and the current temperature of the city._

```
function search(event) {
  event.preventDefault();
  let cityElement = document.querySelector("#city");
  let cityInput = document.querySelector("#city-input");
  let cityName = cityInput.value;
  cityElement.innerHTML = cityName;
  showWeatherForCity(cityName);
}
function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let city = response.data.name;
  let message = `Today in ${city}`;
  let h1 = document.querySelector("h1");
  h1.innerHTML = message;
  console.log(h1);
  console.log(message);

  let currentTempElement = document.querySelector("#temperature");
  currentTempElement.innerHTML = temperature;
}

function getWeatherForCity(cityName) {
  let apiKey = "b5fdbe7ffc620c1e309259a98257fdc7";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=${units}`;
  return axios.get(apiUrl);
}
```

---

## **Languages:**

- English - A1 (Elementary)
  [English level](адрес "https://training.epam.ua/Inbox#!/Notifications?lang=ua:~:text=was%20set%20as-,A1%20(Elementary).,-You%27ve%20received%20this")
- Ukrainian - Native
- Russian - Intermediate
