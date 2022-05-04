const postingBtn = document.querySelector('.posting-btn');
const commentInput = document.querySelector('.comment-text');
const commentContainer = document.querySelector('.comment-container');
const nextBtn = document.querySelector('.fa-circle-chevron-right');
const storyContainer = document.querySelector('.story-container');
const beforeBtn = document.querySelector('.before-btn');
const heartBtn = document.querySelector('.fa-heart');


// input.value.length > 0 일때, 버튼 활성화
commentInput.addEventListener('keyup',()=>{
    // if(commentInput.value.length > 0){
    //     postingBtn.classList.add('button-active');
    //     postingBtn.disabled = false;
    // }else{
    //     postingBtn.classList.remove('button-active');
    //     postingBtn.disabled = true;
    // }
    activateBtn();
});

// 댓글추가
postingBtn.addEventListener('click',()=>{
    if(commentInput.value !== ""){
        const item = createElement();  
        onAdd(item);
    }
    //createElement();
    // commentInput.value = '';
});

commentInput.addEventListener('keyup',(e)=>{
    if(e.code === "Enter"){
        if(commentInput.value !== ""){
            const item = createElement();
            onAdd(item);  
        }
        
        //createElement();
        // commentInput.value = '';    
    }
});

// function createElement(){
//     const commentContent = commentInput.value;
//     const newComment = document.createElement('div');
//     newComment.innerHTML = commentContent;
//     commentContainer.appendChild(newComment);
// }
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
                                    <i class="fa-solid fa-trash comment-delete"></i>
                                    <i class="fa-regular fa-heart comment-heart"></i>    
                            </div>`
    // commentContainer.appendChild(newComment);
    id++;
    return newComment;
}

function onAdd(item){
    commentContainer.appendChild(item);
    commentInput.value = '';
}

function activateBtn(){
    if(commentInput.value.length > 0){
        postingBtn.classList.add('button-active');
        postingBtn.disabled = false;
    }else{
        postingBtn.classList.remove('button-active');
        postingBtn.disabled = true;
    }
}

nextBtn.addEventListener('click',()=>{
    storyContainer.style.transform = `translateX(-200px)`;
})