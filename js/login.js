const idtext = document.getElementById("id");
const passtext = document.getElementById("password");
const btnBtn = document.getElementsByClassName("btn")[0];



function test() {
    const id = idtext.value;
    const pass = passtext.value;

    if (id && pass) {
        btnBtn.classList.remove('xxx');
    } else {
        btnBtn.classList.add('xxx');
    }
}



idtext.addEventListener("keyup", test);
passtext.addEventListener("keyup", test);




