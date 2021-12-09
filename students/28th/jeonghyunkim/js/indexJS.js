window.addEventListener('resize',function(event){
    const imgBox = document.querySelector('#imgBox')
    if (window.innerWidth<=735){
        imgBox.style.display='none';
    }else{
        imgBox.style.display='block';
    }
})

document.getElementsByClassName('loginInput')[0].addEventListener('input',function(event){
    const loginBtn = document.querySelector('.loginBtn');
    const inputPW = document.getElementsByClassName('loginInput')[1];
    if (event.target.value.includes('@') && inputPW.value.length>=5){
        loginBtn.style.backgroundColor='rgba(var(--d69,0,149,246),1)'
        loginBtn.style.cursor='pointer';
        loginBtn.removeAttribute('disabled');
    }else{
        loginBtn.style.backgroundColor='rgba(var(--d69,0,149,246),.3)'
        loginBtn.style.cursor='inherit';
        loginBtn.setAttribute('disabled',true);
    }
})

document.getElementsByClassName('loginInput')[0].addEventListener('keydown',function(event){
    const inputPW = document.getElementsByClassName('loginInput')[1];
    if (event.key==='Enter'){
        if (event.target.value.includes('@') && inputPW.value.length>=5){

        }else{
            alert('ID, PW를 모두 입력해주시기 바랍니다.');
        }
    }
})

document.getElementsByClassName('loginInput')[1].addEventListener('input',function(event){
    const loginBtn = document.querySelector('.loginBtn');
    const inputID = document.getElementsByClassName('loginInput')[0];
    if (event.target.value.length>=5 && inputID.value.includes('@')){
        loginBtn.style.backgroundColor='rgba(var(--d69,0,149,246),1)'
        loginBtn.style.cursor='pointer';
        loginBtn.removeAttribute('disabled');
    }else{
        loginBtn.style.backgroundColor='rgba(var(--d69,0,149,246),.3)'
        loginBtn.style.cursor='inherit';
        loginBtn.setAttribute('disabled',true);
    }
})

document.getElementsByClassName('loginInput')[1].addEventListener('keydown',function(event){
    const inputID = document.getElementsByClassName('loginInput')[0];
    if (event.key==='Enter'){
        if (inputID.value.includes('@') && event.target.value.length>=5){
            // console.log('logined');
        }else{
            alert('ID, PW를 모두 입력해주시기 바랍니다.');
        }
    }
})

const loginFunc = () =>{
    const inputID = document.getElementsByClassName('loginInput')[0];
    const inputPW = document.getElementsByClassName('loginInput')[1];
    if (inputID.value.includes('@') && inputPW.value.length>=5){
        // 서버로 입력값을 전달한다.
        // 서버의 응답에 따라 메인 페이지로 이동하거나, alert를 발생시킨다.
        // window.location.href='main.html'
    }
}

const forgetPWFunc = () =>{
    // 비밀번호 찾기 페이지로 라우팅한다.
}

const facebookLoginFunc = () =>{
    // 페이스북 로그인 modal를 출력한다.
}