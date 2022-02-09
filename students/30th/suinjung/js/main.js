const ddd = document.getElementById("comment")[0];
const ccc = document.getElementsByClassName("commentblock");
ddd.addEventListener("keydown", function (e) {
    ccc.innerHTML = e.code;
});
//댓글 달기에 들어가야할 요소
// 사용중인 사용자의 닉네임, 댓글 달기에 입력된 value
//
