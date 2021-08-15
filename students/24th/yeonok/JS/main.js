
const input = document.querySelector(".add-comments input")
const submitBtn = document.querySelector(".add-comments button")

function checkInput () {
  if (!input.value.length) {
    alert("댓글을 입력하세요")
  } else {
    commentSubmit(input.value);
  }
}

function commentSubmit (value) {
  const commentsList = document.querySelector(".comments-area");
  const addComment = document.createElement("li");
  const comment = `<span class="comments-id">k_rural_dog</span><span>${value}</span>`

  addComment.innerHTML = comment;
  commentsList.appendChild(comment);

  input.value = "";
}

const init = () => {
  submitBtn.addEventListener("click", checkInput);
}

init();

