//main
const input = document.querySelector(".commentinput");
const ul = document.querySelector(".comment>ul");
const btn = document.querySelector("button");
let li;

function getValue(e) {
  let { value } = e.target;
  li = document.createElement("li");
  li.innerText = value;
  let key = e.key;
  if (key === "Enter") {
    ul.appendChild(li);
    input.value = "";
  }
}
btn.addEventListener("click", () => {
  ul.appendChild(li);
  input.value = "";
});
input.addEventListener("keydown", getValue);
