let id1 = document.getElementsByClassName("id")[0];
let pw1 = document.getElementsByClassName("pw")[0];
let butt = document.getElementsByClassName("button")[0];
const loginForm = document.getElementById('loginForm');

/*id1.addEventListener('keyup',function (){
const idOn = id1.value;
const pwOn = pw1.value;
if(idOn !== pwOn){
document.getElementsByClassName("button")[0].style.backgroundColor="red"
}
})*/

//pw1.addEventListener('keyup',function (){
loginForm.addEventListener('input',function (){
const idOn = id1.value;
const pwOn = pw1.value;
//if(idOn === true && pwOn === true){
if(idOn.length>0 && pwOn.length>0)    
//if(idOn !== undefined && pwOn !== undefined){
document.getElementsByClassName("button")[0].style.backgroundColor="blue"

})