// 1. 버튼 활성화 구현
const commentsId = document.getElementById('comments-id');
const submitBtn = document.getElementById('comments-submit');

const isDisabled = () => {
  if (commentsId.value.length > 1) {
    submitBtn.disabled = false;
  } else if (commentsId.value.length == 0) {
    submitBtn.disabled = true;
  }
  return;
};

commentsId.addEventListener('keyup', isDisabled);

const commentSubmit = document.getElementById('comments-submit');
const commentInput = document.getElementById('comments-id');

// 01. 쿼리셀럭터로 가져왔을경우

// let handleForm = (e) => {
//   e.preventDefault();
//   // 유저 입력 값
//   let comment = commentInput.value;
//   console.log(comment);
//   // 빈 값 div를 가져옴
//   let newComment = document.querySelector('.comment');

//   if (commentInput.value.length > 0) {
//     // 새로운 div를 만듬
//     let commentText = document.createElement('div');
//     // 새로운 div의 이름은 아래
//     commentText.className = 'comment-text';
//     // 새로운 div의 html text는 유저가 입력한 값
//     commentText.innerHTML = commentInput.value;
//     // 새로운 div가 출력되나 테스트
//     console.log(commentText);
//     // 가져온 부모div안에 차일드 맨앞에(새로만든 div를 넣겠다)
//     newComment.appendChild(commentText);
//     // commentText.innerText = `<div><span>canon_mj ${comment}</span></div>`;
//     commentInput.value = '';
//   }
// };

// 02. ClassName을 가져왔을때 경우
// let handleForm = (e) => {
//   e.preventDefault();
//   // 유저 입력 값
//   let comment = commentInput.value;
//   console.log(comment);
//   // 빈 값 div를 가져옴
//   let newComment = document.getElementsByClassName('article-bottom-texts')[0];

//   if (commentInput.value.length > 0) {
//     // 새로운 div를 만듬
//     let commentText = document.createElement('div');
//     // 새로운 div의 이름은 아래
//     commentText.className = 'comment-text';
//     // 새로운 div의 html text는 유저가 입력한 값
//     commentText.innerHTML = commentInput.value;
//     // 새로운 div가 출력되나 테스트
//     console.log(commentText);
//     // 가져온 부모div안에 차일드 맨앞에(새로만든 div를 넣겠다)
//     newComment.appendChild(commentText);
//     // commentText.innerText = `<div><span>canon_mj ${comment}</span></div>`;
//     commentInput.value = '';
//   }
// };

// 03. div안에 span까지 만듬
// let handleForm = (e) => {
//   e.preventDefault();
//   // 유저 입력 값
//   let comment = commentInput.value;
//   console.log(comment);
//   // 빈 값 div를 가져옴
//   let newComment = document.querySelector('.article-bottom-texts');

//   if (commentInput.value.length > 0) {
//     // 새로운 div를 만듬
//     let commentText = document.createElement('div');
//     let boldText = document.createElement('span');
//     // 새로운 div의 이름은 아래
//     commentText.className = 'comment-text';
//     // 새로운 div의 html text는 유저가 입력한 값
//     // commentText.innerHTML = commentInput.value;
//     boldText.className = 'commnet-bold';
//     commentText.appendChild(boldText);
//     boldText.innerHTML = commentInput.value;
//     // 새로운 div가 출력되나 테스트
//     console.log(commentText);
//     // 가져온 부모div안에 차일드 맨앞에(새로만든 div를 넣겠다)
//     newComment.appendChild(commentText);
//     // commentText.innerText = `<div><span>canon_mj ${comment}</span></div>`;
//     commentInput.value = '';
//   }
// };

// 04. 다른경우
// let handleForm = (e) => {
//   e.preventDefault();
//   // 유저 입력 값
//   let comment = commentInput.value;
//   console.log(comment);
//   // 빈 값 div를 가져옴
//   let newComment = document.querySelector('.article-bottom-texts');

//   if (commentInput.value.length > 0) {
//     // 새로운 div를 만듬
//     let commentText = document.createElement('div');
//     let boldText = document.createElement('span');
//     // 새로운 div의 이름은 아래
//     commentText.className = 'comment-text';
//     // 새로운 div의 html text는 유저가 입력한 값
//     // commentText.innerHTML = commentInput.value;
//     boldText.className = 'article-bold';
//     commentText.appendChild(boldText);
//     boldText.innerText = 'dfdsf';
//     // boldText.innerText = commentInput.value;
//     // boldText.innerHTML = `<div><span>canon_mj ${comment}</span></div>`;
//     // 새로운 div가 출력되나 테스트
//     console.log(commentText);
//     // 가져온 부모div안에 차일드 맨앞에(새로만든 div를 넣겠다)
//     newComment.appendChild(commentText);
//     commentInput.value = '';
//   }
// };

// 05. 다른경우
let handleForm = (e) => {
  e.preventDefault();
  let comment = commentInput.value;
  console.log(comment);
  let newComment = document.querySelector('.article-bottom-texts');
  if (commentInput.value.length > 0) {
    let commentText = document.createElement('div');
    commentText.innerHTML = `<div class="comment-text">
    <span class="article-bold">canon_mj </span>
    ${comment}</span></span></div>`;
    newComment.appendChild(commentText);
    console.log(newComment);
    commentInput.value = '';
  }
};

commentSubmit.addEventListener('click', handleForm);
