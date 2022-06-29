let idInput = document.querySelector("#id_input");

let passInput = document.querySelector("#pass_input");
let buttonOn = document.querySelector("button");
let buttonActive = document.querySelector(".on");

idInput.addEventListener('keyup',function(){
    let idValue =idInput.value.length
    let passValue = passInput.value.length
   if(idValue >= 1 && passValue >=1){
    buttonOn.classList.add("on");
    buttonOn.disabled =false;
   }else{
    buttonOn.classList.remove("on")
    buttonOn.disabled = true;
   }
});

passInput.addEventListener('keyup',function(){
    let idValue =idInput.value.length
    let passValue = passInput.value.length
   if(idValue >= 1 && passValue >=1){
    buttonOn.classList.add("on");
    buttonOn.disabled =false;
    
   }else{
    buttonOn.classList.remove("on")
    buttonOn.disabled = true;
   }
});


buttonOn.addEventListener('click', function(){
    let idValue =idInput.value
    let passValue = passInput.value
    if(idValue === "jung3117" && passValue === "asdf1234"){

        alert("로그인 성공")
        location.href="../main.html"
    }else{

        alert("로그인 실패")
    }

});