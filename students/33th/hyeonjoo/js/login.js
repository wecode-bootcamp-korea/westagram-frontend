document.addEventListener('DOMContentLoaded', () => {
    const username = document.querySelector('.username');
    const password = document.querySelector('.password');
    const loginBtn = document.querySelector('.login-btn');

    // 버튼 활성화
    document.addEventListener('keyup', () => {
        loginBtn.disabled = (username.value.length !== 0 
            && password.value.length !== 0) ? false : true;
    })

    // 유효성 검사
    loginBtn.addEventListener('click', (event) => {
        if(username.value.indexOf('@') === -1 || password.value.length < 5){
            alert('아이디 또는 비밀번호를 확인해주세요.');
        } else {
            alert(`${username.value.split('@')[0]}님 환영합니다.`)
        }
    })
})
