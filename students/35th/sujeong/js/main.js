// 이미지 눌렀을 때, 해당 이미지 바뀌는 것
const heart = document.getElementById("heart");

const change = () => {
  if(heart 이미지를 눌렀을 때){
    이미지가 바뀐다.
  }
}

heart.addEventListener("click", change);

// 더보기 버튼 생성

const btn = document.getElementById("btn");
const contents = document.getElementById("contents");

btn.addEventListener('click', ) => {
  btn.classList.toggle('clicked');
  contents.classList.toggle('clamp');
};

// 댓글창 작성
const userId= document.getElementById("useId");
const userWrite = document.getElementById("userWrite");


const checkIdPw = () => {
  if (id.value.length > 0 && pw.value.length > 0) {
    submit.disabled = false;
    submit.classList.add("focus");
    //비활성화가 아니면 정보를 체크리스트에 더한다.
  } else {
    submit.disabled = true;
    submit.classList.remove("focus");
    //비활성화가 그대로면 체크리스트에서 지운다.
  }
};

login.addEventListener("keyup", checkIdPw);