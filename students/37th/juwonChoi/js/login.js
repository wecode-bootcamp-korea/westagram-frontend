const input1 = document.querySelector('#id');
const input2 = document.querySelector('#password');
const lgnButton = document.querySelector('button');

const btnEnable = () => {
    const idValue = document.querySelector('#id').value;
    const pwValue = document.querySelector('#password').value;
    if((idValue.includes('@')&& idValue.includes('.')) && (pwValue.length >= 5)){
        lgnButton.disabled = false;
        lgnButton.style.backgroundColor= "#0095F6";
        lgnButton.setAttribute("id" , "btn")
    } else {
        lgnButton.disabled = true;
        lgnButton.style.backgroundColor= "#C0DFFD"
        lgnButton.removeAttribute("id")
    }
}
input1.addEventListener('keyup', btnEnable);
input2.addEventListener('keyup', btnEnable);



//현재 id, pw 입력 시 부조건 로그인 버튼이 활성화 외어 있도록 구현이 되어 있습니다.
//실제 로그인 하는 경우를 생각하며 validation(유효성 검사) 기능을 추가해주세요.
//ex) id >>> '@' 포함 / pw >>> 5글자 이상
