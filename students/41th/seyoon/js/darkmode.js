const toggle = document.getElementById("toggleDark");
const body = document.querySelector("body");
const main = document.querySelector("main");

toggle.addEventListener("click", function () {
  this.classList.toggle("bi-moon");
  if (this.classList.toggle("bi-brightness-high-fill")) {
    body.style.background = "#fafafa";
    body.style.color = "black";
    body.style.transition = "2s";
    main.style.background = "#fafafa";
    main.style.color = "black";
    main.style.transition = "2s";
  } else {
    body.style.background = "black";
    body.style.color = "#fafafa";
    body.style.transition = "2s";
    main.style.background = "black";
    main.style.color = "#fafafa";
    main.style.transition = "2s";
  }
});
