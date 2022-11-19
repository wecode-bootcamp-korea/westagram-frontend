const popupBtn = document.getElementById("popupBtn");
const popupSection = document.getElementById("popupSection");

popupBtn.addEventListener("click", function () {
  popupSection.classList.toggle("appear");
});
