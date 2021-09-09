const commentBtn = document.querySelector(".feeds-form");
const commentHTML = document.querySelector(".feeds-main__comments ul");
const searchInput = document.querySelector(".header__search input");
const searchUserContainer = document.querySelector(
  ".header__search__user-container"
);
const feedHeartBtn = document.querySelector(
  ".feeds-main__icons--left .fa-heart"
);
const commentTime = document.querySelector(".feeds-main__comment-time");
const menuProfile = document.querySelector(".menu-profile");
const menuProfileBox = document.querySelector(".menu-profile-box");
let commentHearts = document.querySelectorAll(".feeds-main__comments__heart");
let commentDeleteBtn = document.querySelectorAll(
  ".feeds-main__comments__delete"
);
const USER_NAME = "JeungChanYoung";
const users = [
  {
    name: "DUNA",
    img: "images/duna1.jpg",
  },
  {
    name: "duNa_origin",
    img: "images/duna2.jpg",
  },
  {
    name: "duna_o",
    img: "images/duna2.jpg",
  },
  {
    name: "duNA-ori",
    img: "images/duna2.jpg",
  },
  {
    name: "Duna_orion",
    img: "images/duna2.jpg",
  },
  {
    name: "good_dog",
    img: "images/dog1.jpg",
  },
];

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
    newComment.querySelector(".feeds-main__comments__heart").onclick =
      changeHeartColor;
    newComment.querySelector(".feeds-main__comments__delete").onclick =
      deleteComment;

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
const searchText = (e) => {
  const text = e.path[0].value;
  // 돋보기 아이콘 지우기
  if (text) {
    e.path[1].childNodes[1].style.visibility = "hidden";
  } else {
    e.path[1].childNodes[1].style.visibility = "visible";
  }
  // 유저 검색
  console.log(searchUserContainer);

  // USER 라는 배열 안에 있는 오브젝트의 name에 접근을 해서
  matchUsername(text);
  //유저 오브젝트에서 -> 유저들을 받아옴 -> 앞부터 3글자가 일치 할 경우 -> 유저컨테이너 생성 및 찾은 유저 표시
  //
};

let searchUsers = [];
const matchUsername = (text) => {
  // 유저 목록 생성?

  if (text.match(new RegExp(`.{3,}`))) {
    if (!searchUsers.length) {
      // 배열에 값이 없으면
      // 3글자 이상인지 체크하고
      for (user of users) {
        if (
          // 유저들의 이름 일치 여부 체크
          user.name.slice(0, text.length).toUpperCase() ===
          text.slice(0, text.length).toUpperCase()
        ) {
          //찾은 유저의 컨테이너를 만들어서
          let userContainer = document.createElement("div");
          userContainer.className = "header__search__user-container__user";
          userContainer.innerHTML = `<img class="user-img" src="${user.img}" alt=""></img>
    <span class="username">${user.name}</span>`;
          // 그리고 관리 할 배열에 붙여
          searchUsers.push({ user: user, userContainer: userContainer });

          //유저 컨테이너가 담길 공간에 붙여
          searchUserContainer.appendChild(userContainer);
        }
      }
    } else {
      let searchUserIdx = 0;
      let tempSearchUsers = [];
      for (searchUser of searchUsers) {
        console.log("테스트  " + searchUser.user.name);
        if (
          // 유저들의 이름 일치 여부 체크
          searchUser.user.name.slice(0, text.length).toUpperCase() !==
          text.slice(0, text.length).toUpperCase()
        ) {
          console.log(`삭제되는 : ${searchUser.user.name}`);

          searchUserContainer.removeChild(searchUser.userContainer);
        } else {
          tempSearchUsers.push(searchUser);
        }
        searchUserIdx++;
      }
      console.log(searchUsers);
      searchUsers = tempSearchUsers;
    }
  } else {
    // 찾은 유저들 삭제 및 배열 비우기
    searchUsers.forEach((e) => {
      searchUserContainer.removeChild(e.userContainer);
    });
    searchUsers.length = 0;
  }
};
// 프로필 메뉴 박스 생성
const createMenuProfileBox = (e) => {
  e.target.nextElementSibling.style.display = "flex";
};
const deleteMenuProfileBox = (e) => {
  e.target.style.display = "none";
};

searchInput.addEventListener("input", searchText);
menuProfile.addEventListener("click", createMenuProfileBox);
menuProfileBox.addEventListener("mouseleave", deleteMenuProfileBox);

addHeartBtnListener();
addDeleteBtnListener();
