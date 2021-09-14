"use strict"

const [commentInput] = document.getElementsByClassName('post');
const [submit] = document.getElementsByClassName('submit');

commentInput.addEventListener('keyup',submitBtn);

function submitBtn(){
    commentInput.value.length !== 0 ? submit.disabled = false : submit.disabled = true;
}
/* ---------------------------------------- */
/* 댓글 생성 */
/* ---------------------------------------- */
function enterComment() {
    const [comments] = document.getElementsByClassName('comments')
    const newComment = document.createElement('li');
    const comment = `
    <b>dltjsgho</b> 
    ${commentInput.value} 
    <span class="commentLikes"></span>
    <span class="deleted">x</span>
    `; 

    newComment.innerHTML = comment
    comments.appendChild(newComment);
    commentInput.value= '';

/* ---------------------------------------- */
/* heart생성 */
/* ---------------------------------------- */
    const overSizeHeart = newComment.querySelector('.commentLikes');
    const heartIcon = document.createElement("img");

    overSizeHeart.appendChild(heartIcon)
    heartIcon.setAttribute("src", "../img/heart.png");
    
/* ---------------------------------------- */
/* 댓글 삭제 */
/* ---------------------------------------- */
    const deleteTxt = newComment.querySelector('.deleted');

    deleteTxt.addEventListener('click', () => {
        newComment.remove();
    })

}

commentInput.addEventListener('keyup',function(e){
    if(e.code === 'Enter' && commentInput.value.length > 0) {
        enterComment();
    }
    submitBtn();
})
submit.addEventListener('click',()=>{
    if(commentInput.value.length > 0) {
        enterComment();
    }
    submitBtn()
})



