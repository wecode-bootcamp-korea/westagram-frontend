/* 댓글 기능 구현 */
const USERNAME = "sangyoonlee";

const commentInput = document.querySelector(".comment__input input");
const commentSubmitBtn = document.querySelector(".comment__enter span");

const commentList = document.querySelector(".comment-list");
const commentListArray = [];
let commentListHTML = [];

let template = `
  <ul>
   {{__comment_list__}}
  </ul>
`;

commentSubmitBtn.addEventListener("click", () => {
  const commentMessage = commentInput.value;

  commentListArray.push([USERNAME, commentMessage]);

  /* 리스트 */
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
