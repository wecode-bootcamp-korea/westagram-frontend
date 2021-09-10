
let inputArray= document.querySelectorAll("input");

inputArray.forEach(function(e) {
    e.addEventListener("keyup", function() {
        const pwBar = document.getElementsByTagName("input")[1].value;
        // 비밀번호 입력창의 value 를 저장하는 변수
        const idBar = document.getElementsByTagName("input")[0].value;
        // 아이디 입력창의 value 를 저장하는 변수
        if(idBar.length >=1 && pwBar.length >= 1){
        //각 입력창에 뭐라도 하나 이상 입력될시 아래 코드가 수행됨
            let title = document.getElementsByTagName('button')[0];
            // 기존 로그인창의 태그를 title 이라는 변수에 저장
            title.className = 'button-change';
            //미리 css 에 입력해둔 button-change 라는 class 명을 상단 태그에 지정해줌.
         }
         return;

    });
});