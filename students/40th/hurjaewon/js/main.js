// const comment = document.querySelector("#commentInput");
// const button = document.querySelector("#submit");



// const changeColor = () => {    
//   const isValid = comment.value.length > 0;
//   button.disabled = !isValid;
// }

// comment.addEventListener('keyup', changeColor);




// // function checkInput() {
// //   if (input.value.length === 0){
// //     alert("댓글을 입력하세요!");
// //   } else {
// //     registerComment(input.value);
// //   }
// // }

// // function registerComment(value) {
// //   const article3_3 = documenet.getElementById("article3_3")
// // }


// const toDoForm = document.getElementById("comment");
// const toDoInput = document.querySelector("#comment input");
// const btn = document.querySelector("#comment button");
// const toDoList = document.getElementById("todo-list");

// function deleteToDo(event) {
//   const li = event.target.parentElement;
//   li.remove();
// }

// 이거 수정
// function paintToDo(newToDo) {
//   const li = document.createElement("li");
//   const span1 = document.createElement("span");
//   span1.innerText = "hey.yong44";
//   const span2 = document.createElement("span");
//   span2.innerText = newToDo;
//   const button = document.createElement("button");
//   button.innerText = "x";
//   button.addEventListener("click", deleteToDo);
//   li.appendChild(span1);
//   li.appendChild(span2);
//   li.appendChild(button);
//   toDoList.appendChild(li);
// }

// function handleToDoSubmit(event) {
//   event.preventDefault();
//   const newToDo = toDoInput.value;
//   toDoInput.value = "";
//   paintToDo(newToDo);
// }

// toDoForm.addEventListener("submit", handleToDoSubmit);
// btn.addEventListener("click", handleToDoSubmit);
