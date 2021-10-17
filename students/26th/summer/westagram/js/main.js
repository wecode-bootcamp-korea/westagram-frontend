"use strick";

// 검색 창
const searchInput = document.getElementsByClassName("searchInput")[0];
const searchImg = document.getElementsByTagName("label")[0];
const userUl = document.getElementsByClassName("userList")[0];

let users = [
  "spring",
  "summer",
  "fall",
  "winter",
  "season",
  "april",
  "may",
  "sunmerrr",
  "SpiderMan",
  "IronMan",
  "Thor",
  "Hurk",
  "Venom",
];

// FIXME: id 입력 값 지우고 리셋되도록
const onSearch = (e) => {
  let searchId = e.target.value;
  users.forEach((user) => {
    const userLi = document.createElement("li");
    if (user.includes(searchId)) {
      userLi.innerHTML = user;
    }
    userUl.appendChild(userLi);
  });
  // if (searchId.length == 0) {
  //   userUl.classList.add("hide");
  // }
};

searchInput.addEventListener("input", onSearch);

// 검색창 클릭 시 레이블 없에기 (복구는 언젠가..)
const onClickSearch = () => {
  if (searchImg) {
    searchImg.remove();
    searchInput.placeholder = "검색";
  }
};
searchInput.addEventListener("click", onClickSearch);

// 댓글 달기
const comments = document.getElementsByClassName("comments")[0];
const inputComment = document.getElementsByClassName("writeComment")[0];
let commentList = "";

const onInputComment = (e) => {
  if (inputComment.value.length == 0) {
    return;
  }
  postBtn.style.opacity = "1";
  if (e.code == "Enter") {
    postComment();
  }
};
inputComment.addEventListener("keyup", onInputComment);

const postBtn = document.getElementsByClassName("post")[0];
let heartImg = "";

const onClickPost = () => {
  if (inputComment.value.length == 0) {
    return;
  }
  postComment();
};
postBtn.addEventListener("click", onClickPost);

const postComment = () => {
  commentList = document.createElement("li");
  commentList.classList.add("comment");
  commentList.innerHTML = `<span>winter</span> <span>${inputComment.value}</span>`;

  // 댓글 좋아요 버튼 활성화
  heartImg = document.createElement("button");
  heartImg.classList.add("spriteImg", "heartImg");
  heartImg.addEventListener("click", (e) => {
    onClickHeart(e);
  });

  // 댓글 삭제 기능 활성화
  removeComment = document.createElement("button");
  removeComment.classList.add("spriteImg", "removeComment");
  removeComment.addEventListener("click", (e) => e.target.parentNode.remove());

  comments.appendChild(commentList);
  commentList.appendChild(heartImg);
  commentList.appendChild(removeComment);

  inputComment.value = "";
  postBtn.style.opacity = "0.4";
};

const heartBtn = document.querySelector(".heartImg");

// like 버튼 클릭 시 색상 변경
const onClickHeart = (e) => {
  if (e.target.style.backgroundPosition === "-1040px -52px") {
    e.target.style.backgroundPosition = "-1040px -101px";
    return;
  }
  e.target.style.backgroundPosition = "-1040px -52px";
};
heartBtn.addEventListener("click", (e) => onClickHeart(e));
