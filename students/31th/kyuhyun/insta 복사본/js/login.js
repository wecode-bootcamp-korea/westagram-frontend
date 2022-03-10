// const button = document.getElementsByClassName('loginbtn')[0]
// const input = document.getElementsByClassName('idpw')[0];
// const id = document.getElementsByClassName("id")[0];
// const pw = document.getElementsByClassName("pw")[0];

const button = document.querySelector(“.loginbtn”)
const input = document.querySelector(“.idpw”)
const id = document.querySelector(“.id”)
const pw = document.querySelector(“.pw”)

// disabled 는 html 상에서 보이지 않게 숨김 처리 하는 기능 //
button.disabled = true;
//위에 부분 disabled 가 디폴트 값이게 적용안해도 ? // 




function buttonOn() {
    if ( id.length >= 1 && pw.length >= 1 ) {
        button.disabled = false;
        button.style.cursors ="pointer";
        button.style.backgroundColor = "#0096F6";
    } else { 
        button.disabled = true;
    }
    
    
}

id.addEventListener("keyUp", buttonOn)
pw.addEventListener("keyUp", buttonOn)
//위에 작성된거 확인하기, 위의 함수에서 
// 콘솔을 대입시켰을때 적용이 안되는 상황
// 위에 한번 수정하면서 바로바로 콘솔 찍어
// 확인해야함, 
// console.log("hello");


// function buttonOn() {
//     if (id.value || pw.value) {
//         loginbtn.
//         loginbtn.style.backgroundColor='#0096F6';
//     }
    
// }


