const commentList = document.querySelector('.commentList');
const comments = document.querySelector('.comment');
const submit = document.querySelector('.submitBtn');

//게시 버튼 클릭 시 발생하는 함수
submit.addEventListener('click', commentAdd);

function commentAdd () {
    console.log(comments.value);
    const newComment = document.createElement('li');
    let commentUser = 'wecode_najeong';

    newComment.innerHTML = `
    <div>
        <strong>${commentUser}</strong>
        <span>${comments.value}</span>
    </div>`

    commentList.appendChild(newComment);
    comments.value='';
}

//댓글이 작성될 때, 게시 버튼 색상 변경
comments.addEventListener('keyup', () => {
    comments.value ? submit.style.opacity = 1.0 : submit.style.opacity = 0.3
})

