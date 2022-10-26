const commentInput = document.querySelector('.comment-input');
const commentBtn = document.querySelector('.comment-btn');
const commentsEl = document.querySelector('.comments');
const heartEl = document.querySelectorAll('.heart');
const bookmarkEl = document.querySelector('.bookmark');

commentInput.addEventListener('keydown', function cmtBtnActive(e){
  if(commentInput.value.length>=1){
    commentBtn.style.color = '#0095f6';
    commentBtn.style.cursor = 'pointer';
    commentInput.style.color = 'black';
    // console.log(e);
    if(e.keyCode === 13){
      addComment();
    }
  }else {
    commentBtn.style.color = '#c4e1fb';
  }

});


commentBtn.addEventListener('click', function clickComment(){
  if(commentInput.value.length >= 1){
    addComment();
  }
});

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
  const commentHeartDiv = document.createElement('div');
  commentHeartDiv.className = 'material-symbols-outlined heart';
  commentHeartDiv.innerHTML = 'favorite';

  commentDiv.appendChild(commentUserH3);
  commentDiv.appendChild(commentTextH4);
  commentDiv.appendChild(commentHeartDiv);

  commentsEl.appendChild(commentDiv);
  commentInput.value = null;

}


for (var i = 0; i < heartEl.length; i++) {
  const item = heartEl[i];
  console.log(item);
  item.addEventListener('click', function fillHeart(){
  
    if(item.className == 'material-symbols-outlined heart'){
      item.className = 'material-icons heart';
      item.style.color = "#ed4956";
    } else {
      item.className = 'material-symbols-outlined heart';
      item.style.color = null;
    }
  });
}

bookmarkEl.addEventListener('click',function fillBookmark(){
  if(bookmarkEl.className == 'material-symbols-outlined bookmark'){
    bookmarkEl.className = 'material-icons bookmark';
  } else {
    bookmarkEl.className = 'material-symbols-outlined bookmark';
  }
})

const rightEl = document.querySelector('.main-right');
const mainEl = document.querySelector('.main');
const feedsEl = document.querySelector('.feeds');
const searchIcon = document.querySelectorAll('.topSearch')[0];
const searchInput = document.querySelectorAll('.topSearch')[1];

if ( window.innerWidth <=800){
  rightEl.style.display = 'none';
  feedsEl.style.marginLeft = 10 + '%';
  searchIcon.style.display = 'none';
  searchInput.style.display = 'none';
}

window.addEventListener('resize',function resize(){
  if ( window.innerWidth <=800){
    rightEl.style.display = 'none';
    feedsEl.style.marginLeft = 10 + '%';
    searchIcon.style.display = 'none';
    searchInput.style.display = 'none';
  }else {
    rightEl.style.display = null;
    feedsEl.style.marginLeft = null;
    searchIcon.style.display = null;
    searchInput.style.display = null;
  }
})

