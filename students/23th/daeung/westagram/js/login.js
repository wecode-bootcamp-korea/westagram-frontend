





function buttonColor()  {

    const loginBtn = document.querySelector(`#loginButton`);
    const id = document.querySelector(`#id`);
    const pw = document.querySelector(`#pw`);

    id.addEventListener(`keyup`,  event =>{
        
        // if(id.value && pw.value)   {
        //     loginBtn.style.backgroundColor = "#0095F6";
        //     loginBtn.className = "btnHover";
        // }
        // else if(!id.value || !pw.value) {
        //     console.log("흠id");
        //     loginBtn.style.backgroundColor = "#C0DFFD";
        //     loginBtn.className = "";
        // }

        return ((id.value && pw.value) ? (loginBtn.style.backgroundColor = "#0095F6") 
        : (!id.value || !pw.value) ? (loginBtn.style.backgroundColor = "#C0DFFD") 
        : "");

    })


    pw.addEventListener(`keyup`, event =>{
        // if(id.value && pw.value)   {
        //     console.log("있음pw")
        //     loginBtn.style.backgroundColor = "#0095F6";
        //     loginBtn.className = "btnHover";
        // }
        // else if(!id.value || !pw.value) {
        //     console.log("흠pw");
        //     loginBtn.style.backgroundColor = "#C0DFFD";
        //     loginBtn.className = "";
        //     console.log("흠pw!!!");
        // }

        return ((id.value && pw.value) ? (loginBtn.style.backgroundColor = "#0095F6") 
        : (!id.value || !pw.value) ? (loginBtn.style.backgroundColor = "#C0DFFD") 
        : "");
    })
    
} 


function loginSubmit()    {
    const id = document.querySelector(`#id`);
    const pw = document.querySelector(`#pw`);
    console.log(id.value.indexOf(`@`));
    console.log("여기왔나?");
    const loginForm = document.querySelector(`#formLogin`);
    console.log(loginForm);

    if(id.value && pw.value && isLoginCheck() === true) {
        localStorage.setItem(`id`, id.value);
        loginForm.submit();
    }
    else if(isLoginCheck() === false)
        alert(`아이디와 비밀번호를 확인하세요`);
    else if(!id.value || !pw.value)
        alert(`아이디 또는 비밀번호를 입력하세요`);

    function isLoginCheck()  {
        if(id.value.indexOf(`@`) != -1 && (pw.value).length >= 5)   {
            console.log(`여기 로그인 체크`);
            return true;
        }
        else
            return false; 
    }
}
buttonColor();