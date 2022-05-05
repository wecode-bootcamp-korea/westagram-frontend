const thisIsId = document.querySelector(".id");
const thisIsPsw = document.querySelector(".password");
const thisIsBtn = document.querySelector(".loginBtn");
const loginPage = document.querySelector(".loginPage");
const mainPage = document.querySelector(".mainPage");

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
    : alert("ID : '@', '.' 포함 / PW : 5글자 이상");
  }
});



function chatInput() {
  let inputValue = commentInput.value;

  const spanNickname = document.createElement("span");
  spanNickname.classList.add("articleNickname");
  spanNickname.innerHTML = "hengxi ";
  commentBox.appendChild(spanNickname);

  const spanContent = document.createElement("span");
  spanContent.classList.add("articleComment");
  spanContent.innerHTML = inputValue;
  commentBox.appendChild(spanContent);

  const divGood = document.createElement("div");
  divGood.classList.add("likeIcon");
  commentBox.appendChild(divGood);

  const pContent = document.createElement("p");
  pContent.classList.add("articleTime");
  pContent.innerHTML = "10분전";
  divGood.appendChild(pContent);

  const iHeart = document.createElement("i");
  iHeart.classList.add("fa-regular", "fa-heart", "likeIconsHeart", "likeIcons");
  divGood.appendChild(iHeart);

  const idelete = document.createElement("i");
  idelete.classList.add("fa-solid", "fa-delete-left", "likeIconsDelete", "likeIcons");
  divGood.appendChild(idelete);

  iHeart.addEventListener("click", () => {
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
 

let products = [
  { id : 0, name : "wecode", img : "profile.jpg"},
  { id : 1, name : "bootcamp", img : "profile.jpg"},
  { id : 2, name : "westargram", img : "profile.jpg"},
  { id : 3, name : "weegle", img : "profile.jpg"},
  { id : 4, name : "story", img : "profile.jpg"}
];
  const searchInput = document.querySelector(".navInput");
  const searchId = document.querySelector(".searchId");
  const searchBox = document.querySelector(".searchBox");


searchInput.addEventListener("input", () => {

  searchId.innerHTML = ''
  
  let newProducts = products.filter((a)=>{
    return a.name.includes(searchInput.value)
  });
  
  for( let i = 0; i < newProducts.length; i++){
    console.log(newProducts.length)
    let tempHtml = 
        `<div class="searchBox">
          <img alt="profile image" class="searchImg" src="${newProducts[i].img}">
          <span class="searchText">${newProducts[i].name}</span>
        </div>`;
    searchId.innerHTML = searchId.innerHTML + tempHtml;
  }

  if( searchInput.value === '' ){
    searchId.innerHTML = '<p class="searchIdInfo">아이디를 입력해주세요</p>'
  }
});
//   newProducts.forEach((a, i)=>{

//     searchId.innerHTML = 
//         `<div class="searchBox">
//           <img alt="profile image" class="searchImg" src="${newProducts[i].img}">
//           <span class="searchText">${newProducts[i].name}</span>
//         </div>`;
//       })

searchInput.addEventListener('click',()=>{
    searchId.classList.toggle('searchIdToggle')
})
