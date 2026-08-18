const menu = document.getElementById("menu");
const navLinks = document.getElementById("navLinks");

if (menu && navLinks) {
  menu.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  });
}

const links = document.querySelectorAll("#navLinks a");

links.forEach(function (link) {
  link.addEventListener("click", function () {
    navLinks.classList.remove("active");
  });
});


/* WHATSAPP ORDER BUTTONS */

const orderButtons = document.querySelectorAll(".order-btn");

orderButtons.forEach(function (button) {

  button.addEventListener("click", function () {

    const product = button.getAttribute("data-product");

    const phoneNumber = "2349029108231";

    const message =
      "Hello, I am interested in buying the " +
      product +
      ". Please tell me more.";

    const whatsappURL =
      "https://wa.me/" +
      phoneNumber +
      "?text=" +
      encodeURIComponent(message);

    window.location.href = whatsappURL;

  });

});
