/** @format */
const loginId = document.getElementsByClassName("loginId")[0]
const loginPw = document.getElementsByClassName("loginPw")[0]
const loginBt = document.getElementsByClassName("loginBt")[0] //[0]은 type이다. -> text에 접근하기 위해 

// let idInputValue = 0
// let pwInputValue = 0

// loginId.oninput = (e) => {
//    console.log("oninput", e.target.value)
//     return e.target.value
// }


// 2번째 방법

  // loginId.addEventListener("input", function (e) {

  //   console.log("idInputValue 문자", e.target.value) // 값이 바뀔때마다 찍힘

  //   idInputValue = e.target.value.length
  //   console.log("idInputValue 길이", idInputValue)

  // })

  // loginPw.addEventListener("input", function (e) {
  // console.log("pwInputValue 문자", e.target.value) // 값이 바뀔때마다 찍힘

  // pwInputValue = e.target.value.length
  // console.log("pwInputValue 길이", pwInputValue)

  // })
  
  // if (idInputValue > 0 && pwInputValue > 0) {
  //   console.log("유효성 값 받기 성공")
  // }

loginId.addEventListener("keyup", onButton);
loginPw.addEventListener("keyup", onButton);

function onButton () {
  // 버튼 활성화와 비활성화 설정
  if (!(loginId.value && loginPw.value)) { // !는 not을 의미 -> not(둘 다 값이 있다)-> 즉 둘 다 값이 있지 않은 경우 -> 둘 다 없거나, 둘 중 하나만 있는 경우 모두 포함
    loginBt.disabled = true; // Button disabled Property true 일 경우 버튼 비활성화
  } else {
    loginBt.disabled = false
    loginBt.style.cursor = 'pointer' // Button disabled Property false 버튼 활성화 -> 마우스포인터 커서로 바꿔줌
  }

  // 버튼 활성화와 비활성화 style 변경 -> 다른 class추가하기
  if (!(loginId.value && loginPw.value)) {
    loginBt.classList.remove("loginBt_off");
  } else {
    loginBt.classList.add("loginBt_off");
  }
}

