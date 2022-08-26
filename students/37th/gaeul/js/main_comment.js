// comment motion
const instaForm = document.querySelector('.lets-comment');
const commentWrap = document.querySelector('#comments-ul');
const commentInput = document.querySelector('#comment-input');
const commentBtn = document.querySelector('#comment-button');



// innerText , innerHTMl


// 댓글 추가
const addComment = (comment) => {

  // template literal 써보기! innerHTML

  const newComment = document.createElement('li');
  newComment.setAttribute('class', 'comment-li');

  const commentText = document.createElement('span');
  commentText.setAttribute('class', 'comment-text');
  commentText.innerHTML = `<em>ITS_ME</em>&nbsp;&nbsp;${comment}`;

  const commentBtnWrap = document.createElement('div');
  commentBtnWrap.setAttribute('class', 'comment-btn-wrap');

  const heartBtn = document.createElement('button');
  heartBtn.setAttribute('class', 'comment-heart-btn');
  heartBtn.innerHTML = '<i class="fa-regular fa-heart"></i>';

  const deleteBtn = document.createElement('button');
  deleteBtn.setAttribute('class', 'delete-btn');
  deleteBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>';

  newComment.appendChild(commentText)
  newComment.appendChild(commentBtnWrap)
  commentBtnWrap.appendChild(heartBtn)
  commentBtnWrap.appendChild(deleteBtn)
  
  commentWrap.appendChild(newComment)

  deleteBtn.addEventListener('click', () => {
    commentWrap.removeChild(newComment);
  });


  
  // 하트 온앤오프
  const whiteHeart = '<i class="fa-regular fa-heart"></i>';
  const redHeart = '<i class="fa-solid fa-heart"></i>';

  heartBtn.addEventListener('click', () => {
    if(heartBtn.innerHTML.includes('fa-regular')) {
      heartBtn.innerHTML = redHeart;
      heartBtn.style.color = 'red';
    } else if(heartBtn.innerHTML.includes('fa-solid')){
      heartBtn.innerHTML = whiteHeart;
      heartBtn.style.color = '#adafb1';
    }
  })
};



// 게시 버튼 활성화
instaForm.addEventListener('keyup', (e) => {
  if(e.target.value) {
    commentBtn.style.opacity = '1';
    }
});

instaForm.addEventListener("submit", (e) => {
  e.preventDefault();
    
  if(commentInput.value.trim().length !== 0) {
    e.disabled = false;
    addComment(commentInput.value);
  } else {
    e.disabled = true;
  };

  commentInput.value = "";
  commentBtn.style.opacity = '0.5';
});



/*
예시!
function makeDeleteEvent(newCommentList) {
  const deletBtn
  deleteBtn.addEventListener('click', deleteComment)
  deleteComment(deleteBtn, newCommentList)
}
*/


