const commentInput = document.querySelector(".comment_input");
const commentSection = document.getElementById("feeds_comment_section");
const registerBtn = document.querySelector(".comment_btn_register");

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
myProfile.addEventListener("click", visualMyMenu);
