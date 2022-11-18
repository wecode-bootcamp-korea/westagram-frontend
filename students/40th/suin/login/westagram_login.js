"use strict";    

// [dom.add]     //querySelector 써서 해결  //  . 이게 class라는 의미
const loginId = document.querySelector('.login_id');
const loginPw = document.querySelector('.login_pw');
const loginBtn = document.querySelector('.login_button');

//💡이벤트 위임(+이벤트 버블링, 이벤트 캡쳐링)
//이벤트가 부모요소에도 인식되는-위로 올라가는
//부모요소에 이벤트를 걸어두면 자식요소에도 이벤트가



console.log(loginId);
console.log(loginPw);
console.log(loginBtn);



//hanmdlebtn-id,pw 조건 충족시
function color() {
    if((loginId.value.length>0 && loginId.value.indexOf("@")!==-1) 
        && loginPw.value.length>=5){
        loginBtn.style.backgroundColor = "#0095F6";
        loginBtn.disabled = false;
    }else{
        loginBtn.style.backgroundColor = "#C0DFFD";
        loginBtn.disabled = true;
    }
}


//💡ifelse 말고 쓸 수 있는 3항 연산자
//dddddd.disabled = gggggg? false : true;
//(매칭되는 if else 를 편하게 쓸 수 있음)
//fffff? 참이면 : 거짓이면
//3항 연산자를 계속 안으로 만들 수도 있으나 가독성이 좋지 않으므로 차라리 if else로 쓰는게 좋음.


//💡dddddd.disabled = gggggg? false : true;
//dddddd.disabled = !gggggg;
//(반대로 주고 싶을 때) 


//const 모두충족 = id충족 && pw 충족 (id,pw 모두 충족에 대해서 코드 알아볼 수 있도록 적기)

// 💡boolean naming convention 으로 

//💡fuction dddd() { 
//     return 조건
// }

//const dddddd = 함수이름 (aaaaa)


// 다른 링크로 이동(메인 만들지 않음)
// function moveToMain(){
//     location.replace("./westagram_main.html");
// }



//.addEventListListener(event,gkatnaud) 
//document의 특정요소(id,class,tag 등) event(예-클릭하면 함수를 실행하시오/마우스를 올리면 함수를 실행하라 등) 을 등록할 때 사용
loginId.addEventListener('keyup', color);
loginPw.addEventListener('keyup', color);

//💡key up, keydown - 키를 눌렀을 때, 떼어냈을 때    /  input : input 안에 값이 변경되었을 때(그냥 붙여넣기로 키를 누르지 않고 입력해도)

// loginBtn.addEventListener('click',moveToMain);  (메인 만들지 않음)

//💡const init = () => {
//     loginId.addEventListener('keyup', color);
//     loginPw.addEventListener('keyup', color);
// }