const addButton = document.querySelector(".addCommentButton");

const newComment = document.querySelector(".newComment");
const addComment = document.querySelector(".addComment");

// 게시 버튼 누르면 댓글 추가
// const newComment = `<span>아이디</span><span>${변수(댓글 내용)}</span>`
// newCommentList.innerHTML = newComment
// => getElement로 각각의 span 생성해서 value를 appendChild 등등을 할 필요가 없어짐!
addButton.addEventListener("click", (event) => {
  createComment();
});

const createComment = () => {
  if (addComment.value === "") {
    return;
  }

  const commentTotalWrap = document.createElement("div");
  commentTotalWrap.className = "commentTotalWrap";

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
  heartImg.className = "commentLike";
  heartImg.src = "img/heart.png";
  heartImg.alt = "하트";

  const deleteComment = document.createElement("button");
  deleteComment.className = "deleteComment";
  deleteComment.innerText = "x";

  commentLike.appendChild(heartImg);

  commentTotalWrap.appendChild(commentId);
  commentTotalWrap.appendChild(comment);
  commentTotalWrap.appendChild(commentLike);
  commentTotalWrap.appendChild(deleteComment);

  newComment.appendChild(commentTotalWrap);

  addComment.value = "";

  if (addComment.value === "") {
    addComment.focus();
  }

  // x 버튼 누르면 댓글 삭제
  deleteComment.addEventListener("click", (e) => {
    commentTotalWrap.remove();
  });
};

addComment.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    return createComment();
  }
});

const profileHeart = document.getElementsByClassName("profileHeart")[1];
// 하트 누르면 빨간 하트
profileHeart.addEventListener("click", (e) => {
  profileHeart.src = "img/redheart.png";

  // if (profileHeart.src === "img/redheart.png") {
  //   profileHeart.src = "img/heart.png";
  // }
});

const profileSave = document.getElementsByClassName("profileSave")[1];
// 저장 누르면 채워진 아이콘
profileSave.addEventListener("click", (e) => {
  profileSave.src = "img/bookmark.png";

  // if (profileSave.src === "img/bookmark.png") {
  //   profileSave.src = "img/save-instagram.png";
  // }
});

const dropButton = document.getElementById("dropButton");
const dropBox = document.getElementById("dropBox");

// 드롭버튼 클릭하면 dropbox 보이도록
dropButton.addEventListener("click", (e) => {
  dropBox.style.display = "block";
});

// 전역에 클릭이벤트 주어서 드롭박스 사라지게
const removeDropBox = document.querySelector(".mainWrap");

removeDropBox.addEventListener("click", (e) => {
  dropBox.style.display = "none";
});
