//button disable의 값이 false면 활성화됨.
//userId와 userPw 둘의 input에 글씨가 작성되면 버튼이 활성화가 됨.

//필요한 버튼, 아이디, 비번의 class,id를 변수로 불러옴
const loginButton = document.querySelector('.button');
const loginId = document.querySelector('#user-id');
const loginPw = document.querySelector('#user-pw');

//로그인 할 때 필요한 설정 함수
const loginSet = () => {

  console.log(loginId.value.indexOf("@"));
  /*만약, 아이디(input)의 문자열 길이가 0보다 크고 &&
  indexOf(@기호가 있으면 1리턴)로 , -1과 같지 않을 경우 &&
  (멘토님 리뷰: @ 값이 맨 앞에 들어올 경우,두개가 들어가는 경우도 있다는 것 정도만 알고있기)
  비번(input)의 문자열 길이가 5랑 같거나 클 경우*/
  if( 
    loginId.value.length > 0 &&
    loginId.value.indexOf("@")!== -1 &&
    loginPw.value.length >= 5
    ){
  //버튼의 disabled값을 false(활성화)되고, 색상이 바뀜
      loginButton.disabled = false;
      loginButton.style.opacity = 1;
      console.log(loginButton.disabled);
    } else {
  //아닐 경우, disabled값이 ture(비활성화)되고, 색상이 바뀜
      loginButton.disabled = true;
      loginButton.style.opacity = 0.3;
      console.log(loginButton.disabled);
    }
}
console.log(loginSet());

//id나 pw의 키보드키가 올라갈 때 함수가 실행 되게 설정
loginId.addEventListener('keyup',loginSet);
loginPw.addEventListener('keyup', loginSet);

// id.addEventListener('keyup', login);
// pw.addEventListener('key', login);
