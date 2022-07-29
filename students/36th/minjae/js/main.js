const commentForm = document.querySelector(".comment-form");
const commentInput = document.querySelector(".comment-form__input");
const commentPost = document.querySelector(".comment-form__submit");

commentInput.addEventListener("keyup", () => {
  if (commentInput.value.length > 0) {
    commentPost.classList.remove("submit-disabled");
    commentPost.classList.add("submit-abled");
    commentPost.disabled = false;
  } else {
    commentPost.disabled = true;
  }
});

const addComment = () => {
  const commentList = document.createElement("li");
  commentList.classList.add("feed__comment");
  const commentContent = document.createElement("div");
  commentContent.classList.add("feed__comment--content");
  const commentInfo = document.createElement("div");
  const commentText = document.createElement("span");
  commentText.classList.add("user-ID");
  commentText.innerHTML = "JMJ";
  const commentNew = document.createElement("span");
  commentNew.classList.add("comment__text");
  commentNew.innerText = commentInput.value;
  const commentTimestamp = document.createElement("span");
  commentTimestamp.classList.add("time-stamp");
  commentTimestamp.innerText = "지금";

  commentInfo.appendChild(commentText);
  commentInfo.appendChild(commentNew);
  commentContent.appendChild(commentInfo);
  commentList.appendChild(commentContent);
  commentList.appendChild(commentTimestamp);
  document.querySelector(".feed__comment-list").appendChild(commentList);
};

const handleCommentSubmit = (event) => {
  event.preventDefault();
  addComment();
  commentInput.value = "";
  commentPost.disabled = true;
  commentPost.classList.remove("submit-abled");
  commentPost.classList.add("submit-disabled");
};

commentForm.addEventListener("submit", handleCommentSubmit);
