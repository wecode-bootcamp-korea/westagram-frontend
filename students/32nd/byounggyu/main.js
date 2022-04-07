const button = document.getElementById("btn");
const addComment = document.getElementsByClassName("addComment")[0];

function commentPosting () {
  const comments = document.getElementsByClassName('comments')[0];
  const newComment = document.createElement('div');
  const comment = `
  <span class = "userid">wecode_bootcamp</span>
  ${addComment.value}
  `
  newComment.innerHTML = comment;
  comments.appendChild(newComment);
  addComment.value = '';
}

function postByClick () {
  if (addComment.value.length > 0) {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
}

addComment.addEventListener('keyup', function(event) {
  if(event.keyCode === 13 && addComment.value.length > 0) {
      commentPosting();
  }
  postByClick();
});

addComment.addEventListener('click', function() {
  if (addComment.value.length > 0) {
    commentPosting();
  }
  postByClick();
});