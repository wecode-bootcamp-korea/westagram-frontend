"use strict"

const id = document.getElementById("Id")
const pw = document.getElementById("Pw")
const btn = document.getElementsByTagName("button")[0]
const intputTag = document.getElementsByTagName("input")[0]

function activeBtn(){
    if(id.value.length > 0 && pw.value.length > 0){
        btn.style.backgroundColor = "#0094F6";
    }else{
        btn.style.backgroundColor = "#0094f656";
    }
}

id.addEventListener('keyup',activeBtn)
pw.addEventListener('keyup',activeBtn)