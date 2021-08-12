const searchInput = document.querySelector(".search-bar");
const commentInput = document.querySelector(".comment-post");
const commentForm = document.querySelector(".comment-form");
const commentList = document.querySelector(".comments");

searchInput.addEventListener("input", () => {
  const search = document.querySelector(".search");
  const searchIcon = document.querySelector(".fas.fa-search");
  searchInput.value
    ? ((searchIcon.style.display = "none"), (search.style.display = "none"))
    : ((searchIcon.style.display = "block"), (search.style.display = "block"));
});

commentInput.addEventListener("input", () => {
  const btnPost = document.querySelector(".btn-post");
  commentInput.value
    ? (btnPost.style.color = "#0095f6")
    : (btnPost.style.color = "#b2dffc");
});

commentForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addComment();
  commentInput.value = "";
});

const addComment = () => {
  const username = "ttsone_ss";
  const commentList = document.querySelector(".comments");
  const spanTag = document.createElement("span");
  const pTag = document.createElement("p");
  const iTag1 = document.createElement("i");
  const iTag2 = document.createElement("i");
  const liTag = document.createElement("li");
  spanTag.append(username);
  pTag.append(spanTag, commentInput.value, iTag1, iTag2);
  iTag1.setAttribute("class", "far fa-heart");
  iTag2.setAttribute("class", "far fa-trash-alt");
  liTag.append(pTag);
  commentList.append(liTag);
};

commentList.addEventListener("click", (e) => {
  const comment = document.querySelector(".comments li");
  e.target.className === "far fa-trash-alt" && comment.remove();

  if (e.target.className === "far fa-heart") {
    e.target.className = "fa fa-heart";
  } else if (e.target.className === "fa fa-heart") {
    e.target.className = "far fa-heart";
  }
});
