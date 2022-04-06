let id = document.querySelector(".id input")

let pw = document.querySelector(".pw input")

let btn = document.querySelector(".button .btn")

let main = document.querySelector(".wrapper")

function validate() {
    if(id.value && pw.value){
        btn.removeAttribute("disabled")
        btn.classList.add("active")
        // btn.setAttribute("style","background-color : blue;")
    } else {
        btn.setAttribute("disabled",true)
        btn.classList.remove("active")
    }
}

main.addEventListener("input",validate)

// 페이지 이동

function gomain() {
    window.location.href = 'http://127.0.0.1:5500/main.html'
}


btn.addEventListener('click', gomain)