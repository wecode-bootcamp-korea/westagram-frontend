let more = document.querySelector(".more");
const a = function toggleClass(){
  document.querySelector("#lines2").classList.toggle("lines2");
}
more.addEventListener("click", a)

// ///////////// 댓글 달기 /////////////////////


let button = document.getElementById('button');
let input = document.getElementById('input');
let list = document.getElementById('ul');
let cnt = 1;

//keyup일땐 되는데 keypress일땐 안되네??
input.addEventListener('keyup', () => {
  button.disabled = false;
  button.style.opacity = 1;
  button.style.color = "red";
});

function clickButton() {
  let temp = document.createElement('li');
  temp.setAttribute("class", "list-group-item");
  temp.setAttribute("id", "li"+cnt);
  temp.innerHTML = input.value;
  temp.innerHTML += `<button style='float: right' type='button' onclick='remove(${cnt})'>삭제</button>`;
  list.appendChild(temp);
  cnt++;
  input.value = '';
  button.disabled = true;
  button.style.opacity = 0.3;
  button.style.color = "black";
}

function remove(cnt) {
  let li = document.getElementById('li'+cnt);
  list.removeChild(li);
}

let submit = document.getElementById("formSubmit");
submit.addEventListener("submit", (event) => {
  console.log("submit event trigger")
  // 엔터 쳤을땐 반응하는데
  // 왜 클릭했을땐 반응을 안하지ㅂ  
  // keypress->keypu하니ㅏㄱ =
  event.preventDefault();
  clickButton();
});

