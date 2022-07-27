const commentInput = document.getElementById("comment-input");
const commentUl = document.getElementById("comment-list");
const uploadButton = document.getElementById("upload-button");
const commentLi = document.getElementById("comment-li");
const commentForm = document.querySelector(".comment-input-wrap");
let newLis = [];

function deleteList(event) {
  const li = event.target.parentElement;
  li.remove();
}

function paintLi(newLi) {
  const li = document.createElement("li");
  li.id = newLi.id;
  const span = document.createElement("span");
  span.innerText = newLi.text;
  const button = document.createElement("button");
  button.id = "submit-button";
  button.innerText = "X";
  button.addEventListener("click", deleteList);
  li.appendChild(span);
  li.appendChild(button);
  commentUl.appendChild(li);
}

function handleLiForm(event) {
  event.preventDefault();
  const newLi = commentInput.value;
  const userId = "WECODE BOOTCAMP";
  commentInput.value = "";

  const newLiObj = {
    text: `${userId} ${newLi}`,
    id: new Date(),
  };

  newLis.push(newLiObj);
  paintLi(newLiObj);
}

commentForm.addEventListener("submit", handleLiForm);
