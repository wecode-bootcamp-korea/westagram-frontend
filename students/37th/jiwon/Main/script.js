const comment = document.getElementById("comment-input");
const commentUploadBtn = document.getElementById("comment-upload-button");

const newCommentPlace =
  document.getElementsByClassName("feed-comments-text")[1];

const uploadBtn = document.getElementById("comment-upload-button");

const uploadComment = (e) => {
  e.preventDefault();
  const newCommentBox = document.createElement("li");
  const newCommenterId = document.createElement("span");
  const newCommenterSaying = document.createElement("span");

  newCommenterId.setAttribute("class", "commenter-id");
  newCommenterSaying.setAttribute("class", "commenter-saying");

  newCommenterId.innerHTML = "jiwon.kim";
  newCommenterSaying.innerHTML = comment.value;

  newCommentBox.appendChild(newCommenterId);
  newCommentBox.appendChild(newCommenterSaying);

  newCommentPlace.appendChild(newCommentBox);
  comment.value = "";
};

commentUploadBtn.addEventListener("click", uploadComment);
comment.addEventListener("submit", uploadComment);

const activeUploadBtn = () => {
  if (comment.value.length > 0) {
    uploadBtn.style.color = "#3798f0";
  } else uploadBtn.style.color = "#cce4fc";
};

comment.addEventListener("keyup", activeUploadBtn);
