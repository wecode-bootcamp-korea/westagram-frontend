"use strict";

let coMment = document.getElementsByClassName("coMment")[0]
let coMmentButton = document.getElementsByClassName("coMmnetbutton")[0]


// 1. commnet박스에 댓글을 입력
//2. comment박스버트을 누르기(commnet박스와 연걸)
// 3. commentreview박스에 푸시
function checkInput(){
    if(!coMment.value.length){
        alert("댓글을 입력하세요")
    }else{
        pushcoMmnet(coMment.value)
    }
}

function pushcoMmnet(value){
    let coMmentviewBox = document.getElementsByClassName("commentViewBox");
    let newcoMmnetList = document.createElement("div");
    let newcoMment = `<span class="name">jaewoo-ahn </span><span>${value}</span>`

    newcoMmnetList.innerHTML = newcoMment;
    newcoMmnetList.classList.add("wpefjweof");
    coMmentviewBox[0].appendChild(newcoMmnetList);
    coMment.value="";
}

let init = () => { 
    // document.body.style.backgroundColor="yellow"
    coMmentButton.addEventListener("click", checkInput)
    // coMmentButton. = () => document.body.style.backgroundColor="red";
    
}

init()

