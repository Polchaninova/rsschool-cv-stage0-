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

let selectContainer = document.querySelector(".select-container");
let select = document.querySelector(".select");
let input = document.getElementById("input");
let options = document.querySelectorAll(".select-container .option");
let optionContainer = document.querySelectorAll(".option_container");

//

let optionCardAddresses = [
  {
    City: "Canandaigua, NY",
    Phone: "+1	585	393 0001",
    OfficeAddress: "151 Charlotte Street",
    label_btn: "Call us",
  },
  {
    City: "New York City",
    Phone: "+1	212	456 0002",
    OfficeAddress: "9 East 91st Street",
    label_btn: "Call us",
  },
  {
    City: "Yonkers, NY",
    Phone: "+1	914	678 0003",
    OfficeAddress: "511 Warburton Ave",
    label_btn: "Call us",
  },
  {
    City: "Sherrill, NY",
    Phone: "+1	315	908 0004",
    OfficeAddress: "14 WEST Noyes BLVD",
    label_btn: "Call us",
  },
];

select.onclick = () => {
  selectContainer.classList.toggle("active");
};

options.forEach((e) => {
  e.addEventListener("click", () => {
    const cityName = e.innerText;
    input.value = cityName;
    selectContainer.classList.remove("active");
    options.forEach((e) => {
      e.classList.remove("selected");
    });
    e.classList.add("selected");
    showCardForCityName(cityName);
  });

  function toggleOption() {
    optionContainer.classList.toggle("is_hidden");
  }
});

function showCardForCityName(cityName) {
  const cityInfo = optionCardAddresses.find((city) => city.City === cityName);
  console.log(cityInfo);
  const card = document.querySelector(".option_card");
  card.querySelector(".span_card_adress").textContent = cityInfo.City;
  card.querySelector(".span_card_phone").textContent = cityInfo.Phone;
  card.querySelector(".span_office_address").textContent =
    cityInfo.OfficeAddress;
}
