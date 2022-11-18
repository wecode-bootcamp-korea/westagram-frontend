let commentInput = document.getElementById("ripple_bar");
let commentbutton = document.getElementById("ripple_button");

const comments = document.createElement("div");
const userName = document.createElement("span");
const mainText = document.createElement("span");
const mainIcon = document.createElement("img");

//버튼 활성화
commentbutton.addEventListener("click", function () {
  submit();
  commentInput.value = "";
});

//엔터시 활성화
commentInput.addEventListener("keydown", function () {
  if (e.keycode === 13) {
    submit();
    commentInput.value = "";
  }
});

/*
//comment_box 값 보여주기
const loginButton = document.getElementById("ripple_button");
loginButton.addEventListener("click", showConsole);
function showConsole() {
  alert("로그인 될까?");
}


function test() {
  const comment = document.getElementById("ripple_button").value; //댓글을 쓰고
  const commentBox = document.getElementById("comment_box").value; //div에
//button을 누르면
  commentBox.createElement(comment); //댓글이 추가됨

  console.log(commentBox);
}

function test()
*/
