const commentInput = document.querySelector("#comment");
const commentInputForm = document.getElementsByTagName("form")[0];
const commentBtn = document.querySelector(".comment_btn");
const commentList = document.querySelector(".comment_new");
const profileBtn = document.querySelector(".profile");
const searchInput = document.querySelector("input");
const likeBtn = document.querySelector(".main_icon").children[0];

function btnDisableTrue() {
  commentBtn.disabled = true;
}

function btnDisableFalse() {
  commentBtn.disabled = false;
}

function resetInput() {
  commentInput.value = "";
}

function buttonAble(e) {
  const commentLength = e.target.value.length;
  if (commentLength > 0) {
    btnDisableFalse();
  } else {
    btnDisableTrue();
  }
}

function commentCreate() {
  const userID = "hello ";
  const newComment = document.createElement("li");

  newComment.innerHTML =
    '<div class="userId">' +
    userID +
    '</div> <div class="comment_new_box">' +
    commentInput.value +
    '<div><button class="delete">X</button><button class="comment_heart"><div class="comment_full_heart"></div></button></div></div>';
  commentList.appendChild(newComment);

  return newComment;
}

function commentSubmit(e) {
  if (e.key === "Enter" || e.target === commentBtn) {
    e.preventDefault();
    commentCreate();
    resetInput();
    btnDisableTrue();
  }
}

function commentControl(e) {
  commentLike(e);
  deleteComment(e);

  function commentLike(e) {
    const newCommentParent = e.target;
    const emptyHeartIcon = newCommentParent.querySelector(".comment_heart");
    const likePressFillHeart = () => {
      const fullheartIcon = emptyHeartIcon.querySelector(".comment_full_heart");
      if (fullheartIcon.classList.length === 1) {
        fullheartIcon.classList.add("visible");
      } else {
        fullheartIcon.classList.remove("visible");
      }
    };

    if (emptyHeartIcon !== null) {
      emptyHeartIcon.addEventListener("click", likePressFillHeart);
    }
  }

  function deleteComment(e) {
    const newCommentParent = e.target;
    const deleteBtn = newCommentParent.getElementsByClassName("delete");
    for (let i = 0; i < deleteBtn.length; i++) {
      deleteBtn[i].addEventListener("click", (e) => {
        e.target.parentElement.parentElement.parentElement.remove();
      });
    }
  }
}

function profileShowup(e) {
  const profile = e.target.childNodes[1];
  profile.classList.toggle("visible");
}

function searchIdMatch(e) {
  const searchInputValue = e.target.value;
  const idData = [
    {
      id: "yoonsue",
      name: "윤수 (FE developer)",
    },
    {
      id: "usualdaysofarong",
      name: "서울 고양이 아롱의 나날🐈",
    },
    {
      id: "sojeonbooks",
      name: "소전서림, 강남점",
    },
    {
      id: "Susan",
      name: "Susan Cooks",
    },
    {
      id: "uQuiz",
      name: "유재석 아기자기와 함께하는 유퀴즈 온 더 블록!",
    },
  ];

  let result = idData.filter((x) => x.id.includes(searchInputValue));
  return result;
}

function contentLike() {
    const fullheartIcon = document.querySelector(".full_heart");
    if (fullheartIcon.classList.length === 1) {
      fullheartIcon.classList.add("visible");
    } else {
      fullheartIcon.classList.remove("visible");
    }
}

commentList.addEventListener("mouseover", commentControl);
commentInput.addEventListener("keypress", commentSubmit); 
commentBtn.addEventListener("click", commentSubmit);
commentInput.addEventListener("keydown", buttonAble);
profileBtn.addEventListener("click", profileShowup);
searchInput.addEventListener("keydown", searchIdMatch);
likeBtn.addEventListener("click", contentLike);