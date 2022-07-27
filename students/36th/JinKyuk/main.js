const commentInput = document.getElementById("comment-input");
const commentUl = document.getElementById("comment-list");
const uploadButton = document.getElementById("upload-button");

function uploadComment(event) {
  const createLi = document.createElement("li");
  let inputValue = commentInput.value;
  const userId = "wecode bootcamp";
  const keypressOrClick = event.key == "Enter" || event.target == uploadButton;

  if (keypressOrClick && inputValue.length > 0) {
    commentUl.appendChild(createLi);
    createLi.innerText = `${userId} ${inputValue}`;
    commentInput.value = "";
  }
}

commentInput.addEventListener("keypress", uploadComment);
uploadButton.addEventListener("click", uploadComment);
