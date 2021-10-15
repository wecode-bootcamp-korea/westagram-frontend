'use strict';

// 엔터치거나 게시 누르면 댓글 추가되도록 createElement로 요소 생성해서
// input에 입력한 값이 추가되어야 한다.
// 인풋에 글을 쓰고 엔터키 입력을 할 때, //input의 value에 글이 작성되어 있다면, input의 value를 화면에 추가해줄 것이고, 그렇지 않다면 막을 것이다.
// if(comment.value !== '') {
// const createP = document.createElement('p')
// createP.appendChild(ripple);
//} else {
//}

const commentInput = document.getElementById('comment');
const commentBtn = document.getElementById('posting-btn');
const commentRipple = document.getElementById('area');

// 변수 확인 완료.

commentBtn.addEventListener('click', function () {
  if (commentInput.value !== '') {
    let newComment = document.createElement('li');
    newComment.innerHTML = commentInput.value;
    commentRipple.appendChild(newComment);
    commentInput.value = '';
  }
});

//엔터키 누르면,/ 댓글 인풋의 글이 본문으로 들어가고,/ 댓글창에 작성한 글은 지워지도록 한다.
//

function enterPress() {
  if (window.event.keyCode == 13) {
    // console.log('엔터키 기능 돌아감');
    let newComment = document.createElement('li');
    newComment.innerHTML = commentInput.value;
    commentRipple.appendChild(newComment);
    commentInput.value = '';
  }
}
commentInput.addEventListener('keyup', enterPress);
