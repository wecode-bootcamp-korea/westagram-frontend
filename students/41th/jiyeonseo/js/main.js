const comment = document.getElementById("comment");
const commentInput = document.getElementById("commentInput");
const ul = document.querySelector(".comment-lists");
const heart = document.querySelector(".heart");
const deleteBtn = document.querySelector(".delete");

function addComment(input) {
  const li = document.createElement("li");
  const span_bold = document.createElement("span");
  const span = document.createElement("span");
  const img = document.createElement("img");
  const span_gray = document.createElement("span");
  const span_delete = document.createElement("span");

  span_bold.setAttribute("class", "bold");
  span.setAttribute("class", "space");
  img.setAttribute("class", "heart");
  span_gray.setAttribute("class", "gray");
  span_delete.setAttribute("class", "delete gray");
  img.src = "img/heart.png";

  span_bold.innerText = "mia_seo";
  span.innerText = input;
  span_delete.innerText = "삭제";
  span_gray.innerText = "90분전";

  li.appendChild(span_bold);
  li.appendChild(span);
  li.appendChild(img);
  li.appendChild(span_gray);
  li.appendChild(span_delete);
  ul.appendChild(li);

  img.addEventListener("click", onClickHeart);
  span_delete.addEventListener("click", onClickDelete);
}

function onSubmitInput(event) {
  event.preventDefault();
  addComment(commentInput.value);
  commentInput.value = "";
}

let isRed = false;

function onClickHeart(event) {
  if (isRed === false) {
    event.target.src = "img/heart-fill.png";
    isRed = true;
  } else {
    event.target.src = "img/heart.png";
    isRed = false;
  }
}

function onClickDelete(event) {
  const li = event.target.parentElement;
  li.remove();
}

comment.addEventListener("submit", onSubmitInput);
heart.addEventListener("click", onClickHeart);
deleteBtn.addEventListener("click", onClickDelete);
