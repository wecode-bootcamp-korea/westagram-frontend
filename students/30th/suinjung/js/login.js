//로그인 버튼 활성화 1 ~ 13 line
const blueBtn = document.getElementsByClassName("log-btn")[0];
//문서에서 클래스이름이 'log-btn'인 요소 중 가장 상단에 있는 요소를 가져와서 변수 'blueBtn'에 담아라.

window.addEventListener("keyup", function () {
    const inputName = document.querySelector("#name"); //문서에서 아이디명이 'name'인 요소를 변수에 담아라.
    const inputPassword = document.querySelector("#password"); //문서에서 아이디명이 'password'인 요소를 변수에 담아라.
    if (inputName.value && inputPassword.value) {
        //만약 변수의 값이 존재한다면(빈칸이 아니라면),
        blueBtn.style.backgroundColor = "blue"; //blueBtn버튼의 배경색을 파란색으로 바꿔라.
        blueBtn.setAttribute("onclick", "location.href='main.html'");
    }
}); //윈도우 창에서 키값이 입력된다면, 함수activeBtn을 실행시켜라.

// value 함수 밖에서 선언되면 화면을 로딩했을 때의 값이 담긴다.
// 그렇기 때문에 밖에서는 value을 작성하면 안된다.
//순서는 -> 함수를 실행하고, 그 후에 키 이벤트가 일어나고 그 값을 value값으로 담는다.

//get메서드는 body포함.

//지정된 메소드).setAttribute("속성명", "속성값") // 해당 요소에 속성="속성값" 추가
[출처] | 작성자;
