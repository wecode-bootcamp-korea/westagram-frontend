const inputReple = document.querySelector(".reple_input");
const repleBtn = document.querySelector(".reple_btn");

const repleSubmit = () => {
  const repleContainer = document.querySelector(".article_reple_other");
  const newRepleDiv = document.createElement("div");
  const newIdP = document.createElement("li");
  const newContentP = document.createElement("li");
  const localUserId = localStorage.getItem("id");
  newRepleDiv.className = "article_content";
  newIdP.className = "article_profile_id";
  newContentP.className = "article_content_p";
  newIdP.innerText = localUserId.split("@")[0];
  newContentP.innerText = inputReple.value;
  repleContainer.appendChild(newRepleDiv);
  newRepleDiv.appendChild(newIdP);
  newRepleDiv.appendChild(newContentP);
  inputReple.value = "";
};

repleBtn.addEventListener("click", repleSubmit);

inputReple.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    repleSubmit;
    console.log("s");
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

repleHeart.addEventListener("click", console.log("heart"));
