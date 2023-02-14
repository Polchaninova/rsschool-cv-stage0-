import { showTime } from "./showTime";
import { showDate } from "./showDate";

showTime();
setInterval(() => {
  showTime();
}, 1000);

showDate();


const greeting = document.querySelector(".greeting");
console.log(greeting);

function getTimeOfDay() {
  const date = new Date();

  const hours = date.getHours();
  console.log(hours);
}
getTimeOfDay();










// const name = document.querySelector(".name");
// console.log(name);
