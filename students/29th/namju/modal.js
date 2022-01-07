const accounts = {
  wecode_bootcamp: {
    id: "wecode_bootcamp",
    image: "assets/ids/wecode_bootcamp.jpeg",
    desc: ">wecode | 위코드",
  },
  wecode_founder: {
    id: "wecode_founder",
    image: "assets/ids/wecode_founder.jpeg",
    desc: "송은우 (Eun Woo Song)",
  },
  wecode_korea: {
    id: "wecode_korea",
    image: "assets/profile-img-default.jpeg",
    desc: "",
  },
  wecode_fullstack_bootcamp: {
    id: "wecode_fullstack_bootcamp",
    image: "assets/ids/wecode_fullstack_bootcamp.jpeg",
    desc: "Wecode Full Stack Bootcamp",
  },
  wecode_socialclub: {
    id: "wecode_socialclub",
    image: "assets/ids/wecode_socialclub.jpeg",
    desc: ">wecode | 위코드 소셜클럽",
  },
};

const searchInput = document.querySelector("#searchInput");
const searchModal = document.querySelector(".search-modal");
const placeholder = document.querySelector("#placeholder");

const createResultBox = (key) => {
  const accountId = document.createElement("h1");
  accountId.innerHTML = accounts[key].id;
  accountId.classList.add("account-id");

  const accountDesc = document.createElement("h2");
  accountDesc.innerHTML = accounts[key].desc;
  accountDesc.classList.add("account-desc");

  const accountInfo = document.createElement("p");
  accountInfo.classList.add("account-info");
  accountInfo.appendChild(accountId);
  accountInfo.appendChild(accountDesc);

  const accountImg = document.createElement("img");
  accountImg.src = accounts[key].image;
  accountImg.classList.add("account-img");

  const accountImgWrap = document.createElement("div");
  accountImgWrap.classList.add("account-img-wrap");
  accountImgWrap.appendChild(accountImg);

  const resultBox = document.createElement("article");
  resultBox.classList.add("result-box");
  resultBox.appendChild(accountImgWrap);
  resultBox.appendChild(accountInfo);

  searchModal.appendChild(resultBox);
};

const filterIds = (e) => {
  searchModal.style.display = "block";
  if (searchModal.children.length > 1) {
    while (searchModal.children.length > 1) {
      searchModal.removeChild(searchModal.lastChild);
    }
  }

  const keysOfAccounts = Object.keys(accounts);
  const filtered = keysOfAccounts.filter((word) => word.includes(e.value));
  filtered.forEach((e) => createResultBox(e));
};

searchInput.addEventListener("keyup", function () {
  filterIds(this);
});

const closeModalClickOutside = (e) => {
  e.target.closest(".search-modal") === null
    ? (searchModal.style.display = "none")
    : false;
};

window.addEventListener("click", (e) => {
  closeModalClickOutside(e);
});

const hideShowPlaceholder = () => {
  if (searchInput.value) {
    placeholder.style.display = "none";
  } else {
    placeholder.style.display = "block";
  }
};

searchInput.addEventListener("keyup", hideShowPlaceholder);
