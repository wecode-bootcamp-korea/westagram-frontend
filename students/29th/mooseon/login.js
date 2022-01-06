
    let btnSubmit = document.getElementById("btn");
    let login1 = document.getElementById("login1");
    let login2 = document.getElementById("login2");

console.log(login1) 
    login1.addEventListener('keyup',function(){
        if (login1.value && login2.value) {
            btnSubmit.style.backgroundColor="blue"
            btnSubmit.disabled = false;
        } else {
            btnSubmit.disabled = true;
        }        
    })

    login2.addEventListener('keyup',function(){
        if (login1.value && login2.value) {
            btnSubmit.style.backgroundColor="blue"
            btnSubmit.disabled = false;
        } else {
            btnSubmit.disabled = true;
        }        
    })