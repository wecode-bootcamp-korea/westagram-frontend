// const inputIdPw = document.querySelectorAll(".idpw");
const btn = document.querySelector(".btn");
const inputBox = document.querySelector(".input_box");


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

inputBox.addEventListener("keyup",(e)=>{
    if(e.target.value !== ""){
        btn.style.backgroundColor = "blue";
    }else{
        btn.style.backgroundColor = "#C4E0FC";
    }
})
