const commentInput = document.querySelector(".feeds-comment");
const commentBox = document.querySelector(".feeds-new-comment-box");
const newCommentBox = document.querySelector(".feeds-new-comment");
const commentBtn = document.querySelector(".feeds-comment-upload");
const mainRight = document.querySelector(".main-right");

// 댓글 추가 기능 테스트중

function addComment() {
  if (commentInput.value.length != 0) {
    let addedCommentName = document.createElement("span");
    addedCommentName.className = "added-comment-name";
    addedCommentName.innerHTML = "dazezd_z";
    addedCommentName.style.fontWeight = "700";
    let addedCommentContent = document.createElement("span");
    addedCommentContent.className = "added-comment-content";
    addedCommentContent.innerHTML = commentInput.value;
    newCommentBox.appendChild(addedCommentName);
    newCommentBox.appendChild(addedCommentContent);
    commentInput.value = null;
    commentBtn.disabled = false;
  } else {
    commentBtn.disabled = true;
  }
}

commentInput.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    addComment();
  } else {
    commentBtn.addEventListener("click", addComment); // ()붙이지 말 것
  }
});

// // function addComment() {
// //   if (commentInput.value.length != 0) {
// //     let addedComment = document.createElement("div");
// //     addedComment.className = "added-comment";
// //     addedComment.innerHTML = `dazezd_z ${commentInput.value}`;
// //     commentBox.appendChild(addedComment);
// //     commentInput.value = null;
// //     commentBtn.disabled = false;
// //   } else {
// //     commentBtn.disabled = true;
// //   }
// // }
