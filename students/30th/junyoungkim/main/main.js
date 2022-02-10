const thisIsComment = document.getElementsByClassName('comment-box')[0];

thisIsComment.addEventListener('keyup', function() {
  const commentBtnOn = document.getElementsByClassName('comment-btn')[0];

  if (thisIsComment.value) {
    commentBtnOn.disabled = false;
    commentBtnOn.classList.add('comment-btn-on')
  } else {
    commentBtnOn.disabled = true;
    commentBtnOn.classList.remove('comment-btn-on')
  }
})

thisIsComment.value




const commentBtn = document.getElementsByClassName('comment-btn')[0];
const thisIsCommentBox = document.querySelector('.comment-info')
const thisIsCommentWrite = document.querySelector('.comment-box')

const commentWrite = (event) => {
  const commentDiv = document.createElement('div');
  commentDiv.classList.add('comment')
  commentDiv.innerHTML = `<p><b>junzerokim</b>&nbsp;${thisIsCommentWrite.value}</p>
  <img class="comment-like-logo" src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png" alt="">`;
  thisIsCommentBox.append(commentDiv)
  thisIsCommentWrite.value = '';
};

const commentWriteEnter = (event) => {
  if (event.key === 'Enter') {
    const commentDiv = document.createElement('div');
    commentDiv.classList.add('comment')
    commentDiv.innerHTML = `<p><b>junzerokim</b>&nbsp;${thisIsCommentWrite.value}</p>
    <img class="comment-like-logo" src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png" alt="">`;
    thisIsCommentBox.append(commentDiv)
    thisIsCommentWrite.value = '';
  } else {
    return
  }
};

commentBtn.addEventListener('click', commentWrite)

thisIsCommentWrite.addEventListener('keypress', commentWriteEnter)