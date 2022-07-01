const cmtBtn = document.querySelector(".cmtBtn");

function add() {
  const newComment = document.createElement(); 
  newComment.innerText = ""; 
  document.forms.appendChild(newComment);
}

function init() {
  cmtBtn.addEventListener("click", add);
}
init();
