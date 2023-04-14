//조건을 만족할 때만 클릭시 버튼색 변경
const btn = document.querySelector(".loginBtn");
btn.addEventListener("click",function(e){
    const inputId = document.querySelector('.id').value;
    const inputPw = document.querySelector('.pwd').value;
    if(inputId.includes('@') && inputPw.length > 4){
        document.querySelector(".loginBtn").style.background = "rgb(46, 184, 223)";
    }else{
        alert("입력해 주세요");
        document.querySelector(".loginBtn").style.background= "default";    
    }
    return false;
});