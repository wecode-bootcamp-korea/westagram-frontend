const inputId = document.querySelector('#id')
const inputPwd = document.querySelector('#pwd')

const loginBtn = document.querySelector('.loginBtn')
const regEmail =
  /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/

const loginValidation = (e) => {
  if (inputId.value && inputPwd.value) {
    loginBtn.style.backgroundColor = '#0095f6'
    loginBtn.disabled = false
  } else {
    loginBtn.style.backgroundColor = '#c4e1fb'
    loginBtn.disabled = true
  }
}

const checkReg = (e) => {
  if (!regEmail.test(inputId.value)) {
    inputId.focus()
  }
  if (inputPwd.value.length <= 4) {
    inputPwd.focus()
  }
}

inputId.addEventListener('keyup', loginValidation)
inputPwd.addEventListener('keyup', loginValidation)
loginBtn.addEventListener('click', checkReg)
