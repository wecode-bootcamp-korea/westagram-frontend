const userId = document.querySelector('.comment_id').textContent;
const commentBox = document.querySelector('.like_box');
const commentInput = document.querySelector('.comment_input input');
const commentBtn = document.querySelector('.comment_btn');
const commentForm = document.querySelector('.comment_input');

window.addEventListener('keyup', () => {
  if(commentInput.value){
    commentBtn.disabled = false;
    commentBtn.style.color = "#0095f6";
    console.log(commentBtn.disabled);
  }
});
// commentInput.addEventListener('keydown', (e)=>{
//   if(commentInput.value && e.keyCode === 13){
//     createComment();
//   }
// })
// commentBtn.addEventListener('click', () => {
//   if(commentInput.value){
//     createComment();
//   }
// })
commentForm.addEventListener('submit', (e) => {
  e.preventDefault();
  createComment();
})

function createComment (){
  //댓글생성
  const addComment = document.createElement('p');
  addComment.className = "add";
  const addCommentId = document.createElement('span');
  addCommentId.className = "comment_id";
  addCommentId.innerText = userId;
  const addCommentCon = document.createElement('span');
  addCommentCon.innerText = commentInput.value;

  const addHeart = document.createElement('span');
  addHeart.className = "comment_heart";
  const icon = document.createElement('i');
  icon.className = "fa-regular fa-heart";
  addHeart.appendChild(icon);
  const addDelete = document.createElement('a');
  addDelete.innerText = "삭제";

  commentBox.appendChild(addComment);
  addComment.appendChild(addCommentId);
  addComment.appendChild(addCommentCon);
  addComment.appendChild(addHeart);
  addComment.appendChild(addDelete);
  //input박스 초기화
  commentInput.value = "";

  //댓글 삭제
  addDelete.addEventListener('click',() => {
    addComment.remove();
  });
  //댓글 좋아요 기능
  addHeart.addEventListener('click', () => {
    console.log(icon);
    if(icon.className === "fa-regular fa-heart"){
      icon.className = "fa-solid fa-heart";
    }else {
      icon.className = "fa-regular fa-heart";
    }
  });

}

//포스트 좋아요 기능
const postLike = document.querySelector('.like_button');

postLike.addEventListener('click', () => {
  if(postLike.firstChild.className === ""){
    postLike.firstChild.className = "hide";
    postLike.lastChild.className = "";
    postLike.lastChild.style.opacity = 1;
  }else {
    postLike.firstChild.className = "";
    postLike.lastChild.className = "hide";
  }
})




