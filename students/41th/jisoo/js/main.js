const commentInput = document.querySelector(".commentInput");
const commentSection = document.getElementById("commentSection");
const registerBtn = document.querySelector(".registerBtn");

const disabledBtn = () => {
  commentInput.value.length >= 1
    ? (registerBtn.disabled = false)
    : (registerBtn.disabled = true);
};

const onClickCommentBtn = () => {
  const commentValue = document.createElement("p");
  commentValue.className = "comment";
  commentValue.innerHTML = commentInput.value;
  commentSection.appendChild(commentValue);
  commentInput.value = null;
};

commentInput.addEventListener("keyup", disabledBtn);
registerBtn.addEventListener("click", onClickCommentBtn);
