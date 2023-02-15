import { showGreeting } from "./showGreeting";
import { showDate } from "./showDate";

const time = document.querySelector(".time");
// console.log(time);

export function showTime() {
  const date = new Date();

  const currentTime = date.toLocaleTimeString();
  // console.log(currentTime);
  time.textContent = currentTime;
  showGreeting();
  showDate();
}
