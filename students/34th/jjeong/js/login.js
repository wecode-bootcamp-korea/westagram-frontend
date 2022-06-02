const idd = document.getElementById("id");  //DOM에 접근
const pwdd = document.getElementById("password");
const btnBtn = document.getElementsByClassName("btn")[0];

function login (){

    const id = idd.value;
    const pass = pwdd.value;

    if (id && pass){
        btnBtn.classList.remove('xxx');
    } else {
        btnBtn.classList.add('xxx'); //그렇지 않으면 xxx 태그가 추가된다.
    } 
}

idd.addEventListener("keyup", login);  //keyup 이벤트가 발생하면 함수가 실행된다.
pwdd.addEventListener("keyup", login);