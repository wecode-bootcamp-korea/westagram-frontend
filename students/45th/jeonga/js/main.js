const commentInput = document.querySelector(".write-comment__input");
const commentButton = document.querySelector(".write-comment__btn");

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
  const commentId = document.createElement("span");
  const heartIcon = document.createElement("i");

  commentId.className = "comment-id";
  commentId.innerHTML = "candy_lp";

  feedComment.className = "feed-comment";
  heartIcon.className = "far fa-heart";

  const commentContent = document.createElement("span");

  commentContent.innerHTML = " " + comment;
  commentContent.className = "comment-content";
  commentContent.style.fontWeight = "400";

  feedCommentP.appendChild(commentId);
  feedCommentP.appendChild(commentContent);
  feedComment.appendChild(feedCommentP);
  feedComment.appendChild(heartIcon);
  feedComments.appendChild(feedComment);
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
