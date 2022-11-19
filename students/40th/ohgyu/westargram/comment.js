const commentBtn = document.getElementById("commentBtn");
const commentInput = document.getElementById("commentInput");
const commentUserName = document.getElementById("commentUserInfo").innerText;

function addComment() {
  const commentList = document.getElementById("commentList");

  if (commentInput.value.length > 0) {
    const comment = document.createElement("li");
    const commentLikeResult = 0;

    commentList.appendChild(comment);
    comment.innerHTML = `${commentUserName} ${commentInput.value} <input type="checkbox"/><span class="commentSpan">${commentLikeResult}</span> <span>명이 좋아합니다</span><button class="commentDeleteBtn" >삭제</button>`;
    commentInput.value = null;

    const LikeCheckBox = comment.querySelector("input");
    const DeleteBtn = comment.querySelector("button");
    const commentSpan = comment.querySelector(".commentSpan");

    LikeCheckBox.addEventListener("click", function () {
      commentLikeCount(LikeCheckBox, commentLikeResult, commentSpan);
    });
    DeleteBtn.addEventListener("click", function () {
      commentDelete(comment);
    });
  }
}

function commentLikeCount(likecheckbox, like_result, comment_span) {
  if (likecheckbox.checked) {
    like_result += 1;
  }
  comment_span.innerHTML = like_result;
}

function commentDelete(commentElement) {
  commentElement.remove();
}

function commentSectionClose() {
  const commentCheck = document.getElementById("commentOpen");
  const commentSection = document.getElementById("commentSection");
  if (!commentCheck.checked) {
    commentSection.style.display = "none";
  } else commentSection.style.display = "block";
}

commentBtn.addEventListener("click", function () {
  addComment();
});

/*
commentBtn.addEventListener("click", function () {
  const commentList = document.getElementById("commentList");
  const comment = document.createElement("li");
  const commentLikeCheck = document.createElement("input");
  commentLikeCheck.setAttribute("type", "checkbox");
  const commentCountSection = document.createElement("span");
  const commentLikeCount = document.createElement("span");
  const commentDeleteBtn = document.createElement("button");
  let likeCount = 0;

  if (commentInput.value.length > 0) {
    commentList.appendChild(comment);
    comment.innerText = `${commentUserName} ${commentInput.value}`;
    commentList.appendChild(commentLikeCheck);
    commentList.appendChild(commentCountSection);
    commentCountSection.style.display = "inline";
    commentCountSection.appendChild(commentLikeCount);
    commentLikeCount.innerText = likeCount;
    commentCountSection.innerText += `좋아요`;
    comment.appendChild(commentDeleteBtn);
    commentDeleteBtn.innerText = "삭제";

    commentInput.value = null;
  }

  commentLikeCheck.addEventListener("change", () => {
    commentLikeCount.innerText = likeCount + 1;
    console.log("check");
  });
});
*/
/*
commentLike.addEventListener("click", function () {
  if (commentLikeCheck.checked) {
  }
});
*/
