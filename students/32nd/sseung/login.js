const get = (ele) => document.querySelector(ele);

const $id = get('.login_id')
const $pw = get('.login_pw')
const $input = get('.input_wrap')
const $submit = get('.submit_btn')
const $form = get('.login_form')

const user = {
    id : 'userid@gmail.com',
    pw : 'pw123456789',
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

    const idCheck = ($id.value === user.id)
    const pwCheck = ($pw.value === user.pw)
    const includeEmail = $id.value.includes('@')
    const pwMinLength = (7 < $pw.value.length && $pw.value.length < 16)


    if( idCheck && pwCheck ) {
        window.open('./main.html', '_self')
    } else {
        let errorMessage = ''
        let hintMessage = ''

        if(!idCheck && !pwCheck) {
            errorMessage += `아이디와 비밀번호를 확인하세요`
        } else if(!idCheck) {
            errorMessage += `아이디를 확인하세요`
        } else if(!pwCheck){
            errorMessage += `비밀번호를 확인하세요`
        }
        
        if(!includeEmail) {
            hintMessage += `아이디가 이메일 형식이 아닙니다.\n`
        }
        if(!pwMinLength) {
            hintMessage += `비밀번호는 8자리 ~ 15자리 입니다.\n`
        }

        alert(`${errorMessage}!${ hintMessage ? '\n\nhint:' : '' }${hintMessage}`)
    }
})