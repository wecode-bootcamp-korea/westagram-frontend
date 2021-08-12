
const commentBtn = document.querySelector('.comment-button');
const commentForm =document.querySelector('.comment'); 
const commentValue = document.querySelector('.typing-comment');
const comments = document.querySelector('.typing-comment');
let heartBtn = document.querySelector('.feeds-comment');

commentForm.addEventListener("keyup",()=>{
    let comments = document.querySelector('.typing-comment').value;
    if(comments.length !== 0){
        commentBtn.classList.add('active')
    }else{
        commentBtn.classList.remove('active');
    }
});

//엔터키로 댓글 달기
commentValue.addEventListener("keypress",(e) => {
    if(e.keyCode === 13){
        if(comments.value.length !== 0){
        uploadComment();
        }
    }
});

//게시버튼을 눌렀을 시 uploadComment 함수 실행
commentBtn.addEventListener("click",()=>{
    if(comments.value.length !== 0){
        uploadComment();
    }
});

function uploadComment(){
    let feedComments = document.querySelector('.feeds-comment');
    let allComment = document.createElement('div');
    let commentDiv = document.createElement('div');
    let makeUserSpan = document.createElement('span');
    let makeCommentSpan = document.createElement('span');
    let makeTrash = document.createElement('button');
    let makeHeart = document.createElement('button');

    
    feedComments.appendChild(allComment);
    allComment.appendChild(commentDiv);
    commentDiv.appendChild(makeUserSpan);
    commentDiv.appendChild(makeCommentSpan);
    allComment.appendChild(makeTrash);
    allComment.appendChild(makeHeart);

    commentDiv.className ="commentDiv";
    makeUserSpan.className ="comment-id";
    makeCommentSpan.className ="comment-writing";
    makeUserSpan.innerText = "0hyun0hyun";
    makeCommentSpan.innerText = comments.value;
    makeTrash.innerHTML = '<i class="far fa-times-circle"></i>';
    makeHeart.innerHTML = '<i class="far fa-heart"></i>';
    comments.value = "";

   

    makeHeart.addEventListener("click", (event)=> {
        if(event.target.className == "far fa-heart"){
            event.target.className = "fas fa-heart";
        } else if(event.target.className == "fas fa-heart"){
            event.target.className = "far fa-heart";            
        }

    });

    makeTrash.addEventListener("click", (event) => {
        console.log(event.target.parentNode.parentNode);
        event.target.parentNode.parentNode.remove();
    });
};

