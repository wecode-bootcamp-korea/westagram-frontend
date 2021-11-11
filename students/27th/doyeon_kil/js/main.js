const theForm = document.getElementById("comment-form");
const userId = "ralo";

let commentId = 1;

const inputClear = () => {
  theForm.getElementsByClassName("comment-input")[0].value = "";
};

const pushComment = () => {
  const message = theForm.getElementsByClassName("comment-input")[0].value;
  commentId += 1;

  const commentContainer = document.getElementsByClassName("comments")[0];
  const newComment = `<div id="comment-${commentId}" class="comment">
  <label> <a class="user-name" href="#">${userId}</a>&nbsp;<span>${message}</span> </label>
  <label>
    <button id="comment-like-button-${commentId}" class="comment-like-button" onclick="commentLikeToggle(this)"><i class="far fa-heart"></i></button>
    <button id="comment-delete-button-${commentId}" class="comment-delete-button" onclick="deleteComment(this)"><i class="fas fa-trash"></i></button>
  </label>
</div>`;

  commentContainer.innerHTML += newComment;
  inputClear();
};

const feedLikeToggle = (e) => {
  e.classList.toggle("liked");
};

const commentLikeToggle = (e) => {
  e.classList.toggle("liked");
};

const deleteComment = (e) => {
  const deleteTarget = e.parentElement.parentElement;

  const deleteConfirm = confirm("댓글을 삭제하시겠습니까?");
  if (deleteConfirm === true) {
    deleteTarget.innerHTML = "";
  }
};
