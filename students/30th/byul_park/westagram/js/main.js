const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDolist = document.getElementById("todo-list");
const btn = document.querySelector(".post");

function paintToDo(newTodo){
  if(!newTodo.trim()) return;
  const li = document.createElement("li");
  const p = document.createElement("p");
  const userName = document.querySelector(".userName").innerText;
  li.appendChild(p);
  p.innerHTML = '<b style = "font-size:17px;">'+userName+'</b>'+' '+newTodo;
  toDolist.appendChild(li);
}

function handleToDoSubmit(event){
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  paintToDo(newTodo);
}

function onClick(){
  btn.classList.remove("disabled");
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  paintToDo(newTodo);
}

function btnActive(){
  const toDoInputList = document.querySelector("#todo-form input").value;
  return (toDoInputList)?btn.classList.remove("post"):btn.classList.add("post");
}

toDoForm.addEventListener("submit", handleToDoSubmit);
toDoInput.addEventListener("keyup", btnActive);
btn.addEventListener("click", onClick);