const iconMenu = document.querySelector(`.header_burger`);
const headerMenu = document.querySelector(`.header_menu`);
const overlay = document.querySelector(`.burger-menu_overlay`);

if (iconMenu) {
  iconMenu.addEventListener("click", function (e) {
    document.body.classList.toggle(`lock`);
    iconMenu.classList.toggle(`active`);
    headerMenu.classList.toggle(`active`);
  });
}
overlay.addEventListener("click", () => toggle(`.header_burger.active `));

const menuLinks = document.querySelectorAll(`.header_link`);
if (menuLinks.length > 0) {
  menuLinks.forEach((menuLink) => {
    menuLink.addEventListener(`click`, onMenuLinkClick);
  });
}
function onMenuLinkClick(e) {
  if (iconMenu.classList.contains(`active`)) {
    document.body.classList.remove(`lock`);
    iconMenu.classList.remove(`active`);
    headerMenu.classList.remove(`active`);
  }
}
