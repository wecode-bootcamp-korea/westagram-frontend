const Input = document.querySelector(".comment-input")[0];
const button = document.querySelector(".comment-button")[0];

function onKeyPressInput() {
  const addInputLi = document.createElement("li");
  const addInputUl = document.querySelector(".comment-list")[0];
  const inputValue = Input.value;
  if (inputValue.length > 0) {
    ul.appendChild(addInputLi);
    return button;
  }
}

Input.addEventListener("keypress", onKeyPressInput);
button.addEventListener("click", onButtonClick);
