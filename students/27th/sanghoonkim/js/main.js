'use strict';

const commentInput = document.querySelector('.commentInput');
const submitBtn = document.querySelector('.submitBtn');
const ulBox = document.querySelector('.commentBox');

function addComment() {
    const li = document.createElement('li');
    const id = document.createElement('span');
    const comment = document.createElement('span');

    if (!commentInput.value) {
        return;
    };

    id.innerHTML = 'Sang_HoOon';
    id.setAttribute('class', 'boldBlackName');
    comment.innerHTML = commentInput.value;
    comment.setAttribute('class', 'comment');
    li.appendChild(id);
    li.appendChild(comment);
    ulBox.appendChild(li);
    commentInput.value = "";
}

submitBtn.addEventListener('click', addComment);

commentInput.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
        addComment();
    }
});