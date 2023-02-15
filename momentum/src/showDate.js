const date = document.querySelector(".date");
console.log(date);

export function showDate() {
  const options = {
    weekday: "long",
    month: "long",
    day: "numeric",
  };

  const currentDate = new Date().toLocaleDateString("en-En", options);
  // console.log(currentDate);

  date.textContent = currentDate;
}
