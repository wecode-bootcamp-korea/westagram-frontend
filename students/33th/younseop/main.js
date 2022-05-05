"use strict";

//댓글 기능 구현
const commnentWriteArea = document.getElementsByClassName("write-area")[0]; 
const commentSubmitBtn = document.getElementById("submit"); 

function actvieSubmitBtn() {
    if (commnentWriteArea.value) {
        commentSubmitBtn.disabled = false;
    }
}

function generateCommentList() {
    const commentFeed = document.getElementsByClassName("comments-wrapper")[0]; 
    const commentListItem = document.createElement("li");
    
    commentListItem.innerHTML = `
        <div>
            <p class="comment">
                <span class="comment-user">userName</span>
                <span>${commnentWriteArea.value}</span>
            </p>
        </div>`;

    commentFeed.appendChild(commentListItem);
    commnentWriteArea.value = '';
    event.preventDefault();
}

commnentWriteArea.addEventListener("keyup", actvieSubmitBtn);
commentSubmitBtn.addEventListener("click", generateCommentList);

//검색 기능 구현
const searchInput = document.getElementById("search");
const searchResultBox = document.getElementsByClassName("search-result-box")[0];
const userList = document.getElementsByClassName("search-result-list")[0];
const checkArr = [
    {
        id: "wecode_official",
        nickname: "> wecode",
    },
    {
        id: "itswendy",
        nickname: "웬디",
    },
    {
        id: "leynsp",
        nickname: "이윤섭",
    },
    {
        id: "wecode_official",
        nickname: "위코드",
    },
    {
        id: "dangtheyeti",
        nickname: "나는댕이",
    },
];

//검색 기능
function checkUserId(value) {
    const searchUserId = searchInput.value;
    return value.indexOf(searchUserId) != -1;
}

//리스트 생성
function showCheckedId(value) {
    searchResultBox.style.display = "flex";
    const checkedUser = document.createElement('li');
    
    checkedUser.innerHTML = `
        <div class="searched-user-wrapper">
            <span class="searched-user-id">${value.id}</span>
            <span class="searched-user-nickname">${value.nickname}</span>
        </div>
    `; 

    userList.appendChild(checkedUser);
}

searchInput.addEventListener("keyup", function() {
    userList.innerHTML = "";
    searchResultBox.style.display = "none";

    if (searchInput.value) {
        const filteredUser = checkArr.filter( x => checkUserId(x.id));
        if (filteredUser) {
            filteredUser.forEach(function(e) {
                showCheckedId(e);
            })

        }
    }
})

searchInput.addEventListener("focusout", function() {
    searchResultBox.style.display = "none";
})