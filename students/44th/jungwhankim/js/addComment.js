let addBtn = document.getElementById('addButton');
let inputField = document.getElementById('inputField');
let commentList = document.getElementById('commentSection');


addBtn.addEventListener('click', addComment);

inputField.addEventListener('keydown', function(event) {
  if (event.keyCode === 13) {
    addComment();
  }
})

// 댓글을 추가하는 함수
function addComment() {
  var commentItem = document.createElement('div');
  
  if (!inputField.value) {
    alert('내용을 입력해주세요!');
  } else {
    commentItem.innerText = inputField.value;

    // like 기능과 delete 기능을 감쌀 div 생성
    const commentFeatures = document.createElement('div');
    commentFeatures.classList.add('comment-features');

    // 댓글마다 삭제 기능 div 생성
    const deleteButton = document.createElement('div');
    deleteButton.innerHTML ='삭제';
    deleteButton.classList.add('deleteBtn');

    // 버튼이 눌리면 해당 아이템 삭제
    deleteButton.addEventListener('click', () => {
      commentList.removeChild(commentItem);
      console.log(commentItem);
      console.log(this.commentItem);
    })

    // 댓글마다 라이크 기능 div 생성
    const commentLikeBtn = document.createElement('div');
    commentLikeBtn.classList.add('comment-like');

    commentLikeBtn.addEventListener('click', () => {
      if (commentLikeBtn.className == "comment-like") {
        commentLikeBtn.classList.remove('comment-like');
        commentLikeBtn.classList.add('comment-like-clicked');
      } else if (commentLikeBtn.className == "comment-like-clicked") {
        commentLikeBtn.classList.remove('comment-like-clicked');
        commentLikeBtn.classList.add('comment-like');
      }
    })
    
    // commentFeatures에 라이크 div, 삭제 div 추가
    commentFeatures.appendChild(commentLikeBtn);
    commentFeatures.appendChild(deleteButton);

    // commentItem에 commentFeatures div 추가
    commentItem.appendChild(commentFeatures);
    commentList.appendChild(commentItem);
    commentItem.classList.add('single-comment');
    // 인풋창 초기화
    inputField.value = '';

    console.log(commentList);
  }
  
}
