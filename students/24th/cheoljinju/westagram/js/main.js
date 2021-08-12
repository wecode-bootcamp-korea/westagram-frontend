"use strict";
const commentBox = document.querySelector(".feed__text");
const commentBtn = document.querySelector(".comment-button");
const input = document.querySelector(".comment-input");
const aside = document.querySelector(".aside");
const clientSize = window.innerWidth;
const feeds = document.querySelector(".main__feeds");
const feed = document.querySelector(".main__feed");
const profileMenu = document.querySelector(".menu-wrapper");
const searchWrapper = document.querySelector(".search-wrapper")
const searchLists = document.querySelector(".search-list");
const searchInput = document.querySelector(".nav__search");
let isActive = false;

// 코멘트 생성하는 함수
const createComment = (inputValue) => {
  const commentRow = document.createElement("div");
  commentRow.setAttribute("class", "feed__comment");
  commentRow.innerHTML = `
    <span>wecode_24th</span>
    <span>${inputValue}</span>
    <button type="button" class="comment__delete"><i class="far fa-trash-alt"></i></button>
    <button type="button" class="comment__heart"><i class="far fa-heart"></i></button>
  `;
  return commentRow;
};

// 코멘트 추가하는 함수
const addComment = () => {
  const inputValue = input.value;
  if (input.value == false) {
    input.focus();
    return;
  }

  const newComment = createComment(inputValue);
  commentBox.appendChild(newComment);
  commentBtn.classList.remove("active");
  input.focus();
  input.value = "";
};

// 댓글 기능 구현
commentBtn.addEventListener("click", addComment);
input.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    addComment();
    return;
  }
});

// 게시 버튼 활성화 기능
input.addEventListener("keyup", (event) => {
  input.value
    ? commentBtn.classList.add("active")
    : commentBtn.classList.remove("active");
});


// 좋아요 버튼 on/off 함수
function onHeartClick(event){
  if(event.target.className === "far fa-heart"){
    event.target.className = "fas fa-heart";
  } else if(event.target.className === "fas fa-heart"){
    event.target.className = "far fa-heart";
  }
}

// 삭제 버튼 함수
function onDelete(event){
  let target = event.target;
  if(event.target.className === "far fa-trash-alt"){
    target.parentNode.parentNode.remove(); // 재사용성 고민필요
  }
}

// 댓글 아이콘 버튼 기능 구현
feeds.addEventListener("click", (event) => {
  if(event.target.tagName !== "I"){
    return;
  }
  onHeartClick(event);
  onDelete(event);
})

// 프로필 메뉴 토글 기능 구현
function activeToggle(){
  profileMenu.style.display = "block";
  isActive = true;
}

function hideToggle(){
  profileMenu.style.display = "none";
  isActive = false;
}

window.addEventListener("click", (event) => {
  if(event.target.className === "menu__item profile" && !isActive){
    activeToggle();
    return;
  };
  if(event.target.className === "menu__item profile" && isActive){
    hideToggle();
    return;

  }
  if(!profileMenu.contains(event.target) && isActive){
    hideToggle();
    return;
  }
})

// 검색 자동완성 기능 

// 임의의 데이터베이스
const userData = [
  {id: "jini03",
  nickname: "주철진",
  picture: "img/food.jpeg"},
  {id: "wecode_bootcamp",
  nickname: ">wecode | 위코드",
  picture: "img/wecode.jpeg"},
  {id: "jquery",
  nickname: "java script",
  picture: "img/wecode.jpeg"},
  {id: "wecode_24th",
  nickname: "위코드 24기",
  picture: "img/food.jpeg"},
  {id: "ojk123",
  nickname: "종택님",
  picture: "img/wecode.jpeg"},
  {id: "k-star",
  nickname: "korean",
  picture: "img/food.jpeg"},
  {id: "wecoder_23th",
  nickname: "위코더 23기",
  picture: "img/food.jpeg"},
  {id: "wework",
  nickname: "위워크",
  picture: "img/wecode.jpeg"},
  {id: "community",
  nickname: "커뮤니티",
  picture: "img/wecode.jpeg"},
  {id: "yang1414",
  nickname: "jang",
  picture: "img/wecode.jpeg"},
  {id: "jinjin",
  nickname: "진진",
  picture: "img/wecode.jpeg"},
  ];

// 예전 검색어 프리뷰 데이터
const previewData = [{id: "jini03",
nickname: "주철진",
picture: "img/food.jpeg"},
{id: "wecode_bootcamp",
nickname: ">wecode | 위코드",
picture: "img/wecode.jpeg"}];

// 데이터 받아와서 검색 목록 만들어주는 함수
function addProfile(result){
  result.forEach(userInfo => {
    let searchList = document.createElement('li');
    searchList.className = "search-item";
    searchList.innerHTML = `
      <a href="#" class="border">
        <img src="${userInfo.picture}" />
      </a>
      <div>
        <span>
          <a href="#">${userInfo.id}</a>
        </span>
        <span>${userInfo.nickname}</span>
        </div>`;
    searchLists.appendChild(searchList);
  });
};

// 기존 검색어 목록 확인 후에 리셋 해주는 함수
function resetList() {
  if(searchLists.lastChild){ // 기존 요소 리셋하기
    while (searchLists.lastChild) {
    searchLists.removeChild(searchLists.lastChild);
  }
};
}

// 검색창 입력 관련 기능 구현

searchInput.addEventListener('keyup',()=> {
  let inputValue = searchInput.value;
  let result = [];
  resetList()
  if(inputValue !== ""){
      userData.forEach((element) => {
        let same = element.id.indexOf(inputValue);
          if(same === 0) {
              result.push(element);
          }
      })
      addProfile(result);
  }
  if(inputValue === ""){
    addProfile(previewData);
  }
});

// 검색어창 포커스 관련 기능 구현
searchInput.addEventListener("focus", ()=>{
  let inputValue = searchInput.value;
  if(inputValue === ""){
    resetList();
    addProfile(previewData)
  }
  searchWrapper.style.display = "block";
})

searchInput.addEventListener("focusout", () => {
  searchWrapper.style.display = "none";
})