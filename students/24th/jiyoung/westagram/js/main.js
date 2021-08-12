let comments = document.querySelector('.comments');
let comment = document.querySelector('.new-comment input');
const uploadBtn = document.querySelector('.upload-btn');

function uploadComment() {
  const newCommentWrap = document.createElement('div');
  const newCommentId = document.createElement('span');
  const newComment = document.createElement('span');
  const newCommentLike = document.createElement('span');
  newCommentWrap.className = "comment";
  newCommentId.className = "commenter user-id";
  newComment.innerHTML = comment.value;
  newCommentId.innerHTML = "imInSSa";
  newCommentLike.innerHTML = '<img src="./images/heart.png" alt="like-btn" class="like-icon" />';
  newCommentWrap.appendChild(newCommentId);
  newCommentWrap.appendChild(newComment);
  newCommentWrap.appendChild(newCommentLike);
  comments.appendChild(newCommentWrap);
  comment.value = '';
};

comment.addEventListener('keydown', function(key) {
  if (comment.value && key.keyCode == 13) {
    uploadComment();
  }
});

uploadBtn.addEventListener('click', function(e) {
  if (comment.value && e.target.innerHTML == '게시') {
    uploadComment();
  }
}); 