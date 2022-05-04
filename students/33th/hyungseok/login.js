const thisIsId = document.querySelector(".id");
const thisIsPsw = document.querySelector(".password");
const thisIsBtn = document.querySelector(".btn");
const loginPage = document.querySelector(".westargram");
const mainPage = document.querySelector(".mainContainer");
const commentPost = document.querySelector(".articlePost");
const commentInput = document.querySelector(".articleInput");
const commentBox = document.querySelector(".articleCommentBox");

thisIsPsw.addEventListener("keydown", () => {
  {
    thisIsId.value !== undefined && thisIsPsw.value !== undefined
    ? thisIsBtn.classList.add("btnOn")
    : thisIsBtn.classList.remove("btnOn");
  }
});

thisIsBtn.addEventListener("click", () => {
  let Id = thisIsId.value;
  let psw = thisIsPsw.value;
  let regEmail =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
  {
    Id.match(regEmail) && psw.length > 5
    ? (loginPage.style.display = "none")((mainPage.style.display = "block"))
    : alert("아이디, 비밀번호를 확인해주세요.");
  }
});

function chatInput() {
  let inputValue = commentInput.value;

  const spanNickname = document.createElement("span");
  spanNickname.classList.add("nickname");
  spanNickname.innerHTML = "hengxi ";
  commentBox.appendChild(spanNickname);

  const spanContent = document.createElement("span");
  spanContent.classList.add("comment");
  spanContent.innerHTML = inputValue;
  commentBox.appendChild(spanContent);

  const divGood = document.createElement("div");
  divGood.classList.add("goodBox");
  commentBox.appendChild(divGood);

  const pContent = document.createElement("p");
  pContent.classList.add("time");
  pContent.innerHTML = "10분전";
  divGood.appendChild(pContent);

  const iHeart = document.createElement("i");
  iHeart.classList.add("fa-regular", "fa-heart", "heart");
  divGood.appendChild(iHeart);

  const idelete = document.createElement("i");
  idelete.classList.add("fa-solid", "fa-delete-left");
  divGood.appendChild(idelete);

  iHeart.addEventListener("click", () => {
    console.log("d");
    {
      iHeart.style.color !== "red"
        ? (iHeart.style.color = "red")
        : (iHeart.style.color = "black");
    }
  });

  idelete.addEventListener("click", () => {
    divGood.remove();
    spanNickname.remove();
    spanContent.remove();
  });

  commentInput.value = "";
  commentInput.focus();
}


commentPost.addEventListener("click", () => {
  {
    commentInput.value !== "" ? chatInput() : null;
  }
});

commentInput.addEventListener("keypress", (e) => {
  {
    e.code === "Enter" && commentInput.value !== "" ? chatInput() : null;
  }
});

commentInput.addEventListener("input", () => {
  {
    commentInput.value !== ""
      ? (commentPost.style.color = "#1995f6")
      : (commentPost.style.color = "#b2dffc");
  }
});

// 검색기능

id = ["1", "2", "3", "4", "5", "22"];

const searchInput = document.querySelector(".searchInput");

searchInput.addEventListener("input", () => {
  const searchBox = document.querySelector(".idFindBox");

  for (let i = 0; i < id.length; i++) {
    if (searchInput.value === id[i]) {
      const searchDiv = document.createElement("div");
      searchDiv.classList.add("idFindContent");
      searchBox.appendChild(searchDiv);

      const searchImg = document.createElement("img");
      searchImg.classList.add("searchImg");
      searchDiv.appendChild(searchImg);

      const searchText = document.createElement("span");
      searchText.classList.add("searchText");
      searchText.innerHTML = id[i];
      searchDiv.appendChild(searchText);
    }
    if (searchInput.value !== id[i]) {
      searchDiv.remove();
    }
  }
});
