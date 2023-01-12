
const commentInput = document.querySelector(".commentWrite")
const commentBtn = document.querySelector(".commentWriteButton")

// 댓글 버튼 활성화 //

function commentBtnOnOff(){
    if(commentInput.value.length !== 0){
    commentBtn.style.color = '#3E7FDE';
    commentBtn.disabled = false;
  } else {
    commentBtn.style.color = '#BCD5F0';
    commentBtn.disabled = true;
  }
}

commentInput.addEventListener('keyup', commentBtnOnOff);

//// 댓글 추가 //

const commentBox = document.querySelector('.commentBox');

function addNewComment() {
  const newCommentLocation = document.querySelector('.commentBox');
  const newComment = document.createElement('li');

  newComment.innerHTML = `
    <div class="newComment">
      <b>blushcats</b>
      <span>${commentInput.value}</span>
    </div>
  `;

  newCommentLocation.appendChild(newComment);
  commentInput.value = '';
}

commentBtn.addEventListener('click', addNewComment)
commentInput.addEventListener('keypress', function(){
  if (window.event.keyCode == 13) {
  addNewComment();
  }
});

