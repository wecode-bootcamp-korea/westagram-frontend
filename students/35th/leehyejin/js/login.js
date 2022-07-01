const id = document.getElementsByClassName("idInput")[0];
const pw = document.getElementsByClassName("pwInput")[0];
const login = document.getElementsByClassName("btnSubmit")[0];
const submit = document.querySelector("form");

submit.addEventListener("keyup", function () {
  let idv = id.value.length;
  let pwv = pw.value.length;
  if (idv !== 0 && pwv !== 0) {
    login.classList.add("on"); 
  } else {
    login.classList.remove("on");
  }
});
