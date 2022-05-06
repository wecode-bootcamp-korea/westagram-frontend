const userName = document.querySelector('.userName');
const passWord = document.querySelector('.passWord');
const loginBtn = document.querySelector('.loginBtn');


userName.addEventListener('keyup',inputValue);
passWord.addEventListener('keyup',inputValue);


function inputValue(){
  loginBtn.classList.add("active");

  const userNameLength = userName.value.length;
  const passWordLength = passWord.value.length;

  if((userNameLength && passWordLength)===0)
  {
    loginBtn.classList.remove("active");
  }
}
