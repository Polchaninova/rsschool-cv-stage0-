import { showTime } from "./showTime";
import { showDate } from "./showDate";
import { showGreeting } from "./showGreeting";
import { setLocalStorage } from "./setLocalStorage";
import { getRandomNum } from "./getRandomNum";

showTime();
setInterval(() => {
  showTime();
}, 1000);

showDate();

showGreeting();

window.addEventListener("beforeunload", setLocalStorage);

getRandomNum();
