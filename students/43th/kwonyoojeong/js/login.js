// "use strict" => 자바스크립트는 동적 언어이므로 에러 방지를 위해 써준다
// querySelector 는 노드를 가져온다

const id = document.querySelector(".id");
const pw = document.querySelector(".password");
const button = document.querySelector(".loginButton");

// 선언식 함수, 표현식 함수
const activeButton = () => {
  if (id.value && pw.value) {
    // button.setAttribute("disabled", false) 는 적용되지 않는다.
    button.removeAttribute("disabled");
    button.style.backgroundColor = "#389ed3";
  } else {
    // else 조건이 없으면 버튼이 활성화된 후 id 또는 pw를 지웠을 때 다시 비활성화 상태로 돌아가지 않는다.
    button.setAttribute("disabled", true);
    button.style.backgroundColor = "#c4e1fb";
  }
};

id.addEventListener("keyup", (event) => {
  activeButton();
});

pw.addEventListener("keyup", (event) => {
  activeButton();
});

button.addEventListener("click", (e) => {
  // 아이디 @ 포함, 비밀번호 5자리 이상
  // 조건 불충족시 pw input 아래에 빨간 글자 생성
  if (id.value.indexOf("@") === -1) {
    alert("아이디를 올바르게 입력하세요.");
  }
  if (pw.value.length < 5) {
    alert("비밀번호는 5자리 이상이어야 합니다.");
  }
});

// location.replace("주소") => 주소로 이동. 로그인 성공했을 떄 아래에 넣어주면 다음 페이지로 넘어갈 수 있다.
// inputs.addEventListener("input", 함수 이름) => 이벤트 위임. 부모(변수 inputs)의 이벤트가 자식(input 태그)에게도 동일하게 적용된다.
// vs 이벤트 버블링
// 함수를 분리해서 작성하는 습관 => 유지, 보수를 위해 => 하나의 함수는 하나의 동작(하나의 리턴)만 실행하는 것이 베스트
