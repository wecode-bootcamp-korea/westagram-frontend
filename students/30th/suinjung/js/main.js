const postComment = document.getElementsByClassName("commentplace")[0];
const inputComment = document.getElementById("comment");
const clickLoad = document.getElementsByClassName("gocomment")[0];
clickLoad.style.cursor = "pointer";

function loadComment() {
  const commentClass = document.getElementsByClassName("comment")[0];
  const myNickName = document.getElementById("myname");
  if (inputComment.value.length > 0) {
    const inValue = document.createElement("div");
    inValue.className = "commentblock";
    inValue.innerHTML = `<div> 
    <p class="nickname">${myNickName.innerText}</p>
    <span>${inputComment.value}</span>
  </div>
  <div>
    <i class="far fa-heart"></i>
  </div>`;
    commentClass.appendChild(inValue);
    inputComment.value = "";
  }
}

function EnterLoadComment(e) {
  if (e.key === "Enter") {
    loadComment();
  }
}

function clickComment(e) {
  e.preventDefault();
  loadComment();
}

//entry pointer
postComment.addEventListener("keyup", EnterLoadComment);
clickLoad.addEventListener("click", clickComment);
