const commentForm = document.querySelector('.comment_form');
const commentInput = commentForm.querySelector('input');
const commentList = document.querySelector('.feed__comment--list');

function addComment(event) {
  event.preventDefault(); // 페이지 새로고침 중지
  
  const newComment = commentInput.value; // 인풋 초기화전 값 저장
  
  commentInput.value = ''; // 인풋 값 초기화
  if(!newComment){
    return alert('댓글을 작성하세요')
  }
  paintComment(newComment); // 페인트함수로 인풋값 이동
}

function paintComment(newComment) {
  // const paintHtml = `
  // <li>
  //   <span>작성자</span>
  //   <span>${newComment}</span>
  //   <span><i class="fa-solid fa-heart"></i></span>
  //   <button class="delete_comment">❌</button>
  // </li>
  // `
  // commentList.innerHTML += paintHtml;


  const li = document.createElement('li'); // li태그 생성
  const comment = document.createElement('span'); // 댓글내용
  const writer = document.createElement('span'); // 작성자
  const heart = document.createElement('span'); // 좋아요
  const delete_btn = document.createElement('button');
  li.appendChild(writer); // li태그 속에 span2 태그 생성
  li.appendChild(comment); // li태그 속에 span 태그 생성 - li span2 span /li 순으로 생성됨
  li.appendChild(heart);
  li.appendChild(delete_btn);

  comment.innerText = newComment; // 인자로 받아온 newComment span에 할당
  writer.innerText = '작성자'; // 댓글작성자 미리 지정
  heart.innerHTML = '<i class="fa-solid fa-heart"></i>'
  delete_btn.innerText = '❌';
  heart.addEventListener('click', toggleHeart);
  delete_btn.addEventListener('click', deleteComment);
  commentList.appendChild(li); // ul태그에 현재 함수에서 생성한 li태그 삽입
}

function toggleHeart(event){
  console.log(event.target)
  const heart = event.target;
  heart.classList.toggle('icon__red')
}

function deleteComment(event) {
  const li = event.target.parentElement;
  li.remove();
}

commentForm.addEventListener('submit', addComment);

// checkinput 함수 생성
// makeDeleteEvent
// 바닐라JS - 절차적 프로그래밍 방식

// !! 템플릿 리터럴 -> innerHTML