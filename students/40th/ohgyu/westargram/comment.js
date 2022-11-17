const commentBtn = document.getElementById("commentBtn");
const commentInput = document.getElementById("commentInput");
const commentUserName = document.getElementById("commentUserInfo").innerText;
(() => {
  commentBtn.addEventListener("click", function () {
    const commentList = document.getElementById("commentList");
    const comment = document.createElement("li");
    const commentLikeCheck = document.createElement("input");
    commentLikeCheck.setAttribute("type", "checkbox");
    const commentCountSection = document.createElement("span");
    const commentLikeCount = document.createElement("span");
    const commentDeleteBtn = document.createElement("button");
    if (commentInput.value.length > 0) {
      commentList.appendChild(comment);
      comment.innerText = `${commentUserName} ${commentInput.value}`;
      commentList.appendChild(commentLikeCheck);
      commentList.appendChild(commentCountSection);
      commentCountSection.style.display = "inline";
      commentCountSection.appendChild(commentLikeCount);
      commentLikeCount.innerText = `0`;
      commentCountSection.innerText += `좋아요`;
      comment.appendChild(commentDeleteBtn);
      commentDeleteBtn.innerText = "삭제";

      commentInput.value = null;
    }
  });
})();

function commentClose() {
  const commentCheck = document.getElementById("commentOpen");
  const commentSection = document.getElementById("commentSection");
  if (!commentCheck.checked) {
    commentSection.style.display = "none";
  } else commentSection.style.display = "inline-block";
}
/*
commentLike.addEventListener("click", function () {
  if (commentLikeCheck.checked) {
  }
});
*/
