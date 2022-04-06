const commentBox = document.querySelector(".commentInputBox"); // input을 감지하는 곳
const inputText = document.querySelector(".commentInput"); // input 텍스트창
const commentPostList = document.querySelector(".commentPostList"); // li 태그가 입력될 곳

function commentHandler(x) {
  x.preventDefault();
  inputText.value.trim() !== "" ? createComment() : x.preventDefault();
}
// 댓글 인풋창 리팩토링

//   if (inputText.value.trim() !== "") {
//     createComment();
//   } else {
//     x.preventDefault();
//   }

function createComment() {
  const li = document.createElement("li");
  li.classList.add("commentPost");
  li.innerHTML = `<span>syoung__h</span> ${inputText.value}`;
  commentPostList.appendChild(li);
  inputText.value = "";
}

commentBox.addEventListener("submit", commentHandler);
