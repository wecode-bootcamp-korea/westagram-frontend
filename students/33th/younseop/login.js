const loginBtn = document.getElementById("login-btn");
const userId = document.getElementById("id");
const userPw = document.getElementById("password");
const linkToMain = document.getElementsByTagName("a")[0];

function activedLogin() {
    const userIdValue = userId.value;
    const userPwValue = userPw.value;

    if (userIdValue.indexOf("@") >= 0 && userPwValue.length >= 5) {
        loginBtn.disabled = false;
        linkToMain.href = "/Users/seop/Desktop/wecode/westagram-frontend/students/33th/younseop/main.html";
    } else {
        loginBtn.disabled = true;
        linkToMain.href = "#none";
    }
}

userId.addEventListener("keyup", activedLogin);
userPw.addEventListener("keyup", activedLogin);
