const submit = document.querySelector(".submit");
const commentBox = document.querySelector(".comment")
const heart = document.querySelector("#heart");
const commentHeart = document.querySelector(".buttonz");
// const smallheart =
let count = 0, i=0;

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

submit.addEventListener('click',function(){
    createComment();
})

commentBox.addEventListener('keyup',function(event){
    if(event.code =="Enter" || event.code =="NumpadEnter"){
        createComment();
    }
})

function createComment(){    
    const comment = commentBox.value;
    const commentDiv = document.createElement("div");
    const commentHeart = document.createElement("i");
    const commentPlace = document.querySelector(".commentSection");

    if( comment ){
        commentHeart.className = "fa-regular fa-heart buttonz"
        commentDiv.innerHTML = "<b>hasang0.0</b> " + comment;

        commentDiv.appendChild(commentHeart); 
        commentPlace.appendChild(commentDiv); // 댓글 + 하트

        commentBox.value = null;   //게시 초기화
        submit.disabled = true;
        submit.style.color = "#BFE0FD";
    }
}

heart.addEventListener("click",function(){
    clickHeart();
})

commentHeart.addEventListener("click",function(){
    if(count == 0){    
        commentHeart.className = "fa-solid fa-heart buttonz";
        commentHeart.style.color = "red";
        count = count + 1;
    }
    else if(count == 1){
        commentHeart.className = "fa-regular fa-heart buttonz"
        commentHeart.style.color = "black";
        count = count - 1;
    }
})

function clickHeart(){
    if(count == 0){    
        heart.className = "fa-solid fa-heart buttons fa-2x";
        heart.style.color = "red";
        count = count + 1;
    }
    else if(count == 1){
        heart.className = "fa-regular fa-heart buttons fa-2x"
        heart.style.color = "black";
        count = count - 1;
    }
}