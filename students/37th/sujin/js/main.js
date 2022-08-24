const inputArea = document.querySelector('.input-area');
const input = inputArea.querySelector('input');
const pushButton = document.querySelector('.btn-push');
const moreButton = document.querySelector('.btn-more');
const likeButton = document.querySelector('.btn-like');

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

function createComment(e){
    e.preventDefault();

    const commentList = document.querySelector('.comment-list');
    const comment = document.createElement('li');

    commentList.appendChild(comment);
    comment.innerHTML = `<span class="id">test8282</span>${input.value}`

    input.value = '';
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

function activeLikeButton(){
    
}


