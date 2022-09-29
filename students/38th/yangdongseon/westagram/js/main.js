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
  // icon.className = "imgHeart";
  icon.className = "fa-regular fa-heart";
  icon.style.width = "20px";
  icon.style.height = "20px";
  comment.appendChild(container);
  container.appendChild(div);
  container.appendChild(icon);
  div.innerHTML = `yy_ds ${result}`;
  console.log(result);
  input.value = "";
}
const inputKeyDown = (event) => {
  if (window.event.keyCode === 13) {
    onButtonClick();
  }
};

button.addEventListener("click", onButtonClick);
input.addEventListener("keydown", inputKeyDown);
imgHeart.addEventListener("click", onImgHeartClick);
