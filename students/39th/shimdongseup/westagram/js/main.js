const commentInput = document.querySelector('.comment-input');
const commentBtn = document.querySelector('.comment-btn');
const commentEl = document.querySelector('.comment');
const commentsEl = document.querySelector('.comments');
const deleteEl = document.querySelector('.delete');
const heartEl = document.querySelectorAll('.heart');
const bookmarkEl = document.querySelector('.bookmark');


//댓글 추가기능
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

