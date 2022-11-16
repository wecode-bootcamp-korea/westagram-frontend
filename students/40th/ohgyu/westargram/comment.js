const commentBtn = document.getElementById("commentBtn");

const commentInput = document.getElementById("commentInput");
console.log(commentInput.value);
const commentUserName = document.getElementById("commentUserInfo").innerText;

commentBtn.addEventListener("click", function () {
  const commentList = document.getElementById("commentList");
  const comment = document.createElement("li");
  if (commentInput.value.length > 0) {
    commentList.appendChild(comment);
    comment.innerText = `${commentUserName} ${commentInput.value}`;
    commentInput.value = null;
  }
});

/*
const commentCheck = document.getElementById("commentOpen");
const commentsection = document.getElementById("commentsection");
function commentClose() {
  if (commentCheck.checked) {
    commentsection.classList.add("close");
  }
}

commentClose();
*/
