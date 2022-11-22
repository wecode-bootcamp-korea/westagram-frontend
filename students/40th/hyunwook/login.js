
/*function handleBtn(btnvalid){
    loginBtn.disabled = btnValid ? false : true;
    loginBtn.style.opeacity = btnvalid ? 1 : 0.5;
    loginBtn.style.cursor =btnvalid ? "pointer" : "defalut";
}*/


/*function handleInput(){
    const idtext = document.querySelector('.entry');
    const pwtext = document.querySelector('.passWard');
}
const idtextId = checkId(idtext);
const pwtextPw = checkPw(pwtext);

if(idtextId && pwtextPw){
    handleBtn(true);
}else{
    handleBtn(false);
}*/

/*const button = document.getElementsByClassName('loginBtn');
const input = document.getElementsByClassName('input');
const name = document.getElementsByClassName("inputName");
const pw = document.getElementsByClassName("inputPw");

function changeColor() {
    if(name.value && pw.value) {
        button.removeAttribute('disabled');
        button.style.backgroundColor='#0095F6';
    }
}

input.addEventListener('keyup',changeColor);*/


/*const mode = document.querySelector("#login_button");
mode.addEventListener('keyup', loginAction);

function  loginAction (e) { 
 // console.log("asdfasd")
  let id = document.getElementById("id").value;
  let password = document.getElementById("passWord").value;
  let button = document.getElementById("login_button");

  if (id !== "" && password !== "" && id.length>4 && password.length>4) {
    // 공백 조건 지워도 될듯 
   //  if(document.getElementById("password").value!== ""){
    button.style.backgroundColor = "#0095F6";
    button.disabled=false;
   } else {
    button.style.backgroundColor = "#B2DFFC";
    button.disabled=true;
   }
}*/

const inputId = document.querySelector(".id");
const inputPassword = document.querySelector(".passWord");
const button = document.querySelector("#login_button");
// 각각이 아닌 폼 태그로 한번에 가져오면 이벤트가 자동으로 생성된다.

function loginBtn() {
    let idValue = inputId.value;
    let passwordValue = inputPassword.value;

    if (idValue.length > 0 && passwordValue.length > 0) {
        button.disabled = false;
        button.style.cursor = "pointer";
        button.style.backgroundColor = "#1c7ed6";
    } else {
        button.disabled = true;
        button.style.cursor = "default";
        button.style.backgroundColor = "#bfdffd";
    }
}

inputId.addEventListener('input', loginBtn);
inputPassword.addEventListener('input', loginBtn);






/*const idtext = document.querySelector('.entry');
const passtext= document.querySelector('.pass');
const button = document.querySelector('.touch');


let idCheck = false;
let pwCheck = false;


const pushValu = () => {
    idtext.addEventListener('keyup',() =>{
        idCheck = true
    });
}

passtext.addEventListener('keyup',() =>{
    pwCheck = true
});
pushValue();

const pushValue= () => {
    idtext.addEventListener('keyup',() => {
        if(idtext.value && passtext.value){
            loginButton.disabled = false;
        } else{
            loginButton.disabled = true;
        }
    });
}*
pushValu();

swithch(!(idtext.value && passtext.value))
{
  case true ; loginButton.disabled = true; 
  break;
  case false ; loginButton.disabled = false; break;  */


/*idtext.addEventListener('keyup', activeEvent);
passtext.addEventListener('keyup', activeEvent);
loginButton.addEventListener('click', errorEvent);

function activeEvent(){
    const id = idtext.value;
    const pass = passtext.value;
    
    if(id && pass){
        button.classList.remove('...');  
      }else {
        button.classList.add('...');
      }
}
   idtext.addEventListener("keyup", test);
   passtext.addEventListener("keyup", test); */
   
   //activeEvent();

   
   
    /*swithch(!(idtext.value && passtext.value))
    {
      trrue ; loginButton.disabled = true; 
      break;
        false ; loginButton.disabled = fale; break;  
    }/*if(idtext.value && passtext.value === ){

   }*/

   
   
   
 /*  swithch(!(idtext.value && passtext.value))
    {
      case true ; loginButton.disabled = true; 
      break;
      case false ; loginButton.disabled = fale; break;  
    }
}*/


/*function(input){
    if(entry>3 === "blue"){
        return 
    }

}
*/