const section = document.querySelector(".feed-section");
const addCommentButton = document.querySelector(".add-comment");
const feedContent = document.querySelector(".feed-content");
const commentInput = document.querySelector(".comment");
const commentInputContainer = document.querySelector('.comment-container');
let userName = 'vittoria.kark';



addCommentButton.addEventListener("click", () => {
    const newComment = document.createElement("DIV");
    newComment.textContent = `${userName} ${commentInput.value}`;
    newComment.classList.add("comment-hidden");
    userName.classList.add("bold");
    section.insertBefore(newComment,commentInputContainer);
    commentInput.value = "";
})

commentInput.addEventListener("keydown", (event)=>{
  if(event.keyCode===13){
    const newComment = document.createElement("DIV");
    newComment.textContent = `vittoria.kark  ${commentInput.value}`;
    newComment.classList.add("comment-hidden");
    section.insertBefore(newComment,commentInputContainer);
    commentInput.value = "";
  }
})
