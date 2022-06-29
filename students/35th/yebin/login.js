let id = document.getElementsByClassName("userId")[0];
let pw = document.getElementsByClassName("userpw")[0];
let login = document.getElementsByClassName("btn")[0];
let ff = document.querySelector("form");

ff.addEventListener('keyup', function(){
  let idv = id.value.length;
  let pwv = pw.value.length;

  (idv && pwv) ?
  login.classList.add("on") : login.classList.remove("on");
});





