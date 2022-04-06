
let main_id = document.querySelector(".main_id");

let main_pw = document.querySelector(".main_pw");

let button = document.querySelector(".main_button");

let main = document.querySelector("main");


/* 
*/ 

button.disabled = true;
main.addEventListener("change", clickAble);

function clickAble() {
    if (main_id.value === "" || main_pw.value === "") {
        button.disabled =true;
    } else {
        button.disabled =false;
    }
}

/*
원래는 if (main_id.value === "" && main_pw.value === "")로 했으나
&& -> || 로 해서 아이디는 작성 / 비번은 미작성시 버튼 비활성화 되도록

*/ 