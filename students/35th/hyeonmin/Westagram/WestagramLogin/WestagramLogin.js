const idInput = document.getElementById('idInput');
const passwordInput = document.getElementById('passwordInput');
const button = document.getElementById('loginButton');
//const Link = document.querySelector("a");


passwordInput.addEventListener('keyup',() => {
    let firstResult = idInput.value;
    let secondResult = passwordInput.value;
    let emailSearch = firstResult.indexOf("@");
    console.log(typeof(firstResult));//결과 string
    console.log(emailSearch);//결과 fales -1 true 0
    if(emailSearch !== -1 && secondResult.length > 5){
        button.style.backgroundColor = "blue";
        button.disabled = false;
        //console.log(typeof(secondResult));결과 string
    }else {
        button.style.backgroundColor = "rgb(162, 224, 255)";
        button.disabled = true;
    }
})

idInput.addEventListener('keyup',() => {
    let firstResult = idInput.value;
    let secondResult = passwordInput.value;
    let emailSearch = firstResult.indexOf("@");
    if(emailSearch !== -1 && secondResult.length > 5){
        button.style.backgroundColor = "blue";
        button.disabled = false;
    }else {
        button.style.backgroundColor = "rgb(162, 224, 255)";
        button.disabled = true;
    }
})
/*
Button.onclick = function(){
    if(Button.style.backgroundColor !== "rgb(162, 224, 255)"){
        //Link.removeAttribute('href')
        Link.pointerEvents = "none";
        Link.cursor = "default";
    } else {
        Link.href('../WestagramMain/WestagramMain.html')
    }
}
*/