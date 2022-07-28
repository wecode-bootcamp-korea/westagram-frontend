const loginBtn = document.querySelector(".loginBtn")
const userId = document.querySelector(".userId")
const password = document.querySelector(".password")
const form = document.querySelector(".inputBox")

// userId.addEventListener('keyup', loginVali);
// password.addEventListener('keyup', loginVali);
userId.addEventListener('keyup', loginVali);



loginBtn.addEventListener("click", async()=>{
	if (!userId.value.length){
		alert("id를 입력해주세요")
		userId.focus()
	}
	else if (!password.value.length){

		alert("password를 입력해주세요")
    password.focus()
	}
});


let checkSpc = /[@]/;

function loginVali(){
  ((userId.value.length >= 1 && checkSpc.test(userId.value)) && password.value.length >= 5) ?
  loginBtn.classList.add('loginBtnActive',loginBtn.disabled = false)
  :loginBtn.classList.remove('loginBtnActive',loginBtn.disabled = true)
}
