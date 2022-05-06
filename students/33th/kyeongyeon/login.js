const thisIsButton = document.getElementById("activeButton");
const inputId = document.getElementById("idInput");
const inputPw = document.getElementById("pwInput");

function loginBtn(){
    const idValue = inputId.value; //idValue는 위에 선언한 inputId값에 들어가는 값
    const pwValue = inputPw.value;

    if(idValue.length > 0 && pwValue.lenth > 0) {
        thisIsButton.disabled = false;
    } else {
        thisIsButton.disabled = true;
    }
}
inputId.addEventListener('keyup', loginBtn());
inputPw.addEventListener('keyup', loginBtn());

//엔터나 로그인버튼 클릭시 a href 여기 링크에 걸린애로 넘어가는 함수 하나 더 필요(버튼 클릭이벤트) / 키프레스 혹은 키업 엔터를 눌렀을때 이동하는 함수!

/* const thisIsButton = document.getElementsByClassName("btn-login")[0];
thisIsButton.addEventListener('click', function () {
    const idInput = document.getElementById('idInput').value;
    const pwInput = document.getElementById('pwInput').value;
    if($("#idInput").value() != '' && $("#pwInput").value() != ''){
     $("#activeButton").value("disabled", false);
    }
}) */

