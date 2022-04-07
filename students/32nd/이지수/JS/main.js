const input = document.querySelector(".commentinput");
const ul = document.querySelector(".comment>ul");
const btn = document.querySelector(".submitBtn");
const comment = document.querySelector(".indiComment");
const currentUser = JSON.parse(window.localStorage.getItem("user"));

let clone;
const writeComment = function (e) {
  const value = input.value;
  clone = comment.cloneNode(true);
  const div = clone.children[0];
  div.querySelector(".commentName").innerText = currentUser.name;
  div.querySelector(".speak").innerText = value;
  clone.id = currentUser.id;
  const { key } = e;
  if (key === "Enter") {
    ul.appendChild(clone);
    input.value = "";
  }
};

const clickBtn = function (e) {
  if (e.target && e.target.id == "delete") {
    const btnContainer = e.target.parentNode;
    const deleteComent = btnContainer.parentNode;
    if (currentUser.id === Number(deleteComent.id)) {
      deleteComent.remove();
    }
  }
  if (e.target && e.target.id === "likebtn") {
    const child = e.target.children;
    const heart = child[0];
    const fullHeart = child[1];
    heart.classList.toggle("hidden");
    fullHeart.classList.toggle("hidden");
  }
  if (btn) {
    if (clone) {
      ul.appendChild(clone);
      input.value = "";
    }
  }
};

input.addEventListener("keydown", writeComment);
document.addEventListener("click", clickBtn);
