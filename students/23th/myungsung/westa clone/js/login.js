const thisIsId = document.querySelector(".loginId");
const thisIsPw = document.querySelector(".loginPassword");
const thisIsBtn = document.querySelector(".loginBtn");

thisIsPw.addEventListener('keyup', () => {
    if (thisIsId.value.length >= 4 && thisIsPw.value.length >= 6) {
         thisIsBtn.classList.add("access");
    } else {
        thisIsBtn.classList.remove("access");
    }
})

thisIsId.addEventListener('keyup', () => {
    if (thisIsId.value.length >= 4 && thisIsPw.value.length >= 6) {
         thisIsBtn.classList.add("access");
    } else {
        thisIsBtn.classList.remove("access");
    }
})