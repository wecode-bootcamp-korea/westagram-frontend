const id = document.getElementById('id')
const password = document.getElementById('password')
const login = document.getElementById('login')
let errStack = 0;

function isFull() {
    login.disabled = id.value.split('').indexOf('@') !== -1 && (password.value.length >= 5) ? false : 'disabled'
}

let isRight = () => {
    if (id.value == 'acid@wecode.com') {
        if (password.value == '000000') {
            alert('로그인 되었습니다!')
            errStack = 0
            location.href = '/main.html'
        }
        else {
            alert('아이디와 비밀번호를 다시 한 번 확인해주세요!')
            errStack ++;
        }
    }
    else {
        alert('존재하지 않는 계정입니다.')
    }

    if (errStack >= 5) {
        alert('비밀번호를 5회 이상 틀리셨습니다. 비밀번호 찾기를 권장드립니다.')
    }
}

let loginByEnter = (e) => {
    if (e.code === 'Enter') {
        isRight()
    }
}




