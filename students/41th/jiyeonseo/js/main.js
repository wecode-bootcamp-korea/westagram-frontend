const comment = document.getElementById("comment");
const commentInput = document.getElementById("commentInput");
const ul = document.querySelector(".comment-lists");

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

comment.addEventListener("submit", onSubmitInput);
