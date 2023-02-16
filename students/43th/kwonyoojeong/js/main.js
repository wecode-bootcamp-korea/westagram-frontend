const addButton = document.querySelector(".addCommentButton");

const newComment = document.querySelector(".newComment");
const addComment = document.querySelector(".addComment");

// 게시 버튼 누르면 댓글 추가
addButton.addEventListener("click", (event) => {
  createComment();
});

const createComment = () => {
  if (addComment.value === "") {
    return;
  }

  const commentTotalWrap = document.createElement("div");
  commentTotalWrap.className = "commentTotalWrap";

  const commentWrap = document.createElement("div");
  commentWrap.className = "commentWrap";

  const commentId = document.createElement("a");
  commentId.href = "#";
  commentId.className = "commentId";
  commentId.innerText = "user Id";
  commentId.style.marginRight = "8px";

  const comment = document.createElement("span");
  comment.className = "comment";
  comment.innerText = addComment.value;

  const commentLike = document.createElement("button");
  const heartImg = document.createElement("img");
  comment.style.width = heartImg.width;
  heartImg.className = "commentLike heart";
  heartImg.src = "img/heart.png";
  heartImg.alt = "하트";

  commentLike.appendChild(heartImg);
  commentWrap.appendChild(commentId);
  commentWrap.appendChild(comment);

  commentTotalWrap.appendChild(commentWrap);
  commentTotalWrap.appendChild(commentLike);

  newComment.appendChild(commentTotalWrap);

  addComment.value = "";

  if (addComment.value === "") {
    addComment.focus();
  }
};

addComment.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    return createComment();
  }
});

// const heart = document.getElementsByClassName("heart");

// const pressHeart = () => {
//   heart.src = "redheart.png";

//   if (heart.src === "redheart.png") {
//     heart.src = "heart.png";
//   }
// };

// heart.addEventListener("click", (e) => {
//   pressHeart();
// });

// const profileSave = document.querySelector(".profileSave");

// profileSave.addEventListener("click", (e) => {
//   profileSave.src = "bookmark.png";
// });
