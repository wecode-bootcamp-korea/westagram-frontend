const commentBox = document.querySelector(".commentInputBox");
const inputText = document.querySelector(".commentInput");
const commentPostList = document.querySelector(".commentPostList");

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
  commentDeleteBtn();
}

function commentDeleteBtn() {
  const Btn = document.querySelectorAll(".deleteBtn");
  for (i = 0; i < Btn.length; i++) {
    Btn[i].addEventListener("click", function (e) {
      e.target.parentElement.remove();
    });
  }
}

commentBox.addEventListener("submit", commentHandler);
