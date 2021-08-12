// 4. 창 닫을 때 서서히 메뉴바 fadeout되도록 class animation주기 (class만들어줘야)
const profileWrapper = document.querySelector("#navProfile");
const navMenu = document.querySelector(".navMenu");
const homeBtn = document.querySelector(".homeBtn");

function toggleMenu() {
  profileWrapper.classList.add("focus");
  navMenu.classList.remove("disappear");
  homeBtn.classList.add("focus");
}

function hideMenu() {
  profileWrapper.classList.remove("focus");
  navMenu.classList.add("disappear");
  homeBtn.classList.remove("focus");
}

function init() {
  profileWrapper.addEventListener("click", (e) => {
    console.log(e);
    toggleMenu();
    e.stopPropagation();
  });

  window.addEventListener("click", (e) => {
    if (!navMenu.contains(e.target)) {
      hideMenu();
    }
  });
}

init();
