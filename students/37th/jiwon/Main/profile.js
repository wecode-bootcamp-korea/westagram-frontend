const profile = document.getElementById("nav-profile");
const profileMenu = document.getElementsByClassName("profile-menu")[0];

const viewState = profileMenu.style;

const handleProfileClick = () => {
  if (viewState.display === "block") {
    viewState.display = "none";
  } else viewState.display = "block";
};
profile.addEventListener("click", handleProfileClick);
