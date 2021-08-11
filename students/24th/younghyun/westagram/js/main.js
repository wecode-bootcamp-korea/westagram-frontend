
// const typingComment = document.querySelector('.typing-comment');
const commentBtn = document.querySelector('.comment-button');
const commentForm =document.querySelector('.comment'); 
const commentValue = document.querySelector('.typing-comment');

commentForm.addEventListener("keyup",()=>{
    let comments = document.querySelector('.typing-comment').value;
    if(comments.length >= 1){
        commentBtn.classList.add('active')
    }else{
        commentBtn.classList.remove('active');
    }

    // console.log(comments.length);
    // console.log(commentBtn.classList);
});


commentValue.addEventListener("keydown",uploadComment); 

function uploadComment(e){
    if(e.keycode === 13){
    let feedComments = document.querySelector('.feeds-comment');
    let commentDiv = document.createElement('div');
    let makeUserSpan = document.createElement('span');
    let makeCommentSpan = document.createElement('span');
    let comments = document.querySelector('.typing-comment').value;

    commentDiv.appendChild(feedComments);
    makeUserSpan.appendChild(commentDiv);
    makeCommentSpan.appendChild(commentDiv); 
    
    makeUserSpan.className ="comment-id";
    makeUserSpan.innerText = "0hyun0hyun";
    makeCommentSpan.innerText = comments;

        console.log(comments);
    }
};
