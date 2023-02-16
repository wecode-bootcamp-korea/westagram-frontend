const comment = document.querySelector('.inp_comment');
const commentList = document.createElement('li');
const commentText = document.querySelector('.list_comment').appendChild(commentList);

comment.addEventListener('keypress', function(key){
const commentValue = comment.value;
  if(key.key === 'Enter'){
    // console.log(commentList)
    document.querySelector('.list_comment').appendChild(commentList);
    commentText.innerHTML = commentValue;
    console.log(commentValue);
  }
})

const onLoginSubmit = (event) => {
  event.preventDefault();
  console.log(event);
};

formComment.addEventListener("submit", onLoginSubmit);