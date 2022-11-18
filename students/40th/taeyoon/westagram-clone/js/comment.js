const commentForm = document.querySelector('.comment_form');
const commentInput = commentForm.querySelector('input');
const commentList = document.querySelector('.feed__comment--list');

function addComment(event) {
  event.preventDefault(); // 페이지 새로고침 중지
  const newComment = commentInput.value; // 인풋 초기화전 값 저장
  commentInput.value = ''; // 인풋 값 초기화
  paintComment(newComment); // 페인트함수로 인풋값 이동
}

function paintComment(newComment) {
  const li = document.createElement('li'); // li태그 생성
  const span = document.createElement('span'); // span태그 생성
  const span2 = document.createElement('span');
  li.appendChild(span2); // li태그 속에 span2 태그 생성
  li.appendChild(span); // li태그 속에 span 태그 생성 - li span2 span /li 순으로 생성됨
  span.innerText = newComment; // 인자로 받아온 newComment span에 할당
  span2.innerText = '작성자'; // 댓글작성자 미리 지정
  commentList.appendChild(li); // ul태그에 현재 함수에서 생성한 li태그 삽입
}

commentForm.addEventListener('submit', addComment);

// checkinput 함수 생성
// makeDeleteEvent
// 바닐라JS - 절차적 프로그래밍 방식

// !! 템플릿 리터럴 -> innerHTML