
let id = document.querySelector('#id');
let pw = document.querySelector('#pw');
let loginBtn = document.querySelector('.btn')

// 아이디 비번 입력란 둘 다 공백 아닐 시 버튼 색 변경
// 버튼에 .login-on 추가
id.addEventListener('input',function(e){
    if(e.target.value != ''){
        pw.addEventListener('input',function(e){
            if(e.target.value != ''){
                loginBtn.classList.add('login-on');
            }else{
                loginBtn.classList.remove('login-on');
            }
        })
    }
})

// 로그인 버튼 눌렀을때 id - @ 포함 / pw - 5자 이상  알람 띄우기
loginBtn.addEventListener('click',function(){
    if(id.value.includes('@') != true){
        alert('아이디에 @ 입력 안함');
    }
    if(pw.value.length < 5){
        alert('비밀번호는 5자 이상')
    }
})

