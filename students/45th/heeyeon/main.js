const commentBox = document.querySelector(".comment-box");
const postBtn = document.querySelector(".btn-post-comment");

let isFilled = false;

const submitComment = () => {
  const wrapper = document.createElement("div");
  const comments = document.createElement("div");
  const likeHeart = document.createElement("div");
  const container = document.createElement("div");
  const userName = document.createElement("div");
  const place = document.querySelector(".comment-area");
  const removeComment = document.createElement("button");
  const imgWrapper = document.createElement("div");

  place.appendChild(wrapper);
  wrapper.appendChild(container);
  container.appendChild(userName);
  container.appendChild(comments);
  wrapper.appendChild(imgWrapper);
  imgWrapper.appendChild(removeComment);
  imgWrapper.appendChild(likeHeart);

  container.className = "commentSection_left";
  removeComment.placeholder = "삭제";
  likeHeart.className = "transparent-heart";
  console.log(likeHeart.classList);
  removeComment.className = "comment-heart";
  removeComment.classList.add("btn-remove");
  imgWrapper.className = "img-gap";
  comments.className = "commentSection-comment";
  wrapper.className = "commentSection";
  userName.innerHTML = "heeyeon";
  comments.innerHTML = commentBox.value;

  removeComment.innerHTML = "삭제";
  removeComment.addEventListener("click", () => place.removeChild(wrapper));

  likeHeart.addEventListener("click", () => {
    const isTransparent = likeHeart.classList.contains("transparent-heart");
    if (isTransparent) {
      likeHeart.className = "red-heart";
    } else {
      likeHeart.classList.remove("red-heart");
      likeHeart.classList.add("transparent-heart");
    }
  });

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
