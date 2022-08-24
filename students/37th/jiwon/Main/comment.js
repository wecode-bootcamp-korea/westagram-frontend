const comment = document.getElementsByClassName("comment-input-container")[0];
const commentContent = document.getElementById("comment-input");
const commentUploadBtn = document.getElementById("comment-upload-button");

const newCommentPlace =
  document.getElementsByClassName("feed-comments-text")[1];

const uploadComment = (e) => {
  e.preventDefault();
  const newCommentBox = document.createElement("li");
  const newCommentSetLeft = document.createElement("div");
  const newCommenterId = document.createElement("span");
  const newCommenterSaying = document.createElement("span");
  const newCommentSetRight = document.createElement("div");
  const newCommentHeart = document.createElement("i");
  const newCommentX = document.createElement("i");

  newCommenterId.className = "commenter-id";
  newCommenterSaying.className = "commenter-saying";

  newCommenterId.innerHTML = "jiwon.kim";
  newCommenterSaying.innerHTML = commentContent.value;

  newCommentHeart.className = "fa-regular fa-heart";
  newCommentX.className = "fa-regular fa-x";

  newCommentSetLeft.appendChild(newCommenterId);
  newCommentSetLeft.appendChild(newCommenterSaying);

  newCommentSetRight.className = "comment-set-right";
  newCommentSetRight.append(newCommentHeart, newCommentX);

  newCommentBox.className = "comment-set";
  newCommentBox.append(newCommentSetLeft, newCommentSetRight);

  newCommentPlace.appendChild(newCommentBox);

  commentContent.value = "";
};

comment.addEventListener("submit", uploadComment);

const uploadBtn = document.getElementById("comment-upload-button");

const activeUploadBtn = () => {
  if (commentContent.value.length > 0) {
    uploadBtn.style.color = "#3798f0";
  } else uploadBtn.style.color = "#cce4fc";
};

commentContent.addEventListener("keyup", activeUploadBtn);
