//main
const input = document.querySelector(".commentinput");
const ul = document.querySelector(".comment>ul");
const btn = document.querySelector("button");
const all = document.querySelector(".indiComment");
const deleteBtn = document.querySelectorAll("#delete");
let li;
console.log(deleteBtn);

const currentUser = JSON.parse(window.localStorage.getItem("user"));

function getValue(e) {
  let { value } = e.target;
  const clone = all.cloneNode(true);
  clone.children[0].innerText = currentUser.name;
  clone.children[1].innerText = value;
  let key = e.key;
  if (key === "Enter") {
    ul.appendChild(clone);
    clone.id = currentUser.id;
    input.value = "";
  }
}

//event
btn.addEventListener("click", () => {
  ul.appendChild(li);
  input.value = "";
});
input.addEventListener("keydown", getValue);

const check = () => {
  const clone = all.cloneNode(true);
  clone.children[0].innerText = currentUser.name;
  clone.children[1].innerText = "댓글내용";
  console.log(clone);
};
check();
