// 댓글 input창에 엔터치거나 '게시'누르면 댓글이 추가되도록 createElment로
// 요소 생성해서, input에 입력한 값이 추가되도록 구현하기.

const commentInput = document.querySelector('#comment');
const commentBtn = document.querySelector('#comment__btn');

// 엔터시 댓글 추가
function enterComment(e) {
  if(e.keyCode === 13) {
    let comment = document.querySelector('.post--content');
    let commentWrap = document.createElement('div');
    let commentId = document.createElement('span');
    let commentMsg = document.createElement('span');
    // let commentBtn = document.createElement('BUTTON');

    commentWrap.className = "commentWrap";
    commentId.className = "commentId";
    commentMsg.className = "commentMsg";
    commentBtn.className = "commentBtn";

    commentMsg.innerHTML = commentInput.value;
    commentId.innerHTML = "im_dally ";

    comment.appendChild(commentWrap);
    commentWrap.appendChild(commentId);
    commentWrap.appendChild(commentMsg);

    commentId.style.fontWeight = "bold";

    commentInput.value = ""; // 댓글 초기화
  }
}

// 버튼 클릭시 댓글 추가
function clickComment(e) {
  let comment = document.querySelector('.post--content');
    let commentWrap = document.createElement('div');
    let commentId = document.createElement('span');
    let commentMsg = document.createElement('span');
    // let commentBtn = document.createElement('BUTTON');

    commentWrap.className = "commentWrap";
    commentId.className = "commentId";
    commentMsg.className = "commentMsg";
    commentBtn.className = "commentBtn";

    commentMsg.innerHTML = commentInput.value;
    commentId.innerHTML = "im_dally ";

    comment.appendChild(commentWrap);
    commentWrap.appendChild(commentId);
    commentWrap.appendChild(commentMsg);

    commentId.style.fontWeight = "bold";

    commentInput.value = ""; // 댓글 초기화
}

function commentEvent() {
  commentInput.addEventListener("keyup", enterComment);
  commentBtn.addEventListener("click", clickComment);
}
commentEvent();