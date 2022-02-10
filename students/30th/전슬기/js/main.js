const commentInput = document.querySelector(".comment");
const commentBtn = document.querySelector(".postButton");
const commentsDiv = document.querySelector(".comments");

function postComment(event) {
  event.preventDefault();
  const newComment = document.createElement("p");
  const userName = document.querySelector(".user").innerHTML;
  newComment.innerHTML = `<strong>${userName}</strong> ${commentInput.value}`;
  commentsDiv.appendChild(newComment);
  commentInput.value = "";
}

commentBtn.addEventListener("click", postComment);
