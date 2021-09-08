window.onload = function(){
	const loginId = document.getElementById("login-id");
	const loginPw = document.getElementById("login-password");
	const loginBtn = document.getElementById("login-button");

	let userId = "";
	let userPw = "";

	function checkInput(userId, userPw) {
		if(userId && userPw) {
			loginBtn.disabled = false;
			loginBtn.style.background = "#0095f6";
			loginBtn.style.cursor = "pointer";
		} else {
			loginBtn.disabled = true;
			loginBtn.style.background = "#c4e1fb";
			loginBtn.style.cursor = "default";
		}
	}

	loginId.addEventListener("keyup", () => {
		userId = loginId.value;
		checkInput(userId, userPw);
	});
	loginPw.addEventListener("keyup", () => {
		userPw = loginPw.value;
		checkInput(userId, userPw);
	});

	loginBtn.addEventListener("click", () => {
		console.log("누름");
	});
}