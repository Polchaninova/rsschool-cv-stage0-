import { showTime } from "./showTime";
import { showDate } from "./showDate";
import { showGreeting } from "./showGreeting";
import { setLocalStorage } from "./setLocalStorage";
import { getRandomNum } from "./getRandomNum";
import { getWeather } from "./getWeather";
import { getQuotes, showQuotes } from "./getQuotes";
import { playAudio } from "./playAudio";
import { renderPlaylist } from "./playList";

getWeather();
showTime();
setInterval(() => {
  showTime();
}, 1000);

showDate();

showGreeting();

window.addEventListener("beforeunload", setLocalStorage);

getRandomNum();

getQuotes();
showQuotes();
renderPlaylist();
// playAudio();
