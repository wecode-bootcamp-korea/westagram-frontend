const popupBtn = document.getElementById("popupBtn");
const popupSection = document.getElementById("popupSection");

popupBtn.addEventListener("click", function () {
  popupSection.classList.toggle("appear");
});
/*
function windowRemove() {
  if (popupSection.classList.value === "appear") {
    console.log("appear");
    //popupSection.classList.remove("appear");
  }
}

window.addEventListener("click", function () {
  windowRemove();
});
*/
