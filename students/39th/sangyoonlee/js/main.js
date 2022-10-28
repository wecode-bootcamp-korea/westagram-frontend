/* 댓글 기능 구현 */
const USERNAME = "sangyoonlee";

const commentForm = document.querySelector(".comment__input form");
const commentInput = document.querySelector(".comment__input form input");

const commentList = document.querySelector(".comment-list");
const commentListArray = [];
let commentListHTML = [];

let template = `
  <ul>
   {{__comment_list__}}
  </ul>
`;

commentForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const commentMessage = commentInput.value;

  if (commentMessage.length === 0) {
    alert("빈 댓글은 등록하실 수 없습니다.");
    return;
  }

  commentListArray.push([USERNAME, commentMessage]);
  commentListHTML = [];

  for (let i = 0; i < commentListArray.length; i++) {
    commentListHTML.push(
      `<li>
        <span class="bold">${commentListArray[i][0]}</span> ${commentListArray[i][1]}
      </li>`
    );
  }

  console.log(commentListHTML.join(""));

  commentList.innerHTML = template.replace(
    "{{__comment_list__}}",
    commentListHTML.join("")
  );
});
