const form = document.querySelector(".main-mid-input-box");
const input = document.querySelector(".comment-input");
const button = document.querySelector(".comment-button");
const ul = document.querySelector(".comment-list");

// function onKeyPressForm() {
//   const li = document.createElement("li");
//   const ul = document.querySelector(".comment-list")[0];
//   li.innerText = input.value;
//   ul.appendChild(li);
// }
function onButtonClick() {
  let result = input.value;
  let div = document.createElement("div");
  ul.appendChild(div);
  div.innerHTML = `${result}`;
}

// input.addEventListener("keypress", onKeyPressForm);
button.addEventListener("click", onButtonClick);
