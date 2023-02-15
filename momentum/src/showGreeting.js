const greeting = document.querySelector(".greeting");
console.log(greeting);

export function getTimeOfDay() {
  const date = new Date();
  const hours = date.getHours();
  console.log(hours);
  let greeting;
  if (hours >= 5 && hours < 12) greeting = "morning";
  else if (hours >= 12 && hours < 18) greeting = "afternoon";
  else if (hours >= 18 && hours < 24) greeting = "evening";
  else if (hours >= 0 && hours < 5) greeting = "night)";
  return greeting;
}
export function showGreeting() {
  const timeOfDay = getTimeOfDay();

  const greetingText = `Good ${timeOfDay}`;
  greeting.textContent = greetingText;
}
