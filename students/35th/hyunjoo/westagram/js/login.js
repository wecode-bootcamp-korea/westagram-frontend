const id = document.getElementById("id")
const pw = document.getElementById("pw")
const submit = document.getElementById("click")

const checkIdPw=function (){
    if(id.value.includes('@')&&id.value.length>=1 && pw.value.length>=1){
        submit.disabled=false
    }
}


id.addEventListener('keyup',checkIdPw)
pw.addEventListener('keyup',checkIdPw)

