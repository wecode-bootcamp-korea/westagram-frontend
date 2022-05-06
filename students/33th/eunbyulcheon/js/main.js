const commentForm = document.querySelector('.comment');
const commentInput = commentForm.querySelector('input');
const commentList = document.querySelector('#comment-list');
const commentBtn = commentForm.querySelector('button');

const myUserId = document.querySelector('.profile-id');

function addComment(newComment) {
    const li = document.createElement('li');
    const spanId = document.createElement('span');
    spanId.innerText = 'byule___e';
    const span = document.createElement('span');
    span.innerText = newComment;
    const button = document.createElement('button');
    button.innerText = '삭제';
    button.addEventListener('click', deleteComment);
    li.appendChild(spanId);
    li.appendChild(span);
    li.appendChild(button);
    commentList.appendChild(li);
}

function deleteComment(event) {
    // To look into the directory of each button clicked -> console.dir(event.target), and look into the parentElement.
    // event.target.parentElement
    const li = event.target.parentElement;
    li.remove();
}

function handleCommentSubmit(event) {
    event.preventDefault();
    const newComment = commentInput.value;   //댓글을 새 댓글 변수에 저장
    commentInput.value = '';
    addComment(newComment);             // calling addComment function with the new comment
}

function changeInputBtnColor() {
    if (commentInput.value.length > 1) {
        commentBtn.style.color = 'hsl(204, 100%, 48%)';
    } else {
        commentBtn.style.color = 'hsla(204, 100%, 48%, 0.4)';
    }
}

commentForm.addEventListener('submit', handleCommentSubmit);
commentInput.addEventListener('keydown', changeInputBtnColor);