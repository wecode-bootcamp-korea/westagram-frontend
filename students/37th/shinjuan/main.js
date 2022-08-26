"use strict";

const inputReple = document.querySelector(".reple_input");
const repleBtn = document.querySelector(".reple_btn");

const repleSubmit = () => {
  const repleContainer = document.querySelector(".article_reple_other");
  const newRepleLi = document.createElement("li");
  newRepleLi.className = "article_content";

  const localUserId = localStorage.getItem("id");
  const name = localUserId.split("@")[0];
  const repleHtml = `
      <p class="article_profile_id">${name}</p>
      <p class="article_content_p">${inputReple.value}</p>
      <i class="fa-solid fa-delete-left delete_button"></i>
      <i class="fa-regular fa-heart reple_heart"></i>
  `;

  repleContainer.prepend(newRepleLi);
  newRepleLi.innerHTML = repleHtml;
  inputReple.value = "";
};

inputReple.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    repleSubmit;
  }
});
//////////////////////////////////////////////////////////////

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

const repleHeart = document.querySelector(".reple_heart");
let heartSwitch = false;
repleHeart.addEventListener("click", () => {
  if (heartSwitch === false) {
    heartSwitch = !heartSwitch;
    repleHeart.className = "fa-solid fa-heart";
  } else if (heartSwitch === true) {
    heartSwitch = !heartSwitch;
    repleHeart.className = "fa-regular fa-heart";
  }
});

const deleteBtn = document.querySelector(".delete_button");

const deleteReple = (e) => {
  e.target.parentNode.parentNode.remove();
};

// deleteBtn.addEventListener("click", (e) => {
//   e.target.parentNode.remove();
// });
//////////////////////////////////////////////////////////////////////////////////////
const userMenu = document.querySelector(".user_menu");
const profileIcon = document.querySelector(".profile_img");

profileIcon.addEventListener("click", menuHandler);

function menuHandler() {
  userMenu.classList.toggle("visible");
  modalBackground.classList.toggle("show");
}
///////////////////////////////////////////////////////////////////////////////////////////

const searchInput = document.querySelector(".searchInput");
const searchModal = document.querySelector(".search_modal");
const modalBackground = document.querySelector(".search_modal_bg");

searchInput.addEventListener("focus", hadleSearchModal);

function hadleSearchModal() {
  searchModal.classList.add("show");
  modalBackground.classList.add("show");
}

function closeSearchModal() {
  searchModal.classList.remove("show");
  modalBackground.classList.remove("show");
  userMenu.classList.remove("visible");
}

modalBackground.addEventListener("click", closeSearchModal);
//////////////////////////////////////////////////////////////////////////////////

let userIdData = [
  { id: "wecode_bootcamp", name: ">wecode | 위코드" },
  { id: "shinju4n", name: "신주안 (Shin Ju An)" },
  { id: "ShinDongLim", name: "신동림 (Shin Dong Lim)" },
  { id: "leeGumNam", name: "이금남 (Lee Guem Nam)" },
  { id: "shinEunji", name: "신은지 (Shin Eun Ji)" },
  { id: "wecode", name: "강남구 테헤란로 427, 서울" },
];

const searchList = document.querySelector(".search_list");
///////////////////////////////////////////////////////
function removeAllchild(el) {
  while (el.hasChildNodes()) {
    el.removeChild(el.firstChild);
  }
}
/////////////////////////////////////////////////
function makeUserList() {
  let array1 = [];
  removeAllchild(searchList);
  for (let i = 0; i < userIdData.length; i++) {
    if (
      userIdData[i].id.includes(searchInput.value) ||
      userIdData[i].name.includes(searchInput.value)
    ) {
      array1.push(userIdData[i]);
    }
  }

  array1.map((obj) => {
    document.querySelector("search_list");
    const newRepleLi = document.createElement("li");
    const userDataHtml = `
    <div class="serach_modal_img">
    <img class="profile_img_circle article_profile">
    </div>
    <div class="search_data_content">
    <p class="search_data_id">${obj.id}</p>
    <p class="search_data_span">${obj.name}</p>
    </div>
    `;
    newRepleLi.innerHTML = userDataHtml;
    searchList.prepend(newRepleLi);
  });

  array1 = [];
}
const init = () => {
  likeHeart.addEventListener("click", getCountLike);
  repleBtn.addEventListener("click", repleSubmit);
  searchInput.addEventListener("keyup", makeUserList);
};

init();
