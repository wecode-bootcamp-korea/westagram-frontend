const btn = document.querySelector("#btn");
const idInput = document.querySelector("input#id");
const passwordInput = document.querySelector("input#password");


function onLogin(event){
    event.preventDefault();
    const id = document.querySelector("input#id").value;
    const password = document.querySelector("input#password").value;
    if(!id){
        alert('ID를 작성해주세요.');
        return
    }
    if(!password){
        alert('Password를 작성해주세요');
        return
    }
    location.href = 'main.html';
}
function onWrite(event){
    const id = document.querySelector("input#id").value;
    const password = document.querySelector("input#password").value;
    console.log(id, password);
    return (id && password) ? btn.classList.remove('disabled'):btn.classList.add('disabled');
}

// idInput.addEventListener("keydown", onWrite); 
//&&:and ||:or
//down->press->up 순서로 가기떄문에 키패드가 눌려지는 그 순간부터 이벤트가 시작되서 한박자 느리게 찍힌다
// passwordInput.addEventListener("keydown",onWrite);
idInput.addEventListener("keyup", onWrite);
passwordInput.addEventListener("keyup",onWrite);
btn.addEventListener("click",onLogin);
