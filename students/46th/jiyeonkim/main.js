const comment = document.getElementById("newComment"); //input
const realComment = document.getElementById("realCommentBox"); //댓글 추가되는 부분

//댓글 추가 함수
function getComment() {
  const commentBox = document.createElement("div");
  const comments = document.createElement("span");
  const userName = document.createElement("span");
  const heartIconBtn = document.createElement("button");

  let heartIcon = document.createElement("img");
  heartIcon.src = "./img/heart.png";

  let deleteBtn = document.createElement("button");
  deleteBtn.innerText = "삭제";
  deleteBtn.classList.add("deleteBtn");
  deleteBtn.id = `${comment.value}`;

  heartIcon.id = `${comment.value}`;
  heartIcon.classList.add("heartIcon");
  commentBox.classList.add("commentBox");

  const commentValue = comment.value;

  userName.classList.add("userName");
  userName.innerText = "yeonnn";

  heartIconBtn.appendChild(heartIcon);
  realComment.appendChild(commentBox);
  commentBox.appendChild(userName);
  commentBox.appendChild(comments);
  commentBox.appendChild(deleteBtn);
  commentBox.appendChild(heartIcon);

  comments.innerText = comment.value;

  //새 댓글 삭제
  deleteBtn.addEventListener("click", deleteComment);

  //댓글 좋아요
  heartIcon.addEventListener("click", likeBtnEvent);
}

const commentBtn = document.getElementById("commentBtn"); //게시 버튼

//click 댓글 구
commentBtn.addEventListener("click", function () {
  if (comment.value) {
    getComment();
    comment.value = null;
  }
  console.log(typeof comment.value);
});

//enter 댓글 구현
comment.addEventListener("keydown", function (e) {
  if (e.keyCode == 13 && comment.value) {
    getComment();
    comment.value = null;
  }
});

//댓글 삭제
const deleteBtn = document.querySelector(".deleteBtn");

deleteBtn.addEventListener("click", deleteComment);

function deleteComment(event) {
  const deleteComment = event.target.parentNode;

  deleteComment.remove();
}

//댓글 좋아요
const likeBtn = document.querySelector(".heartIcon");
let likeBtnSwitch = false;

likeBtn.addEventListener("click", likeBtnEvent);

//댓글 좋아요 함수
function likeBtnEvent(event) {
  if (likeBtnSwitch === false) {
    likeBtnSwitch = true;

    const likeBtn = event.target;

    likeBtn.classList.remove("likeIcon");
    likeBtn.classList.add("solidHeartIcon");
  } else {
    likeBtnSwitch = false;

    const likeBtn = event.target;

    likeBtn.classList.remove("solidHeartIcon");
    likeBtn.classList.add("likeIcon");
  }
}

//아이디 검색 기능

// 아이디 생성 class 실패!
// class AccountObj {
//   constructor(id, profile, details) {
//     (this.id = id), (this.profile = profile), (this.details = details);
//   }
// }

// const Wecode = new AccountObj(
//   "Wecode",
//   "./img/pin_drop_FILL0_wght400_GRAD0_opsz48.png",
//   "강남구 테헤란로 427, 서울"
// );

// const wecode_korea = new AccountObj(
//   "wecode_korea",
//   "./img/account_circle_FILL0_wght400_GRAD0_opsz48.png"
// );

// const wecode_bootcamp = new AccountObj(
//   "wecode_bootcamp",
//   "./img/account_circle_FILL0_wght400_GRAD0_opsz48.png",
//   ">wecode|위코드"
// );

// const yeonnn = new AccountObj(
//   "yeonnn",
//   "./img/more_horiz_FILL0_wght400_GRAD0_opsz48.png",
//   "김지연(Ji Yeon Kim)"
// );

// const jiguuu = new AccountObj(
//   "jiguuu",
//   "img/KakaoTalk_20230509_143849516_02.jpg",
//   "김지구(Ji Gu Kim)"
// );

// const AccountObjArr = [Wecode, wecode_korea, wecode_bootcamp, yeonnn, jiguuu];

//아이디 생성 ---------------------------------------모르겟서ㅓㅓㅓㅓㅓㅓㅓ
const account = [
  {
    id: "Wecode",
    profile: "./img/pin_drop_FILL0_wght400_GRAD0_opsz48.png",
    details: "강남구 테헤란로 427, 서울",
  },
  {
    id: "wecode_korea",
    profile: "./img/account_circle_FILL0_wght400_GRAD0_opsz48.png",
  },
  {
    id: "wecode_bootcamp",
    profile: "./img/account_circle_FILL0_wght400_GRAD0_opsz48.png",
    details: ">wecode|위코드",
  },
  {
    id: "jiyeonnn",
    profile: "img/cat.jpg",
    details: "김지연(Ji Yeon Kim)",
  },
  {
    id: "jiguuu",
    profile: "img/KakaoTalk_20230509_143849516_02.jpg",
    details: "김지구(Ji Gu Kim)",
  },
];

const accountID = account.map((item) => item.id); //accountObjArr -> IDarr

//맞는 아이디 찾기
const searchBar = document.getElementById("search"); // input
const resultBox = document.getElementById("searchedID"); //ul

function filterAccount() {
  if (searchBar.value.length > 0) {
    const filterId = accountID.filter((x) => x.includes(searchBar.value));
    //**여기 꼭 다시 체크하기!!!

    if (filterId.length > 0) {
      resultBox.innerHTML = "";
      filterId.forEach((id) => {
        //filterId 와 account 배열 비교해서 맞는 account 객체 불러오기
        const matchedAccount = account.find((item) => item.id === id);
        console.log(matchedAccount);

        if (matchedAccount) {
          const matchedAccountBox = document.createElement("li");

          resultBox.appendChild(matchedAccountBox);
          matchedAccountBox.innerHTML = `<img src=${matchedAccount.profile}
            alt="${matchedAccount.id}님의 프로필 사진"/>
          <div>
          <div class="bold">${matchedAccount.id}</div>
          <div class="grey">${matchedAccount.details}</div>
          </div>`;
        }
      });
      resultBox.style.display = "block";
    } else {
      resultBox.style.display = "none";
    }
  } else {
    resultBox.style.display = "none";
  }
}

searchBar.addEventListener("input", filterAccount);

// const result = idArray.filter((value) => value.indexOf("Wecode") !== -1);
// -> value.indexOf('') 하면 해당하지 않는 거만 나옴!

//profile menu
const profile = document.getElementById("profile");
const profileBox = document.getElementById("profileBox");

let profileBoxSwitch = false;

profile.addEventListener("click", function () {
  if (profileBoxSwitch === false) {
    profileBoxSwitch = true;
    profileBox.classList.remove("displayNone");
  } else {
    profileBoxSwitch = false;
    profileBox.classList.add("displayNone");
  }
});
