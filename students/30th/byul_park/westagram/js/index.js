const btn = document.querySelector("#btn");
const idInput = document.querySelector("input#id");
const passwordInput = document.querySelector("input#password");


function onLogin(event){
    event.preventDefault();
    const id = document.querySelector("input#id").value;
    const password = document.querySelector("input#password").value;
    const string = "@";
    if(!id || !id.includes(string)){
        alert('ID를 다시 확인해주세요.');
        return
    }
    if(!password || password.length < 5){
        alert('Password를 확인해주세요');
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

idInput.addEventListener("keyup", onWrite);
passwordInput.addEventListener("keyup",onWrite);
btn.addEventListener("click",onLogin);
