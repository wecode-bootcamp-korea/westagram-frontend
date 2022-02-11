const commentBtn = document.getElementsByClassName('comment-add')[0];

function submit() {
  const comment = document.getElementsByClassName('comment-text')[0];
  
  
}

commentBtn.addEventListener('keydown', (e) => {
  submit();

});

commentBtn.addEventListener('click', (e) => {
  if (e.code === 'Enter')
  submit();
  
});