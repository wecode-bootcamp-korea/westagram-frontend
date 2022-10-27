const commentInput = document.querySelector('.comment-input');
const commentBtn = document.querySelector('.comment-btn');
const commentEl = document.querySelector('.comment');
const commentsEl = document.querySelector('.comments');
const deleteEl = document.querySelector('.delete');
const heartEl = document.querySelectorAll('.heart');
const bookmarkEl = document.querySelector('.bookmark');
const rightFooter = document.querySelector('.right-footer');
const logoutEl = document.querySelector('.logout');
const personIconEl = document.querySelector('.person');
const menuBoxEl = document.querySelector('.menuBox');

//댓글 추가기능
commentInput.addEventListener('keydown', function cmtBtnActive(e){
  if(commentInput.value.length>=1){
    commentBtn.style.color = '#0095f6';
    commentBtn.style.cursor = 'pointer';
    commentInput.style.color = 'black';
    if(e.keyCode === 13){
      addComment();
    }
  }else {
    commentBtn.style.color = '#c4e1fb';
    commentBtn.style.cursor = null;
  }

});


commentBtn.addEventListener('click', function clickComment(){
  if(commentInput.value.length >= 1){
    addComment();
  }
});

//댓글 추가함수
function addComment(){
  let comment = commentInput.value;
  const commentDiv = document.createElement('div')
  commentDiv.className = 'comment';
  const commentUserH3 = document.createElement('h3');
  commentUserH3.className = 'comment-user';
  commentUserH3.innerHTML = 'dong_s_37';
  const commentTextH4 = document.createElement('h4');
  commentTextH4.className = 'comment-text';
  commentTextH4.innerHTML = comment;
  const commentDeleteDiv = document.createElement('div');
  commentDeleteDiv.className = 'material-symbols-outlined delete';
  commentDeleteDiv.innerHTML = 'delete';
  const commentHeartDiv = document.createElement('div');
  commentHeartDiv.className = 'material-symbols-outlined heart';
  commentHeartDiv.innerHTML = 'favorite';

  commentDiv.appendChild(commentUserH3);
  commentDiv.appendChild(commentTextH4);
  commentDiv.appendChild(commentDeleteDiv);
  commentDiv.appendChild(commentHeartDiv);

  commentsEl.appendChild(commentDiv);
  commentInput.value = null;

  //추가된 댓글에 좋아요기능
  commentHeartDiv.addEventListener('click', function fillHeart(){
    if(commentHeartDiv.className == 'material-symbols-outlined heart'){
      commentHeartDiv.className = 'material-icons heart';
      commentHeartDiv.style.color = "#ed4956";
    } else {
      commentHeartDiv.className = 'material-symbols-outlined heart';
      commentHeartDiv.style.color = null;
    }
  })

  //추가된 댓글 삭제기능
  commentDeleteDiv.addEventListener('click',function deleteComment(){
    commentDiv.style.display = 'none';
  })


}

//좋아요버튼
  heartEl[0].addEventListener('click', function fillHeart(){
    const likeNumEl = document.querySelector('.likeNum');
    if(heartEl[0].className == 'material-symbols-outlined heart'){
      heartEl[0].className = 'material-icons heart';
      heartEl[0].style.color = "#ed4956";
      likeNumEl.innerHTML = '외 11명';
    } else {
      heartEl[0].className = 'material-symbols-outlined heart';
      heartEl[0].style.color = null;
      likeNumEl.innerHTML = '외 10명';
    }
  });
  heartEl[1].addEventListener('click', function fillHeart(){
  
    if(heartEl[1].className == 'material-symbols-outlined heart'){
      heartEl[1].className = 'material-icons heart';
      heartEl[1].style.color = "#ed4956";
    } else {
      heartEl[1].className = 'material-symbols-outlined heart';
      heartEl[1].style.color = null;
    }
  });


//댓글 삭제기능
deleteEl.addEventListener('click',function deleteComment(){
  commentEl.style.display = 'none';
})

//북마크 버튼
bookmarkEl.addEventListener('click',function fillBookmark(){
  if(bookmarkEl.className == 'material-symbols-outlined bookmark'){
    bookmarkEl.className = 'material-icons bookmark';
  } else {
    bookmarkEl.className = 'material-symbols-outlined bookmark';
  }
})
//반응형
const rightEl = document.querySelector('.main-right');
const mainEl = document.querySelector('.main');
const feedsEl = document.querySelector('.feeds');
const searchIcon = document.querySelectorAll('.topSearch')[0];
const searchInput = document.querySelectorAll('.topSearch')[1];

if ( window.innerWidth <=800){
  rightEl.style.display = 'none';
  feedsEl.style.marginLeft = 15 + '%';
  searchIcon.style.display = 'none';
  searchInput.style.display = 'none';
}

window.addEventListener('resize',function resize(){
  if ( window.innerWidth <=800){
    rightEl.style.display = 'none';
    feedsEl.style.marginLeft = 15 + '%';
    searchIcon.style.display = 'none';
    searchInput.style.display = 'none';
    // rightFooter.style.

  }else {
    rightEl.style.display = null;
    feedsEl.style.marginLeft = null;
    searchIcon.style.display = null;
    searchInput.style.display = null;
  }
})

logoutEl.addEventListener('click',function logout(){
  window.location.href = './login.html';
})

personIconEl.addEventListener('click',function menuOpen(){
  if(menuBoxEl.style.display == 'none'){
    menuBoxEl.style.display = 'block';
    // menuBoxEl.animate(all,5000);
  }else {
    menuBoxEl.style.display = 'none';
  }
})

//검색 기능
const users =['dong_s_37','milk','wecode','wework','starbucks','kfc','mcdonald'];


/**
 * 검색 조건에 따른 배열 필터링(쿼리)
 */
function filterUsers(query) {
  return users.filter(function(el) {
      return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
  })
}
function filterImgs(query) {
  return imgs.filter(function(el) {
      return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
  })
}

const searchUserEl = document.querySelector('.searchUser');
let inputvalue;
searchInput.addEventListener('keyup',function searchUser(e){
  const userDiv = document.querySelectorAll('.searchedUser');
  for(let i=0; i<userDiv.length;i++){
    searchUserEl.removeChild(userDiv[i]);
    }
  if(searchInput.value.length >= 1){
    searchUserEl.style.display = 'block';
    searchIcon.style.display = 'none';
  
    search();
    
  }else {
    searchUserEl.style.display = 'none';
    searchIcon.style.display = 'block';
    
  }
  inputvalue = searchInput.value;
})


function search(){
  const inputText = searchInput.value;
  const filteredUsers = filterUsers(inputText);
  for(let i=0; i < filteredUsers.length; i++){
    const userDiv = document.createElement('div')
    userDiv.className = 'searchedUser';
    const imgDiv = document.createElement('img')
    imgDiv.setAttribute('src',"./image/"+filteredUsers[i]+"_img.jpeg");
    imgDiv.setAttribute('alt',"filtered user");
    const userNameDiv = document.createElement('div')
    userNameDiv.className = 'user-name';
    userNameDiv.innerHTML = filteredUsers[i];

    userDiv.appendChild(imgDiv);
    userDiv.appendChild(userNameDiv);
    searchUserEl.appendChild(userDiv);
    }
}