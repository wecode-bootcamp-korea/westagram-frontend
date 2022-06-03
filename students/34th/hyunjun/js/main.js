const inputComment = function () {
  const commentInput = document.querySelector(".commentInput");
  const inputCommentBox = document.querySelector("#commentBox");
  const makeCommentPtag = document.createElement("p");
  inputCommentBox.appendChild(makeCommentPtag);
  if (commentInput.value.length < 2) {
    alert("두 글자 이상 입력해주세요.");
    return false;
  }
  if (commentInput.value.length > 1) {
    makeCommentPtag.innerHTML =
      "<strong>username</strong>" +
      " " +
      commentInput.value +
      "<img alt='CommentLIke' src='img/commentlike.png' class='commentLike'>";

    commentInput.value = "";
    return makeCommentPtag;
  }
};

const CommentInputButton = document.querySelector(".postingButton");

CommentInputButton.addEventListener("click", function () {
  redLikeButton();
});
const buttonInput = document.querySelector(".commentInput");
buttonInput.addEventListener("keydown", function (e) {
  console.log(e.keyCode);
  if (e.keyCode === 13) {
    redLikeButton();
  }
});
const redLikeButton = function () {
  let num = 1;
  let makeCommentPtag = inputComment();
  let likeButton = makeCommentPtag.querySelector(".commentLike");

  likeButton.addEventListener("click", function () {
    if (num == 1) {
      likeButton.src = "img/like.png";
      return (num = 0);
    }
    if (num == 0) {
      likeButton.src = "img/heart.png";
      return (num = 1);
    }
  });
};
