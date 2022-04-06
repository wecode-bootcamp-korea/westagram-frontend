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
  clone.children[0].innerText = currentUser.name;
  clone.children[1].innerText = value;
  let key = e.key;
  if (key === "Enter") {
    clone.id = currentUser.id;
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
