let src = document.querySelector(".search")
let point = document.querySelector(".inputsrc")
console.log(src)

function hidediv() {
    src.style.visibility = 'hidden'
    point.setAttribute("placeholder", "검색")
    point.focus()
}

function showdiv() {
    src.style.visibility = ""
    point.removeAttribute("placeholder")
}

src.addEventListener("click",hidediv)
point.addEventListener("focusout",showdiv)






let reply = document.querySelector(".reply_list")
let ent = document.querySelector(".replyent")


function addreply() {
    let li = document.createElement("li")
    let id = document.getElementById("id").textContent
    let text = document.querySelector(".replyInput")

    li.innerHTML = `<span>${id}</span> ${text.value}<i class="fa-regular fa-heart"></i>`
    reply.appendChild(li)
    text.value = ""
}


ent.addEventListener("click",addreply)
