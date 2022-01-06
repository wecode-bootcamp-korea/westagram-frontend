const email = document.querySelector('.user')
const pw = document.querySelector('.password')
const btn = document.querySelector('.btn')

function btnActive () {
  if ((email.value !== "")&& (pw.value !== "") ) {
    btn.style.backgroundColor="#0095f6" 
    btn.disabled = false
  }else {
    btn.style.backgroundColor= "#c4e1fb"
    btn.disabled = true
  }
};

email.addEventListener('keyup', btnActive)
pw.addEventListener('keyup', btnActive)