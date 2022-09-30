const pw = document.getElementById('pw');
const id = document.getElementById('id');
const b =document.getElementsByClassName("login")[0];
const w = document.getElementsByClassName("cc")[0];



 pw.addEventListener('keyup',
 () => {
         if (pw.value.length> 0 && id.value.length > 0) {
            
             return b.style.backgroundColor = "blue";
             
         }
     }
 );
id.addEventListener('keyup',
 () => {
         if (pw.value.length > 0 && id.value.length > 0) {
             return b.style.backgroundColor = "blue";
         }
     }
 );
 b.addEventListener('click',
 () =>{
    if (b.style.backgroundColor="blue" && pw.value.length >=4){
        return location.href='contents.html';
    }
 }
 );

// 엔터 if (window.event.)
//  () =>{
//     if (b.style.backgroundColor="blue" && pw.value.length >=4){
//         return location.href='contents.html';
//     }
//  }
//  );

 b.addEventListener('click',
 () => {
    if ( pw.value.length < 4 ){

        w.innerHTML = `<div class= "w"> 잘못된 비밀번호입니다. 다시확인하세요. </div>`
    }
 }
 )



