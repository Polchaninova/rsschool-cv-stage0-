import { getTimeOfDay } from "./showGreeting";

let randomNum = getRandomNum(2, "0").toString();

export function getRandomNum(min, max) {
  min = Math.ceil(1);
  max = Math.floor(20);

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function setBg(randomNum) {
  const img = new Image();

  const randomNumString = randomNum.toString().padStart(2, "0");
  const url = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${getTimeOfDay()}/${randomNumString}.jpg`;

  img.src = url;
  img.onload = () => {
    console.log(url);
    document.body.style.backgroundImage = `url("${url}")`;
  };
}
setBg(randomNum);

const slidePrev = document.querySelector(".slide-prev");
slidePrev.addEventListener("click", getSlidePrev);

function getSlidePrev() {
  randomNum = +randomNum - 1;
  if (randomNum === 0) {
    randomNum = 20;
  }
  setBg(randomNum);
}
const slideNext = document.querySelector(".slide-next");
slideNext.addEventListener("click", getSlideNext);

function getSlideNext() {
  randomNum = +randomNum + 1;
  if (randomNum === 21) {
    randomNum = 1;
  }
  setBg(randomNum);
}
