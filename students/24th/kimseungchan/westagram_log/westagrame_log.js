const callNumber = document.querySelector('#callNumber');
const placeHold = document.querySelector('#placehold_pw');
const csId = document.querySelector('#cs_id');
const csPw = document.querySelector('#cs_pw');
const pwLook = document.querySelector('#pw_look');
const buttonEvent = document.querySelector('#button_event');
const loginButton = document.querySelector('#login_button');

const img1 = document.querySelector("#img1");
const img2 = document.querySelector("#img2");
const img3 = document.querySelector("#img3");
const img4 = document.querySelector("#img4");
const img5 = document.querySelector("#img5");
let b = true;


csId.addEventListener("keyup", ()=>{
    if(csId.value){
        callNumber.style.fontSize = "5px";
        callNumber.style.top = "0px";
        csId.style.paddingTop = "10px";
    }else if(!csId.value){
        callNumber.style.fontSize = "12px";
        callNumber.style.top = "10px";
        csId .style.paddingTop = "0px"
        if(csPw.value.length === 0 && csId.value.length===0){   
            buttonEvent.style.backgroundColor = "rgb(191,223,252)";
        }
    }
})

csPw.addEventListener("keyup", ()=>{
    if(csPw.value){
        placeHold.style.fontSize = "5px";
        placeHold.style.top = "0px";
        csPw .style.paddingTop = "10px";
        pwLook.style.display = "block";
        if(csPw.value.length > 5 && csId.value.length>3){   
            buttonEvent.style.backgroundColor = "rgb(0,150,252)";
        }
    }else if(!csPw.value){
        placeHold.style.fontSize = "12px";
        placeHold.style.top = "10px";
        csPw.style.paddingTop = "0px"
        pwLook.style.display = "none"
        if(csPw.value.length === 0 && csId.value.length===0){   
            buttonEvent.style.backgroundColor = "rgb(191,223,252)";
        }
        
    }
})

pwLook.addEventListener("click", ()=> {
    if(b){
        csPw.type = "text";
        pwLook.innerHTML = "숨기기";
        b = false;
    }
    else if(b == false){
        csPw.type = "password";
        pwLook.innerHTML = "비밀번호 표시";
        b = true;
    }
})

let imageArray = ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg"];
let imageIndex=0;

function changeImage(){
    img1.setAttribute("src", imageArray[imageIndex]);
    imageIndex++;
    if(imageIndex>=imageArray.length){
        imageIndex=0;
    }
}

setInterval(changeImage,1000);