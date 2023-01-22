const { height: HeaderBodyHeight } = document
  .querySelector(" .header_body")
  .getBoundingClientRect();
document.body.style.paddingTop = `${HeaderBodyHeight}px`;

$("DOCTYPE").ready(function () {
  $(".header_burger").click(function (event) {
    $(".header_burger,.header_menu").toggleClass("active");
    $("body").toggleClass("lock");
  });
});
