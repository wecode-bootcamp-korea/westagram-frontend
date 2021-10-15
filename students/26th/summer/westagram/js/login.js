const idTag = document.getElementById('id');
const pwTag = document.getElementById('pw');
const loginBtn = document.getElementById('loginBtn')

let id = '';
let pw = '';

const onInputId = (e) => {
  id = e.target.value;
}

const onInputPw = (e) => {
  pw = e.target.value;
  
  if (!id || !pw) {
    loginBtn.style.opacity = "0.4"
    return;
  }
  loginBtn.style.opacity = "1"
}

// const onClickButton = () => {
//   if (!id || !pw) {
//     alert('id 와 pw를 입력해주세요')
//     return;
//   }
//   alert('로그인 되었습니다.')
// }

idTag.addEventListener('input', onInputId);
pwTag.addEventListener('input', onInputPw);
// loginBtn.addEventListener('click', onClickButton);
// 
