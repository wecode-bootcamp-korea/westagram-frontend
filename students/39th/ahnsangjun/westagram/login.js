//로그인 박스 = .login_box
//아이디 입력창 = #sign_up_id
//비밀번호 입력창 = #sign_up_pw
//로그인 버튼 = #login_button


login_box = document.querySelector(".login_box");


login_box.addEventListener("keyup", () => {
    let loginBtn = document.querySelector("#login_button");
    let loginId = document.querySelector("#sign_up_id").value;
    let loginPw = document.querySelector("#sign_up_pw").value;
    if (loginId.indexOf('@') !== -1 && loginPw.length >= 5) {
        //console.log("hi")
          loginBtn.style.backgroundColor = "#1c7ed6";
    } else if (!loginId || loginPw.length < 5) {
        //console.log("hello")
          loginBtn.style.backgroundColor = "#bfdffd";
    }
});


// function id (){ 
// if (loginId.length >= 1 && loginPw.length >= 1){
//     로그인 버튼에 불이 들어온다.
// } else {
//     로그인창 아무 반응 없다.
// }
// }



// function login(){
// if (ID 값 === aaa && PW 값 === 1111){
//     Login Sucess & 페이지 이동
// } else if (ID값 === aaa && PW 값 !== 1111){
//     alert("비밀번호가 틀렸습니다.")
// } else if (ID값 !== aaa && PW 값 === 1111){
//     alert("ID혹은 이메일이 틀렸습니다.")
// }
// }

// if 
// 버튼 onclick