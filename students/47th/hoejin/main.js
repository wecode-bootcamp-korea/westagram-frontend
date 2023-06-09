const inputComment = document.getElementById("input");
const buttonComment = document.getElementById("button");
const newComment = document.getElementById("newComment");
const commentForm = document.getElementsByClassName("comment")[0];
const man = document.getElementById("man");
const searchUserId = document.getElementsByClassName("searchUser")[0];
const search = document.getElementById("search");
const explore = document.getElementsByClassName("explore")[0];

let userArray = [
  {
    id: "wecode_bootcamp",
    subname: ">wecode | 위코드",
    url: "https://image.rocketpunch.com/company/99609/wecode_logo_1590553949.jpg?s=400x400&t=inside",
  },
  {
    id: "wecode_founder",
    subname: "송은우 (Eun Woo Song)",
    url: "https://images.unsplash.com/photo-1685856861907-0c20cd9d22c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=60",
  },
  {
    id: "wecode_korea",
    subname: "",
    url: "https://images.unsplash.com/photo-1686110432947-293cb3c7ac54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=60",
  },
  {
    id: "Wecode",
    subname: "강남구 테헤란로 427, 서울",
    url: "https://images.unsplash.com/photo-1685944722478-284349a10211?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDV8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=60",
  },
  {
    id: "ggulbbang",
    subname: "꿀빵이와 앙꼬",
    url: "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGFtc3RlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1400&q=60",
  },
];

inputComment.addEventListener("keyup", responseBtn);

function responseBtn() {
  const inputValue = inputComment.value;
  if (inputValue.length > 0) {
    buttonComment.style.color = "blue";
    buttonComment.disabled = false;
  } else {
    buttonComment.style.color = "#cbe0f9";
    buttonComment.disabled = true;
  }
  return;
}

function addComment(e) {
  const comment = document.createElement("div");
  const userID = document.createElement("span");
  const commentText = document.createElement("span");
  const likeBtn = document.createElement("button");
  const deletBtn = document.createElement("button");

  e.preventDefault();

  comment.classList.add("comentClass");
  userID.classList.add("userIDClass");
  commentText.classList.add("commentTextClass");
  likeBtn.classList.add("likeBtnClass");
  deletBtn.classList.add("deletBtnClass");

  userID.innerHTML = "wecode ";
  commentText.innerHTML = inputComment.value;

  newComment.appendChild(comment);
  comment.appendChild(userID);
  comment.appendChild(commentText);
  comment.appendChild(likeBtn);
  comment.appendChild(deletBtn);

  inputComment.value = "";
  buttonComment.style.color = "#cbe0f9";
  buttonComment.disabled = true;

  function commentDelet() {
    comment.remove("comment");
  }

  likeBtn.addEventListener("click", likechange);
  deletBtn.addEventListener("click", commentDelet);
}

function enterKey() {
  addComment();
}

// buttonComment.addEventListener("click", enterKey);
buttonComment.addEventListener("click", addComment);

function likechange(e) {
  let target = e.target.classList;

  if (target.contains("redheart")) {
    target.remove("redheart");
    target.add("likebtnClass");
  } else {
    target.remove("likebtnClass");
    target.add("redheart");
  }
}

function menuBox() {
  let profileMenu = document.getElementsByClassName("profileMenu")[0];
  // console.log(profileMenu.style.opacity);
  if (profileMenu.style.opacity === "1") {
    profileMenu.style.opacity = "0";
  } else {
    profileMenu.style.opacity = "1";
  }
}
// console.dir(profileMenu)
man.addEventListener("click", menuBox);

//다른데 누르면 꺼지는 기능
function exitMenu() {
  let profileMenu = document.getElementsByClassName("profileMenu")[0];
  profileMenu.style.opacity = "0";
}
man.addEventListener("blur", exitMenu);

//아이디 검색 기능
function searchUserName() {
  function searchUserNameData(e) {
    const searchValue = e.target.value;
    if (searchValue) {
      console.log("userArray", userArray, searchValue);
      // let filterArr = userArray.filter((user) => user.id.includes(searchValue));
      let filterArr = userArray.filter(
        (user) => user.id.indexOf(searchValue) !== -1
      );

      search.style.opacity = "1";

      search.innerHTML = filterArr.map((data) => {
        return `<div class="eachUser">
        <img alt="user" src=${data.url} />
        <div class="userPTag">
          <p class="weightbolder userPTagP">${data.id}</p>
          <p class="gray userPTagP">${data.subname}</p>
        </div>
      </div>`;
      });
    } else {
      search.style.opacity = "0";
    }
  }
  explore.addEventListener("input", searchUserNameData);
}
searchUserName();
