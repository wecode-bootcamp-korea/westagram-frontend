const theForm = document.getElementById("comment-form");
let userName = "ralo";

const inputClear = () => {
  theForm.getElementsByClassName("comment-input")[0].value = "";
};

theForm.onsubmit = () => {
  const message = theForm.getElementsByClassName("comment-input")[0].value;

  const commentContainer = document.getElementsByClassName("comments")[0];
  const html = `<div class="comment"><label> <a class="user-name" href="#">${userName}</a>&nbsp;<span>${message}</span> </label><button><i class="far fa-heart"></i></button></div>`;

  commentContainer.innerHTML += html;
  inputClear();
};

theForm.addEventListener("keydown", (e) => {
  if (e.keyCode === 13) {
    theForm.onsubmit();
  }
});
