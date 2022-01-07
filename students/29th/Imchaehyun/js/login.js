const thisIsButton = 
document.getElementById('loginButton');

const thisIsId =
document.getElementsByClassName('ID')[0];

const thisIsPw =
document.getElementsByClassName('passwords')[0];

thisIsButton.disabled = true;

function loginButtonChange() {
	let idKey = thisIsId.value.length;
   let pwKey = thisIsPw.value.length;
   if (idKey > 0 && pwKey > 0) {
		thisIsButton.disabled = false;
		thisIsButton.className = 'loginButtonBlue';
	}
	else {
		thisIsButton.disabled = true;
		thisIsButton.className = 'loginButtonLightBlue';
	}
}

thisIsId.addEventListener('keyup', loginButtonChange);
thisIsPw.addEventListener('keyup', loginButtonChange);



