const inputComment = document.querySelector(".comment-box");
const addComment = document.querySelector(".comment-btn");
const spaceComment = document.querySelector(".comment-space");

const onAdd = () => {
    const text = inputComment.value;
    if(inputComment.value === '') {
        inputComment.focus();
        return;
    }

    const item = document.createElement('div');
    item. setAttribute('class', 'item');
    item. setAttribute('width', '100%');
    
    nickName = document.createElement('strong');
    nickName.innerHTML = "whoohawhooha&nbsp;&nbsp;&nbsp;";

    const itemCommentContent = document.createElement('span');
    itemCommentContent.setAttribute('class', 'comment-Content');
    itemCommentContent.innerHTML = text;

    const commentDel = document.createElement('button');
    commentDel.setAttribute('class', 'itemDel');
    commentDel.innerHTML = "삭제";
    commentDel.addEventListener('click',() => {
        spaceComment.removeChild(item);
    });

    item.appendChild(nickName);
    item.appendChild(itemCommentContent);
    item.appendChild(commentDel);
    spaceComment.appendChild(item);
    inputComment.value = '';
    inputComment.focus();

    spaceComment.style.color = "#262626";
    spaceComment.style.fontSize = "14px";
};

addComment.addEventListener('click', () => {
    onAdd();
});

inputComment.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        onAdd();
    }
    return;
});






