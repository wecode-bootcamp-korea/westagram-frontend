const id = document.querySelector("#id");
const password = document.querySelector("#password");
const btn = document.querySelector(".btn");
const inputBox = document.querySelector(".input_box");

inputBox.addEventListener("keyup", () => {
  if (id.value !== "" && password.value !== "") {
    btn.setAttribute("disabled", false);
    btn.style.backgroundColor = "blue";
  } else {
    btn.setAttribute("disabled", true);
    btn.style.backgroundColor = "#C4E0FC";
  }
});
// const inputEl = document.querySelector(".inputEl");
// inputEl.addEventListener("keyup",(e)=>{
//     console.log(e);
// })

// inputIdPw[0].addEventListener("keyup",(e)=>{
//      if(e.target.value !== ""){
//           btn.style.backgroundColor = "blue";
//      }else{
//          btn.style.backgroundColor = "#C4E0FC";
//      }
// });

// inputIdPw[1].addEventListener("keyup",(e)=>{
//     if(e.target.value !== ""){
//          btn.style.backgroundColor = "blue";
//     }else{
//         btn.style.backgroundColor = "#C4E0FC";
//     }
// });
