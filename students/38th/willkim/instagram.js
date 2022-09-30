// 로그인페이지 구현사항...
let iid = document.getElementById("idCheck");
let pww = document.getElementById("pwCheck");
const logBtn = document.getElementById("logButton");

function loginCharacterCheck() {
  if (iid.value.length > 1 && pww.value.length > 1) {
    logBtn.disabled = false;
  }
}

document.getElementById("logButton");
iid.addEventListener("keyup", loginCharacterCheck);
pww.addEventListener("keyup", loginCharacterCheck);
// 메인페이지 구현사항..

// keyup keydown 등 대신 input을 사용할수 있다

// 댓글 작성

// const comChar = document.getElementById("instaCom");
// const rplBtn = document.getElementById("replyBtn");

// function commentCharCheck() {
//   if (comChar.length >= 1) {
//     rplBtn.disabled = false;
//   }
// }

// comChar.addEventListener("keyup", commentCharCheck);

// const instaForm = document.querySelector("#instaForm");
// const commentsContainer = document.querySelector("#comments");
// const buttonClick = document.getElementById(replyBtn);

// const addComment = (comment) => {
//   const newComment = document.createElement("li");
//   const bTag = document.createElement("b");
//   newComment.appendChild(bTag);
//   newComment.appendChild(comment);
//   commentsContainer.appendChild(newComment);
// };

// instaForm.addEventListener("click", function (event) {
//   event.preventDefault();
//   const commentInput = instaForm.elements.comment;
//   addComment(commentInput.value);
//   commentInput.value = "";
// });

// instaForm.addEventListener("submit", function (e) {
//   e.preventDefault();
//   const usernameInput = instaForm.elements.username;
//   const commentInput = instaForm.elements.comment;
//   addComment(commentInput.value);
//   commentInput.value = "";
// });

const placeComment = document.getElementById("comments");
const btnClick = document.getElementById("replyBtn");
const textComment = document.getElementById("instaCom");

const comAdd = (textComment) => {
  const comList = document.createElement("li");
  const commentListing = comList.appendChild(textComment);
  placeComment.appendChild(commentListing);
};

btnClick.addEventListener("click", (event) => {
  textComment.value = "";
});
