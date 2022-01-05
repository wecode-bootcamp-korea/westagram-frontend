const id = document.querySelector('#id');
const password = document.querySelector('#password');
const submit = document.querySelector('#submit');
submit.disabled = true;

id.addEventListener('input', disableSubmit);
password.addEventListener('input', disableSubmit);
function disableSubmit() {
    (!id.value || !password.value)?
    submit.disabled = true : submit.disabled = false;
}

const form = document.querySelector('form');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    sessionStorage.setItem('id', id.value); // id 저장
    location.href = 'main.html'; // 메인페이지로 이동
});