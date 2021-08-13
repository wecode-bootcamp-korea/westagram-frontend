// 내프로필 정보
const myProfile = {
  image : 'profile.jpeg',
  id : 'choseonghwan',
  idDescrip : '조성환-wecode24'
}

//댓글
const commentBarContent = document.querySelector('.commentBarContent');
const commentBarPostbtn = document.querySelector('.commentBarPostbtn');
const commentWindow = document.querySelector('.commentWindow');
const comment = document.querySelector('.comment');

// 댓글_댓글 추가 기능 구현
commentBarPostbtn.addEventListener('click', addComment);
commentBarContent.addEventListener('keypress', function (e) {
  // 엔터키 누르는 이벤트 설정 방법 2가지
  if (e.key === 'Enter') {
    addComment();
  }
  // if (e.keyCode === 13) {
  //   addComment();
  // }
});

function addComment() {
  const addCommentPtag = document.createElement('p');
  addCommentPtag.className = 'comment';
  const addCommentId = document.createElement('span');
  addCommentId.className = 'commentId'
  const addCommentContent = document.createElement('span');
  addCommentContent.className = 'commentContent'
  
  commentWindow.appendChild(addCommentPtag);
  addCommentPtag.appendChild(addCommentId);
  addCommentPtag.appendChild(addCommentContent);
  addCommentId.innerHTML = myProfile.id;
  addCommentContent.innerHTML = commentBarContent.value;
};

// 댓글_댓글 좋아요, 좋아요 취소 기능
const test = [1,2,3,4];
console.log(test.find('3'));