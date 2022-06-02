const id = document.querySelector('#id');
const password = document.querySelector('#password')
const realId = "admin"
const realPassword = "12345678";
const btn = document.querySelector('.loginButton');

// click함수
btn.addEventListener("click", () => {
    let link = 'main.html'
    if(realId == id.value ) {
        if(realPassword == password.value) {
            window.location.replace(link);
        }
    } else {
        alert('아이디 또는 비밀번호가 일치하지 않습니다')
    }
})

// enter키 함수
password.addEventListener('keydown', (e) => {
    if(e.code === 'Enter') {
        let link = 'main.html'
        if(realId == id.value ) {
            if(realPassword == password.value) {
                window.location.replace(link);
            }
        } else {
            alert('아이디 또는 비밀번호가 일치하지 않습니다')
        }
    }
});

document.querySelector("#password").addEventListener('keyup', () => {
    if(id.value.length >= 1 && password.value.length >= 8 ) {
        btn.style.backgroundColor = "#0095F6"
    }
})