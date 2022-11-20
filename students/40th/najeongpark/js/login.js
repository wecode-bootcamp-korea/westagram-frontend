const idInput = document.querySelector('.id');
const pwInput = document.querySelector('.pass');
const btn = document.querySelector('.loginBtn');

function disableChk () {
    if(idInput.value && pwInput.value) {
        btn.disabled = false;
        btn.style.opacity = 1.0;
        btn.style.cursor = 'pointer';
    } else {
        btn.disabled = true;
        btn.style.opacity = 0.3;
    }
}

//validation
function regExpCheck () {
    const checkId = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    const checkPw = /^[0-9a-zA-Z]{5,}$/;

    const errorMsg = document.querySelector('.errorMsg');

    if(checkId.test(idInput.value) && checkPw.test(pwInput.value)) {
        errorMsg.style.display = 'none';
        window.location.href = '/westagram-frontend/students/40th/najeongpark/main.html'
    } else {
        errorMsg.style.display = 'block';
    }
}

const init =  () => {
    idInput.addEventListener('input', disableChk);
    pwInput.addEventListener('input', disableChk);
    btn.addEventListener('click', regExpCheck);
}; 

init();