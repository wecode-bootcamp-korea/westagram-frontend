const commentFoam = document.querySelector('.summary_comment');
const comment = document.querySelector('.comment_input');
const commentBtn = document.querySelector('.comment_button');


const commentActive = function() {

    let commentInput = comment.value;
    const newComment = document.createElement('div');

    if(window.event.keyCode === 13 && comment.value) {
        console.log("엔터키 발생")

        newComment.innerHTML = `
        <b>Wkddb1359</b>
        <span>${commentInput}</span>`;

        commentFoam.appendChild(newComment);
        comment.value='';

    }

    if(comment.value) {
        commentBtn.style.opacity = '1';
    }
    else {
        commentBtn.style.opacity = '.3';
    }

}
const commentBtnActive = function() {

    let commentInput = comment.value;
    const newComment = document.createElement('div');

    newComment.innerHTML = `
    <b>Wkddb1359</b>
    <span>${commentInput}</span>`;

    commentFoam.appendChild(newComment);
    comment.value='';
}

comment.addEventListener('keydown',commentActive);
commentBtn.addEventListener('click', () => {
    if(comment.value) {
        commentBtnActive();
    }
    else {
        alert("내용을 입력해주세요.");
    }
})
