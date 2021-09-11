const commentBtn = document.querySelector('#comment-btn');
const commentInput = document.querySelector('#comment-input');
const commentList =document.querySelector('#comment-list');


function addComment(){
    let text = commentInput.value;
    let newComment = document.createElement('li');

    newComment.innerHTML = text;
    commentList.appendChild(newComment);
    document.querySelector('#comment-input').value = '';
    // text.value ='';  -> 이방법은 왜 안되는거징?????위에거랑 똑같은거 아닌가
}

function checkKeyEnter(event){
    event.keyCode === 13 ? addComment() : false;
}

commentBtn.addEventListener('click',addComment);
commentInput.addEventListener('keydown',checkKeyEnter);


