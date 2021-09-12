const button = document.getElementById('login-button');
const idIn = document.getElementById('id-email');
const passwordIn = document.getElementById('password');
const validity = document.getElementsByClassName("validity")[0]
const container = document.getElementsByClassName("container")[0]


// id에 @ password 5자이상 유효성 검사 및 버튼활성화
function login() {
  const id= idIn.value
  const password = passwordIn.value
  if (id.includes("@") && (password.length >= 5)) {
    button.classList.remove("button-off")
    button.disabled = false;
    validity.style.display = 'none';
    } else {
    button.classList.add("button-off")
    button.disabled = true;
    validity.style.display = 'block';
  }
}
// 엔터 치면 버튼 클릭
function enter(e) {
  if(e.keyCode == 13) {
    button.click();
  }
}



container.addEventListener('keyup',login);
// idIn.addEventListener('keyup',login);
container.addEventListener('keypress',enter);
// idIn.addEventListener('keypress',enter);