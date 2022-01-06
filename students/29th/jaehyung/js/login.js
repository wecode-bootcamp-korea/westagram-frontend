const email = document.querySelector('.informaition1')
const pw = document.querySelector('.informaition2')
const btn = document.querySelector('.on-btn')

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