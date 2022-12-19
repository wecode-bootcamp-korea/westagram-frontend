let comments = document.querySelector('.comment-input');
let commentBtn = document.querySelector('.feeds-comment-btn');

function addComment(e) {
    e.preventDefault();
    let postComments = document.querySelector('.contents-container')
    let commentList = document.createElement('div')
    commentList.className = 'newDiv';
    commentList.innerHTML = `<span>jinwoo</span>    <span>${comments.value}</span>`
    postComments.appendChild(commentList);
    comments.value = "";
}

function addCommentEnter(e) {
    let postComments = document.querySelector('.contents-container')
    let commentList = document.createElement('div')
    if(e.keyCode === 13){
        e.preventDefault();
        commentList.className = 'newDiv';
        commentList.innerHTML = 
        `<div><span class = 'comment-id'>jinwoo</span>    <span>${comments.value}</span></div> <div><button class = 'like-button' type ='submit'><img class = 'like-heart' src='
        https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png'좋아요</button>  <button class = 'delete-button' type = 'submit'>삭제</button></div>`
        postComments.appendChild(commentList);
        comments.value = "";
        }
}

function checkValue() {
    if(comments.value){
        commentBtn.disabled = false;
        commentBtn.classList.add('btnActive')

    }
    else if(!(comments.value)){
        commentBtn.disabled = true;
        commentBtn.classList.remove('btnActive')
    }
}   

//삭제 버튼을 누르면 댓글이 삭제되는 기능 구현
//화살표 함수 사용

// let makeDeleteEvent = () => {
//     const deleteBtn = document.querySelector('.delete-button');
//     const commentList = document.querySelector('newDiv');
//     deleteBtn.addEventListener('click', function(){
//         deleteComment(deleteBtn, commentList)
//     });
// }

// let deleteComment = (deleteBtn, commentList) => {
//     deleteBtn.removeEventListener('click', deleteComment);
//     commentList.remove();
// }

commentBtn.addEventListener('click',addComment)
comments.addEventListener('keypress',addCommentEnter)
comments.addEventListener('keyup', checkValue)
