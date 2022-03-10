const user_id = document.querySelector(".user-id");
const user_pw = document.querySelector(".user-passward");
const button = document.querySelector(".login-button");



const handleButton = ()=>{
    if(user_id.value){
        if(user_pw.value){
            button.disabled=false;
            button.style.backgroundColor= "#0095F6";
            button.style.cursor ="pointer";
        }else {
            button.disabled=true;
            button.style.backgroundColor="#C4E1FB";
            button.style.cursor="default";
        }
    }else{
        button.disabled=true;
        button.style.backgroundColor="#C4E1FB";
        button.style.cursor="default";
    } 
}

user_id.addEventListener('keyup', handleButton);
user_pw.addEventListener('keyup', handleButton);