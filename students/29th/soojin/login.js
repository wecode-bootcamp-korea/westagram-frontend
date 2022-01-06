
const thisIsId = document.getElementById('westaId');
const thisIsPw = document.getElementById('westaPw');
const thisIsButton = document.getElementById('westaButton');
thisIsButton.disabled = true;

thisIsId.addEventListener('input', wannalogin)
thisIsPw.addEventListener('input', wannalogin)

function wannalogin() {
    if (!thisIsId.value || !thisIsPw.value) {
        thisIsButton.disabled = true;
    } else {
        thisIsButton.disabled = false;
        thisIsButton.style.backgroundColor = blue;
    }
}


// (e) => console.log(e));
