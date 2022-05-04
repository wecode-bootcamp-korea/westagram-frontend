function activateBtn() {
    if ((document.getElementById('id').value !== "") && (document.getElementById('pw').value !== "")) {
        document.querySelector('.login-btn').style.background = "#0096FF";
    }
}