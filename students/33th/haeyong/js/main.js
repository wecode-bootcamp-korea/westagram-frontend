const toDoForm = document.getElementById("comment");
const toDoInput = document.querySelector("#comment input");
const btn = document.querySelector("#comment button");
const toDoList = document.getElementById("todo-list");

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
}

function paintToDo(newToDo) {
  const li = document.createElement("li");
  const span1 = document.createElement("span");
  span1.innerText = "hey.yong44";
  const span2 = document.createElement("span");
  span2.innerText = newToDo;
  const button = document.createElement("button");
  button.innerText = "x";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span1);
  li.appendChild(span2);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  paintToDo(newToDo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);
btn.addEventListener("click", handleToDoSubmit);
