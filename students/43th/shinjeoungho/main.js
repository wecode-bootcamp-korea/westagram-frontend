const id = document.getElementById("email");
const password = document.getElementById("pas");
const loginButton = document.getElementById("loginBtn");
const commentArea = document.getElementById("comment");
const addButton = document.getElementById("add");
const strongId = document.getElementById("ids");
const strongcount = document.getElementById("counts");
const strongs = document.querySelector(".Moreinformation");
const postingButton = document.getElementById("posting");
const storys = document.querySelector(".users");
const suggestionArea = document.querySelector(".suggestions");

console.log(storys);

let inputValue = [];
let count = 0;

console.log(commentArea);

document.body.addEventListener("keyup", () => {
  if (id.value.length >= 1 && password.value.length >= 1) {
    loginButton.style.backgroundColor = "blue";
  } else {
    loginButton.style.backgroundColor = "#c4e1fb";
  }
});

postingButton.addEventListener("click", () => {
  if (commentArea.value.length > 0) {
    task();
    commentArea.value = "";
  }
});

comment.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    if (commentArea.value.length > 0) {
      task();
      commentArea.value = "";
    }
  }
});

function task() {
  let input = {
    id: random(),
    value: commentArea.value,
  };
  inputValue.push(input);
  console.log(inputValue);
  render();
  render2();
  render3();
}

function render() {
  if (count < 0) {
    count = 0;
  }
  let result = ``;
  for (let i = 0; i < inputValue.length; i++) {
    result += `
    <div class="contents" >
      <p><strong>${inputValue[i].id}</strong> ${inputValue[i].value}</p> 
      <button onclick="deleteTask('${inputValue[i].id}')"><i class="bi bi-trash3"></i></button>
    </div>`;
    strongs.innerHTML = ` <img src="./image/KakaoTalk_20230213_204309040.jpg" alt="">
                          <strong>${inputValue[i].id}</strong>님 외&nbsp<strong>${count}명</strong>이 댓글을 다셨습니다.</p>`;
    console.log(result);
    console.log(inputValue);
  }
  count++;
  document.getElementById("comment_content").innerHTML = result;
}

function deleteTask(id) {
  for (let i = 0; i < inputValue.length; i++) {
    if (inputValue[i].id == id) {
      inputValue.splice(i, 1);
      strongs.innerHTML = "";
      break;
    }
  }
  console.log(inputValue);
  count -= 2;
  render();
}

function render2() {
  let result2 = "";
  for (let i = 0; i < inputValue.length; i++) {
    result2 += `
    <div class="user">
          <i class="bi bi-person-square"></i>
          <p>${inputValue[i].id}</p>
        </div>`;
  }
  storys.innerHTML = result2;
}

function render3() {
  let result3 = "";
  for (let i = 0; i < inputValue.length; i++) {
    result3 += `
   
    <div class="suggestion">
    <i class="bi bi-person-square"></i>
    <div class="suggestion_text">
      <p>${inputValue[i].id}</p>
      <p>좋아요</p>
  </div>
  </div>`;
  }
  suggestionArea.innerHTML = result3;
}

function random() {
  return Math.random().toString(36).substr(2, 16);
}
