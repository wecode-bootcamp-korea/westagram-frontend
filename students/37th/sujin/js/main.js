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
// commentList.addEventListener('click', (e) => {
//     const likeTarget = e.target;
//     if(likeTarget.classList.contains('fa-regular')){
//         likeTarget.classList.replace('fa-regular', 'fa-solid');
//     } else {
//         likeTarget.classList.replace('fa-solid', 'fa-regular');
//     }
//     const name = likeTarget.getAttribute('class');

//     if(name || 'fa-trash-can' || 'fa-regular'){
//         likeTarget.parentNode.parentNode.remove();
//         console.log(likeTarget.parentNode.parentNode);
//     } 

//     // console.log(typeof(name));    
// });


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

    const li = document.createElement('li');
    // const span = document.createElement('span');
    // const p = document.createElement('p');
    // const button1 = document.createElement('button');
    // const button2 = document.createElement('button');
    // const icon1 = document.createElement('i');
    // const icon2 = document.createElement('i');

    // span.classList.add('id');
    // p.classList.add('comment-text');
    // button1.classList.add('btn-like');
    // button2.classList.add('btn-delete');
    // icon1.classList.add('fa-regular', 'fa-heart');
    // icon2.classList.add('fa-solid', 'fa-trash-can');

    commentList.appendChild(li);
    // li.appendChild(span).innerText = 'test1234';
    // li.appendChild(p).innerText = `<span class="sdnflsd">${input.value}`;
    // li.appendChild(button1);
    // li.appendChild(button2);
    // button1.appendChild(icon1);
    // button2.appendChild(icon2);

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
    // const heartIcon = likeButton.childNodes;

    // if((heartIcon.classList.contains('fa-regular'))){
    //     heartIcon.classList.replace('fa-regular','fa-solid')
    // } else{
    //     heartIcon.classList.replace('fa-solid','fa-regular')
    // }

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



