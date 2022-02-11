const commentInput = document.getElementsByClassName('comment-text')[0];
const commentBtn = document.getElementsByClassName('comment-add');

function submit() {
  const comment = document.getElementsByClassName('comment-text')[0];
  const commentList = document.getElementsByClassName('feed-commentlist')[0];
  
  const newcomment = commentList.appendChild("li");
  
  newcomment.value = comment.value;
}

console.log(commentBtn);

// commentBtn.addEventListener('click', (e) => {
//   submit();
//   commentInput.value = '';
// });

// commentInput.addEventListener('keydown', (e) => {
//   if (e.code === 'Enter') {
//     submit();
//     commentInput.value = '';
//   }
// });