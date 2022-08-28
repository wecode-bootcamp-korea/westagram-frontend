const inputRepleElem = document.querySelector(".reple");
const buttonRepleElem = document.querySelector(".repleButton");
const repleContainerElem = document.querySelector(".repleContainer");

const repleWrapperElem = () => {
  const repleCommentsList = document.createElement("li");
  const repleCommentsListContainer = document.createElement("span");
  const repleCommentsText = document.createElement("p");
  const repleCommentsFirstIcon = document.createElement("i");
  const repleCommentsDelete = document.createElement("i");

  repleCommentsFirstIcon.className = "icon-heart";
  repleCommentsDelete.className = "icon-cancel";

  repleContainerElem.appendChild(repleCommentsList);
  repleCommentsList.appendChild(repleCommentsListContainer);
  repleCommentsListContainer.appendChild(repleCommentsText);
  repleCommentsListContainer.appendChild(repleCommentsFirstIcon);
  repleCommentsListContainer.appendChild(repleCommentsDelete);

  // 삭제 기능
  repleCommentsDelete.addEventListener("click", () =>
    repleCommentsList.remove()
  );

  // 좋아요/싫어요
  repleCommentsFirstIcon.addEventListener("click", () => {
    const currentClass = repleCommentsFirstIcon.classList[0];

    if (currentClass === "icon-heart") {
      repleCommentsFirstIcon.className = "icon-heart-filled";
    } else {
      repleCommentsFirstIcon.className = "icon-heart";
    }
  });

  repleCommentsText.innerText = inputRepleElem.value;
  inputRepleElem.value = "";
};

inputRepleElem.addEventListener("keyup", (e) => {
  if (e.code === "Enter" && inputRepleElem.value.length > 0) {
    repleWrapperElem();
    inputRepleElem.value = "";
  }
});

// 모달창
const modal = document.querySelector(".nav_mypage_container");
const modalImg = document.querySelector(".myPageImg");

modalImg.addEventListener("click", (e) => {
  // 이벤트 전파와 관련된(이벤트버블링/이벤트켑처링, ... => DOM 관련 책)
  e.stopPropagation();
  // console.log(modal.classList[0]);
  // 안주면 언디파인드 주면 클래스가 두개 이상일떄 인덱스처럼 동작
  if (!modal.classList[1]) {
    modal.classList.add("modal_hidden");
  } else {
    modal.classList.remove("modal_hidden");
  }
});

modal.addEventListener("click", (e) => {
  e.stopPropagation();
});

// 모달 외 영역 클릭시
// 모달 modal_hidden 있으면 아무 동작 x
// 모달 modal_hidden 없으면 modal_hidden 추가

// 모달 영역 클릭시
// 모달 외 영역 클릭시 발생하는 이벤트 핸들러가 호출
// bodyElem = document.querySelector("body");

window.addEventListener("click", () => {
  if (!modal.classList[1]) {
    modal.classList.add("modal_hidden");
  }
});

// 검색기능
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
