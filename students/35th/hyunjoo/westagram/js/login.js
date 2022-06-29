// const id = document.getElementById("id");
// const pw = document.getElementById("pw")
// const submit = document.getElementById("click")

// const checkIdPw =  function (){  
//     console.log('sdfdsfd')
//     console.log(id.value.length>=1 && pw.value.length >=1)
//     if (id.value.length>=1 && pw.value.length >=1){
//             submit.disabled = false
//     }
// }

// id.addEventListener('keyup', checkIdPw)
// pw.addEventListener('keyup', checkIdPw)


const id = document.getElementById("id")
const pw = document.getElementById("pw")
const submit = document.getElementById("click")

const checkIdPw=function (){
    console.log('실행')
    console.log(id.value.length>=1 && pw.value.length>=1)
    if(id.value.length>=1 && pw.value.length>=1){
        submit.disabled=false
    }
}


id.addEventListener('keyup',checkIdPw)
pw.addEventListener('keyup',checkIdPw)