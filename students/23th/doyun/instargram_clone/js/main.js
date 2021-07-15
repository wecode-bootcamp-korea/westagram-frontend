const commentInput = document.getElementsByClassName('comment')[0];
const commentBtn = document.getElementsByClassName('fa-check')[0];
const likeButton = document.getElementsByClassName('commentLine')[0];

likeButton.addEventListener('click', (e) => {
   console.log(e.target);
   const item = e.target;
   //delete
   if (item.classList[0]==='fas'){
    const commentCon = document.getElementsByClassName('commentContainer')[0]
    commentCon.remove()
   } 
   //like
   if (item.classList[0]==='fa') {
     item.parentElement.classList.toggle('active');
   }
 })

const makeComment = () => {
    
  const container = document.createElement('div'); 
  container.className = 'commentContainer';

  const userImg = document.createElement('img');
  userImg.src = './img/profile.png';
  userImg.className = 'profile';
  container.appendChild(userImg);

  const innerContainer = document.createElement('div');
  container.appendChild(innerContainer);

  const userId = document.createElement('span');
  userId.innerHTML = 'Doyun';
  userId.className = 'name';
  innerContainer.appendChild(userId);

  const comment = document.createElement('span');
  comment.innerHTML = commentInput.value;
  comment.className = 'comValue';
  innerContainer.appendChild(comment);

  const imoBox = document.createElement('span')
  innerContainer.appendChild(imoBox);

  const likeBtn = document.createElement('button');
  likeBtn.className = 'like';
  likeBtn.innerHTML = '<i class="fa fa-thumbs-up"></i>'
  imoBox.appendChild(likeBtn);

  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'delete';
  deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>'
  imoBox.appendChild(deleteBtn);
  
  document.getElementsByClassName('commentLine')[0].appendChild(container);

  commentInput.value = ''; 
}

commentBtn.addEventListener('click', makeComment)
