const name = document.querySelector(".name");
console.log(name);

export function setLocalStorage() {
  localStorage.setItem("name", name.value);
}

function getLocalStorage() {
  if (localStorage.getItem("name")) {
    name.value = localStorage.getItem("name");
    
  }
}
window.addEventListener("load", getLocalStorage);
