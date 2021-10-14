const input = document.querySelector('.commentInputBox');
const ul = document.querySelector('.comments');
const posting = document.querySelector('.upload');

input.addEventListener('keyup', e => {
    let textLength = input.value.length;
    if(e.keyCode === 13) {
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
    let textLength = input.value.length;
    if(textLength > 0) {
        addComment();
    }
});

function addComment() {
    posting.style.opacity = 0.3;
    posting.style.cursor = 'default';
    let text = input.value;
    const li = document.createElement('li');
    li.innerHTML = text;
    li.className = 'comment';
    ul.appendChild(li);
    input.value = '';
}