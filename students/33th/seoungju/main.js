const commentFoam = document.querySelector('.feeds_like_wrapper');
const comment = document.querySelector('.feeds_comment_input');
const commentBtn = document.querySelector('.feeds_comment_button');

const commentActive = function() {

    let commentInput = comment.value;
    const newComment = document.createElement('div');

        newComment.innerHTML = `
        <b>Wkddb1359</b>
        <span>${commentInput}</span>`;

        commentFoam.appendChild(newComment);
        comment.value='';
}

comment.addEventListener('keydown', () => {
    comment.value ? commentBtn.style.opacity = '1' : commentBtn.style.opacity = '.3';
    if(window.event.keyCode === 13 && comment.value) {
        commentActive();
    }
});

commentBtn.addEventListener('click', () => {
    if(comment.value) {
        commentActive();
    } else {
        alert("내용을 입력해주세요.");
    }
})
