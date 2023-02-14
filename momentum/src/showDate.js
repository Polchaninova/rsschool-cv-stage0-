const date = document.querySelector(".date");
console.log(date);

export function showDate() {
  const options = {
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    timeZone: "UTC",
  };

  const currentDate = new Date().toLocaleDateString("en-En", options);
  console.log(currentDate);

  date.textContent = currentDate;
}
