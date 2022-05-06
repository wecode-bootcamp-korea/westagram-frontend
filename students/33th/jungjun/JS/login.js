/*
idText = document.querySelector(".id")
pwText = document.querySelector(".psw")
btn = document.querySelector(".btn")


pwText.addEventListner('input',()=>{
    console.log('gg')
    if(){
        btn.style.backgroundColor = "#0095F6";
    }
})
idText.value.length >= 1) && (pwText.value.length >= 1
*/
/*
idText = document.querySelector(".inputTag > input:nth-child(1)")
pwText = document.querySelector(".inputTag > input:nth-child(2)")
btn = document.querySelector(".inputTag > button")*/
idText = document.querySelector(".id")
pwText = document.querySelector(".psw")
btn = document.querySelector(".btn")
console.log("hi")
console.log(idText)
console.log(pwText)
console.log(btn)
console.log(idText.value.length)
console.log(pwText.value.length)
console.log(idText.value.length > 0 && pwText.value.length > 0)
console.log(idText.value)
console.log(pwText.value)

// pwText.addEventListner('input',()=>{
//     if(idText.value !== "" && pwText.value !== ""){
//         console.log("hi")
//         btn.style.backgroundColor = "#0095F6"
//     }
// })
pwText.addEventListener('keyup',()=>{
    console.log("hi")
    if(idText.value !== "" && pwText.value !== ""){
        btn.style.backgroundColor = "#0095F6"
    }
})
