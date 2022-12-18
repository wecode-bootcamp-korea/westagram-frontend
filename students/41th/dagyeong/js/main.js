const input = document.querySelector(".comment_input");
const btn = document.querySelector(".comment_btn");

function checkInput() {
  if (input.value.length === 0) {
    alert("댓글을 입력하세요");
  } else {
    addElement(input.value);
    enterInput(input.value);
  }
}

function addElement(value) {
  const addComment = document.getElementById("commentLists");
  const addInput = document.createElement("li");
  addInput.className = "comment";
  // console.log(addInput);

  const userId = document.createElement("span");
  userId.innerText = "dagyeong";
  userId.className = "comment";
  // console.log(userId);

  const commentContent = document.createElement("span");
  commentContent.innerText = value;
  // console.log(commentContent);

  const deleteBtn = document.createElement("span");
  deleteBtn.innerText = "x";
  deleteBtn.classList.add("delete");
  // console.log(deleteBtn);

  addInput.appendChild(userId);
  addInput.appendChild(commentContent);
  addInput.appendChild(deleteBtn);

  addComment.appendChild(addInput);

  input.value = "";
}

function enterInput(value) {
  if (value.key === "Enter" && value.isComposing === false) {
    doSearch(input.value);
  } else return 0;
}

function doSearch(value) {
  const addComment = document.getElementById("commentLists");
  const addInput = document.createElement("li");
  addInput.className = "comment";
  console.log(addInput);

  const userId = document.createElement("span");
  userId.innerText = "dagyeong";
  // userId.className = "comment";
  console.log(userId);

  const commentContent = document.createElement("span");
  commentContent.innerText = value;
  console.log(commentContent);

  const deleteBtn = document.createElement("span");
  deleteBtn.innerText = "x";
  // deleteBtn.classList.add("delete");
  console.log(deleteBtn);

  addInput.appendChild(userId);
  addInput.appendChild(commentContent);
  addInput.appendChild(deleteBtn);

  addComment.appendChild(addInput);
}

// function makeDelete(addComment) {
//   const deleteBtn = addComment.querySelector(".delete");
//   deleteBtn.addEventListener("click", () => {

//   })
// }

function init() {
  btn.addEventListener("click", checkInput);
  input.addEventListener("keydown", enterInput);
}

init();
