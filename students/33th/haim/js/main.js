const postCommentInInput = function () {

const commentInput = document.querySelector('.commentBox');
const btnInInput = document.querySelector('.commentBtn');
  
const addNewComment = function () {
const newCommentLocation = document.querySelector('.commentList');
const newComment = document.createElement('li');


newComment.innerHTML = `
  <b>iAmNew</b>
  <span>${commentInput.value}</span>
`;

newCommentLocation.appendChild(newComment);
    // commentInput.value = '';
  }

    commentInput.addEventListener('keyup', () => {
    if ( commentInput.value.lenghth > 0) {
        // btnInInput.classList.add('readyForPosting') 
        addNewComment();
    } 
  });

  btnInInput.addEventListener('click', () => {
    if (commentInput.value) {
       addNewComment();
    } 
});

}

postCommentInInput();