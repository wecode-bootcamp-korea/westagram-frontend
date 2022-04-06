let selectButton = document.querySelector("button");
let id = document.querySelector(".idBox");
let pw = document.querySelector(".pwBox");

selectButton.disabled = true;

id.addEventListener("keyup", loginOn);
pw.addEventListener("keyup", loginOn);

function loginOn(){
    if (id.value && pw.value) {
        selectButton.disabled = false;
        selectButton.style.backgroundColor = '#0095f6';
    }
    else {
        selectButton.disabled = true;
        selectButton.style.backgroundColor = '#b2dffc';
    }
}

// selectButton.addEventListener('click', () => {       //로그인 버튼 활성화 시 버튼눌리는 액션이 없어서, 주석풀고 콘솔켜고 클릭하면 클릭이 되고 있다는 걸 알 수 있다.
//    console.log('click')                              //버튼태그에 border속성을 건드리면 버튼이 눌리는 액션이 없다!!
// })