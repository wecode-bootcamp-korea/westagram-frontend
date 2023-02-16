const id = document.getElementById("id");
const password = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");

let isActive = false;

function activeLoginBtn() {
  if (id.value && id.value.includes("@") && password.value.length > 5) {
    isActive = true;
  } else if (!id.value || !password.value.length <= 5) {
    isActive = false;
  }

  if (isActive) {
    loginBtn.style.background = "#0095f6";
    loginBtn.style.borderColor = "#0095f6";
  } else {
    loginBtn.style.background = "#c4e1fb";
    loginBtn.style.borderColor = "#c4e1fb";
  }
}

loginBtn.addEventListener("click", () => {
  if (isActive) window.location.href = "./main.html";
});

id.addEventListener("change", (e) => {
  activeLoginBtn();
});

password.addEventListener("change", (e) => {
  activeLoginBtn();
});

//버튼 활성화시에만 mouse pointer 적용
loginBtn.addEventListener("mouseover", () => {
  if (isActive) {
    loginBtn.style.cursor = "pointer";
    loginBtn.style.opacity = 0.7;
  }
});
loginBtn.addEventListener("mouseout", () => {
  loginBtn.style.cursor = "default";
  loginBtn.style.opacity = 1;
});
