const commentForm = document.querySelector(".comment-form");
const commentModify = document.querySelector(".comment-modify");
const getComment = document.querySelector(".comment-input");
const LikeBtn = document.querySelector(".like-btn");
const modal = document.querySelector("#modal");
const moadlBtn = document.querySelector(".modal-btn");
const modalOverLay = document.querySelector(".modal-overlay");

let likecount = 10;

const isComment = () => {
  const btn = document.querySelector(".comment-submit");
  getComment.value ? (btn.disabled = false) : (btn.disabled = true);
};

const addComment = (event) => {
  event.preventDefault();
  const commentUl = document.querySelector(".comment-ul");
  const li = document.createElement("li");
  const div = document.createElement("div");
  const p = document.createElement("p");
  const btn = document.createElement("button");

  li.appendChild(div);
  div.appendChild(p);
  div.appendChild(btn);

  btn.innerHTML = "X";
  btn.type = "button";
  btn.classList.add("del-comment-btn");
  p.innerText = getComment.value;

  commentUl.appendChild(li);
  getComment.value = "";
};

const delComment = (event) => {
  event.preventDefault();
  event.path[2].remove();
};

const checkLike = () => {
  const p = document.querySelector(".like-count");
  LikeBtn.classList.toggle("is-like");
  LikeBtn.classList.value === "like-btn" ? (likecount -= 1) : (likecount += 1);
  p.innerHTML = `${likecount}`;
};

const openModal = () => {
  modal.style.display = "flex";
};

const closeModal = (event) => {
  const targetClass = event.target.classList.value;
  if (targetClass === "modal-overlay" || targetClass === "close-area") {
    modal.style.display = "none";
  }
};

commentForm.addEventListener("keyup", isComment);
commentForm.addEventListener("submit", addComment);
commentModify.addEventListener("click", delComment);
LikeBtn.addEventListener("click", checkLike);
moadlBtn.addEventListener("click", openModal);
modalOverLay.addEventListener("click", closeModal);
