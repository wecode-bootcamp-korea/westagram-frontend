// 댓글 input 창에 엔터치거나 "게시" 누르면 댓글 추가되도록 createElement로 요소 생성해서, input에 입력한 값이 추가 되어야합니다.
// 함수, 조건문 이해하기

// pseudo code
// 1. dom selection - 인풋태그, 버튼태그
// 2-0) 버튼의 preventDefault() 해주기(화면 refresh 되는 것 방지)
// 2. 인풋태그에 사용자가 입력한 값 가져오기
// 3. createElement - 사용자가 인풋에 입력한 값(댓글단 것) 인풋 태그 위에 추가하기
// 4. 댓글 단 내역 스타일링하기
// 4-1. 유저 이름 같이 작성해주기.
// 4-2. 오른쪽에 하트버튼 추가해주기.
// 5. 한 번 댓글을 submit 했으면, 입력창 부분을 초기화시켜주기.

// DOM Selection
const commentInput = document.querySelector(".commentsList input");
// const commentUploadBtn = document.querySelector(".commentsList button");
const commentForm = document.querySelector(".commentsList form");
const uploadedCommentsBox = document.getElementById("uploadedCommentsBox");
console.log(commentInput);
console.log(commentForm);
console.log(uploadedCommentsBox);

const uploadComment = (e) => {
  // 화면 새로고침 방지 코드
  e.preventDefault();

  // console.log("사용자 입력 댓글 내용 출력! ", commentInput.value);

  // 댓글 내역 요소 생성
  const commentsList = document.createElement("ul");
  const newCommentItem = document.createElement("li");

  // 생성한 요소에 인풋창 입력값으로 텍스트 추가하기
  // newCommentItem.textContent = commentInput.value;
  const commentItemHtml = `<p><span style='margin-right:5px' class='bold'>tellmemoreaboutu</span>${commentInput.value}</p><i class="fa-regular fa-heart"></i>`;
  newCommentItem.innerHTML = commentItemHtml;

  // html에 append하기
  commentsList.append(newCommentItem);
  // console.log("추가한 건?? ", commentsList);
  uploadedCommentsBox.appendChild(commentsList);
  console.log("li의 HTML 알아보기 ", newCommentItem.innerHTML);

  // submit이 발생하는 순간, 사용자가 입력한 인풋창의 내용을 지워주는 코드
  commentInput.value = "";
};

commentForm.addEventListener("submit", uploadComment);
