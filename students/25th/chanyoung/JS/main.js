const commentBtn = document.querySelector(".feeds-form");
const commentHTML = document.querySelector(".feeds-main__comments ul");
const searchInput = document.querySelector(".header__search input");
const feedHeartBtn = document.querySelector(
  ".feeds-main__icons--left .fa-heart"
);
const commentTime = document.querySelector(".feeds-main__comment-time");
let commentHearts = document.querySelectorAll(".feeds-main__comments__heart");
let commentDeleteBtn = document.querySelectorAll(
  ".feeds-main__comments__delete"
);

const USER_NAME = "JeungChanYoung";
const USER = {
  name: "DUNA",
  img: "images/duna2.jpg",
};

const addComment = (e) => {
  event.preventDefault();

  if (e.target[0].value) {
    let newComment = document.createElement("li");
    newComment.className = "feeds-main__comments__content";
    newComment.innerHTML = `<div class="comment-wrapper">
    <span class="username">
    ${USER_NAME}</span>
    ${e.target[0].value}
    <i class="fas fa-backspace feeds-main__comments__delete"></i>
  </div>
  <i class="fas fa-heart feeds-main__comments__heart" aria-hidden="true"></i>`;
    commentHTML.appendChild(newComment);

    addCommentTime();

    // 생성된 버튼에 이벤트 추가
    const newHeartBtn = document.querySelectorAll(
      ".feeds-main__comments__heart"
    );
    const newDeleteBtn = document.querySelectorAll(
      ".feeds-main__comments__delete"
    );

    newHeartBtn[newHeartBtn.length - 1].onclick = changeHeartColor;
    newDeleteBtn[newDeleteBtn.length - 1].onclick = deleteComment;

    // 리스너 추가
    // input 값 초기화!
    e.target[0].value = null;
  }
};
const addCommentTime = () => (commentTime.innerText = "1분 전"); // 로컬 스토리지 이용해야 하는 걸로 알고 있기 때문에 패스

const changeHeartColor = (e) => {
  const color = e.target.style.color;
  e.target.style.color = color ? "" : "red";
};

const deleteComment = (e) => {
  const commentElementIdx = 2;
  e.path[commentElementIdx].remove();
};

commentBtn.addEventListener("submit", addComment);
// 인자를 사용하려면 익명함수를 써라
feedHeartBtn.addEventListener("click", changeHeartColor);

const addHeartBtnListener = () => {
  commentHearts.forEach((e) => e.addEventListener("click", changeHeartColor));
};
const addDeleteBtnListener = () => {
  commentDeleteBtn.forEach((e) => e.addEventListener("click", deleteComment));
};
const searchKeyword = (e) => {
  const keyword = e.path[0].value;
  // 돋보기 아이콘 지우기
  if (keyword) {
    e.path[1].childNodes[1].style.visibility = "hidden";
  } else {
    e.path[1].childNodes[1].style.visibility = "visible";
  }
  // 유저 검색
};
searchInput.addEventListener("input", searchKeyword);
addHeartBtnListener();
addDeleteBtnListener();
