const inputId = document.querySelector("#id");
const inputPassword = document.querySelector("#password");
const button = document.querySelector(".btn");

function loginBtn() {
    let idValue = inputId.value;
    let passwordValue = inputPassword.value;

    if(idValue.length > 0 && passwordValue.length >= 5 ) {
        {
            let s=idValue.includes("@");
            //console.log(s);
            if(s){
                button.disabled = false;
                button.style.backgroundColor = "hotpink";
            }
            
        }
       
    
        
    }else {
        button.disabled = true;

        button.style.backgroundColor = "pink";
    }
};

inputId.addEventListener('keyup', loginBtn);
inputPassword.addEventListener('keyup', loginBtn);