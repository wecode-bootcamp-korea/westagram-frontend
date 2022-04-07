//main
const input = document.querySelector(".commentinput");
const ul = document.querySelector(".comment>ul");
const btn = document.querySelector("button");
const comment = document.querySelector(".indiComment");
const currentUser = JSON.parse(window.localStorage.getItem("user"));

let li;

const getValue = function (e) {
  const { value } = e.target;
  const clone = comment.cloneNode(true);
  const div = clone.children[0];
  div.querySelector(".commentName").innerText = currentUser.name;
  div.querySelector(".speak").innerText = value;
  let key = e.key;
  if (key === "Enter") {
    clone.id = currentUser.id;
    clone.classList.add("new");
    ul.appendChild(clone);
    input.value = "";
  }
};

//event
btn.addEventListener("click", () => {
  ul.appendChild(li);
  input.value = "";
});
input.addEventListener("keydown", getValue);
document.addEventListener("click", function (e) {
  if (e.target && e.target.id == "delete") {
    const par = e.target.parentNode;
    const dle = par.nextSibling.parentNode;
    if (currentUser.id === Number(dle.id)) {
      dle.remove();
    }
  }
  if (e.target && e.target.id === "likebtn") {
    const child = e.target.children;
    const heart = child[0];
    const fullHeart = child[1];
    heart.classList.toggle("hidden");
    fullHeart.classList.toggle("hidden");
  }
});
