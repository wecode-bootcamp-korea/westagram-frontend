const id = document.getElementById("id");

const reply = document.querySelector(".feeds__reply__value");
const postReply = document.querySelector(".feeds__reply__post");
const replyContainer = document.querySelector(".feeds__reply-area");
const howManyReply = document.querySelector(".feeds__reply-count");
const navAccount = document.querySelector(".nav__account");
const search = document.querySelector(".search__input");
const storyBoard = document.querySelector(".aside__story");
const recommendBoard = document.querySelector(".aside__recommend");

const userArr = [];

navAccount.addEventListener("click", () => {
  //account 이모지의 하단, 오른쪽 절대좌표
  const menuBox = document.querySelector(".nav__account-menu");
  const menuBoxDisplay = window.getComputedStyle(menuBox).display;
  if (menuBoxDisplay === "none") menuBox.style.display = "block";
  else menuBox.style.display = "none";
});

//검색바 focus시 placeholder 사라지게
search.addEventListener("focus", () => {
  search.setAttribute("placeholder", "");
  search.style.backgroundImage = "none";
});

//검색바 focus out시 placeholder 복구
search.addEventListener("blur", () => {
  if (search.value === "") {
    search.setAttribute("placeholder", "검색");
    search.style.backgroundImage = "url('images/search.png')";
  }
});

//검색시 아이디 찾기
search.addEventListener("input", (e) => {
  const searchUserArea = document.querySelector(".search__result-area");
  searchUserArea.style.display = "none";
  removeAllChildNodes(searchUserArea);

  if (e.target.value) {
    const searchKeyword = e.target.value;
    const newUserArr = [];
    userArr.map((user) => {
      user.includes(searchKeyword) && newUserArr.push(user);
    });

    for (userName of newUserArr) {
      const userOne = document.createElement("p");
      userOne.style.padding = "5px";
      userOne.innerHTML = userName;
      searchUserArea.append(userOne);
      searchUserArea.style.display = "block";
    }
  }
});

//댓글 입력시 "게시" 문구 활성화
reply.addEventListener("input", () => {
  if (reply.value) {
    postReply.style.display = "inline";
  } else {
    postReply.style.display = "none";
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
postReply.addEventListener("click", () => {
  if (reply.value) {
    createReply(reply.value);
  }
});

//댓글 생성하는 함수
function createReply(value) {
  const replyArea = document.createElement("p"); //댓글 달릴때마다 p태그 생성
  const replyId = document.createElement("span"); //유저네임
  const replyContents = document.createElement("span"); //댓글
  const goodBtn = document.createElement("img"); //좋아요
  const deleteReply = document.createElement("span"); //삭제

  //유저네임 설정
  replyId.innerHTML = id.innerHTML;
  replyId.style.fontWeight = "600";
  replyId.style.fontSize = "14px";
  replyArea.append(replyId);

  //댓글 설정
  replyContents.innerHTML = value;
  replyContents.style.fontSize = "12px";
  replyContents.style.paddingLeft = "10px";
  replyArea.append(replyContents);

  //좋아요 설정
  goodBtn.setAttribute("src", "images/emptyHeart.png");

  goodBtn.setAttribute("alt", "좋아요");
  goodBtn.style.width = "12px";
  goodBtn.addEventListener("mouseover", () => {
    goodBtn.style.cursor = "pointer";
  });
  goodBtn.addEventListener("click", () => {
    if (goodBtn.getAttribute("src") === "images/emptyHeart.png") {
      goodBtn.setAttribute("src", "images/fillHeart.png");
    } else {
      goodBtn.setAttribute("src", "images/emptyHeart.png");
    }
  });
  goodBtn.style.position = "absolute";
  goodBtn.style.right = "40px";
  replyArea.append(goodBtn);

  //삭제 설정
  deleteReply.style.position = "absolute";
  deleteReply.style.right = "1px";
  deleteReply.innerHTML = "삭제";
  deleteReply.style.fontSize = "14px";
  deleteReply.addEventListener("click", () => {
    replyArea.remove();
    replyCnt();
  });
  deleteReply.addEventListener("mouseover", () => {
    deleteReply.style.cursor = "pointer";
  });
  replyArea.append(deleteReply);

  replyArea.style.position = "relative";
  replyArea.style.padding = "5px";
  replyArea.style.display = "flex";
  replyArea.style.alignItems = "center";

  replyContainer.append(replyArea);
  //  replyContainer.style.display = "block";
  replyCnt();

  reply.value = ""; //댓글 추가 후 textarea 초기화
}

function replyCnt() {
  removeAllChildNodes(howManyReply);
  let cnt = replyContainer.childElementCount;
  const howManyReplyText = document.createElement("span");
  howManyReplyText.innerHTML = `댓글 ${cnt}개 모두 보기`;
  howManyReplyText.style.color = "gray";
  howManyReplyText.id = "allReply";

  howManyReplyText.addEventListener("mouseover", () => {
    howManyReplyText.style.cursor = "pointer";
  });
  howManyReplyText.addEventListener("click", () => {
    if (replyContainer.style.display === "none")
      replyContainer.style.display = "block";
    else replyContainer.style.display = "none";
  });

  howManyReply.append(howManyReplyText);
  if (cnt > 0) howManyReply.style.display = "block";
  else howManyReply.style.display = "none";
}

function removeAllChildNodes(Element) {
  while (Element.hasChildNodes()) {
    Element.removeChild(Element.firstChild);
  }
}
//랜덤 유저 생성 클래스
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

//스토리 Area에 user 추가
for (let i = 0; i < 5; i++) {
  const user = new User();
  storyBoard.append(user);
  userArr.push(user.innerText);
}

//추천 Area에 user 추가
for (let i = 0; i < 5; i++) {
  const user = new User();
  recommendBoard.append(user);
  userArr.push(user.innerText);
}
