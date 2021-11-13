const commentButton = document.querySelector("#sumit");
const commentInput = document.querySelector("#commentInput");
const commnetLists = document.querySelector("#commentLists");
function validateCommnet() {
  const commentInput = document.querySelector("#commentInput");
  const commentValue = commentInput.value;

  return commentValue.length > 0;
}

function addCommnet() {
  const isCommentValid = validateCommnet();
  if (isCommentValid === false) {
    alert("댓글을 입력해 주세요!");
  } else {
    const newComment = document.createElement("li");

    const newCommentNickName = document.createElement("span");
    newCommentNickName.classList.add("Rona");
    newCommentNickName.innerText = "C9";

    const newCommentContents = document.createElement("span");
    newCommentContents.innerText = commentInput.value;

    newComment.appendChild(newCommentNickName);
    newComment.appendChild(newCommentContents);
    commnetLists.appendChild(newComment);
    commentInput.value = "";
  }
}

function init() {
  commentButton.addEventListener("click", addCommnet);
}
init();
