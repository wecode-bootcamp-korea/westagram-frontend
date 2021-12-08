// const body = document.querySelector('body');
// const loginId = document.getElementById('login-id');
// const loginPw = document.getElementById('login-pw');
// let blueBtn = document.getElementById('login-btn');

// body.addEventListener('keydown', function(){
//     if(loginId.value && loginPw.value) {
//         blueBtn.style.backgroundColor = 'blue';
//     }

//     // 만약 loginId 에 한글자 이상 들어오거나,
//     // 만약 loginPw 에 한글자 이상 들어오면
//     // login-btn 의 컬러가 바뀐다
// });


// login-id과 login-pw에 글자를 치면 loginBtn의 컬러가 바뀜

// 연한 파란색이었다가 -> 활성화 되면 파란색
// 결론 --> 각각 keydown 쓰면 로그인 버튼의 컬러가 바뀐다.



// 윤국님 설명
// const loginId = document.querySelector('#login-id');
// const loginPw = document.querySelector('#login-pw')
// loginId.addEventListener('keyup', (event) =>{
//     console.log(event.target.value)
// })


const loginId = document.querySelector('#login-id');
const loginPw = document.querySelector('#login-pw');
const body = document.querySelector('body');
const blueBtn = document.querySelector('#login-btn');

body.addEventListener('keydown', function(){
    if(loginId.value && loginPw.value) {
        blueBtn.style.backgroundColor = '#004EBC';
    }
});



