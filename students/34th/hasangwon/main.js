"use strict";

const submit = document.querySelector(".submit");
const commentBox = document.querySelector(".comment");
const heart = document.querySelector("#heart");
const inputbox = document.querySelector(".inputbox");
const searchIcon = document.querySelector(".search");
let count = 0;

//버튼 활성화
window.addEventListener('keyup', function() {
    const commentCheck = commentBox.value;

    if( commentCheck ){
        submit.style.color ="#5696F6";
        submit.disabled = false;
    }
    else{
        submit.style.color = "#BFE0FD";
        submit.disabled = true;
    }
});

//버튼
submit.addEventListener('click',function(){
    createComment();
})

//엔터키
commentBox.addEventListener('keyup',function(event){
    if(event.code =="Enter" || event.code =="NumpadEnter"){
        createComment();
    }
})

//댓글 좋아용
heart.addEventListener("click",function(){
    if( heart.className == "fa-regular fa-heart buttons fa-2x"){    
        heart.className = "fa-solid fa-heart buttons fa-2x";
        heart.style.color = "red";
    }
    else{
        heart.className = "fa-regular fa-heart buttons fa-2x"
        heart.style.color = "black";
    }
})

// inputbox.addEventListener("onfocus",function(){
//     searchIcon.style.display = "none";
// })


inputbox.onfocus = function(){
    searchIcon.style.display = "none";
}
inputbox.onblur = function(){
    searchIcon.style.display = "block";
}

//댓글달기
function createComment(){    
    const comment = commentBox.value;
    const commentDiv = document.createElement("div");
    const commentHeart = document.createElement("i");
    const commentDelete = document.createElement("i");
    const commentPlace = document.querySelector(".commentSection");

    if( comment ){
        commentHeart.className = "fa-regular fa-heart buttonz"
        commentDelete.className = "fa-regular fa-x buttonz"
        commentDiv.innerHTML = "<b>hasang0.0</b> " + comment;


        commentDiv.appendChild(commentDelete); 
        commentDiv.appendChild(commentHeart); 
        commentPlace.appendChild(commentDiv); // 댓글 + 하트

        commentBox.value = null;   //게시 초기화
        submit.disabled = true;
        submit.style.color = "#BFE0FD";
    }

    commentHeart.addEventListener("click",function(){
        if(commentHeart.className == "fa-regular fa-heart buttonz"){    
            commentHeart.className = "fa-solid fa-heart buttonz";
            commentHeart.style.color = "red";
        }
        else{
            commentHeart.className = "fa-regular fa-heart buttonz"
            commentHeart.style.color = "black";
        }
    })

    commentDelete.addEventListener("click",function(){
        commentPlace.removeChild(commentDiv);
    })
}
