'use strict';

// 댓글 추가 기능
const commentInput = document.querySelector('.commentInput');
const submitBtn = document.querySelector('.submitBtn');
const ulBox = document.querySelector('.commentBox');

function addComment() {
    const li = document.createElement('li');
    const id = document.createElement('span');
    const comment = document.createElement('span');
    const commentLikeBtn = document.createElement('button');
    const deleteBtn = document.createElement('button');

    li.setAttribute('class', 'commentItem');
    id.innerHTML = 'Sang_HoOon';
    id.setAttribute('class', 'boldBlackName');
    comment.innerHTML = commentInput.value;
    comment.setAttribute('class', 'comment');
    commentLikeBtn.setAttribute('class', 'commentLikeBtn');
    commentLikeBtn.innerHTML = '<i class="far fa-heart"></i>';
    deleteBtn.setAttribute('class', 'commentDel');
    deleteBtn.innerHTML = '<i class="far fa-trash-alt"></i>';
    li.appendChild(id);
    li.appendChild(comment);
    li.appendChild(deleteBtn);
    ulBox.appendChild(li);
    commentInput.value = "";

    if (!commentInput.value) {
        return;
    };
}

submitBtn.addEventListener('click', addComment);  //게시버튼 클릭 시 추가

commentInput.addEventListener('keyup', (e) => {   // 엔터시 댓글 추가
    if (e.keyCode === 13) {
        addComment();
    }
});

// 좋아요 버튼 토글
const likeBtn = document.querySelector('.likeBtn');
const likeImg = document.querySelector('.far.fa-heart');
const commentLikeBtn = document.querySelector('commentLikeBtn');
const commentLikeImg = document.querySelector('button.commentLikeBtn i');


function check() {
    likeImg.classList.toggle('fas');
    likeImg.classList.toggle('red');
}
function check1(e) {
    commentLikeImg.classList.toggle('fas');
    commentLikeImg.classList.toggle('red');
}
likeBtn.addEventListener('click', check);
commentLikeBtn.addEventListener('click', check1);

