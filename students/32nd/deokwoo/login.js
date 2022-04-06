let id = document.querySelector(".id input")

let pw = document.querySelector(".pw input")

let btn = document.querySelector(".button .btn")

let main = document.querySelector(".wrapper")

function validate() {
    if(id.value && pw.value){
        // btn.removeAttribute("disabled")
        // btn.classList.add("active")
        if(id.value.includes("@")&&pw.value.length > 5){
            btn.removeAttribute("disabled")
            btn.classList.add("active")
        }  
    }else {
        btn.setAttribute("disabled",true)
        btn.classList.remove("active")
    }
}

main.addEventListener("keyup",validate)

// 페이지 이동

function gomain() {
    window.location.href = 'http://127.0.0.1:5500/main.html'
}

btn.addEventListener('click', gomain)