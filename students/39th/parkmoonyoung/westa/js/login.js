loginBtnActive();

let userPersonalData = [
    ['userid1','userpw1'],
    ['userid2','userpw2'],
    ['userid3','userpw3'],
    ['userid4','userpw4'],
    ['userid5','userpw5']
]

function loginBtnActive(){
    let idForm = document.querySelector('.loginFormBox .userId');
    let pwForm = document.querySelector('.loginFormBox .userPw');
    let loginBtn = document.querySelector('.inputDataArea .btnLogin');
    
    let isIdValueLength;
    let isPwValueLength;
    
    idForm.addEventListener('keyup', function(){
        isIdValueLength = idForm.value.length;
        loginCheck(isPwValueLength,isPwValueLength,loginBtn);
    });
    
    pwForm.addEventListener('keyup', function(){
        isPwValueLength = pwForm.value.length;
        loginCheck(isPwValueLength,isPwValueLength,loginBtn);
    });

    // 로그인버튼 클릭시 유효성 검사
    loginBtn.addEventListener('click',function(){
        let isIdValue = idForm.value;
        let isPwValue = pwForm.value;

        userDataValidationCheck(isIdValue,isPwValue,userPersonalData);
    });

}


// 로그인,비번 글자수 체크 함수
function loginCheck (isIdValueLength,isPwValueLength,loginBtn) {
    if ( (isIdValueLength > 0) && (isPwValueLength > 0) ) {
        loginBtn.removeAttribute('disabled');
    } else {
        console.log("아이디 또는 비번 길이 오류");
        loginBtn.setAttribute('disabled','disabled');
    }
}

// 아이디 비번 유효성 검사 함수
function userDataValidationCheck(idValue,pwValue,data){
    for (var i = 0; i < data.length; i++) {
        if ( idValue == data[i][0]  ) {
            console.log('id 존재함');

            if ( pwValue == data[i][1] ) {
                console.log('pw 일치함');
                alert('로그인 성공!');
                break;
            } else {
                console.log('pw가 일치하지 않습니다.');
                break;
            }

        } else {
            console.log('id가 존재하지 않습니다.');
            break;
        }
    }

}
