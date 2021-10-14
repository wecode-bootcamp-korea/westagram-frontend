//login.js
const id = document.getElementById('userId');
const pw = document.getElementById('userPw');
const btn = document.querySelector('button')

const matchValue = elem => {
    elem.target.value;

    console.log(elem)
    if(!id.value || !pw.value) {
        btn.style.opacity = 0.4;
    }else {
        btn.style.opacity = 1;
    }

}

id.addEventListener('keyup', matchValue);
pw.addEventListener('keyup', matchValue);
