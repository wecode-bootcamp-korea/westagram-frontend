const comment = document.querySelector(".comment input");
const commentBtn = document.querySelector(".comment button");
const commentList = document.querySelector(".commentList");

/**Functions for creating comment**/
function deleteComment(event) {
  const deletedComment = event.target.parentNode;
  commentList.removeChild(deletedComment);
}

function changeLikeBtn(event) {
  const likedHeart = event.target;
  if (likedHeart.classList.contains("fa-regular")) {
    likedHeart.classList.remove("fa-regular");
    likedHeart.classList.add("fa-solid");
  } else {
    likedHeart.classList.remove("fa-solid");
    likedHeart.classList.add("fa-regular");
  }
}

function addComment() {
  if (comment.value) {
    comment.value = "";
    const newList = document.createElement("li");
    newList.id = `${comment.value}`;
    const newComment = document.createElement("span");
    const deleteBtn = document.createElement("button");
    const heartIcon = document.createElement("i");
    const newCommentAccount = document.createElement("span");
    newComment.innerText = ` ${comment.value}`;
    deleteBtn.innerText = "삭제";
    heartIcon.classList.add("fa-regular");
    heartIcon.classList.add("fa-heart");
    newCommentAccount.classList.add("comment-account");
    newCommentAccount.innerText = "jy_baek";
    newList.prepend(newCommentAccount);
    newList.appendChild(newComment);
    newList.appendChild(deleteBtn);
    newList.appendChild(heartIcon);
    commentList.appendChild(newList);
    deleteBtn.addEventListener("click", deleteComment);
    heartIcon.addEventListener("click", changeLikeBtn);
  }
}

commentBtn.addEventListener("click", addComment);
comment.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addComment();
  }
});

const firstCommentIcon = document.querySelector(".commentList-first i");
const firstCommentBtn = document.querySelector(".commentList-first button");

firstCommentIcon.addEventListener("click", changeLikeBtn);
firstCommentBtn.addEventListener("click", deleteComment);

/**Functions for searching ID section**/
const accountData = [
  { id: "writeanddraw", profile: "https://#", nickname: "drawer" },
  { id: "daebaki.wow", profile: "https://#", nickname: "daebak" },
  { id: "nomadplan", profile: "https://#", nickname: "planner" },
  { id: "wecodeKorea", profile: "https://#", nickname: "wecode" },
  { id: "airplaneworld", profile: "https://#", nickname: "pilot" },
];
