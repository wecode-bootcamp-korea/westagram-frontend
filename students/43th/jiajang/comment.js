let commentInput = document.querySelector(".feeds-comment");
let commentBox = document.querySelector(".feeds-new-comment-box");
let commentBtn = document.querySelector(".feeds-comment-upload");

function addComment() {
  if (commentInput.value.length != 0) {
    let addedComment = document.createElement("div");
    addedComment.className = "added-comment";
    addedComment.innerHTML = `dazezd_z ${commentInput.value}`;
    commentBox.appendChild(addedComment);
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

// 둘 다 잘 되는데.. 엔터 다음에 클릭 이벤트가 실행되지 않는 이유는 뭘까?
