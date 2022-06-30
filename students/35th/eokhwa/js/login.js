let idInput = document.querySelector("#id_input");
let passInput = document.querySelector("#pass_input");
let buttonOn = document.querySelector("button");
let buttonActive = document.querySelector(".on");
let inputAll = document.querySelectorAll("input_box")




// 아이디, 비번 입력후 버튼 활성화 //
const isCheckIdAndPass = ()=>{
    let idValue =idInput.value.length;
    let passValue = passInput.value.length;

    (idValue && passValue)   ? isTure() : isFalse()
  

}

const isTure = ()=>{
    buttonOn.classList.add("on");
    buttonOn.disabled =false;

}


const isFalse = ()=>{
    buttonOn.classList.remove("on")
    buttonOn.disabled = true;
}




//아이디 비번 확인후 로그인//
const isCheckLogin = ()=>{
    let idValue =idInput.value
    let passValue = passInput.value
    
    if(idValue === "jung3117" && passValue === "asdf1234"){
       goToMain();
    }else{
        goBackLogin();
    }
}

//성공시//
const goToMain = ()=>{
    alert("로그인 성공");
    location.href = "../main.html";    
}

//실패시//
const goBackLogin = ()=>{

    alert("로그인 실패");
}