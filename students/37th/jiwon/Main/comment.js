// comment 댓글 추가 기능 (하트, 삭제 표시 )

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

  newCommenterId.innerHTML = "jiwon.kim";
  newCommenterSaying.innerHTML = commentContent.value;

  newCommenterId.className = "commenter-id";
  newCommenterSaying.className = "commenter-saying";

  newCommentHeart.className = "fa-regular fa-heart";
  newCommentX.className = "del";
  newCommentX.innerHTML = "X";

  newCommentSetLeft.appendChild(newCommenterId);
  newCommentSetLeft.appendChild(newCommenterSaying);

  newCommentSetRight.className = "comment-set-right";
  newCommentSetRight.append(newCommentHeart, newCommentX);

  newCommentBox.className = "comment-set";
  newCommentBox.append(newCommentSetLeft, newCommentSetRight);

  newCommentPlace.appendChild(newCommentBox);

  commentContent.value = "";

  const handleXClick = () => {
    const answer = confirm("댓글 삭제하시겠습니까?");
    if (answer == true) {
      newCommentBox.remove(this.parentNode);
    }
  };

  newCommentX.addEventListener("click", handleXClick);

  const handleHeartClick = () => {
    if ((newCommentHeart.classList = "fa-regular fa-heart")) {
      newCommentHeart.classList = "fa-solid fa-heart";
    } else {
      newCommentHeart.classList = "fa-regular fa-heart";
    }
  };

  newCommentHeart.addEventListener("click", handleHeartClick);
};

comment.addEventListener("submit", uploadComment);

/* '게시' 버튼 활성화 기능 */

const uploadBtn = document.getElementById("comment-upload-button");

const activeUploadBtn = () => {
  if (commentContent.value.length > 0) {
    uploadBtn.style.color = "#3798f0";
  } else uploadBtn.style.color = "#cce4fc";
};

commentContent.addEventListener("keyup", activeUploadBtn);
