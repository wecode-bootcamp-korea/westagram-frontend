document.addEventListener('DOMContentLoaded', () => {
    const $username = document.querySelector('.username');
    const $password = document.querySelector('.password');
    const $loginBtn = document.querySelector('.loginBtn');

    document.addEventListener('keyup', () => {
        $loginBtn.disabled = ($username.value.length !== 0 
            && $password.value.length !== 0) ? false : true;
    })

    $loginBtn.addEventListener('click', (event) => {
        if($username.value.indexOf('@') === -1 || $password.value.length < 5){
            alert('아이디 또는 비밀번호를 확인해주세요.');
        } else {
            alert(`${$username.value.split('@')[0]}님 환영합니다.`)
        }
    })
})
