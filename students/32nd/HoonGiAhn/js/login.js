const id = document.querySelector('.id')
const pw = document.querySelector('.pw')
const button = document.querySelector('.bt')

id.addEventListener('keyup', color);
pw.addEventListener('keyup', color);
button.addEventListener('click', success);

function color() {
        if (id.value.length != 0 && pw.value.length != 0) {
                button.disabled = false;
                button.style.backgroundColor='#0092F3';
                button.style.cursor="pointer";
                if (window.event.code === "Enter") {
                        success();
                }
                
        } else {
                button.disabled = true;
                button.style.backgroundColor='#c4e1fb';
                button.style.cursor="auto"
        }
    }

function success() {
        location.href = "./main.html";
}