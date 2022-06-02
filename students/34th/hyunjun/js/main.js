const inputComment = function () {
  const commentInput = document.querySelector(".commentInput");
  const inputCommentBox = document.querySelector("#inputCommentBox");
  const makeCommentPtag = document.createElement("p");
  inputCommentBox.appendChild(makeCommentPtag);
  if (commentInput.value.length < 2) {
    alert("두 글자 이상 입력해주세요.");
    return false;
  }
  if (commentInput.value.length > 1) {
    makeCommentPtag.innerHTML = makeCommentPtag.innerHTML =
      "<strong>username</strong>" +
      " " +
      commentInput.value +
      "<img src='img/commentlike.png' class='commentLike'>";

    commentInput.value = "";
  }
};

const CommentInputButton = document.querySelector(".postingButton");

CommentInputButton.addEventListener("click", function () {
  inputComment();
});

const buttonInput = document.querySelector(".commentInput");
buttonInput.addEventListener("keyup", function (e) {
  if (e.keyCode === 13) inputComment();

  const imgBox = document.querySelector(".commentLike");
  imgBox.addEventListener("click", function () {
    console.log(1);
  });
});
