const thisInput = document.querySelector('#loginwrapper');
const thisId = document.querySelector('.loginid');
const thisPassword = document.querySelector('.loginpassword');
const thisButton = document.querySelector('.loginbutton');


thisInput.addEventListener('keyup', () => {

   if (thisId.value && thisPassword.value) {
    thisButton.disabled = false;
    thisButton.style.backgroundColor = '#0e71e1';
   } else { 
    thisButton.disabled = true; 
    thisButton.style.backgroundColor = '#c0dcfb';
   }
});

// 1. 버튼의 스타일(disabled 일때와 아닐때) 정의가 있어야함
// 2. 자바스크립트 코드
// 첫번째 인풋, 두번째 인풋에 값을 읽어서
// 둘중에 하나라도 값이 없을때
// 버튼의 disabled 속성을 부여

// 인풋에서 값 추출할때

