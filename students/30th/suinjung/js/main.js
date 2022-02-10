// const ccc = document.getElementsByClassName("commentblock");
// // ddd.addEventListener("keydown", function (e) {
// //   ccc.innerHTML = e.code;
// // });
// //댓글 달기에 들어가야할 요소
// // 사용중인 사용자의 닉네임, 댓글 달기에 입력된 value

const postComment = document.getElementsByClassName("commentplace")[0]; //댓글쓰는곳
const commentBlockDiv = document.getElementsByClassName("commentblock"); //댓글이 들어갈 곳
const commentClass = document.getElementsByClassName("comment")[0]; //class
const inputComment = document.getElementById("comment"); //input
const myNickName = document.getElementById("myname");
const clickLoad = document.getElementsByClassName("gocomment")[0];

clickLoad.style.cursor = "pointer";
postComment.addEventListener("keyup", EnterLoadComment);
clickLoad.addEventListener("click", loadComment);
// 이거 내가 한거
// const inValue = inputComment.value;
// // inValue.classList.add("commentblock");
// // commentClass.innerHTML += inputComment.value; //Input 값이 올라감.
// const ddd = document.createElement("span");
// inValue.innerHTML += inputComment.value;
// console.log(inValue);

function loadComment() {
  if (inputComment.value > 0) {
    const inValue = document.createElement("div"); //div태그를 생성하여 inValue에 담아라
    inValue.className = "commentblock"; //변수 inValue에 class네임 "commentblock"을 부여해라
    inValue.innerHTML = `<div> 
    <p class="nickname">${myNickName.innerText}</p>
    <span>${inputComment.value}</span>
  </div>
  <div>
    <i class="far fa-heart"></i>
  </div>`; //inValue안에 `  `의 값을 담아라.
    commentClass.appendChild(inValue); //input안에 inValue의 값을 자식으로 부여
    inputComment.value = ""; //댓글이 달리고 ""input을 초기화
  }
}

//여기까지
function EnterLoadComment(e) {
  if (e.key === "Enter") {
    loadComment();
  }
}

//     const inValue = document.createElement("div"); //div태그를 생성하여 inValue에 담아라
//     inValue.className = "commentblock"; //변수 inValue에 class네임 "commentblock"을 부여해라
//     inValue.innerHTML = `<div>
//     <p class="nickname">${myNickName.innerText}</p>
//     <span>${inputComment.value}</span>
//   </div>
//   <div>
//     <i class="far fa-heart"></i>
//   </div>`; //inValue안에 `  `의 값을 담아라.
//     commentClass.appendChild(inValue); //input안에 inValue의 값을 자식으로 부여
//     inputComment.value = ""; //댓글이 달리고 ""input을 초기화
//   }
// });

//   function loadComment(){
//   const inValue = document.createElement("div"); //div태그를 생성하여 inValue에 담아라
//   inValue.className = "commentblock"; //변수 inValue에 class네임 "commentblock"을 부여해라
//   inValue.innerHTML = `<div>
//   <p class="nickname">${myNickName.innerText}</p>
//   <span>${inputComment.value}</span>
// </div>
// <div>
//   <i class="far fa-heart"></i>
// </div>`; //inValue안에 `  `의 값을 담아라.
//   commentClass.appendChild(inValue); //input안에 inValue의 값을 자식으로 부여
//   inputComment.value = ""; //댓글이 달리고 ""input을 초기화
// }

// clickLoad.addEventListener("click", function () {
//   if (inputComment.value.length > 0) {
//     loadComment();
//   }
// });
