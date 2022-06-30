const commentForm = document.querySelector(".comment-form");
const commentModify = document.querySelector(".comment-modify");
const commentValue = document.querySelector(".comment-input");
const LikeBtn = document.querySelector(".like-btn");
const modal = document.querySelector("#modal");
const moadlBtn = document.querySelector(".modal-btn");
const modalOverLay = document.querySelector(".modal-overlay");

let likecount = 10;

const isCommentEvent = () => {
  const btn = document.querySelector(".comment-submit");
  commentValue.value ? (btn.disabled = false) : (btn.disabled = true);
};

const addCommentEvent = (event) => {
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
  p.innerText = commentValue.value;

  commentUl.appendChild(li);
  commentValue.value = "";

  event.preventDefault();
};

const delCommentEvent = (event) => {
  event.preventDefault();
  event.path[2].remove();
};

const handleLikeCheckEvent = () => {
  const p = document.querySelector(".like-count");
  LikeBtn.classList.toggle("is-like");
  LikeBtn.classList.value === "like-btn" ? (likecount -= 1) : (likecount += 1);
  p.innerHTML = `${likecount}`;
};

const openModal = () => {
  modal.style.display = "flex";
};

const closeModal = (event) => {
  if (
    event.target.classList.value === "modal-overlay" ||
    event.target.classList.value === "close-area"
  ) {
    modal.style.display = "none";
  }
};

commentForm.addEventListener("keyup", isCommentEvent);
commentForm.addEventListener("submit", addCommentEvent);
commentModify.addEventListener("click", delCommentEvent);
LikeBtn.addEventListener("click", handleLikeCheckEvent);
moadlBtn.addEventListener("click", openModal);
modalOverLay.addEventListener("click", closeModal);
