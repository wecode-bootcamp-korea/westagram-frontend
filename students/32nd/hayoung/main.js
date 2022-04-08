const comments = document.querySelector(".comments");
const commentInput = document.querySelector(".comment_input");
const commentForm = document.querySelector(".comment_form");
const commentBtn = document.querySelector(".comment_btn");

function clickInput(e) {
  e.preventDefault();
  if (commentInput.value.length === 0) {
    alert("댓글 입력하시오.");
  } else {
    onsubmitClickBtn(commentInput.value);
  }
}

function onsubmitClickBtn(e) {
  // const commentText = commentInput.value;
  const li = document.createElement("li");
  const commentId = document.createElement("a");
  const comment = document.createElement("span");

  commentId.className = "comment_id";
  commentId.href = "#";
  commentId.innerText = "hayoung1";
  comment.className = "comment_text";
  comment.textContent = commentInput.value;

  li.appendChild(commentId);
  li.appendChild(comment);
  comments.appendChild(li);

  commentInput.value = "";
}

const init = () => {
  commentForm.addEventListener("submit", clickInput);
};
init();
