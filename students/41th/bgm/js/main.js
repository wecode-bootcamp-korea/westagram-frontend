const comentInput = document.querySelector(".comentInput");
const comentBtn = document.querySelector(".comentBtn");
const comentList = document.querySelector(".comentsList");

function list() {
  const li = document.createElement("li");
  const spanName = document.createElement("span");
  const spanText = document.createElement("span");
  const img = document.createElement("img");

  spanText.innerText = comentInput.value;
  spanName.innerText = "junhn";
  spanName.setAttribute("style", "font-weight: bold");
  img.setAttribute("src", "./js/img/heart.png");

  li.appendChild(spanName);
  li.appendChild(spanText);
  li.appendChild(img);

  comentList.appendChild(li);

  comentInput.value = "";
}

comentBtn.addEventListener("click", function () {
  list();
});

comentInput.addEventListener("keypress", function (e) {
  if (e.keycode === 13) {
    list();
  }
});
