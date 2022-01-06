let addCommentButton = document.querySelector('.add-comment');
let feedContent = document.querySelector('.feed-content');
let commentInput = document.querySelector('.comment');
let timeStamp = document.querySelector('.feeds-minute');

addCommentButton.addEventListener('click', ()=>{
    if(commentInput.value.length > 0){
        let newComment = document.createElement('DIV');
        newComment.textContent = `vittoria.kark  ${commentInput.value}`;
        newComment.classList.add('comment-hidden');
        
        feedContent.appendChild(newComment);
        
        commentInput.value = "";
        return timeStamp.style.marginTop;
    }
    }
)

