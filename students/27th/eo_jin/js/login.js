const inputId = document.querySelector(".inputId")
const inputPwd = document.querySelector(".inputPwd");
const loginBtn = document.querySelector(".loginBtn");
let idAndPwd = [false, false];

// function declaration
function activeBtn(){
  if(idAndPwd[0] && idAndPwd[1]){
    loginBtn.classList.add("active")
  }else {
    loginBtn.classList.remove("active")
  };
}

function handleValidInandPwd(idx, el){
  idAndPwd[idx] = el.value;
  console.log(idAndPwd[idx])
  if(!idAndPwd[idx]){
    idAndPwd[idx] = false;
  };
}

// actual event handler
inputId.addEventListener("input", () => {
  handleValidInandPwd(0, inputId);
  activeBtn();
})

inputPwd.addEventListener("input", () => {
  handleValidInandPwd(1, inputPwd);
  activeBtn();
})