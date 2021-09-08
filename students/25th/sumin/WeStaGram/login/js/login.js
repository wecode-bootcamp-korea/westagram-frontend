
const inputId = document.getElementsByClassName("inputId");
const inputPw = document.getElementsByClassName("inputPw");
const button = document.getElementsByTagName("button");

function changeColor(){
    if(inpuId.value > 1 && inputPw.value > 1){
        button.style.backgroundColor = "blue"; 
    }else if(inpuId.value < 1 && inputPw.value < 1){
        button.style.backgroundColor = "#c0dffc"; 
    }
}

//toDoInput.Value = ""; //엔터를 치면 값이 새로고침됨
inputId.addEventListener("keyup",changeColor );
inputPw.addEventListener("keyup",changeColor );



