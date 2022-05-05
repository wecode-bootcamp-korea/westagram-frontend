const postingBtn = document.querySelector('.posting-btn');
const commentInput = document.querySelector('.posting-input');
const commentContainer = document.querySelector('.comment-container');
const nextBtn = document.querySelector('.next-btn');
const storyContainer = document.querySelector('.story-container');
const beforeBtn = document.querySelector('.before-btn');
const heartBtn = document.querySelector('.fa-heart');

postingBtn.addEventListener('click',()=>{
    console.log(ddd)
})

const character = [
    {
        nickName : "I'm_sham",
        imageName : 'cat0'
    },
    {
        nickName : "good_day",
        imageName : 'cat1'
    },
    {
        nickName : "Samsek's_day",
        imageName : 'cat2'
    },
    {
        nickName : "cat_lover",
        imageName : 'cat3'
    },
    {
        nickName : "I_love_cats",
        imageName : 'cat4'
    },
    {
        nickName : "Let's_play",
        imageName : 'cat5'
    },
    {
        nickName : "lovely_dubly",
        imageName : 'cat6'
    },
    {
        nickName : "Nyaonng",
        imageName : 'cat7'
    },
    {
        nickName : "Miaong",
        imageName : 'cat8'
    },
    {
        nickName : "Mia",
        imageName : 'cat9'
    },
];

character.forEach((item)=>{
    const storyItem = document.createElement('div');
    storyItem.setAttribute('class','story-item');
    storyItem.innerHTML = `<img src="image/${item.imageName}.jpg" alt="cat">  
                           <div>${item.nickName}</div>`
    storyContainer.appendChild(storyItem);
});

nextBtn.addEventListener('click',()=>{
    storyContainer.style.transform = `translateX(-230px)`;
    nextBtn.style.display = 'none';
    beforeBtn.style.display = 'block';
});

beforeBtn.addEventListener('click',()=>{
    storyContainer.style.transform = `translateX(0px)`;
    nextBtn.style.display = 'block';
    beforeBtn.style.display = 'none';
});

commentInput.addEventListener('keyup',()=>{
    console.log('ddd')
    activateBtn();
});

postingBtn.addEventListener('click',()=>{
    if(commentInput.value !== ""){
        const item = createElement();  
        onAdd(item);
        activateBtn();
    }
});

commentInput.addEventListener('keyup',(e)=>{
    if(e.code === "Enter"){
        if(commentInput.value !== ""){
            const item = createElement();
            onAdd(item);  
            activateBtn();
        } 
    }
});

function activateBtn(){
    if(commentInput.value.length > 0){
        postingBtn.classList.add('button-activate');
        postingBtn.disabled = false;
    }else{
        postingBtn.classList.remove('button-activate');
        postingBtn.disabled = true;
    }
};

let id = 0;
function createElement(){
    const commentContent = commentInput.value;
    const newComment = document.createElement('div');
    newComment.classList.add('comment-letter');
    newComment.setAttribute('data-id',id)
    newComment.innerHTML = `<div class="comment-letter-left">
                                <span class="comment-nickname">Naman_himdurum</span>
                                <span>${commentContent}</span>
                            </div>
                            <div class="comment-letter-right">
                                    <i class="fa-solid fa-trash comment-delete" data-id=${id}></i>
                                    <i class="fa-regular fa-heart comment-heart" data-id=${id}></i>    
                            </div>`
    id++;
    return newComment;
};

function onAdd(item){
    commentContainer.appendChild(item);
    commentInput.value = '';
};

let heartClicked = false;
commentContainer.addEventListener('click',(e)=>{
    const id = e.target.dataset.id;
    if((id && e.target.tagName === 'I') && e.target.classList.contains('comment-heart')){
        const clicked = document.querySelector(`.comment-heart[data-id="${id}"]`);
        heartClicked = !heartClicked;
        if(heartClicked === true){
            clicked.classList.add('heart-btn-color');
        }else{
            clicked.classList.remove('heart-btn-color');
        }
    }else if((id && e.target.tagName === 'I') && e.target.classList.contains('comment-delete')){
        const deleted = document.querySelector(`.comment-letter[data-id="${id}"]`);
        deleted.remove();
    }
});