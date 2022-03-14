const input = document.querySelector(".inpComment");
const btnSave = document.querySelector(".btnSave");
const commentBox = document.querySelector(".commentBox");
const form = document.querySelector("form");
const btnModal = document.querySelector("#btnModal");
const modal = document.querySelector(".modalOverlay");
const modalBox = document.querySelector(".modalBox");

// 모달창 띄우기
btnModal.addEventListener("click", () => {
  modal.style.display = "block";
});

// 모달 오버레이 기능
modal.addEventListener("click", (i) => {
  const eventTarget = i.target;
  console.log(eventTarget);
  if (eventTarget.classList.contains("modalOverlay")) {
    modal.style.display = "none";
  }
});

// 댓글 기능 구현
const listMaker = (text) => {
  const div = document.createElement("div");
  // div.textContent = text;
  commentBox.appendChild(div);
  commentBox.innerHTML += `
    <div class="innerBox">
    <div class="comment">${input.value}</div>
    <div class="iconBox">
        <button class="deleteBtn">
            <img src="src/xmark-solid.svg" alt="">
        </button>
        <img class="heartIcon" src="src/heart.png" alt="">
    </div>`;
  div.classList.add("comment");

  // 댓글 좋아요 기능
  const heartIcon = document.querySelectorAll(".heartIcon");
  // console.log(heartIcon)
  for (const icon of heartIcon) {
    icon.addEventListener("click", () => {
      icon.src = "src/heart-solid.svg";
    });
  }

  // 댓글 삭제 구현
  const deleteBtn = document.querySelectorAll(".deleteBtn");
  for (const i of deleteBtn) {
    i.addEventListener("click", () => {
      const innerBox = document.querySelector(".innerBox");
      const commentBox = document.querySelector(".commentBox");
      innerBox.remove(commentBox);
    });
  }
};

// 엔터로 댓글 다는 기능 구현
form.addEventListener("submit", (e) => {
  e.preventDefault();
  listMaker(input.value);
  input.value = "";
});


// 게시 버튼 활성화
function onCommentBtn() {
  const value = input.value;
  if (value) {
    btnSave.classList.add("on");
  }
}

input.addEventListener("keyup", onCommentBtn);

// 검색 기능 구현
const userArray = [
  {
    id: "a.orazy_sudnics",
    nickname: "박경서",
    picture: "https://#",
  },
  {
    id: "wecode_bootcamp",
    nickname: ">wecode | 위코드",
    picture: "https://#",
  },
  {
    id: "zisoom",
    nickname: "지수미고소미",
    picture: "https://#",
  },
  {
    id: "yong",
    nickname: "용용죽겠지",
    picture: "https://#",
  },
  {
    id: "simssun",
    nickname: "생쥐는절거워",
    picture: "https://#",
  },
  {
    id: "hyeonegod",
    nickname: "화석고인물",
    picture: "https://#",
  },
];

const searchInput = document.querySelector(".inpSearch");
console.log(searchInput);
const searchList = document.querySelector(".searchList");
console.log(searchList);
const resultBox = document.querySelector(".resultBox");

searchInput.addEventListener("click", () => {
  resultBox.style.display = "block";
});

// 아이디 검색 기능
function matchSearch(value) {
  const searchID = searchInput.value;
  return value.indexOf(searchID) != -1;
}

// 검색 결과 넣어주기
function showFilteredID(id) {
  const filterUser = document.createElement("li");
  filterUser.innerHTML = `
    <div class="item">
        <img src="./src/basic-profile-img.png" class="imgProfile">
        <div class="inner">
            <div>
                <span>${id.id}</span>
                <span>${id.nickname}</span>
            </div>
                <img src="src/xmark-solid.svg" alt="" class="btnClose">
            </div>
    </div>
    `;
  searchList.appendChild(filterUser);
}

// 검색창에 검색 시, 결과 띄우기
searchInput.addEventListener("keyup", () => {
  searchList.innerHTML = ` `;
  resultBox.display = "none";
  if (searchInput.value) {
    const filterID = userArray.filter((x) => matchSearch);
    if (filterID) {
      filterID.forEach(function (e) {
        showFilteredID(e);
      });
    }
  }
});

searchInput.addEventListener("focusout", function () {
  resultBox.style.display = "none";
});
