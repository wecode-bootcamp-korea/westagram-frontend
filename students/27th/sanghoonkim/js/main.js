'use strict';

const commentInput = document.querySelector('.commentInput');
const submitBtn = document.querySelector('.submitBtn');
const ulBox = document.querySelector('.commentBox');

// function addComment() {
//     console.log(commentInput.value);
//     const li = document.createElement('li');
//     const id = document.createElement('span');
//     const comment = document.createElement('span');

//     id.innerHTML = 'Sang_HoOon';
//     id.setAttribute('class', 'boldBlackName');
//     comment.innerHTML = commentInput.value;
//     comment.setAttribute('class', 'comment');
//     li.appendChild(id);
//     li.appendChild(comment);
//     ulBox.appendChild(li);
// }

submitBtn.addEventListener('click', () => {

    const li = document.createElement('li');
    const id = document.createElement('span');
    const comment = document.createElement('span');

    id.innerHTML = 'Sang_HoOon';
    id.setAttribute('class', 'boldBlackName');
    comment.setAttribute('class', 'comment');
    comment.innerHTML = commentInput.value;
    li.appendChild(id);
    li.appendChild(comment);
    ulBox.appendChild(li);
});