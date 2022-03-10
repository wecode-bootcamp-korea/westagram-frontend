'use strict';
import {Users} from './user.js'

const newCommentContainer = document.querySelector('.feed__addComment__input')
const commentBtn = document.querySelector('.feed__addComment__button');
commentBtn.disabled = true;

// Activate post button
newCommentContainer.addEventListener('keydown',() => {
    const newComment= newCommentContainer.value;
    if(newComment){
        commentBtn.classList.add('activate');
        commentBtn.disabled = false;
    }else{
        commentBtn.classList.remove('activate');
        commentBtn.disabled = true;
    }
});


// Add New Comment
const comments = document.querySelector('.feed__comments');
let datanum = 2;

function addComment(event){
    event.preventDefault();
    // const new_id = prompt("What's your id?")
    const comment = document.createElement('div');
    comment.className = "feed__comment__item"
    comment.setAttribute('data-num', datanum);
    comment.innerHTML = 
        `<a href="#" class="avatar__id">new_id</a>
            <span>${newComment.value}</span>
        <span class="feed__comment__more">
            <i class="fa-solid fa-x" data-num=${datanum}></i>
            <i class="fa-regular fa-heart" data-like=${datanum}></i>
        </span>`;
    comments.appendChild(comment);
    newComment.value="";
    datanum++;
}

commentBtn.addEventListener('click', addComment);

// delete Comment that is clicked
comments.addEventListener('click', (event)=>{
    const datanum = event.target.dataset.num;
    if(datanum){
        const deletedComment = document.querySelector(`.feed__comment__item[data-num="${datanum}"]`)
        deletedComment.remove();
    }
})

// make the heart full-red when clicked
comments.addEventListener('click', (event)=>{
    const likenum = event.target.dataset.like;
    if(likenum){
        const clickedHeartNum = document.querySelector(`.fa-heart[data-like="${likenum}"]`);
        clickedHeartNum.classList.toggle(`red`);
        clickedHeartNum.classList.toggle(`fa-solid`)
    }
})

// search bar
const searchBar = document.querySelector('.navbar__searchBar');
const searchResultBox = document.querySelector('.searched__items');
const searchToggleBox = document.querySelector('.searchToggle');
const closeToggleBtn = document.querySelector('.fa-circle-xmark');

searchBar.addEventListener('keyup', (event)=> {
    showToggle();
    if(event.key === 'Escape' || searchBar.value === ''){
        hideToggle();
    }else{
        showSearchResult();
}});

closeToggleBtn.addEventListener('click', ()=>{
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
    searchToggleBox.classList.add('visible');
    closeToggleBtn.classList.add('visible');
}

function hideToggle(){
    searchResultBox.innerHTML='';
    searchToggleBox.classList.remove('visible');
    closeToggleBtn.classList.remove('visible');
    searchBar.value = '';
}

// show toggle when profile is clicked
const profileBtn = document.querySelector('.navbar__moreFunctions .fa-user-large');
const profileToggle = document.querySelector('.profileToggle');

profileBtn.addEventListener('click', ()=>{
    profileToggle.classList.toggle('show');
})
