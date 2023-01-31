const iconMenu = document.querySelector(`.header_burger`);
const headerMenu = document.querySelector(`.header_menu`);
// const overlay = document.querySelector(`.burger-menu_overlay`);

if (iconMenu) {
  iconMenu.addEventListener("click", function (e) {
    document.body.classList.toggle(`lock`);
    iconMenu.classList.toggle(`active`);
    headerMenu.classList.toggle(`active`);
  });
}
// overlay.addEventListener("click", () => toggle(`.header_burger.active `));

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
// accordion
const pricesList = document.querySelectorAll(".prices_list");

pricesList.forEach((item, index) => {
  let headerAccordion = item.querySelector(".header_accordion");
  headerAccordion.addEventListener("click", () => {
    item.classList.toggle("open");

    let accordionDescriptionCard = item.querySelector(
      ".accordion_description_card"
    );
    if (item.classList.contains("open")) {
      accordionDescriptionCard.style.height = `${accordionDescriptionCard.scrollHeight}px`;
      item
        .querySelector("img")
        .classList.replace(".accordion_btn", ".second_btn");
    } else {
      accordionDescriptionCard.style.height = "0px";
      item
        .querySelector("img")
        .classList.replace(".second_btn", ".accordion_btn");
    }
    removeOpen(index);
  });
});
function removeOpen(index1) {
  pricesList.forEach((item2, index2) => {
    if (index1 != index2) {
      item2.classList.remove("open");

      let accordionDescriptionCard = item2.querySelector(
        ".accordion_description_card"
      );

      accordionDescriptionCard.style.height = "0px";
      item2
        .querySelector("img")
        .classList.replace(".second_btn", ".accordion_btn");
    }
  });
}
