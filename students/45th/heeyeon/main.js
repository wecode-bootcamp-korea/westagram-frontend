const commentBox = document.querySelector(".comment-box");
const postBtn = document.querySelector(".btn-post-comment");

let isFilled = false;

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
  isFilled = false;
  postBtn.classList.remove("blue-button");
};

postBtn.addEventListener("click", () => {
  if (!isFilled) return;

  submitComment();
});

//early return

commentBox.addEventListener("input", (e) => {
  isFilled = e.target.value.length !== 0 ? true : false;
  postBtn.disabled = !isFilled;
  isFilled
    ? postBtn.classList.add("blue-button")
    : postBtn.classList.remove("blue-button");
});

commentBox.addEventListener("keypress", (e) => {
  if (e.code === "Enter") {
    e.preventDefault();

    if (!isFilled) return;

    submitComment();
  }
});
