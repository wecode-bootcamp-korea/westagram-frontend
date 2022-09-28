const userId = document.querySelector('.comment_id').textContent;
const commentBox = document.querySelector('.like_box');
const commentInput = document.querySelector('.comment_input input')
const commentBtn = document.querySelector('.comment_input button')

window.addEventListener('keyup', (e) => {
  if(commentInput.value){
    commentBtn.style.color = "#0095f6"
  }
});
commentInput.addEventListener('keydown', (e)=>{
  if(commentInput.value && e.keyCode === 13){
    createComment();
  }
})
commentBtn.addEventListener('click', () => {
  if(commentInput.value){
    createComment();
  }
})

function createComment (){
  const addComment = document.createElement('p');
  const addCommentId = document.createElement('span');
  const addCommentCon = document.createElement('span');
  addCommentId.className = "comment_id"
  addCommentId.innerText = userId;
  addCommentCon.innerText = commentInput.value;
  commentBox.appendChild(addComment);
  addComment.appendChild(addCommentId);
  addCommentId.style.marginRight = "5px";
  addComment.appendChild(addCommentCon);
  commentInput.value = "";

}

