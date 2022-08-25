const inputReple = document.querySelector(".reple_input");
const repleBtn = document.querySelector(".reple_btn");

const repleSubmit = () => {
  const repleContainer = document.querySelector(".article_reple_other");
  const newRepleLi = document.createElement("li");
  const newIdP = document.createElement("p");
  const newContentP = document.createElement("p");
  const heartBtnRepl = document.createElement("i");
  const deleteBtn = document.createElement("i");
  const localUserId = localStorage.getItem("id");

  newRepleLi.className = "article_content";
  newIdP.className = "article_profile_id";
  newContentP.className = "article_content_p";
  heartBtnRepl.className = "fa-regular fa-heart reple_heart";
  deleteBtn.setAttribute("class", "fa-solid fa-delete-left delete_button");

  newIdP.innerText = localUserId.split("@")[0];
  newContentP.innerText = inputReple.value;

  repleContainer.appendChild(newRepleLi);
  newRepleLi.appendChild(newIdP);
  newRepleLi.appendChild(newContentP);
  newRepleLi.appendChild(deleteBtn);
  newRepleLi.appendChild(heartBtnRepl);

  inputReple.value = "";
};

repleBtn.addEventListener("click", repleSubmit);

inputReple.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    repleSubmit;
  }
});

const likeHeart = document.querySelector(".fa-heart");
let getLike = 7;
let countLike = document.querySelector(".like_count");
let likeSwitch = false;

const getCountLike = () => {
  if (likeSwitch === false) {
    getLike = getLike + 1;
    likeSwitch = !likeSwitch;
    likeHeart.className = "fa-solid fa-heart";
    countLike.innerText = getLike;
  } else if (likeSwitch === true) {
    getLike = getLike - 1;
    likeSwitch = !likeSwitch;
    likeHeart.className = "fa-regular fa-heart";
    countLike.innerText = getLike;
  }
};

likeHeart.addEventListener("click", getCountLike);

const repleHeart = document.querySelector(".reple_heart");

let heartSwitch = false;
repleHeart.addEventListener("click", () => {
  if (heartSwitch === false) {
    heartSwitch = !heartSwitch;
    repleHeart.className = "fa-solid fa-heart reple_heart";
  } else if (heartSwitch === true) {
    heartSwitch = !heartSwitch;
    repleHeart.className = "fa-regular fa-heart reple_heart";
  }
});

const deleteBtn = document.querySelector(".fa-delete-left");

deleteBtn.addEventListener("click", (e) => {
  const parentElement = e.target.parentElement;
  parentElement.remove();
});

const userMenu = document.querySelector(".user_menu");
const profileIcon = document.querySelector(".profile_img");

profileIcon.addEventListener("click", menuHandler);

function menuHandler() {
  userMenu.classList.toggle("visible");
}
