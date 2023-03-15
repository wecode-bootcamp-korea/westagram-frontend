let loginBtn = document.getElementById('login');
let idInput = document.getElementById('idInput');
let pwInput = document.getElementById('pwInput');


window.addEventListener("load", () => {
  loginBtn.classList.add('disabled');
  loginBtn.disabled = true;
});


// 키가 눌릴 때마다 모든 인풋들이 밸류가 있는지 확인
document.onkeyup = () => {
  if ((idInput.value.length == 0) || (pwInput.value.length == 0)) {
    disableButton();
  } else {
    enableButton();
  }
};

function checkEmail(email) {
  if(email.match(/^\S+@\S+\.\S+$/)) {
    return true;
  } else {
    alert('올바른 이메일을 입력해주세요!');
    return false;
  }
}

function checkPassword(pw) {
  if(pw.length > 5) {
    return true;
  } else {
    alert('비밀번호를 6자 이상 입력해주세요');
    return false;
  }
}

loginBtn.addEventListener('click', () => {
  let emailOkay = checkEmail(idInput.value);
  let pwOkay = checkPassword(pwInput.value);

  if(emailOkay == true && pwOkay == true) {
    console.log('both okay now!');

    window.location.href = "main.html";
  }
});

function disableButton() {
  loginBtn.classList.add('disabled');
  loginBtn.disabled = true;
  console.log(loginBtn.disabled);
}

function enableButton() {
  loginBtn.classList.remove('disabled');
  loginBtn.disabled = false;
  console.log(loginBtn.disabled);
}





