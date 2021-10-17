
// 내 첫번째 시도 코드
// let id = document.getElementById("text");
// let password = document.getElementById("password");

// document.addEventListener("keydown", function (e) {
//   if (id.value.length > 0  && password.value.length > 0) {
//     let color = document.querySelector(".login-btn");
//     color.style.backgroundColor = "#0095f6";
//   } else {
//     let color = document.querySelector(".login-btn");
//     color.style.backgroundColor = "#E1ECF4";
//   }
// });


//2번째 시도
// 코드를 간결하게 하기위해서 EventListener의 2번째 인자값에 들어갈 함수를 밖으로 뺴서 선언하여
// 코드를 정리하였다
let id = document.querySelector("#text");
let password = document.querySelector("#password");
let loginButton = document.querySelector(".login-btn")

function active() {
	if(id.value.length > 0 && password.value.length > 0){
		loginButton.style.backgroundColor='#0095F6';
		loginButton.disabled = false; 
		if(loginButton.disabled === false) console.log("test")
	} else {
		loginButton.style.backgroundColor='#B2DFFC'
		loginButton.disabled = true;
		if(loginButton.disabled	=== true) console.log("test22")
 	}
}

id.addEventListener("keyup", active)
password.addEventListener("keyup", active)

// function eventHandler(event, func, target ){
//     return target.addEventListener(event, func);
// }

// eventHandler("keyup", active, id);

