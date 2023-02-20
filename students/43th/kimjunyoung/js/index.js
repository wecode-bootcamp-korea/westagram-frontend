// const textBox = document.querySelector(".inputBox"); //input 변수 할당
// const summitButtonClick = document.querySelector(".buttonBox"); //버튼 변수 할당
// const feedComment = document.querySelector(".new_comments"); // 새로운 댓글이 달릴 div 할당

// textBox.addEventListener("keypress", enter);

// function enter(e) {
//   const commentBox = document.createElement("span");
//   const profileId1 = document.createElement("span");
//   const br = document.createElement("br");
//   const textBoxTrim = textBox.value.trim();
//   commentBox.className = "newCommentBox";
//   commentBox.innerHTML = textBox.value;

//   if (
//     textBox.value !== "" &&
//     textBox.value.trim() !== "" &&
//     e.key === "Enter"
//   ) {
//     feedComment.appendChild(commentBox) + feedComment.appendChild(br);
//     textBox.value = null;
//   }
// }

////////////////////

const commentForm = document.querySelector(".inputContainer");
const comments = document.querySelector(".inputBox");
const submitButton = document.querySelector(".buttonBox");

function commentUpdate() {
  const ulbox = document.querySelector(".new_comments");
  const liBox = document.createElement("li");
  const pBox = document.createElement("div");
  const userBox = document.createElement("span");
  const commentCtnBox = document.createElement("span");
  let user = "wecode_bootcamp";

  userBox.setAttribute("class", "user_id");
  commentCtnBox.setAttribute("class", "comment_contents");
  pBox.setAttribute("class", "comments_area");

  userBox.innerHTML = user;
  commentCtnBox.innerHTML = comments.value;

  pBox.appendChild(userBox);
  pBox.appendChild(commentCtnBox);
  liBox.appendChild(pBox);
  ulbox.appendChild(liBox);
  comments.value = "";
  /*엔터를 누르면 comments 창에 값이 초기화*/
}

comments.addEventListener("keydown", function (e) {
  if (e.keyCode === 13) {
    commentUpdate();
  }
});

//////////////////////
