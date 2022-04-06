const a = document.getElementById('user');
const b = document.getElementById('pw');
const c = document.getElementById('login-btn');

document.getElementById('user').addEventListener("keyup", f);
document.getElementById('pw').addEventListener("keyup", f);

function f(){
    if(a.value !== "" && b.value !== ""){
        c.disabled = false;
        c.style.backgroundColor = 'blue';
    }else if(a.value == "" || b.value == ""){
        c.disabled = true;
        c.style.backgroundColor = 'lightblue';
        c.style.opacity=0.5;
    }
};