const myId = document.getElementsByClassName('userId')[0];
const myPw = document.getElementsByClassName('userpw')[0];
const loginBtn = document.getElementsByClassName('btn')[0]
const myLogin = document.getElementsByClassName('my')[0];

myLogin.addEventListener('keyup' , () => {
  let idLength = myId.value.length;
  let pwLength = myPw.value.length;

  (idLength && pwLength) ? //id값과 비밀번호 값이 같니?
  loginBtn.classList.add('on') : myLogin.classList.remove('on'); //참이면 on class 명을 맨 뒤에 넣어준다 : 거짓이면 on clas 명을 없애준다.
});





