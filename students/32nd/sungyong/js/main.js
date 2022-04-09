const commentInput = document.getElementById('comment');
const commentId1 = document.getElementById('commentId1');
const commentId2 = document.getElementById('commentId2');
const comment1 = document.getElementById('comment1');
const comment2 = document.getElementById('comment2');
const commentTime = document.getElementById('commentTime');
const commentBtn = document.getElementById('commentBtn');


function addComment(e) {
            commentId1.innerHTML = commentId2.innerHTML;
            comment1.innerHTML = comment2.innerHTML;
            commentId2.innerHTML = 'wecode_bootcamp';
            comment2.innerHTML = commentInput.value;
}
commentInput.addEventListener('keydown', (e) => {
    if(commentInput.value !== '' && commentInput.value !== null) {
        if(e.code === 'Enter') {
            addComment(e);
        }
    }
        else {
            e.code === 'Enter' ? alert('내용을 입력해주세요.') : null;
        }
});

commentBtn.addEventListener('click', (e) => {
    if(commentInput.value !== '' && commentInput.value !== null) {
            addComment(e);
    }
        else {
            alert('내용을 입력해주세요.');
        }
});