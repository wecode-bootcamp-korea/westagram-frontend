const $buttonClick  = document.querySelector(".buttonClick");
const $inputId  = document.querySelector(".inputId");
const $inputPassword  = document.querySelector(".inputPassword");

$buttonClick.addEventListener("click",()=>{
    ((($inputId+"").indexOf("@") > -2) ?  
    location.href="/project/main.html" : "")
});

$inputId.addEventListener("keyup",()=>{
    if($inputId.value !== "" && $inputPassword.value !== "" ){
        $buttonClick.disabled = false
        $buttonClick.style.backgroundColor="rgb(60, 149, 239)";
    }else{
        $buttonClick.disabled = true
        $buttonClick.style.backgroundColor="rgb(180, 200, 220)";
    }
});
$inputPassword.addEventListener("keyup",()=>{
    if($inputId.value !== "" && $inputPassword.value !== "" ){
        $buttonClick.disabled = false
        $buttonClick.style.backgroundColor="rgb(60, 149, 239)";
    }else{
        $buttonClick.disabled = true
        $buttonClick.style.backgroundColor="rgb(180, 200, 220)";
    
    }
});

// if($inputId.value === $inputPassword.value && $inputId !== "" ) {
    // location.href="/project/main.html";
