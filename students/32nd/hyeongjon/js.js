// const a = document.querySelector(".logId");
// const b = document.querySelector(".logPw");
// const c = document.querySelector(".loginButton");
// function d() {
//   if (a.value.length >= 1 && b.value.length >= 1) {
//     c.style.background = "#0095F6";
//   } else {
//     c.style.background = "#C4E1FB";
//   }
// }
// a.addEventListener("keyup", d);
// b.addEventListener("keyup", d);

const a = document.querySelector(".logId");
const b = document.querySelector(".logPw");
const c = document.querySelector(".loginButton");
function d() {
  if (a.value.length >= 1 && b.value.length >= 1) {
    c.style.background = "#0095F6";
  } else {
    c.style.background = "#C4E1FB";
  }
}
a.addEventListener("keyup", d);
b.addEventListener("keyup", d);
