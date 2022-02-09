const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
//const toDoInput = toDoForm.querySelector("input");위아래 같은의미
const toDolist = document.getElementById("todo-list");
const btn = document.querySelector(".post");
//Todo를 그리는 역할 담당하는 함수
function paintToDo(newTodo){
  //input에서 value를 얻어서 painToDo라는 새로운함수에 그 값을 보내는것
  const li = document.createElement("li");
  const p = document.createElement("p");
  li.appendChild(p);
  p.innerText = newTodo;//span안에 넣은 새로운텍스트는 사용자가 form에서 우리에게 준 newTodo값임
  //우리가 새로해야할 건 이 새로운 li를 list에 추가하는거야
  console.log(li);
  toDolist.appendChild(li);
}
function handleToDoSubmit(event){
  event.preventDefault();
  //console.log(toDoInput.value);
  const newTodo = toDoInput.value; //<---input의 현재value를 새로운 변수값에 저장하는것
  toDoInput.value = "";
  paintToDo(newTodo);
}
function onClick(event){
  btn.classList.remove("disabled");
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  paintToDo(newTodo);
}
function btnActive(event){
  const toDoInputList = document.querySelector("#todo-form input").value;
  return (toDoInputList)?btn.classList.remove("post"):btn.classList.add("post");
}
toDoForm.addEventListener("submit", handleToDoSubmit);
toDoInput.addEventListener("keyup", btnActive);
btn.addEventListener("click", onClick);