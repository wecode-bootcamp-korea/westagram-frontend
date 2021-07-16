const commentListBox = document.querySelector('.comment-list-box');
const commentInput = document.querySelector('.comment-write input');
const commentBtn = document.querySelector('.comment-write button');


function commentInputHandler(){
  const commentList = document.createElement('div');
  const commentContent = commentInput.value;
  commentList.className = 'comment-list'; // div 클래스 이름 .comment-list
  commentListBox.appendChild(commentList); // div를 .comment-list-box 하위로
 
  const commentIdBox = document.createElement('div');
  const commentContentBox = document.createElement('div');
  commentIdBox.className = 'comment-id-box';
  commentContentBox.className = 'comment-content-box';
  commentList.appendChild(commentIdBox);
  commentList.appendChild(commentContentBox);

  commentIdBox.innerText = 'cocacollllla';
  commentContentBox.innerHTML = commentContent; // 댓글내용을 div에 삽입
  commentInput.value = '';
}

commentInput.addEventListener('keyup', (e)=>{
  if (e.keyCode === 13) {
    commentInputHandler();
  }
});

commentBtn.addEventListener('click', (e)=>{
  commentInputHandler();
});