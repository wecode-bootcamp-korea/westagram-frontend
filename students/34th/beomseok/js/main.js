const heartIcon = document.querySelector('.fa-heart');

function heart() {
  if (heartIcon.style.color !== 'red') {
    heartIcon.style.color = 'red';
  } else {
    heartIcon.style.color = 'black';
  }
}

heartIcon.addEventListener('click', heart);

const chat = document.querySelector('.chat');
const chatInput = document.querySelector('.chat input');
const chatUl = document.querySelector('.chatUl');

function paintToDo(newTodo) {
  const li = document.createElement('li');
  const span = document.createElement('span');
  span.innerText = newTodo;
  li.appendChild(span);
  chatUl.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = chatInput.value;
  chatInput.value = '';
  paintToDo(newTodo);
}

chat.addEventListener('submit', handleToDoSubmit);
