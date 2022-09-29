document.addEventListener('DOMContentLoaded', () =>{

  const addText = document.getElementsByClassName("text-add")[0];
  const addBtn = document.getElementsByClassName("btn-add")[0];
  const inputReply = document.getElementsByClassName("input‑reply")[0];
  
  
  //function to add tasks
  const addTask = (task) => {
    const listItem = document.createElement("li");
    const showItem = inputReply.appendChild(listItem);
    const taskElem = document.createElement("span");
  
    taskElem.innerHTML = task;
    listItem.appendChild(taskElem);
    listItem.classList.add("list‑item");
  
  };
  
  addBtn.addEventListener("click", () => {
    const task = addText.value;
    if (task == "") {
      return;
    }
    addTask(task);
    addText.value = "";
  });
  
  })