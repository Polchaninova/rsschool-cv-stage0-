/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
const time = document.querySelector(".time");
console.log(time);

function showTime() {
  const date = new Date();

  const currentTime = date.toLocaleTimeString();
  console.log(currentTime);

  time.textContent = currentTime;
}

showTime();
setInterval(() => {
  showTime();
}, 1000);

/******/ })()
;
//# sourceMappingURL=bundle.js.map