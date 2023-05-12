let id = document.querySelector('#id');
let pw = document.querySelector('#pw');
let loginBtn = document.querySelector('.btn');

id.addEventListener('input',function(e){
    if(e.target.value != ''){
        pw.addEventListener('input',function(e){
            if(e.target.value != ''){
                loginBtn.classList.add('login-on');
            }else{
                loginBtn.classList.remove('login-on');
            }
        });
    }
});

loginBtn.addEventListener('click',function(){
    if(id.value.includes('@') != true){
        alert('아이디에 @ 입력 안함');
    }
    if(pw.value.length < 5){
        alert('비밀번호는 5자 이상');
    }
});

