const get = (ele) => document.querySelector(ele);

const $id = get('.login_id')
const $pw = get('.login_pw')
const $input = get('.input_wrap')
const $submit = get('.submit_btn')
const $form = get('.login_form')

const user = {
    id : 'userid',
    pw : 'pw12345',
}

console.log(`[임시] ID :${user.id}, PW :${user.pw}`)


function getInput() {
    if($id.value && $pw.value) {
        $submit.disabled = false;
        $submit.style.cursor = "pointer"
    } else {
        $submit.disabled = true;
        $submit.style.cursor = "auto"
    }
    
}

$input.addEventListener('keyup', getInput)

$form.addEventListener('submit', (e) => {
    e.preventDefault()
    if($id.value === user.id && $pw.value === user.pw) {
        window.open('./main.html', '_self')
    } else {
        alert('id 또는 pw를 확인하세요')
    }
})