/* 댓글 기능 구현 */
const USERNAME = "sangyoonlee";

const commentForm = document.querySelector(".comment__input form");
const commentInput = document.querySelector(".comment__input form input");
const commentList = document.querySelector(".comment-list");

let commentListArray = [];
let commentListHTML = [];
let id = 0;

let template = `
  <ul>
   {{__comment_list__}}
  </ul>
`;

/* 댓글 표시 기능 함수 */
function showCommentList(commentListArray) {
  commentListHTML = [];

  for (let i = 0; i < commentListArray.length; i++) {
    commentListHTML.push(`
      <li id=${commentListArray[i][0]}>
        <span>
          <span class="bold">${commentListArray[i][1]}</span>
          ${commentListArray[i][2]}
        </span>
        &nbsp;
        <i class="comment-icon fas fa-times" onclick="deleteComment(event)"></i>
        <i class="comment-icon far fa-heart"></i>
      </li>`);
  }

  return commentListHTML;
}

/* 요소 삭제 기능 함수 */
function deleteComment(event) {
  const deleteCommentID = event.target.parentElement.id;

  commentListArray = commentListArray.filter(
    (comment) => deleteCommentID != comment[0]
  );

  commentListHTML = showCommentList(commentListArray);
  commentList.innerHTML = template.replace(
    "{{__comment_list__}}",
    commentListHTML.join("")
  );
}

/* 댓글 추가 이벤트 리스너 */
commentForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const commentMessage = commentInput.value;

  if (commentMessage.length === 0) {
    alert("빈 댓글은 등록하실 수 없습니다.");
    return;
  }

  commentListArray.push([id++, USERNAME, commentMessage]);
  commentListHTML = showCommentList(commentListArray);
  commentList.innerHTML = template.replace(
    "{{__comment_list__}}",
    commentListHTML.join("")
  );
});
