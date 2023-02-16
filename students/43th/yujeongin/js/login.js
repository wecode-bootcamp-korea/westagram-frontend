const id = document.querySelector('LoginId');
const pw = document.querySelector('LoginPw');
const btn = documnet.querySelector('LoginBtn');

function color() {
    if (id.value.length>0 && pw.value.length>0){
        btn.style.backgroundColor = "#0095F6"
        btn.disabled = false;
    } else {
        btn.style.backgroundColor = "#C0DFFD"
        btn.disabled = true;
    }
};

id.addEventListener('keyup', color);
pw.addEventListener('keyup', color);