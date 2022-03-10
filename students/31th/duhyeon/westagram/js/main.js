const btnMore = document.getElementsByClassName("btn-more")[0];
const feedMore = document.getElementsByClassName("feed-content")[0];
const btnLike = document.querySelector(".btn-like");
// const btnLike1 = document.getElementsByClassName("btn-like")[1];
const btnMark = document.getElementsByClassName("btn-mark")[0];
const btnComment = document.getElementsByClassName("btn-comment")[0];
const commentWrap = document.getElementsByClassName("feed-comment-wrap")[0];
const profileModal = document.getElementsByClassName("profile-modal")[0];
const profileModalButton = document.getElementsByClassName("btn-profile")[0];

// 프로필 overlay처리
const dim = document.getElementsByClassName("overlay")[0];

// 댓글 달렸을때 적혀야할 값
const userNickname = document.getElementById("user-nickname").innerHTML;
const userComment = document.getElementById("feed-comment");

btnMore.addEventListener("click", feedContentMore);
btnLike.addEventListener("click", btnLikeToggle);
// btnLike1.addEventListener("click", btnLikeToggle);
btnMark.addEventListener("click", btnMarkToggle);
profileModalButton.addEventListener("click", modalToggle);
btnComment.addEventListener("click", function () {
  postComment();
  userComment.value = "";
  if (userComment.value === "") {
    btnComment.disabled = true;
    btnComment.classList.remove("active");
  } else {
    btnComment.disabled = false;
    btnComment.classList.add("active");
  }
});

profileModalButton.addEventListener("click", function () {
  dim.classList.add("active");
});

dim.addEventListener("click", function () {
  dim.classList.remove("active");
  profileModal.classList.remove("active");
});

userComment.addEventListener("keyup", function () {
  commentActive();
});

userComment.addEventListener("keypress", function (e) {
  if (userComment.value === "") {
    e.defaultPrevented();
  } else if (e.key === "Enter") {
    postComment();
    userComment.value = "";
  }
});

userComment.addEventListener("click", btnCommentToggle);

// 더보기 하트 북마크
function feedContentMore() {
  feedMore.classList.add("more");
}

function btnLikeToggle() {
  this.classList.toggle("active");
}

function btnCommentToggle() {
  this.classList.toggle("active");
}

function btnMarkToggle() {
  this.classList.toggle("active");
}
function modalToggle() {
  profileModal.classList.toggle("active");
}
function commentActive() {
  if (userComment.value) {
    btnComment.disabled = false;
    btnComment.classList.add("active");
  } else {
    btnComment.disabled = true;
    btnComment.classList.remove("active");
  }
}

function postComment() {
  const addCommentWrap = document.createElement("div");
  const addCommentId = document.createElement("span");
  const addCommentWrite = document.createElement("span");
  const addCommentBtn = document.createElement("button");
  // 댓글 클래스 추가
  addCommentWrap.className = "user-comment";
  addCommentId.className = "feed-id";
  addCommentWrite.className = "feed-comment";
  addCommentBtn.className = "btn-like";

  // 댓글 요소 생성,위치
  commentWrap.appendChild(addCommentWrap);
  addCommentWrap.appendChild(addCommentId).innerHTML = userNickname;
  addCommentWrap.appendChild(addCommentWrite).innerText = userComment.value;
  addCommentWrap.appendChild(addCommentBtn);
}
