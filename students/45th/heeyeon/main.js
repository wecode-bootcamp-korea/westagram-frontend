const commentBox = document.querySelector(".comment-box");
const postBtn = document.querySelector(".btn-post-comment");

commentBox.addEventListener("input", (comment) => {
  const isTextareaFilled = comment.target.value.length !== 0 ? true : false;
  postBtn.disabled = !isTextareaFilled;
  isTextareaFilled
    ? postBtn.classList.add("blue-button")
    : postBtn.classList.remove("blue-button");
});

const submitComment = () => {
  const wrapper = document.createElement("div");
  const comments = document.createElement("div");
  const heartImg = document.createElement("img");
  const container = document.createElement("div");
  const userName = document.createElement("div");

  const place = document.querySelector(".test");
  place.appendChild(wrapper);
  wrapper.appendChild(container);
  container.appendChild(userName);
  container.appendChild(comments);
  wrapper.appendChild(heartImg);

  container.className = "commentSection_left";
  heartImg.src = "./heart.png";
  heartImg.className = "comment-heart";
  comments.className = "commentSection-comment";
  wrapper.className = "commentSection";
  userName.innerHTML = "heeyeon";
  comments.innerHTML = commentBox.value;

  commentBox.value = "";
};

postBtn.addEventListener("click", () => {
  submitComment();
});

commentBox.addEventListener("keypress", (e) => {
  if (e.code === "Enter") {
    e.preventDefault();
    submitComment();
  }
});
