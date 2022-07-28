// const comment = document.querySelector("#comment"); //form
// const input = document.querySelector("#comment input");
// const commentList = document.querySelector(".commentList");
// const btn = document.querySelector("button");
// const ListItem = document.querySelector("li");

// function addComment(event) {
//   event.preventDefault(); // click의 기본동작인 리로드를 막아줘야 한다.는데왜 막는건지
//   const li = document.createElement("li");
//   const commentUserId = document.createElement("span");
//   const span = document.createElement("span");
//   //세 요소를 만든다
//   commentUserId.innerText = "Heyho92"; //첫번째 span에 아이디를 넣는다.
//   commentUserId.classList.add("commentUser"); //id에 클래스 commentUser를 넣어주고, css로 스타일을 줬다.

//   span.innerText = input.value; //input에 입력한 값을 두번째 스판안에 넣었다.

//   commentList.appendChild(li);
//   li.appendChild(commentUserId); // li에 span 2개를 넣는다.
//   li.appendChild(span);

//   input.value = ""; //인풋창을 비워준다.
// }

// function sendBtn() {
//   const gesi = input.value;
//   if (gesi) {
//     btn.classList.remove("replyButton");
//     gesi = "";
//   } else {
//     btn.classList.add("replyButton");
//     gesi = "";
//   } //sendBtn 함수가 실행되면 게시버튼의 클래스에 replyButton 제거되어 css가 다르게 적용된다.
//   //(input에 값이 들어오면 게시버튼이 활성화된다.)
// }
// input.addEventListener("keyup", sendBtn); //input에 keyup 이벤트가 발생하면
// //sendBtn 함수가 실행된다.
// btn.addEventListener("click", addComment); //btn에 click 이벤트가 발생하면
// btn.addEventListener("click", sendBtn); //addComment, sendBtn 함수가 실행된다.
// //addComment 함수에서 input.value="" 로 초기화 해 주고 sendBtn 함수가 실행되어
// //클릭 이벤트 발생후에 다시 옅은 파란색으로 변한다.
const btn = document.querySelector(".replyButton");

function addComment(event) {
  event.preventDefault();
  let input = document.querySelector(".reply");
  let comment = document.querySelector(".commentList");
  let newDiv = document.createElement("div");
  let newId = document.createElement("strong");
  let newValue = document.createElement("span");
  let newImg = document.createElement("img");
  newDiv.classList.add("newDiv");
  newImg.classList.add("newImg");
  newId.innerHTML = `id`;
  newValue.innerHTML = `&nbsp${input.value}`;
  newImg.setAttribute(
    "src",
    "https://as2.ftcdn.net/v2/jpg/01/25/83/03/1000_F_125830316_m9Grtzjlt2I5Gp4qpDQq5G5BSXR5d9ZF.jpg"
  );
  comment.appendChild(newDiv);
  newDiv.append(newId, newValue, newImg);
  input.value = "";
}

btn.addEventListener("click", addComment);
