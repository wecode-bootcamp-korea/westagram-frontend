'use strict';
// import {Users} from './user.js'

const newCommentContainer = document.querySelector('.feed__addComment__input')
const commentBtn = document.querySelector('.feed__addComment__button');
commentBtn.disabled = true;

// Activate post button
newCommentContainer.addEventListener('keyup',() => {
    const newComment= newCommentContainer.value;
    if(newComment){
        commentBtn.classList.add('activate');
        commentBtn.disabled = false;
    }else{
        commentBtn.classList.remove('activate');
        commentBtn.disabled = true;
    }
})


// Add New Comment
const comments = document.querySelector('.feed__comments');
let datanum = 2;
const addComment = (event) => {
    event.preventDefault();
    const comment = document.createElement('div');
    comment.className = "feed__comment__item"
    comment.setAttribute('data-num', datanum);
    comment.innerHTML = 
        `<a href="#" class="avatar__id">new_id</a>
            <span>${newCommentContainer.value}</span>
        <span class="feed__comment__more">
            <i class="fa-solid fa-x" data-num=${datanum}></i>
            <i class="fa-regular fa-heart" data-like=${datanum}></i>
        </span>`;
    comments.appendChild(comment);
    newCommentContainer.value="";
    datanum++;
}
commentBtn.addEventListener('click', addComment);


// Mission 6 :delete Comment with the 'x' button
comments.addEventListener('click', (event)=>{
    const datanum = event.target.dataset.num;
    if(datanum){
        const deletedComment = document.querySelector(`.feed__comment__item[data-num="${datanum}"]`)
        deletedComment.remove();
    }
})

// Mission 6 : make the heart full-red when clicked
comments.addEventListener('click', (event)=>{
    const likenum = event.target.dataset.like;
    if(likenum){
        const clickedHeartNum = document.querySelector(`.fa-heart[data-like="${likenum}"]`);
        clickedHeartNum.classList.toggle(`red`);
        clickedHeartNum.classList.toggle(`fa-solid`)
    }
})

// Mission 7 : id search bar
const Users = [
    {
        id: "wecode_bootcamp",
        description: ">wecode | 위코드",
        src: "../IMG/wecode.png"
      },
      {
        id: "wecode_founder",
        description: "송은우 (Eun Woo Song)",
        src: "../IMG/wecodeFounder.png"
      },
      {
        id: "wecode_git",
        description: "",
        src: "../IMG/wecodegit.png"
      },
      {
        id: "wecode_korea",
        description: "강남구 테헤란로 427, 서울",
        src: "../IMG/noimage.jpeg"
      },
      {
        id: "mjuuu.k",
        description: "Front-end developer",
        src: "../IMG/wecode.png"
      },
      {
        id: "mjuu.b",
        description: "love cooking",
        src: "../IMG/wecode.png"
      },
      {
        id: "nyangwe",
        description: "nyangnyang We",
        src: "../IMG/wecode.png"
      },
      {
        id: "dangdang_we",
        description: "DangDang We",
        src: "../IMG/wecode.png"
      },
]

const searchBar = document.querySelector('.navbar__searchBar');
const searchResultBox = document.querySelector('.searched__items');
const searchResultContainer = document.querySelector('.searchToggle');
const closeSearchBtn = document.querySelector('.fa-circle-xmark');

searchBar.addEventListener('keyup', (event)=> {
    showToggle();
    if(event.key === 'Escape' || searchBar.value === ''){
        hideToggle();
    }else{
        showSearchResult();
}});

closeSearchBtn.addEventListener('click', ()=>{
    hideToggle();
})

function showSearchResult(){
    let keyword = event.target.value;
    searchResultBox.innerHTML = "";
    const filteredArr = Users.filter(user => user.id.includes(keyword));
    filteredArr.length > 0 ? createElement(filteredArr) : showNoResult();
}

function createElement(filteredArr){
    filteredArr.forEach(user => {
        const avatar = document.createElement('div');
        avatar.setAttribute('class', 'searched__items__item');
        avatar.innerHTML =` 
            <div class="img__container">
                <img class="avatar__img" src=${user.src} alt="">
            </div>   
            <div class="id__container">
                <div class="avatar__id">${user.id}</div>
                <div class="avatar__description">${user.description}</div>
            </div>`;
        searchResultBox.appendChild(avatar);
    });
}

function showNoResult(){
    const noResult = document.createElement('div');
    noResult.innerHTML = "검색 결과가 없습니다.";
    noResult.setAttribute('class', 'searched__noResult');
    searchResultBox.appendChild(noResult);
}

function showToggle(){
    searchResultContainer.classList.add('visible');
    closeSearchBtn.classList.add('visible');
}

function hideToggle(){
    searchResultBox.innerHTML='';
    searchResultContainer.classList.remove('visible');
    closeSearchBtn.classList.remove('visible');
    searchBar.value = '';
}

// Mission 8 : show profile options when navbar's profile picture is clicked
const profileBtn = document.querySelector('.navbar__moreFunctions .fa-user-large');
const profileOptions = document.querySelector('.profileOptions');
const overlay = document.querySelector('.overlay');

profileBtn.addEventListener('click', ()=>{
    profileOptions.classList.add('show');
    overlay.classList.add('active');
})

overlay.addEventListener('click', () =>{
    overlay.classList.remove('active');
    profileOptions.classList.remove('show');
})