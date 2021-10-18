const inputId=document.getElementsByClassName("id")[0];
const inputPw=document.getElementsByClassName("password")[0];
const onButton=document.getElementsByClassName("btn")[0];

function active(){
    if(inputId.value.length>0 && inputPw.value.length>0){
        onButton.style.backgroundColor= '#0095F6';
    }else{
        onButton.style.backgroundColor= '#B2DFFC';
    }
}

inputId.addEventListener("keyup",active);
inputPw.addEventListener("keyup",active);

// active vs active()
//disabled


/* 
1.input에 값이 입력되엇는지 이벤트를 기다린다
2.input에 입력된 value이 조건에 맞는지 확인
3.조건함수(둘다 길이가 0이상)
4.조건이 맞으면 버튼 활성화
*/


