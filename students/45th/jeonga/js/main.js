const commentInput = document.querySelector(".write-comment__input");
const commentButton = document.querySelector(".write-comment__btn");
const commentDelBtn = document.querySelector(".comment-delete");
const commentHeartBtn = document.querySelector(".heart");

const addHeart = (event) => {
  const heartParent = event.target.parentElement;
  const fullHeart = document.createElement("i");
  fullHeart.className = "fas fa-heart heart";
  fullHeart.style.color = "red";
  fullHeart.style.marginLeft = "5px";
  heartParent.removeChild(event.target);
  heartParent.appendChild(fullHeart);
  fullHeart.addEventListener("click", handleHeartBtn);
};

const deleteHeart = (event) => {
  const heartParent = event.target.parentElement;
  const emptyHeart = document.createElement("i");
  emptyHeart.className = "far fa-heart heart false";
  emptyHeart.style.color = "black";
  emptyHeart.style.marginLeft = "5px";
  heartParent.removeChild(event.target);
  heartParent.appendChild(emptyHeart);
  emptyHeart.addEventListener("click", handleHeartBtn);
};

const handleHeartBtn = (event) => {
  event.target.classList.contains("false")
    ? addHeart(event)
    : deleteHeart(event);
};

commentHeartBtn.addEventListener("click", handleHeartBtn);

const deleteComment = (event) => {
  const deleteBtn = event.target;
  const deleteBtnWrapper = deleteBtn.parentElement;
  const feedComment = deleteBtnWrapper.parentElement;
  const feedComments = feedComment.parentElement;
  feedComments.removeChild(feedComment);
};

const commentBtnOn = () => {
  commentButton.classList.add("comment-btn__on");
  commentButton.style.fontWeight = "bold";
};

const commentBtnOff = () => {
  commentButton.classList.remove("comment-btn__on");
  commentButton.style.fontWeight = "400";
};

const paintComment = (comment) => {
  const feedComments = document.querySelector(".feed-comments");
  const feedComment = document.createElement("div");
  const feedCommentP = document.createElement("p");
  const commentIdSpan = document.createElement("span");
  const heartIcon = document.createElement("i");
  const deleteIcon = document.createElement("i");
  const commentIWrapper = document.createElement("div");

  commentIWrapper.className = "comment-icon__wrapper";

  commentIdSpan.className = "comment-id";
  commentIdSpan.innerHTML = "candy_lp";
  commentIdSpan.style.marginRight = "5px";

  feedComment.className = "feed-comment";

  heartIcon.className = "far fa-heart heart";
  heartIcon.addEventListener("click", handleHeartBtn);
  heartIcon.style.marginLeft = "5px";
  deleteIcon.className = "fas fa-times comment-delete";

  deleteIcon.addEventListener("click", deleteComment);

  const commentContent = document.createElement("span");

  commentContent.innerHTML = comment;
  commentContent.className = "comment-content";
  commentContent.style.fontWeight = "400";

  feedCommentP.appendChild(commentIdSpan);
  feedCommentP.appendChild(commentContent);
  feedComment.appendChild(feedCommentP);
  commentIWrapper.appendChild(deleteIcon);
  commentIWrapper.appendChild(heartIcon);
  feedComment.appendChild(commentIWrapper);
  feedComments.appendChild(feedComment);

  commentInput.value = "";
};

const handleCommentBtn = () => {
  paintComment(commentInput.value);
};

const writeComment = (event) => {
  commentInput.value.length > 0 ? commentBtnOn() : commentBtnOff();
  if (event.keyCode === 13) {
    const comment = commentInput.value;
    paintComment(comment);
  }
  commentButton.addEventListener("click", handleCommentBtn);
};

commentInput.addEventListener("keyup", writeComment);

if (commentDelBtn) {
  commentDelBtn.addEventListener("click", deleteComment);
}
