const inputCommentElem = document.querySelector(".reple");
const buttonCommentElem = document.querySelector(".repleButton");
const commentContainerElem = document.querySelector(".repleContainer");
const fragmentElem = document.createDocumentFragment();

const drawComment = () => {
  const commentItem = document.createElement("li");
  const commentItemBox = document.createElement("span");
  const commentItemText = document.createElement("p");
  const commentLikeIcon = document.createElement("i");
  const commentDeleteIcon = document.createElement("i");

  commentLikeIcon.className = "icon-heart";
  commentDeleteIcon.className = "icon-cancel";

  commentItemBox.appendChild(commentItemText);
  commentItemBox.appendChild(commentLikeIcon);
  commentItemBox.appendChild(commentDeleteIcon);

  commentItem.appendChild(commentItemBox);

  fragmentElem.appendChild(commentItem);

  commentContainerElem.appendChild(fragmentElem);

  // 삭제 기능
  commentDeleteIcon.addEventListener("click", () => commentItem.remove());

  // 좋아요/싫어요
  commentLikeIcon.addEventListener("click", () => {
    const currentClass = commentLikeIcon.classList[0];

    if (currentClass === "icon-heart") {
      commentLikeIcon.className = "icon-heart-filled";
    } else {
      commentLikeIcon.className = "icon-heart";
    }
  });

  commentItemText.innerText = inputCommentElem.value;
  inputCommentElem.value = "";
};

inputCommentElem.addEventListener("keyup", (e) => {
  if (e.code === "Enter" && inputCommentElem.value.length > 0) {
    drawComment();
    inputCommentElem.value = "";
  }
});

// 모달창
const modal = document.querySelector(".nav_mypage_container");
const modalImg = document.querySelector(".myPageImg");

modalImg.addEventListener("click", (e) => {
  e.stopPropagation();
  if (!modal.classList[1]) {
    modal.classList.add("modal_hidden");
  } else {
    modal.classList.remove("modal_hidden");
  }
});

modal.addEventListener("click", (e) => {
  e.stopPropagation();
});

window.addEventListener("click", () => {
  if (!modal.classList[1]) {
    modal.classList.add("modal_hidden");
  }
});

// 검색기능 배열
const userArray = [
  {
    img: "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png",
    id: "abc123",
    nickname: "WeCode | 위코드",
  },
  {
    img: "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png",
    id: "adf123",
    nickname: "WeCode | 위코드",
  },
  {
    img: "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png",
    id: "aqet123",
    nickname: "WeCode | 위코드",
  },
  {
    img: "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png",
    id: "ghqjt123",
    nickname: "WeCode | 위코드",
  },
  {
    img: "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png",
    id: "ahahg1",
    nickname: "WeCode | 위코드",
  },
  {
    img: "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png",
    id: "adgh168",
    nickname: "WeCode | 위코드",
  },
  {
    img: "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png",
    id: "896553",
    nickname: "WeCode | 위코드",
  },
  {
    img: "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png",
    id: "1sdf7778",
    nickname: "WeCode | 위코드",
  },
];

// 아이디검색
const search = document.querySelector(".nav_serachbar");
const searchList = document.querySelector(".nav_search_container");
const searchListModal = document.querySelector(".nav_search_modal");

search.addEventListener("click", (e) => {
  console.log(searchListModal.classList[1]);
  e.stopPropagation();

  if (!searchListModal.classList[1]) {
    searchListModal.classList.add("nav_search_modal_hidden");
  } else {
    searchListModal.classList.remove("nav_search_modal_hidden");
  }
});

window.addEventListener("click", () => {
  if (!searchListModal.classList[1]) {
    searchListModal.classList.add("nav_search_modal_hidden");
  }
});

const removeItems = () => (searchList.innerHTML = "");

const showProfile = (items) => {
  for (let i = 0; i < items.length; i++) {
    const filteredUsers = document.createElement("li");
    const filteredUsersImgContainer = document.createElement("div");
    const filteredUserImg = document.createElement("img");
    filteredUserImg.src = items[i].img;
    filteredUserImg.alt = `${items[i].id}-image`;

    const filteredUsersInfo = document.createElement("div");
    const filteredUsersId = document.createElement("h4");
    const filteredUsersIdValue = document.createTextNode(items[i].id);
    filteredUsersId.appendChild(filteredUsersIdValue);
    const filteredUsersNickName = document.createElement("p");
    const filteredUsersNickNameValue = document.createTextNode(
      items[i].nickname
    );

    filteredUsersNickName.appendChild(filteredUsersNickNameValue);

    searchList.appendChild(filteredUsers);
    filteredUsers.appendChild(filteredUsersImgContainer);
    filteredUsersImgContainer.appendChild(filteredUserImg);
    filteredUsers.appendChild(filteredUsersInfo);
    filteredUsersInfo.appendChild(filteredUsersId);
    filteredUsersInfo.appendChild(filteredUsersNickName);
  }
};

search.addEventListener("input", (e) => {
  const currentItems = userArray.filter((items) =>
    items.id.includes(e.target.value)
  );

  if (searchList.innerHTML) {
    removeItems();
  }

  showProfile(currentItems);
});

showProfile(userArray);
