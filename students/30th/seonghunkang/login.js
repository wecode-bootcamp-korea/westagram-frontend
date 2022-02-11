// - id, pw 에 각각 한 글자 이상 써야 버튼이 활성화 되도록 해주세요.
//   원래 연한 파란색이었다가 -> 활성화 되면 파란색으로!


const loginBtn = document.getElementsByClassName("loginbtn")[0];
const loginId = documet.getElementById("id_input");
const loginPassword = documnet.getElementById("password_input");

// button 으로 활성화도 있지만 다른 액션도 있으니 우선 class로 하자 

function activate_btn() {
    const login_id = loginId.value; 
    const login_pass = loginPassword.value;

    if(login_id && login_pass) {
        loginBtn.classList.remove('deactivate_btn');
    } else {
        loginBtn.classList.add('deactivate_btn');
        
    }
}

loginId.addEventListener("keyup", activate_btn);

loginPassword.addEventListener("keyup", activate_btn);
