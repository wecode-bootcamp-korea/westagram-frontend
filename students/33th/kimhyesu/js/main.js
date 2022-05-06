const toDoForm = document.querySelector("#todo-form");
const toDoList = document.getElementById("todo-list");
const commentList = document.querySelector('.commentList')
const todoInput = document.querySelector('.todoInput')


function handleToDoSubmit(event) {
  event.preventDefault(); 
  const newTodo = todoInput.value;
  todoInput.value = "";
  const li = document.createElement("div")
  li.setAttribute('class','user_desc')
  li.innerHTML=`<b>followers</b>
  <span>${newTodo}</span>`
  
  commentList.appendChild(li)
}


toDoForm.addEventListener("submit", handleToDoSubmit);
