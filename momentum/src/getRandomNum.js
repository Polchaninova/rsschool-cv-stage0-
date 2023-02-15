let randomNum;

export function getRandomNum(min, max) {
  min = Math.ceil(1);
  max = Math.floor(20);
  randomNum = getRandomNum;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function setBg() {
  let timeOfDay;
  console.log(timeOfDay);
  let bgNum = getRandomNum(1, 20).toString();
  bgNum.padStart(0, 2);

  document.body.style.backgroundImage =
    "url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/18.jpg')";
}
setBg();
export function getSlideNext() {
  const slideNext = document.querySelector(".slide-next");

  slideNext.addEventListener("click", getSlideNext);
}

export function getSlidePrev() {
  const slidePrev = document.querySelector(".slide-prev");

  slidePrev.addEventListener("click", getSlidePrev);
}
