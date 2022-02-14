const commentInput = document.querySelector(".comment");
const commentBtn = document.querySelector(".postButton");
const commentsDiv = document.querySelector(".comments");

function activeBtn() {
  if (commentInput.value) {
    commentBtn.style.color = "#3c99f0";
    commentBtn.style.cursor = "pointer";
  } else {
    commentBtn.style.color = "#c5e1fb";
    commentBtn.style.cursor = "default";
  }
}

function postComment(event) {
  event.preventDefault();
  if (commentInput.value) {
    const newComment = document.createElement("p");
    const userName = document.querySelector(".user").innerText;
    newComment.innerHTML = `<strong>${userName}</strong> ${commentInput.value}`;
    commentsDiv.appendChild(newComment);
    commentInput.value = "";
  }
}

commentInput.addEventListener("input", activeBtn);
commentBtn.addEventListener("click", postComment);
