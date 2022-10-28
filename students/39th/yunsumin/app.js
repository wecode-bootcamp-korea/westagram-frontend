const loginId = document.querySelector(".login-1");
const loginPs = document.querySelector(".login-2");
const buttonRun = document.querySelector(".login-bt")

function startLogin() {
    if (loginId.value.indexOf("@") != -1 && loginId.value.length >= 1 && loginPs.value.length >= 8) {
        buttonRun.classList.remove("btstyle");
        buttonRun.disabled = false;
    } else {
        buttonRun.disabled = true;
        buttonRun.classList.add("btstyle");
    }
}

function add() {
    if (loginId.value == "io4408@naver.com" && loginPs.value == "ysm_Enddl" + 123) {
        window.location.href = "home.html";
    } else if (loginId.value != "io4408@naver.com") {
        alert("입력한 사용자 이름을 사용하는 계정을 찾을 수 없습니다. 사용자 이름을 확인하고 다시 시도하세요.")
    } else if (loginPs.value != "ysm_Enddl" + 123) {
        alert("잘못된 비밀번호입니다. 다시 확인하세요.")
    }
}

function handleSubmit() {
    submit.preventDefault()
}


loginId.addEventListener("keyup", startLogin);
loginPs.addEventListener("keyup", startLogin);
buttonRun.addEventListener("click", add);
buttonRun.addEventListener("submit", handleSubmit);



