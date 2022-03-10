const inpId = document.querySelector(".inpID")
const inpPw = document.querySelector(".inpPass")
const btnLogin = document.querySelector(".btnLogin")

// function changeColor () {
//     const id = inpId.value
//     const pw = inpPw.value
//     if(id && pw) {
//         btnLogin.classList.add("on")
//     }
// }

// inpId.addEventListener('keyup',changeColor)
// inpPw.addEventListener('keyup',changeColor)

// 이메일 형식 검사
function checkEmailValid() {
    const inpId = document.querySelector(".inpID")
    const inputAlert = document.querySelector('.inputAlert');
    const isEmail = (value) => {
      // 골뱅이가 있고 골뱅이 뒤에 점이 있다면 
      return (value.indexOf('@') > 1) &&
        (value.split('@')[1].indexOf('.') > 1)
    }
  
    inpId.addEventListener('keyup', (event) => {
      const value = event.currentTarget.value
      console.log(value)
      if (isEmail(value)) {
        inputAlert.style.color = "green"
        inputAlert.textContent = `올바른 이메일 형식 입니다.`
      } else {
        inputAlert.style.color = "#eb5757"
        inputAlert.textContent = `* 올바르지 않은 이메일 형식입니다.`
      }
    })
}

checkEmailValid()

// 비밀번호 6자리 이상인 함수 
function checkPassword() {
    const inpPw = document.querySelector(".inpPass")
    const inputPassAlert = document.querySelector(".inputPassAlert")
    const isPassword = (value) => {
        return (value.length >= 6)
    }

    inpPw.addEventListener('keyup', (event) => {
        const value = event.currentTarget.value
        console.log(value)
        if(isPassword(value)) {
            inputPassAlert.textContent = ` `
        } else {
            inputPassAlert.style.color = "#eb5757"
            inputPassAlert.textContent = `비밀번호는 6자리 이상 입력해주세요.`
        }
    })
}

checkPassword()

// function changeColor () {
//     const id = inpId.value
//     const pw = inpPw.value
//     if(checkEmailValid() && checkPassword) {
//         btnLogin.classList.add("on")
//     }
// }

// inpId.addEventListener('keyup',changeColor)
// inpPw.addEventListener('keyup',changeColor)