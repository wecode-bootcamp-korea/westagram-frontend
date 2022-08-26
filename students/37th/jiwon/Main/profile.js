const body = document.getElementsByTagName("body")[0];

const profileMenu = document.getElementsByClassName("profile-menu")[0];
const menuWrap = document.getElementsByClassName("profile-menu-wrap")[0];

const profileBtn = document.getElementById("nav-profile");

const handleProfileClick = () => {
  profileMenu.classList = "profile-menu visible";
  console.log("프로필 클릭", profileMenu);
};

const handleBodyClick = () => {
  profileMenu.className = "hidden";
  console.log("바디 클릭", profileMenu);
};

profileBtn.addEventListener("click", handleProfileClick);
menuWrap.addEventListener("click", handleBodyClick);
