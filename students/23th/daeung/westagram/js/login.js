




const loginBtn = document.querySelector(`#loginButton`);
const id = document.querySelector(`#id`);
const pw = document.querySelector(`#pw`);

function buttonColor()  {
    id.addEventListener(`keyup`,  event =>{
        if(id.value && pw.value)   {
            loginBtn.style.backgroundColor = "#0095F6";
            loginBtn.className = "btnHover";
            console.log("있음id")
        }
        else if(!id.value || !pw.value) {
            console.log("흠id");
            loginBtn.style.backgroundColor = "#C0DFFD";
            loginBtn.className = "";
            console.log("흠id!!!");
        }
    })

    pw.addEventListener(`keyup`, event =>{
        if(id.value && pw.value)   {
            console.log("있음pw")
            loginBtn.style.backgroundColor = "#0095F6";
            loginBtn.className = "btnHover";
        }
        else if(!id.value || !pw.value) {
            console.log("흠pw");
            loginBtn.style.backgroundColor = "#C0DFFD";
            loginBtn.className = "";
            console.log("흠pw!!!");
        }
    })
    
} 

function loginSubmit()    {
    console.log("여기왔나?");
    const loginForm = document.querySelector(`#formLogin`);
    console.log(loginForm);
    loginForm.submit();
}
buttonColor();