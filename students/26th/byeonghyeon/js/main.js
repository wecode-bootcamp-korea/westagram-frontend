const inputContainer = document.querySelector('.comment-input-container');
const comments = document.querySelector('.comment-list');
const input = document.querySelector('.comment-input');
const isTime = document.querySelector('.feed-bottom-date');
const commentBtn = document.querySelector('.post-comment-btn');
const mainInput = document.querySelector('.main-input');

const users = ['apple_90', 'orange_97', 'grape_30', 'melon_30', 'mango_78'];
let id = 0;
let check = [];

function onAdd(target) {
    if(target !== 'BUTTON' && target !== 'INPUT') return;
    // if(id === 2) onUpload();
    console.log(check.length);
    

    const text = input.value;

    if(text !== '') {
        const item = createItem(text);
        check.push(item);
        comments.append(item);
        if(check.length === 3) {
            let targetElem = check.shift();
            comments.removeChild(targetElem);
        }
    } else return;

    input.value = '';
    input.focus();
    commentBtn.classList.remove('active');
}

function createItem(text) {
    const itemRow = document.createElement('li');
    itemRow.classList.add('comment-item');
    itemRow.setAttribute('data-id', id);

    let index = Math.floor(Math.random() * users.length);

    itemRow.innerHTML = `
    <div class="comment">
        <a href="#" class="feed-bottom-account profile-name">${users[index]}</a>
        <span class="comment-content">${text}</span>
    </div>
        <button><img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" alt="heart" class="comment-heart"></button>
    `

    id++;
    
    return itemRow;
}

// function onUpload() {
//     let items = Array.from(comments.children);
//     items.forEach(elem => {
//         if(elem.dataset.id === '0') comments.removeChild(elem);
//         else elem.setAttribute('data-id', 0);
//     })

//     id--;
// }

inputContainer.addEventListener('click', (event) => {
    let target = event.target.nodeName;
    onAdd(target);
});

mainInput.addEventListener('keyup', (event) => {
    let icon = document.querySelector('.fa-search');
    let text = event.target.value;
    text === '' ? icon.style.setProperty('visibility', 'visible') : icon.style.setProperty('visibility', 'hidden');
})

inputContainer.addEventListener('keyup', (event) => {
    let target = event.target.nodeName;
    let checkText = event.target.value;

    if(checkText !== '') commentBtn.classList.add('active');
    else commentBtn.classList.remove('active');
    

    const keycode = event.keyCode;
    if(keycode === 13) onAdd(target);
})