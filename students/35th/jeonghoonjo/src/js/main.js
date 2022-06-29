const commentForm = document.querySelector(".comment-form");
const commentModify = document.querySelector(".comment-modify");
const commentValue = document.querySelector(".comment-input");

const addComment = (event) => {
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

const delComment = (event) => {
  event.preventDefault();
  event.path[2].remove();
};

const isComment = () => {
  const btn = document.querySelector(".comment-submit");
  commentValue.value ? (btn.disabled = false) : (btn.disabled = true);
};

commentModify.addEventListener("click", delComment);
commentForm.addEventListener("submit", addComment);
commentForm.addEventListener("keyup", isComment);
