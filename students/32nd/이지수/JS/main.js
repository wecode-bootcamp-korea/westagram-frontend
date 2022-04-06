//main
const input = document.querySelector(".commentinput");
const ul = document.querySelector(".comment>ul");
const btn = document.querySelector("button");
let li;

const currentUser = JSON.parse(window.localStorage.getItem("test"));

function getValue(e) {
  let { value } = e.target;
  li = document.createElement("li");
  const name = document.createElement("p");
  const content = document.createElement("p");
  li.appendChild(name);
  li.appendChild(content);
  name.innerText = currentUser.name;
  content.innerText = value;
  let key = e.key;
  if (key === "Enter") {
    ul.appendChild(li);
    li.id = currentUser.id;
    input.value = "";
  }
}
btn.addEventListener("click", () => {
  ul.appendChild(li);

  input.value = "";
});
input.addEventListener("keydown", getValue);
