let writedComment = document.querySelector(".commentPush");
const addComment = document.querySelector(".submitPush");
const addFollowes = document.querySelector(".followersWrite");
const userWrite = document.querySelector(".userWrite");
const countLike = document.querySelector(".userLike");

let valueArray = [];

// submit 버튼 활성화 시 동작
function submitBtn(inputResult) {
  // enter 쳤을때 동작
  if (window.event.keyCode == 13) {
    let userCreateTag = document.createElement("li");
    let userCreateAddTag = document.createElement("span");
    userCreateAddTag.innerText = "user";
    userCreateAddTag.className = "boldName";

    const commentContent = document.createElement("span");
    commentContent.innerText = inputResult;

    const heart = document.createElement("span");
    heart.innerText = "🤍";
    heart.classList.add("heartAdd");

    const deleteComment = document.createElement("span");
    deleteComment.innerText = "❌";
    deleteComment.classList.add("delete");

    // 배열에 사용자 입력값 추가
    valueArray.push(inputResult);

    userCreateTag.appendChild(userCreateAddTag);
    userCreateTag.appendChild(commentContent);
    userCreateTag.appendChild(heart);
    userCreateTag.appendChild(deleteComment);

    addFollowes.appendChild(userCreateTag);

    writedComment.value = "";

    heart.addEventListener("click", function () {
      heartChange(heart);
    });

    deleteComment.addEventListener("click", function () {
      deleteList(userCreateTag);
    });
  }
}

//댓글 담기 동작
writedComment.addEventListener("keyup", function () {
  let inputResult = writedComment.value;
  submitBtn(inputResult);
});

// 하트 좋아요 횟수
let count = 0;
let nameAdd = document.querySelector(".name");

function addLikeCount() {
  count += 1;
  nameAdd.innerText = `${count}`;
}

countLike.addEventListener("click", addLikeCount);

// 댓글 삭제
function deleteList(e) {
  e.remove();
}

// user 하트 누름
function heartChange(e) {
  if (e.innerText == "🤍") {
    e.innerText = "❤️";
  } else if (e.innerText == "❤️") {
    e.innerText = "🤍";
  }
}

// 프로필 클릭 시 박스 생성/사라짐
const userProfileIcon = document.querySelector(".clickProfile");
const userProfileInfo = document.querySelector(".clickProfileInfo");

userProfileIcon.addEventListener("click", function () {
  if (userProfileInfo.style.display !== "block") {
    userProfileInfo.style.display = "block";
  } else if (userProfileInfo == "") {
    userProfileInfo.style.display = "block";
  } else {
    userProfileInfo.style.display = "none";
  }
});
