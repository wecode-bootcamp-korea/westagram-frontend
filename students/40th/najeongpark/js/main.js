const commentList = document.querySelector('.commentList');
const comments = document.querySelector('.comment');
const submit = document.querySelector('.submitBtn');
const deleteBtn = document.querySelector('.commentDel');

//댓글이 작성될 때, 게시 버튼 색상 변경
comments.addEventListener('input', () => {
    comments.value ? submit.style.opacity = 1.0 : submit.style.opacity = 0.3
})

//게시 버튼 클릭 시 발생하는 함수
submit.addEventListener('click', commentAdd);

comments.addEventListener('keydown', (event) => {
    if(event.keyCode === 13) {
        commentAdd()
    }
})

function commentAdd () {
    const newComment = document.createElement('li');
    let commentUser = 'wecode_najeong';

    newComment.innerHTML = `
    <div>
        <strong>${commentUser}</strong>
        <span>${comments.value}</span>
        <div class="commentIcons">
            <i class="emptyHeart far fa-heart"></i>
            <i class="fa-regular fa-trash-can"></i>
        </div>
    </div>`
    commentList.appendChild(newComment);

    
    comments.value = '';
    submit.style.opacity = 0.3;
    
    //댓글 삭제 기능
    const delBtn = newComment.querySelector('.fa-trash-can');
    
    delBtn.addEventListener('click', () => {
        commentList.removeChild(newComment);
    });
    
    //댓글 좋아요 기능
    const emptyHeart = newComment.querySelector('.far');

    emptyHeart.addEventListener('click', (e) => {
        const like = newComment.querySelector('.far');
        const unlike = newComment.querySelector('.fa-solid');
        
        like ? like.classList.replace('emptyHeart', 'redHeart') : unlike.classList.replace('redHeart', 'emptyHeart')
        like ? like.classList.replace('far', 'fa-solid') : unlike.classList.replace('fa-solid', 'far')
        like ? like.style.color = 'red' : unlike.style.color = 'black';
    });

}


