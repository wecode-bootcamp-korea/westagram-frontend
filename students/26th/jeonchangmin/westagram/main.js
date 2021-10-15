const input = document.querySelector('.commentInputBox');
const ul = document.querySelector('.comments');
const posting = document.querySelector('.upload');

input.addEventListener('keyup', e => {
    const textLength = input.value.length;
    if(e.keyCode === 13 && textLength > 0) {
        addComment();
        return;
    }
    if(textLength > 0) {
        posting.style.opacity = 1;
        posting.style.cursor = 'pointer';
    } else {
        posting.style.opacity = 0.3;
        posting.style.cursor = 'default';
    }
});

posting.addEventListener('click', () => {
    const textLength = input.value.length;
    if(textLength > 0) {
        addComment();
    }
});

function addComment() {
    posting.style.opacity = 0.3;
    posting.style.cursor = 'default';
    const text = input.value;
    const span = document.createElement('span');
    span.innerHTML = text;
    const i = document.createElement('i');
    i.className = 'far fa-heart commentHeart';
    const div = document.createElement('div');
    div.className = 'commentFirst';
    div.appendChild(span);
    div.appendChild(i);
    const button = document.createElement('button');
    button.className = 'deleteButton'
    button.innerHTML = '삭제';
    const li = document.createElement('li');
    li.className = 'comment';
    li.appendChild(div);
    li.appendChild(button);
    ul.appendChild(li);
    // const commentHearts = document.querySelectorAll('.commentHeart');
    // commentHearts.forEach(commentHeart => {
    //     commentHeart.addEventListener('click', () => {
    //         commentHeart.style.color = 'red';
    //         console.log('heart red is done');
    //     })
    // });
    button.addEventListener('click', () => {
        const comment = button.closest('.comment');
        comment.remove();
    });

    input.value = '';
}

