
// 4. 창 닫을 때 서서히 메뉴바 fadeout되도록 class animation주기 (class만들어줘야)
const profileBtn = document.querySelector(".profileImg");
const navMenu = document.querySelector(".navMenu");
const homeBtn = document.querySelector(".homeBtn");


function toggleMenu() {
    profileBtn.classList.add("focus");
    navMenu.classList.remove("disappear");
    homeBtn.classList.add("focus");
}

function hideMenu() {
    profileBtn.classList.remove("focus");
    navMenu.classList.add("disappear");
    homeBtn.classList.remove("focus");
}


window.addEventListener("click", (e) => {
    e.target.className === "profileBtn"
        ? toggleMenu()
        :  hideMenu();
});


