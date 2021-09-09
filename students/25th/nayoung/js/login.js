window.onload = function(){
	const loginId = document.getElementById("login-id");
	const loginPw = document.getElementById("login-password");
	const loginBtn = document.getElementById("login-button");

	let userId = "";
	let userPw = "";

	const regId = /^[a-z]+[a-z0-9]{5,19}$/;
	const regEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
	const regPnum = /^01([0|1|6|7|8|9]?)-?([0-9]{3,4})-?([0-9]{4})$/;
	const regPw = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,16}$/;

	function canId(userId) {
		return regId.test(userId) || regEmail.test(userId) || regPnum.test(userId);
	}

	function canPw(userPw) {
		return regPw.test(userPw);
	}

	function checkInput(userId, userPw) {
		if(canId(userId) && canPw(userPw)) {
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
	loginPw.addEventListener("keyup", (e) => {
		if(e.keyCode == 13) {
			loginBtn.click();
		}
	});
}