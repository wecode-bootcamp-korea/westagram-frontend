const commentUl = document.querySelector('.commentText');
const commentInput = document.querySelector('.commentInput');
const commentBtn = document.querySelector('.commentBtn');

commentBtn.addEventListener('click',()=>{
    const commentLi = document.createElement('li')
    const commentId = document.createElement('p')
    const commentText = document.createElement('p')
    commentId.className = 'commentUserId';
    commentText.className = 'commentUserText';

    commentUl.appendChild(commentLi)
    commentLi.appendChild(commentId)
    commentLi.appendChild(commentText)

    
    commentId.innerHTML="forest_xox"
    commentText.innerHTML=commentInput.value;
    commentInput.value=""
})
commentInput.addEventListener('keyup',(e)=>{
    if(e.code==="Enter"){
    const commentLi = document.createElement('li')
    const commentId = document.createElement('p')
    const commentText = document.createElement('p')
    commentId.className = 'commentUserId';
    commentText.className = 'commentUserText';

    commentUl.appendChild(commentLi)
    commentLi.appendChild(commentId)
    commentLi.appendChild(commentText)
    
    commentId.innerHTML="forest_xox"
    commentText.innerHTML=commentInput.value;
    commentInput.value=""
    
    }
})

const heart = document.querySelector('.fa-heart');
const redHeart = document.querySelector('#redHeart');
let heartVal = 0;

heart.addEventListener('click',()=>{
    (heartVal === 0) ?
        (heartVal++,
        heart.classList.add('redHeart'),
        heart.classList.remove('fa-regular'),
        heart.classList.add('fa-solid')) :
        (heartVal--,
        heart.classList.remove('redHeart'),
        heart.classList.add('fa-regular'),
        heart.classList.remove('fa-solid'))
});
