const commentInput = document.getElementById("comment-input");
const commentUl = document.getElementById("comment-list");
const uploadButton = document.getElementById("upload-button");
const commentLi = document.getElementById("comment-li");
const commentForm = document.querySelector(".comment-input-wrap");
let newLis = [];

function deleteLi(event) {
  const li = event.target.parentElement;
  li.remove();
}

function likeLi(event) {
  const button = event.target;
  button.innerText = "❤";
  button.style.cssText = "color: red; font-size: 14px;";
}

function paintLi(newLi) {
  const li = document.createElement("li");
  li.id = newLi.id;
  const span = document.createElement("span");
  span.innerText = newLi.text;
  const deleteButton = document.createElement("button");
  deleteButton.id = "delete-button";
  deleteButton.innerText = "X";
  deleteButton.addEventListener("click", deleteLi);
  const likeButton = document.createElement("button");
  likeButton.id = "like-button";
  likeButton.innerText = "🤍";
  likeButton.addEventListener("click", likeLi);

  li.appendChild(span);
  li.appendChild(deleteButton);
  li.appendChild(likeButton);
  commentUl.appendChild(li);
}

function handleLiForm(event) {
  event.preventDefault();
  const newLi = commentInput.value;
  const userId = "WECODE BOOTCAMP";
  commentInput.value = "";

  const newLiObj = {
    text: `${userId} ${newLi}`,
    id: new Date().getMinutes(),
  };

  newLis.push(newLiObj);
  paintLi(newLiObj);
}

commentForm.addEventListener("submit", handleLiForm);
