const comment = document.getElementById("newComment"); //input
const realComment = document.getElementById("realCommentBox"); //댓글 추가되는 부분

//댓글 추가 함수
function getComment() {
  const commentBox = document.createElement("div");
  const comments = document.createElement("span");
  const userName = document.createElement("span");
  const heartIconBtn = document.createElement("button");

  let heartIcon = document.createElement("img");
  heartIcon.src = "./img/heart.png";

  let deleteBtn = document.createElement("button");
  deleteBtn.innerText = "삭제";
  deleteBtn.classList.add("deleteBtn");
  deleteBtn.id = `${comment.value}`;

  heartIcon.classList.add("heartIcon");
  commentBox.classList.add("commentBox");
  userName.classList.add("userName");
  userName.innerText = "yeonnn";

  heartIconBtn.appendChild(heartIcon);
  realComment.appendChild(commentBox);
  commentBox.appendChild(userName);
  commentBox.appendChild(comments);
  commentBox.appendChild(deleteBtn);
  commentBox.appendChild(heartIcon);

  comments.innerText = comment.value;

  //새 댓글 삭제
  deleteBtn.addEventListener("click", deleteComment);
}

//댓글 삭제 함수
// function deleteComment() {
//   const deleteBtn = document.getElementsByClassName("deleteBtn");
//   const commentBox = document.getElementsByClassName("commentBox");

//   commentBox.remove();
// }

const commentBtn = document.getElementById("commentBtn"); //게시 버튼

//게시 버튼 class CSS
comment.addEventListener("keypress", function () {
  if (comment.v) {
    commentBtn.classList.add(".active");
  }
});

//click 댓글 구현
commentBtn.addEventListener("click", function () {
  if (comment.value) {
    getComment();
    comment.value = null;
  }
});

//enter 댓글 구현
comment.addEventListener("keydown", function (e) {
  if (e.keyCode == 13 && comment.value) {
    getComment();
    comment.value = null;
  }
});

//댓글 삭제
const deleteBtn = document.querySelector(".deleteBtn");

deleteBtn.addEventListener("click", deleteComment);

function deleteComment(event) {
  console.log(event);
  const deleteComment = event.target.parentNode;

  deleteComment.remove();
}
