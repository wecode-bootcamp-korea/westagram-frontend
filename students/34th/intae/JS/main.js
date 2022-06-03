const input = document.querySelector('.comment_input');
const form = document.querySelector('#comment_form');
const commentUl = document.querySelector(".comments");

function addToInput(inputValue) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const em = document.createElement("em");
  li.appendChild(em)
  li.appendChild(span);
  span.innerText = inputValue;
  em.innerText = "kit";
  commentUl.appendChild(li);
}
function addComment(event) {
  event.preventDefault();
  const inputValue = input.value;
  input.value = "";
  addToInput(inputValue);

}

form.addEventListener('submit', addComment);

