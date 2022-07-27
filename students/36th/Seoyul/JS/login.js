// let id = document.querySelector('.userid').value;
// let pw = document.querySelector('.pw').value;
// let btn = document.querySelector('button')

function buttonactive() {
  let id = document.querySelector('.userid').value;
let pw = document.querySelector('.pw').value;
let btn = document.querySelector('button')
if(id.length > 0 && pw.length>0){
  btn.style.background=  '#0295F6'
  btn.disabled=false
}else {
  btn.disabled=true
  btn.style.background= '#C4E1FB'
}
}