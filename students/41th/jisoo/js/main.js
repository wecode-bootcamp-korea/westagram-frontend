const commentInput = document.querySelector(".comment_input");
const commentSection = document.getElementById("feeds_comment_section");
const registerBtn = document.querySelector(".comment_btn_register");
const searchInput = document.querySelector(".search_input");

const disabledBtn = () => {
  commentInput.value.length >= 1
    ? (registerBtn.disabled = false)
    : (registerBtn.disabled = true);
};

const onClickCommentBtn = () => {
  const commentValue = document.createElement("p");
  commentValue.innerHTML = `<span class = user_name>love_penguin</span> ${commentInput.value}`;
  commentValue.className = "comment";
  commentSection.append(commentValue);

  commentInput.value = "";
};

commentInput.addEventListener("keyup", disabledBtn);
registerBtn.addEventListener("click", onClickCommentBtn);
