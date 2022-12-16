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
        commentList.innerHTML = `<span>jinwoo</span>    <span>${comments.value}</span>`
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

commentBtn.addEventListener('click',addComment)
comments.addEventListener('keypress',addCommentEnter)
comments.addEventListener('keyup', checkValue)
