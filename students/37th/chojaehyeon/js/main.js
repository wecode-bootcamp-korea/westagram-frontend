/*
input창  : comment-input 
ul class : comments
li class ; comment
span class : commentText
*/

const input = document.querySelector(".comment-input");
const comments = document.querySelector(".comments"); //ul
const inputBtn = document.querySelector(".comment-box button"); //게시버튼
const output = document.querySelector(".ccc");

const removeBtn = document.querySelector(".remove-button");

function removeComment() {}

function addComment() {
  const text = input.value;
  console.log(text);

  const comments = document.createElement("ul");
  comments.setAttribute("class", "comments");

  const comment = document.createElement("li");
  comment.setAttribute("class", "comment");
  const commentText = document.createElement("div");
  commentText.setAttribute("class", "commentText");
  const inputText = document.createElement("span");
  inputText.innerHTML = `JaeHyeon ${text}`;

  const commentHeart = document.createElement("div");
  commentHeart.setAttribute("class", "commentHeart");

  const heartIcon = document.createElement("i");
  heartIcon.setAttribute("class", "fa-regular fa-heart");

  const removeBtn = document.createElement("button");
  removeBtn.innerHTML = "X";

  commentText.appendChild(inputText);
  comment.appendChild(commentText);

  commentHeart.appendChild(heartIcon);
  commentHeart.appendChild(removeBtn);
  comment.appendChild(commentHeart);

  comments.appendChild(comment);

  output.appendChild(comments);
}

function enterComment(event) {
  if (event.keyCode == 13 && input.value.length > 0) {
    addComment();
    input.value = "";
  } else {
  }
}

removeBtn.addEventListener("click", removeComment);
input.addEventListener("keyup", enterComment);
inputBtn.addEventListener("click", addComment);

/*크로롱 부분 모두 보기 구현해보기*/
const more = document.querySelector(".main-right-bot");
const moreBtn = document.querySelector(".bot-title #moremore");

function moreBox() {
  console.log("hi");
  more.classList.toggle("more");
}

moreBtn.addEventListener("click", moreBox);

/* 반응형 구현해보기 */

const sideMenu = document.querySelector(".main-right");
const main = document.querySelector(".main");
const navRight = document.querySelector(".nav-right");

function hideAside() {
  const windowWidth = window.innerWidth;
  const navMenu = document.querySelector(".nav-menu");
  const navSearch = document.querySelector(".nav-center");

  if (windowWidth <= 1200) {
    sideMenu.style.display = "none";
    main.style.justifyContent = "center";
    navSearch.style.display = "none";
    navMenu.style.justifyContent = "space-around";
    navRight.style.marginRight = "100px";
  } else {
    sideMenu.style.display = "block";
    main.style.justifyContent = "flex-end";
    navSearch.style.display = "block";
    navMenu.style.justifyContent = "space-between";
    navRight.style.marginRight = "";
  }
}

window.addEventListener("resize", hideAside);

/* 프로필 드롭다운 구현해보기 */

const profileLogo = document.querySelector(".profile-logo");

function dropMenu() {
  const dropBox = document.querySelector(".nav-right>div");
  dropBox.classList.toggle("show-dropdown");
}
profileLogo.addEventListener("click", dropMenu);

// 드롭다운 메뉴 외를 클릭 했을 때 없어져야 하는데 어떻게 할까 ? ..
