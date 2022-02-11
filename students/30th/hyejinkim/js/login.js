const idInput = document.querySelector("#id");
const pwInput = document.querySelector("#password");
const loginBtn = document.querySelector(".submit-button");

function btnAbled() {
  if (idInput.value && pwInput.value) {
    loginBtn.disabled = false;
    loginBtn.classList.add("submit-button-after");
  } else {
    loginBtn.disabled = true;
    loginBtn.classList.remove("submit-button-after");
  }
}

idInput.addEventListener("keyup", btnAbled);
pwInput.addEventListener("keyup", btnAbled);
/*
  이벤트 위임
  - form 태그에 이벤트 등록 -> 하위 요소에도 이벤트 위임이 된다

  input 이벤트
  - input 안의 내용이 변경되었을 때 감지
  - 복붙하는 경우

  contains, includes
  - contains : 자식 노드를 포함하고 있는지 boolean 리턴
  - includes : 배열에 요소를 포함하고 있는지 boolean 리턴

  불리언 네이밍 컨벤션
  - is를 prefix로 붙여라
  
  함수명 네이밍 컨벤션
  - 동작을 알 수 있는 동사형으로 쓴다 (ex> checkId, checkPw)

  함수는 기능 단위로 분배한다
  - handleLogin으로 검증 + 버튼 활성화 둘다 할 수 있지만
  - 검증, 버튼 활성화를 각각 구분해주는 것이 다른 페이지에서도 재사용 가능
  
  중복되는 동작은 삼항 연산자로 줄인다
  - 3항 연산자
  - 조건안에 로직이 길어지면 if문, f/t 처럼 간단하면 3항 연산자를 쓴다
    
    function handleBtn(btnValid) {
      loginBtn.disabled = btnValid ? false : true;

      - not 연산자로 줄일 수 있다
      loginBtn.disabled = !btnValid // 반대값
      
      loginBtn.style.opacity = btnValid ? 1 : 0.5;
      loginBtn.style.cursor = btnValid ? "pointer" : "default";
    }

  버튼 커서
  - default : 기본값 (화살표);

  window.event.code
  - keycode 보다 code 쓰기 (keycode는 이제 지원 안될거임)
  - 윈도우 어디든 엔터키 누르면 alert 창을 띄운다 

  페이지 이동
  - location.href / window.location.pathname : 새 주소로 이동 (이력o, 뒤로가기 가능)
  - location.replace : 현재 주소를 새 주소로 바꾼다 (이력x, 뒤로가기 불가)
  
  init() 함수
  - entry point : 자바스크립트 코드를 작성하고, 
    특정 요소에서 이벤트가 발생했을 때 원하는 동작을 실행시킨다. 
    이벤트를 감지하면 실행된다
    아 여기서 이벤트를 실행시킬거야 라는 의미. 구분해주는 역할이다
    init으로 구분해주는게 효율적이다

  태그 선택
  - querySelector : 특정 엘리먼트에서 찾는 것. 더 효율적이다
  - getElementById : document 다 돌아야 함!

  전역, 로컬 변수
  - 특정 함수에서만 쓸거면 로컬로 쓰기
  - 그치만 init 때문에 전역 변수로 선언 해주는게 편함

*/

// 배열 메소드
// 5. ID, PW validation
/*
    현재 id, pw 입력 시 무조건 로그인 버튼이 활성화 외어 있도록 구현이 되어 있습니다.
    실제 로그인 하는 경우를 생각하며 validation(유효성 검사) 기능을 추가해주세요.
    ex) id >>> '@' 포함 / pw >>> 5글자 이상
*/

// git 질문
// 1. PR이 깃헙에서 안뜨는 현상
// 2. 다른 사람들꺼 다운 받으려면?
// 3. git 리포지토리에 활성 변경 내용이 너무 많습니다 라고 떠요

// 그외 질문
// 1. 댓글란 <div><p> vs <ul><li>
// 2. 네비 <a> vs <ul><li>
