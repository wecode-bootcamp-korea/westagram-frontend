'use strick';

// 1) 기능을 넣을 포인트 지정
const loginInputs = document.getElementsByClassName("loginForm")[0];
const loginButton = documnet.getElemnetById("loginBtn");


function userInPut(){ //user가 입력하면서 생길 일들!!
//2) 입력받은 값을 저장할 저장소
const idInput = document.getElemnetById("id").value;
const pwInput = document.getElemnetById("pw").value;
 //3) 입력받은 값을 사용해야하므로 활용할 수 있는 함수로 작성
const userInputId = putId(idInput);
const userInputPw = putPw(pwInput);
// 4) 필요한 정보를 입력받을 곳과 활용할 수 있는 그릇으로 만들어졋으니 실행할 내용을 작성
// 5) user가 입력한 값에 따라 발생할 버튼 입력의 조건을 제시
if(userInputId && userInputPw){
     submitBtn(true);
   }else{
     subnitBtn(false);
   }
}

// 6) user가 입력한 값에게 줄 조건이 무엇인지 작성 id와 pw 둘 다 필요하지
function putId(value){
  if(value.length > 0) {
      return true;
  }else{
      return false;
  }
}

function putPw(value){
    if(value.length > 0){
        return true;
    }else{
        return false;
    }
}

// 7) user가 id/pw를 입력하는 조건은 완성이 되었고 조건에 따라 이제 버튼이 어떻게 될지 작성
function handelBtn(putBtn){
    if(putBtn){
        loginButton.disabled = false;
        loginButton.style.opacity =1;
        loginButton.style.cursor = "pointer";

        if(window.Event.code === "Enter"){
            success();
        }

    }else{
        loginButton.disabled = true;
        loginButton.style.opacity =0.5;
        loginButton.style.cursor = "default";
    }
}

loginInputs.addEventListener("input",userInPut);
loginInputs.addEventListener("keyup",userInPut);

loginButton.addEventListener("click", success);