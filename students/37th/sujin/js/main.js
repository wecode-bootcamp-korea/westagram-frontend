const search = document.querySelector('.search');
const inputArea = document.querySelector('.input-area');
const input = inputArea.querySelector('input');
const commentList = document.querySelector('.comment-list');

const dimMyPageLayer = document.querySelector('.dim-layer.mypage ');
const dimMyPageLayerBg = dimMyPageLayer.querySelector('.dim-bg');

const dimSearchLayer = document.querySelector('.dim-layer.search-results');
const dimSearchLayerBg = dimSearchLayer.querySelector('.dim-bg');
const searchListBox = dimSearchLayer.querySelector('.modal');

const pushButton = document.querySelector('.btn-push');
const moreButton = document.querySelector('.btn-more');
const likeButton = document.querySelector('.btn-like');
const deleteButton = document.querySelector('.btn-delete');
const profileButton = document.querySelector('button.profile-box');

input.addEventListener('keyup', activeButton);
pushButton.addEventListener('click', createComment);
moreButton.addEventListener('click', showAllPost);

profileButton.addEventListener('click', () => {
    dimMyPageLayer.classList.add('on');
});
dimMyPageLayerBg.addEventListener('click', () => {
    dimMyPageLayer.classList.remove('on');
});

search.addEventListener('click', () => {
    dimSearchLayer.classList.add('on');
})
dimSearchLayerBg.addEventListener('click', () => {
    dimSearchLayer.classList.remove('on');
})

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

const dummyArray = [
    {
        id: 'apple',
        name: '사과',
        url: '../img/feed01.jpg'
    },
    {
        id: 'abc',
        name: '라랄',
        url: '../img/feed01.jpg'
    },
    {
        id: 'all',
        name: '배',
        url: '../img/feed01.jpg'
    },
    {
        id: 'ass',
        name: '포도',
        url: '../img/feed01.jpg'
    },
    {
        id: 'akkkkk',
        name: '파인애플',
        url: '../img/feed01.jpg'
    }
]
search.addEventListener('keyup', () => {
     searchListBox.innerHTML = '';

    if(search.value){
        const filterID = dummyArray.filter( el => matchSearch(el.id))
        if (filterID){
            filterID.forEach((el)=> {
                showList(el)
            })
        }
    } 
});
function matchSearch(val){
    const searchID = search.value;
    return val.indexOf(searchID) != -1;
}
function showList(id){
    const searchNameList = document.createElement('li');
    searchNameList.classList.add('result');
    searchListBox.appendChild(searchNameList);
    searchNameList.innerHTML = `
        <img src="${id.url}" alt="강아지">
        <p>
            <span class="nickname">${id.id}</span>
            <span class="myname">${id.name}</span>
        </p>
    `;
}


