const comments = document.querySelector(".comments");
const commentInput = document.querySelector(".comment_write");
const commentForm = document.querySelector(".comment_form");

commentForm.addEventListener("submit", onsubmitClickBtn);

function onsubmitClickBtn(e) {
  e.preventDefault();
  const commentText = commentInput.value;
  commentInput.value = "";

  const li = document.createElement("li");
  const commentId = document.createElement("a");
  const comment = document.createElement("span");

  commentId.className = "comment_id";
  commentId.href = "#";
  commentId.innerText = "hayoung1";
  comment.className = "comment_text";
  comment.textContent = commentText;

  li.appendChild(commentId);
  li.appendChild(comment);
  comments.appendChild(li);
}
