const inputArea = document.querySelector('.input-area');
const input = inputArea.querySelector('input');
const pushButton = document.querySelector('.btn-push');
const moreButton = document.querySelector('.btn-more');
const likeButton = document.querySelector('.btn-like');
const deleteButton = document.querySelector('.btn-delete');
const commentList = document.querySelector('.comment-list');

input.addEventListener('keyup', activeButton);
pushButton.addEventListener('click', createComment);
moreButton.addEventListener('click', showAllPost);

function activeButton(){
    const inputValue = input.value;
    
    if(!(inputValue)){
        pushButton.disabled = true
    } else {
        pushButton.disabled = false
    }
}
function showAllPost(){
    const post = document.querySelector('.post');

    if(post.classList.contains('hide')){
        post.classList.remove('hide');
        moreButton.innerText = '접기';
    } else {
        post.classList.add('hide');
        moreButton.innerText = '더보기';
    }
}

function createComment(e){
    e.preventDefault();

    const li = document.createElement('li')
    commentList.appendChild(li);

    li.innerHTML = `
    <span class="id">sujiny_829</span>
    <p class="comment-text">${input.value}</p>
    <button class="btn-like"><i class="fa-regular fa-heart" onclick="activeLikeButton(event)"></i></button>
    <button class="btn-delete" onclick="deleteComment(event)"><i class="fa-solid fa-trash-can"></i></button>
    `;

    input.value = '';
}

function activeLikeButton(e) {
    const likeButton = e.target;

    if(likeButton.classList.contains('fa-regular')){
        likeButton.classList.replace('fa-regular','fa-solid');
    } else {
        likeButton.classList.replace('fa-solid','fa-regular');
    }
}

function deleteComment(e) {
    const deleteButton = e.target;
    deleteButton.parentNode.parentNode.remove();
}



