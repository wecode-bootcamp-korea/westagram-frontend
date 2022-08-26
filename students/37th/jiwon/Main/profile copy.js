const body = document.getElementsByTagName("body")[0];

const profile = document.getElementById("nav-profile");
const profileMenu = document.getElementsByClassName("profile-menu-wrap")[0];

// const profileMenu.style = profileMenu.style;

const handleProfileClick = () => {
  console.log("hello");
  console.log(profileMenu.style);
  const css = getComputedStyle(profileMenu);
  const display = css.getPropertyValue("display");

  if (css.display === "none") {
    profileMenu.style.display = "block";
  } else {
    profileMenu.style.display = "none";
  }
};

// const handleBodyClick = () => {
//   profileMenu.style.display = "none";
// };

profile.addEventListener("click", handleProfileClick);
// body.addEventListener("click", handleBodyClick);

//토글 방식 사용
