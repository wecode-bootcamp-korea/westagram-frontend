const toDoForm = document.querySelector("#todo-form");
// const toDoInput = toDoForm.querySelector("input");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

function paintToDo(newTodo) {
  const li = document.createElement("li")
  const span = document.createElement("span");
  li.appendChild(span);
  span.innerText = newTodo;
  toDoList.appendChild(li);
  
  toDoList.innerHTML = `
  <b>USER</b>
  <span>${todo-list.value}</span>`
}



function handleToDoSubmit(event) {
  event.preventDefault(); 
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  paintToDo(newTodo);

}


toDoForm.addEventListener("submit", handleToDoSubmit);
