const commentBox = document.querySelector(".commentInputBox"); // input을 감지하는 곳
const inputText = document.querySelector(".commentInput"); // input 텍스트창
const commentPostList = document.querySelector(".commentPostList"); // li 태그가 입력될 곳

function commentHandler(x) {
  x.preventDefault();
  inputText.value.trim() !== "" ? createComment() : x.preventDefault();
}

function createComment() {
  const li = document.createElement("li");
  li.classList.add("commentPost");
  li.innerHTML = `<span>syoung__h</span> ${inputText.value} <i class="fa-solid fa-xmark deleteBtn"></i><li>42분 전</li>`;
  commentPostList.appendChild(li);
  inputText.value = "";
  clickBtn();
}

function clickBtn() {
  const Btn = document.querySelectorAll(".deleteBtn");
  for (i = 0; i < Btn.length; i++) {
    Btn[i].addEventListener("click", function active(e) {
      e.target.parentElement.remove();
    });
  }
}

commentBox.addEventListener("submit", commentHandler);
