let comments = document.querySelector('.comments');
let commentInput = document.querySelector('.new-comment input');
const uploadBtn = document.querySelector('.upload-btn');
const deleteBtn = document.querySelector('.delete-btn');

function uploadComment() {
  const newCommentWrap = document.createElement('div');
  const newCommentId = document.createElement('span');
  const newComment = document.createElement('span');
  const newCommentDel = document.createElement('span');
  newCommentWrap.className = "comment";
  newCommentId.className = "commenter user-id";
  newComment.innerHTML = commentInput.value;
  newCommentId.innerHTML = "imInSSa";
  newCommentDel.innerHTML = `<button type="button" class="delete-btn">
                              <img alt="delete-btn" src="./images/cancel.png" class="delete-icon" />
                            </button>`;
  newCommentWrap.appendChild(newCommentId);
  newCommentWrap.appendChild(newComment);
  newCommentWrap.appendChild(newCommentDel);
  comments.appendChild(newCommentWrap);
  commentInput.value = '';
};

commentInput.addEventListener('keydown', function(key) {
  if (commentInput.value && key.keyCode == 13) {
    uploadComment();
  }
});

uploadBtn.addEventListener('click', function(e) {
  if (commentInput.value && e.target.innerHTML == '게시') {
    uploadComment();
  }
});

deleteBtn.addEventListener('click', function(e) {
  console.log(e.currentTarget); // btn
  const delComment = e.currentTarget.parentNode; // comment
  delComment.remove();
});