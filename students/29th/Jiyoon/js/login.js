const loginButton = document.querySelector(".loginBtn");
const idValue = document.querySelector(".idValue");
const passwordValue = document.querySelector(".passwordValue");

const login = function () {
  
  if (idValue.value.length > 0 && passwordValue.value.length > 0) {
    loginButton.style.backgroundColor = "rgb(0, 149, 246)"
  } else {
    loginButton.style.backgroundColor = "#C0DFFD"
  }

};

idValue.addEventListener("keyup", login);
passwordValue.addEventListener("keyup", login);
loginButton.addEventListener('click',login);

const changeScreen = function () {
  return ((idValue.value.includes("@")||idValue.value.includes("-"))&&passwordValue.value.length>0)? location.href ="./main.html" : -1
}

// function trigger o console.log("llll")
// condition 너였구나, if/not 너가 안 걸리고 있었구나! .. 
// console.log("condition",idValue.value.includes("@"));
// location.href change 

loginButton.addEventListener("click",changeScreen)


loginAlert = document.getElementById("loginAlert")

const informPassword = function () {
  return alert("@를 포함한 이메일 주소와 한 글자 이상의 비밀번호를 입력해주세요.")
};

loginAlert.addEventListener("click", informPassword)





