//오버플로우
/*

1. 평소에 로그인 비활성화(클릭도 안됨)
2. id 값을 마우스 커서로 클릭한다.
3. id 값을 클릭하여 키보드로 1개 이상의 글을 적는다.
4. pass 값을 클릭하여 키보드로 1개 이상의 텍스트를 친다.
5. 로그인 버튼이 활성화 된다.


1. css에 자바스크립트와 접촉한다. document.querySelector()
2. addEventListner 을 실행한다.
3. 실행할 함수를 지정한다.


id 값에 4개 이상 입력
pass 값에 6개 이상 입력
로그인 활성화


id 값에 1개 이상입력시 '전화번호' 값 상단으로 올라감
ps도 마찬가지 + 옆에 '비밀번호 표시' -> 누르면 비번이 보임

로그인 활성화*/

// let 함수 = function(a){
//   return a+5
// }

// let 함수 = (a)=>{ return a+5 }

//훨씬 보기 쉬움. a 를 넣으면 a+5 가 나옵니다~


//addEventListener	('행위' , 실행될 함수);
//let event = document.querySelector();
//event.addEventListener('click', function(color){
  //alert('hello world, '+ color.target.value);
//});

let logIn = document.querySelector('input');
let pass = document.querySelector('input:nth-child(2)');
let logInBtn = document.querySelector('button');


logIn.addEventListener('keyup',keyUpBtn);
pass.addEventListener('keyup',keyUpBtn);

function keyUpBtn(){
  if(logIn.value && pass.value){
    logInBtn.style.backgroundColor='blue'
  }else{
    logInBtn.style.backgroundColor='#B9DFFC'
  }
}