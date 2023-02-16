const search = document.getElementById("search");
const reply = document.getElementById("reply");
const add = document.getElementById("add");
const replyArea = document.getElementById("reply-area");
const storyBoard = document.getElementById("story-main");
const recommendBoard = document.getElementById("recommend-main");
const viewAllStroy = document.getElementById("view-all-story");
const id = document.getElementById("id");

const userArr = [];

//검색바 focus시 placeholder 사라지게
search.addEventListener("focus", () => {
  search.setAttribute("placeholder", "");
  search.style.backgroundImage = "none";
});

//검색바 focus out시 placeholder 복구
search.addEventListener("blur", () => {
  if (search.value === "") {
    search.setAttribute("placeholder", "검색");
    search.style.backgroundImage = "url('/images/search.png')";
  }
});

//댓글 입력시 "게시" 문구 활성화
reply.addEventListener("input", () => {
  if (reply.value) {
    add.style.display = "inline";
  } else {
    add.style.display = "none";
  }
});

//댓글 입력 후 엔터이벤트
reply.addEventListener("keydown", (e) => {
  if (window.event.keyCode === 13 && e.target.value !== "") {
    window.event.returnValue = false;
    createReply(e.target.value);
  }
});

//댓글 입력 후 게시 클릭이벤트
add.addEventListener("click", () => {
  if (reply.value) {
    createReply(reply.value);
  }
});

viewAllStroy.addEventListener("click", () => {});

//댓글 생성하는 함수
function createReply(value) {
  const newReply = document.createElement("p");
  const deleteReply = document.createElement("span");

  newReply.innerHTML = `${id.innerHTML} ${value}`;
  newReply.style.position = "relative";
  newReply.style.padding = "5px";
  replyArea.append(newReply);
  replyArea.style.display = "block";
  reply.value = "";

  newReply.append(deleteReply);

  deleteReply.style.position = "absolute";
  deleteReply.style.right = "1%";
  deleteReply.innerHTML = "삭제";
  deleteReply.style.fontSize = "14px";
  deleteReply.onclick = (e) => {
    newReply.remove();
  };
}

//랜덤 스토리 및 추천을 위한 class
class User {
  constructor() {
    let randomStr = Math.random().toString(36).substring(2, 12);
    const newUserbox = document.createElement("div");
    const newUser = document.createElement("span");
    const newUserIcon = document.createElement("img");

    newUser.innerHTML = randomStr;
    newUser.style.padding = "10px";

    newUserIcon.setAttribute("src", "images/emptyUser.png");
    newUserIcon.setAttribute("width", "32px");
    newUserIcon.setAttribute("height", "32px");
    newUserIcon.style.display = "inline-block";

    newUserbox.style.display = "flex";
    newUserbox.style.alignItems = "center";
    newUserbox.append(newUserIcon);
    newUserbox.append(newUser);
    return newUserbox;
  }
}

for (let i = 0; i < 5; i++) {
  const user = new User();
  storyBoard.append(user);
  userArr.push(user.innerText);
}

for (let i = 0; i < 5; i++) {
  const user = new User();
  recommendBoard.append(user);
  userArr.push(user.innerText);
}
