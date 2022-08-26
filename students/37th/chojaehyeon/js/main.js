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
//trim() 공백제거 -  공백입력시 댓글 ㄴㄴ하게
function addComment() {
  const text = input.value;
  console.log(text);

  const comments = document.createElement("ul");
  comments.setAttribute("class", "comments");
  // ul이 같이 생겨서 중복되는데 이거 해결해보자.
  const comment = document.createElement("li");
  comment.setAttribute("class", "comment");
  const commentText = document.createElement("div");
  commentText.setAttribute("class", "commentText");
  const inputText = document.createElement("span");
  inputText.innerHTML = `<span class="idText">JaeHyeon</span> ${text}`;

  const commentHeart = document.createElement("div");
  commentHeart.setAttribute("class", "commentHeart");

  const heartIcon = document.createElement("i");
  heartIcon.setAttribute("class", "fa-regular fa-heart");

  const removeBtn = document.createElement("button");
  removeBtn.innerHTML = "X";

  // <=======삭제기능=======>
  removeBtn.addEventListener("click", () => {
    comments.removeChild(comment);
  });

  //<== 하트 채우기 기능===>
  const filledheart = document.createElement("i");
  filledheart.setAttribute("class", "fa-solid fa-heart");
  filledheart.setAttribute("id", "hide");

  function change() {
    filledheart.removeAttribute("id");
    heartIcon.setAttribute("id", "hide");
  }
  function changeBack() {
    filledheart.setAttribute("id", "hide");
    heartIcon.removeAttribute("id");
  }
  heartIcon.addEventListener("click", change);
  filledheart.addEventListener("click", changeBack);
  //
  commentText.appendChild(inputText);
  comment.appendChild(commentText);

  commentHeart.appendChild(filledheart); // 하트
  commentHeart.appendChild(heartIcon);
  commentHeart.appendChild(removeBtn);
  comment.appendChild(commentHeart);

  comments.appendChild(comment);

  output.appendChild(comments);
}

/* 댓글 기능 발동 조건 */
function enterComment(event) {
  if (event.keyCode == 13 && input.value.length > 0) {
    addComment();
    input.value = "";
  }
}
function clickComment() {
  if (input.value.length > 0) {
    addComment();
    input.value = "";
  }
}

removeBtn.addEventListener("click", removeComment);
input.addEventListener("keyup", enterComment);
inputBtn.addEventListener("click", clickComment);

/*크로롱 부분 모두 보기 구현해보기*/
const more = document.querySelector(".main-right-bot");
const moreBtn = document.querySelector(".bot-title #moremore");

function moreBox() {
  more.classList.toggle("more");
}

moreBtn.addEventListener("click", moreBox);

/* 반응형 구현해보기 */

// window.addEventListener("resize", hideAside);

/* 프로필 드롭다운 구현해보기 */
//event.target 은 이벤트가 발생한 지점을
//currentTarget은 이벤트를 실행하는 지점을 가리킨다.

const profileLogo = document.querySelector(".profile-logo");
const dropBox = document.querySelector(".drop-box");
const dropList = document.querySelectorAll(".drop-list");
// function click(e) {
//   if (
//     e.target == dropBox ||
//     e.target == document.querySelectorAll(".drop-list") ||
//     e.target == document.querySelectorAll(".drop-list a")
//   ) {
//     dropBox.classList.add("show-dropdown");
//   } else {
//     dropBox.classList.remove("show-dropdown");
//   }
// }
// function hideDrop(event) {
//   console.log(dropBox.parentNode); //nav-right
//   console.log(event.currentTarget);//drop-box
//   console.log(event.target); //dropBox 영역 내 클릭된 위치 보여줌
// }
function dropMenu(event) {
  // const sideMenu = document.querySelector(".main-right");
  // const main = document.querySelector(".main");
  // const navRight = document.querySelector(".nav-right");
  // const nav = document.querySelector(".nav");

  // function hideAside() {
  //   const windowWidth = window.innerWidth;
  //   const navMenu = document.querySelector(".nav-menu");
  //   const navSearch = document.querySelector(".nav-center");

  //   if (windowWidth <= 600) {
  //     sideMenu.style.display = "none";
  //     main.style.justifyContent = "center";
  //     navSearch.style.display = "none";
  //     navMenu.style.justifyContent = "space-between";
  //     // navMenu.style.marginLeft = "50px";
  //     navRight.style.marginRight = "100px";
  //     nav.style.width = "500px";
  //   } else {
  //     sideMenu.style.display = "block";
  //     main.style.justifyContent = "flex-end";
  //     navSearch.style.display = "block";
  //     navMenu.style.justifyContent = "space-between";
  //     navRight.style.marginRight = ""
  // console.log(event.target); //해당 아이콘 표시됨.
  dropBox.classList.toggle("show-dropdown");
}
// profileLogo.addEventListener("click", dropMenu);
// dropBox.addEventListener("click", clickLoc);
window.addEventListener("click", clickWhere);

function clickWhere(e) {
  if (e.target == profileLogo) {
    dropBox.classList.toggle("show-dropdown");
  } else if (e.target != dropBox) {
    dropBox.classList.remove("show-dropdown");
  }
  for (let i = 0; i < dropList.length; i++) {
    if (dropList[i] == e.target) {
      dropBox.classList.add("show-dropdown");
    }
  }
}

//<검색창 기능 추가!>

const searchValue = document.querySelector(".search"); //인풋창 벨류
const searchBox = document.querySelector(".search-list");

const name = document.querySelectorAll(".name");
const searchItems = document.querySelectorAll(".search-item");
// console.log(searchBox);
// console.log(searchValue);
// console.log(name); //name 배열 나옴
// console.log(name[0].innerHTML.toUpperCase()); //WECODE
// console.log(searchItems);

function filter() {
  for (i = 0; i < name.length; i++) {
    if (
      name[i].innerHTML.toUpperCase().indexOf(searchValue.value.toUpperCase()) >
      -1
    ) {
      searchItems[i].style.display = "block";
    } else {
      searchItems[i].style.display = "none";
    }
  }
}

function showList() {
  if (searchValue.value.length == 0) {
    searchBox.classList.remove("hide");
    document.querySelector(".rectangular").classList.remove("hide");
  }
}
function hideList() {
  if (searchValue.value.length == 0) {
    searchBox.classList.add("hide");
    document.querySelector(".rectangular").classList.add("hide");
  }
}
searchValue.addEventListener("focus", showList);
searchValue.addEventListener("blur", hideList);
searchValue.addEventListener("keyup", filter);
