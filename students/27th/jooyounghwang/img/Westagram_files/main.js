// //펑션 두개 생성
// 1. 1번 기능 엔터버튼 시 form 제출
// 2.form이 제출될때 실행 될 기능 구현
const inputReviewForm = document.querySelector('.input-review');
const enterUploadBtn = document.querySelector('.review-upload-btn');

function submitForm(e){
  e.preventDefault;
  console.log("11");
}

inputReviewForm.addEventListener('submit', submitForm );
//그 안에 span class review-contents에 넣어주고
//form 제출 할때마다 review list 만들어주기

