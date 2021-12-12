"use strict";

const input = document.getElementsByClassName('inputComment')[0];
const pushBtn = document.getElementsByClassName('pushComment-Btn')[0];
const commentUl = document.getElementsByClassName('commentList')[0];

pushBtn.addEventListener('click', function(ev) {
  appendToUl()
});
input.addEventListener('keyup', function(ev) {
  if(ev.key === 'Enter') {
    appendToUl()
    resetInput();
  }
});

function resetInput() {
  document.getElementsByClassName('inputComment')[0].value = null;
}
//댓글 입력 값 가져오기
function getValue() {
  return input.value;
}
//span 요소 만들어서 입력 값 넣기
function makeSpanId() {
  const spanId = document.createElement('span'); //아이디 용 span

  spanId.innerHTML = 'Jongho Yoon'; //아이디 span에 넣기
  spanId.setAttribute('class', 'commentId accId'); //아이디 용 클래스 입력
  return spanId;
}

function makeSpanComment() {
  const spanComment = document.createElement('span'); //댓글 용 span

  spanComment.innerHTML = getValue(); //댓글멘트 span에 넣기
  spanComment.setAttribute('class', 'commentSentence contText');//댓글용 클래스 입력
  return spanComment;
}

function makeLi() {
  const liElement = document.createElement('li');

  liElement.setAttribute('class', 'comments');

  return liElement;
}

function makeLiSet() {
  const listElement = makeLi();
  const idElement = makeSpanId();
  const commentElement = makeSpanComment();
  const text = getValue();

  commentElement.innerHTML = text;

  listElement.appendChild(idElement);
  listElement.appendChild(commentElement);

  return listElement;
}

function appendToUl() {
  console.log('appendToUl()');
  if(checkInput()) {
    commentUl.appendChild(makeLiSet());
    resetInput();
  } else {
    alert('글 입력하라고 피곤하니까!!!!')    
  }

  return;
}
// 입력창 유효성 검사 
function checkInput() {
  if(!input.value.length) {
    return false;
  } else {
    return true;
  }
}