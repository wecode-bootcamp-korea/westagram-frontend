const inputComment = document.querySelector('.input-comment')
const submitComment = document.querySelector('.submit-comment')
const commentList = document.querySelector('.comment-list')

const onAdd = () => {
    const text = input.value;
    if (input.value === '') {
        input.focus();
        return;
    }

    const commentItem = document.createElement('li');
    commentItem.setAttribute('class', 'comment-item');

    const commentItemText = document.createElement('span');
    commentItemText.setAttribute('class', 'comment-item-text');
    commentItemText.innerHTML = text;

    const itemDel = document.createElement('button');
    itemDel.setAttribute('class', 'comment-item-deleteBtn');
    itemDel.addEventListener('click', () => {
        commentList.removeChild(comment-item);
    });

    commentItem.appendChild(commentItemText);
    commentItem.appendChild(itemDel);
    commentList.appendChild(commentItem);
    input.value= '';
    input.focus();
};

submitComment.addEventListener('click', () {
    onAdd();
});

inputComment.addEventListener('keypress', (event) {
    if (event.key === 'Enter') {
    onAdd();
    }
})