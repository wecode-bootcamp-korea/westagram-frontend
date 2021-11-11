const commentsList = document.getElementsByClassName('comments_list')[0];
const commentsInput = document.getElementsByClassName('comments_input')[0];
const commentsForm = document.getElementsByClassName('comments_box')[0];

commentsForm.addEventListener('submit', function(event){
  event.preventDefault();
  
  const li = document.createElement('li');

  li.innerHTML = `<span class="fixedName">dnjstd </span><span>${commentsInput.value}</span>`
  
  commentsList.appendChild(li);
  
  commentsInput.value = "";
});   


