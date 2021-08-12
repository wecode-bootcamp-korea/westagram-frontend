const commentBarContent = document.querySelector('.commentBarContent');
const commentBarPostbtn = document.querySelector('.commentBarPostbtn');
const comment = document.querySelector('.comment');
const articlediv = document.querySelector('.article');
const descriptionBar = document.querySelector('.descriptionBar')

commentBarPostbtn.addEventListener('click', addComment);

function addComment() {
  console.log('hello');
  const addCommentPtag = document.createElement('p');
  addCommentPtag.innerHTML = commentBarContent.value;
  comment.appendChild(addCommentPtag);
};