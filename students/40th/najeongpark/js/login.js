const idInput = document.querySelector('.id');
const pwInput = document.querySelector('.pass');
const btn = document.querySelector('.loginBtn');

idInput.addEventListener('keyup', disableChk);
pwInput.addEventListener('keyup', disableChk);

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
