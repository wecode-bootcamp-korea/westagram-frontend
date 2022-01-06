const id = document.querySelector('.id');
const password = document.querySelector('.password');
const submit = document.querySelector('.submit');
const form = document.forms.login;

function disableSubmitBtn () {
    submit.disabled = true;
    id.addEventListener('input', disableSubmit);
    password.addEventListener('input', disableSubmit);
    function disableSubmit() {
        (!id.value || !password.value)?
        submit.disabled = true : submit.disabled = false;
    }
}
disableSubmitBtn();


form.addEventListener('submit', function (event) {
    event.preventDefault();
    sessionStorage.setItem('id', id.value);
    location.href = 'main.html';
});