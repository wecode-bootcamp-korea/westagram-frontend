const thisIsId = document.querySelector(".loginId");
const thisIsPW = document.querySelector(".loginPassword");
const thisIsBtn = document.querySelector(".loginBtn");

thisIsPW.addEventListener('keyup', () => {
    if (thisIsPW.value.length >= 4 && thisIsId.value.length >= 4) {
         thisIsBtn.classList.add("access");
    } else {
        thisIsBtn.classList.remove("access");
    }
})

thisIsId.addEventListener('keyup', () => {
    if (thisIsId.value.length >= 4 && thisIsPW.value.length >= 4) {
         thisIsBtn.classList.add("access");
    } else {
        thisIsBtn.classList.remove("access");
    }
})