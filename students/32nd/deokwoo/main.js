let src = document.querySelector(".search")
let point = document.querySelector(".inputsrc")

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


//댓글영역


let reply = document.querySelector(".reply_list")
let ent = document.querySelector(".replyent")
let text = document.querySelector(".replyInput")
let btn = document.querySelector(".replyent");

//게시버튼 활성화

function active() {
    if(text.value){
        btn.removeAttribute("disabled")
        btn.classList.add("active")
    } else {
        btn.setAttribute("disabled",true)
        btn.classList.remove("active")
    }
}

text.addEventListener('keyup',active)


// 댓글추가,삭제 기능

function addreply() {
    let li = document.createElement("li")
    let id = document.getElementById("id").textContent
    li.innerHTML = `<span>${id}</span> ${text.value}<i class="fa-regular fa-heart"></i>`
    
    // 삭제기능 버튼추가
    let delbtn = document.createElement("button")
    delbtn.setAttribute("class","delete")
    delbtn.innerText = "삭제"
    delbtn.addEventListener('click', () => li.remove())
    

    li.appendChild(delbtn)
    reply.appendChild(li)
    
    text.value = ""
    btn.setAttribute("disabled",true)
    btn.classList.remove("active")

}

ent.addEventListener("click",addreply)

// 엔터키 댓글작성

function enterkey(e) {
    if(e.code === 'Enter'){
        addreply()
    }
}

text.addEventListener('keydown',enterkey)

//댓글 삭제기능

let del = document.querySelector(".delete")

function delHandler(e) {
    e.target.parentNode.remove()
}

del.addEventListener("click",delHandler)


// 프로필 메뉴

let info = document.querySelector(".information")
let pf = document.querySelector(".profile")

function showinfo() {
    info.classList.add("show")
    let all = document.createElement("div")
    all.setAttribute("class","hide")
    all.addEventListener("click",() => {
        info.classList.remove("show")
        let all = document.querySelector(".hide")
        all.remove()
        pf.style.border = "none"
    })
    document.querySelector(".navigation").append(all)
    pf.style.border = "2px solid red"
    pf.style.borderRadius = "50%"
}

pf.addEventListener("click",showinfo)