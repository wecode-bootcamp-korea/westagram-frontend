const comment = document.getElementById("comment");
const commentInput = document.getElementById("commentInput");
const ul = document.querySelector(".comment-lists");
const heart = document.getElementById("heart");
const deleteBtn = document.getElementById("delete");

function addComment(input) {
  const li = document.createElement("li");
  const span_bold = document.createElement("span");
  span_bold.className = "bold";
  span_bold.innerText = "mia_seo";
  const span = document.createElement("span");
  span.className = "space";
  span.innerText = input;
  const img = document.createElement("img");
  img.src = "img/heart.png";
  img.className = "heart";
  const span_gray = document.createElement("span");
  span_gray.className = "gray";
  span_gray.innerText = "90분전";
  li.appendChild(span_bold);
  li.appendChild(span);
  li.appendChild(img);
  li.appendChild(span_gray);
  ul.appendChild(li);
}

function onSubmitInput(event) {
  event.preventDefault();
  addComment(commentInput.value);
  commentInput.value = "";
}

function onClickHeart() {
  if (heart.src === "http://127.0.0.1:5500/img/heart.png") {
    heart.src = "img/heart-fill.png";
  } else {
    heart.src = "img/heart.png";
  }
}

function onClickDelete(event) {
  const li = event.target.parentElement;
  li.remove();
}

comment.addEventListener("submit", onSubmitInput);
heart.addEventListener("click", onClickHeart);
deleteBtn.addEventListener("click", onClickDelete);
