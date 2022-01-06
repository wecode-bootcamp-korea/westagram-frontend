let section = document.querySelector(".feed-section");
let addCommentButton = document.querySelector(".add-comment");
let feedContent = document.querySelector(".feed-content");
let commentInput = document.querySelector(".comment");
let commentInputContainer = document.querySelector('.comment-container');
let userName = 'vittoria.kark';

addCommentButton.addEventListener("click", () => {
    let newComment = document.createElement("DIV");
    newComment.textContent = `${userName} ${commentInput.value}`;
    newComment.classList.add("comment-hidden");
    userName.classList.add("bold");
    section.insertBefore(newComment,commentInputContainer);
    commentInput.value = "";
})

commentInput.addEventListener("keydown", (event)=>{
  if(event.keyCode===13){
    let newComment = document.createElement("DIV");
    newComment.textContent = `vittoria.kark  ${commentInput.value}`;
    newComment.classList.add("comment-hidden");
    section.insertBefore(newComment,commentInputContainer);
    commentInput.value = "";
  }
})
