const isId = document.getElementById('user_id');
const isPw = document.getElementById('user_pw');
const letsLogin = document.getElementById('btn_login');
const isInput = document.getElementsByTagName('input')[0]

// id에 키업 때 한 글자 이상 있는지 체크
// pw에 키업 때 한 글자 이상 있는지 체크
// 두 다 글자 있는지 체크
// 둘 다 한 글자 이상 있으면 login버튼 active
// 둘 중 하나 비었으면 있으면 login버튼 active XXX

isId.addEventListener('keyup',activeBtn)
isPw.addEventListener('keyup',activeBtn)

console.log(isInput)
//isInput.addEventListener('keyup',activeBtn)

function activeBtn(){
 
    if (0 < isId.value.length && 0 < isPw.value.length){
        letsLogin.classList.add('active');
    } else {
        letsLogin.classList.remove('active');
    }
}

