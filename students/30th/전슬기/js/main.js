const commentInput = document.querySelector(".comment");
const commentBtn = document.querySelector(".postButton");
const commentsDiv = document.querySelector(".comments");

function postComment(event) {
  event.preventDefault();
  const newComment = document.createElement("p");
  newComment.innerHTML = commentInput.value;
  commentsDiv.appendChild(newComment);
  commentInput.value = "";
}

commentBtn.addEventListener("click", postComment);
