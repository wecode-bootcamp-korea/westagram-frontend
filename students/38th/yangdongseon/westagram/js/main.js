const form = document.querySelector(".main-mid-input-box");
const input = document.querySelector(".comment-input");
const button = document.querySelector(".comment-button");
const comment = document.querySelector(".comment-list");
const imgHeart = document.querySelector(".imgHeart");

function onButtonClick() {
  let result = input.value;
  let container = document.createElement("div");
  container.className = "container";
  let div = document.createElement("div");
  let icon = document.createElement("i");
  icon.className = "fa-regular fa-heart";
  icon.style.width = "30px";
  icon.style.height = "30px";
  comment.appendChild(container);
  container.appendChild(div);
  container.appendChild(icon);
  div.innerHTML = `YYY_ang ${result}`;
  input.focus();
  input.value = "";
  comment.scrollTo(0, comment.scrollHeight);
}
const inputKeyDown = (event) => {
  if (window.event.code === "Enter") {
    onButtonClick();
  }
};

button.addEventListener("click", onButtonClick);
input.addEventListener("keyup", inputKeyDown);
imgHeart.addEventListener("click", onImgHeartClick);
