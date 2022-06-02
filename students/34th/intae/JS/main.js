const input = document.querySelector('.comment_input');
const form = document.querySelector('#comment_form');
const commentUl = document.querySelector(".comments");

function addInput(inputValue) {

  const li = document.createElement("li");
  const span = document.createElement("span");
  li.appendChild(span);
  span.innerText = inputValue;
  commentUl.appendChild(li);

}
function addComment(event) {
  event.preventDefault();
  const inputValue = input.value;
  console.log(inputValue);
  input.value = "";
  addInput(inputValue);

}

form.addEventListener('submit', addComment);

