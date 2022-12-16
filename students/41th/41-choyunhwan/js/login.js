const idValue = document.querySelector(".idinput");
const passwordValue = document.querySelector(".passwordinput");
const Btn = document.querySelector(".loginbtn");

function click() {
  if (idValue.value.includes("@") && passwordValue.value.length < 5) {
    Btn.disabled = false;
    Btn.style.backgroundColor = "blue";
    Btn.addEventListener("click", function () {
      window.location.href = "main.html";
    });
  } else {
    Btn.disabled = true;
    Btn.style.backgroundColor = "red";
  }
}
passwordValue.addEventListener("keyup", click);

//form 태그로 id pw input 감싸기
/*
이벤트위임    부모에 ㄴ이벤트등록하면 자식도 적용
버블링       캡틴판교 블로그 참고
캡처링
boolean convention
삼항 연산자 사용
*/
