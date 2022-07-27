const commentInput = document.getElementById("comment-input");
const commentUl = document.getElementById("comment-list");
const uploadButton = document.getElementById("upload-button");
/* console.log(commentInput); */

// 현재 이벤트가 일어나는 input 콘솔 찍어보기
function inputConsole(event) {
  const createLi = document.createElement("li");
  const userId = "wecode bootcamp";
  if (event.key == "Enter" || event.target == uploadButton) {
    commentUl.appendChild(createLi);
    createLi.innerText = `${userId} ${commentInput.value}`;
    commentInput.value = "";
  }
}

commentInput.addEventListener("keypress", inputConsole);
uploadButton.addEventListener("click", inputConsole);
