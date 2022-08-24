const inputReple = document.querySelector(".reple_input");
const repleBtn = document.querySelector(".reple_btn");

const repleSubmit = () => {
  const repleContainer = document.querySelector(".article_reple_other");
  const newRepleDiv = document.createElement("div");
  newRepleDiv.className = "article_content";
  repleContainer.appendChild(newRepleDiv);
  const newIdP = document.createElement("li");
  newIdP.className = "article_profile_id";
  newIdP.innerText = localStorage.getItem("id");
  newRepleDiv.appendChild(newIdP);
  const newContentP = document.createElement("li");
  newContentP.className = "article_content_p";
  newRepleDiv.appendChild(newContentP);
  newContentP.innerText = inputReple.value;
  inputReple.value = "";
};

repleBtn.addEventListener("click", repleSubmit);

inputReple.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    repleSubmit();
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
