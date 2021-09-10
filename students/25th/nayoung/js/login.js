window.onload = function(){
	const loginInput = document.querySelectorAll(".login-form > input");
	const loginId = document.querySelector(".login-id");
	const loginPw = document.querySelector(".login-password");
	const loginBtn = document.querySelector(".login-button");

	let userId = "";
	let userPw = "";

	const regId = /^[a-z]+[a-z0-9]{5,19}$/;
	const regEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
	const regPnum = /^01([0|1|6|7|8|9]?)-?([0-9]{3,4})-?([0-9]{4})$/;
	const regPw = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,16}$/;

	function idValidation(userId) {
		return regId.test(userId) || regEmail.test(userId) || regPnum.test(userId);
	}

	function pwValidation(userPw) {
		return regPw.test(userPw);
	}

	function checkInputData(userId, userPw) {
		if(idValidation(userId) && pwValidation(userPw)) {
			loginBtn.disabled = false;
			loginBtn.classList.add("login-button-active");
		} else {
			loginBtn.disabled = true;
			loginBtn.classList.remove("login-button-active");
		}
	}

	loginInput.forEach((el) => {
		el.addEventListener("keyup", (e) => {
			if(e.keyCode == 13) {
				loginBtn.click();
			} else {
				userId = loginId.value;
				userPw = loginPw.value;
				checkInputData(userId, userPw);
			}
		});
	});
}