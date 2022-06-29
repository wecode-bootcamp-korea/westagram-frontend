


// 로그인페이지 이미지 변환 구현

const imgFirst = document.querySelector(".img__copy1");
const imgSecond = document.querySelector(".img__copy2");

function loginPicture() {
if (imgFirst.classList.contains("hidden")) {
    imgFirst.classList.remove("hidden");
    imgSecond.classList.add("hidden");
} else if (imgSecond.classList.contains("hidden")) {
    imgSecond.classList.remove("hidden");
    imgFirst.classList.add("hidden");
}}

setInterval(()=> {
    loginPicture();
},3000)



// 로그인버튼 글자 입력시 활성화 구현

const loginBtn = document.querySelector(".login_btn");
const inputId = document.querySelector(".id__input");
const inputPwd = document.querySelector(".pwd__input");

inputId.addEventListener("keydown", ()=>{
    inputOpacity()
})

inputPwd.addEventListener("keydown", () => {
    inputOpacity()
});


function inputOpacity() {
    if (inputId.value.length>0 && inputPwd.value.length >0) {

        loginBtn.style="opacity :1"
    } else (
        loginBtn.style="opacity :0.5"
    )
}