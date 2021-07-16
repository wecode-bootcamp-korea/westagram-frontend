//variables

const commentInput = document.getElementsByClassName('comment')[0];
const commentBtn = document.getElementsByClassName('fa-check')[0];
const likeButton = document.getElementsByClassName('commentLine')[0];
const searchBar = document.getElementsByClassName('navSearch')[0];

//array
const nameData = ["billie", "dua_lipa", "wustar"]

//functions

const likeAndDelete = (e) => {
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
}

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

const idFilter = (e) => {
  const keyValue = e.target.value;
  console.log(keyValue)
  const result = nameData.filter(n => {
    if (n.slice(0, keyValue.length)===keyValue && keyValue) {
      document.getElementsByClassName(n)[0].className = `storyContents ${n} on`
      document.getElementsByClassName('searchContainer')[0].className = `searchContainer on`
    } else if(!keyValue) {
      document.getElementsByClassName(n)[0].className = `storyContents ${n}`
      document.getElementsByClassName('searchContainer')[0].className = `searchContainer`
    }
  })
}

//addEventListner

commentBtn.addEventListener('click', makeComment);
likeButton.addEventListener('click', likeAndDelete);
searchBar.addEventListener('keyup', idFilter);
